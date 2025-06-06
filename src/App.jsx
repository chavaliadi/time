// src/App.jsx
// Main application component with role-based routing.

import React, { useState } from "react";
import {
  BrowserRouter as Router, // Use BrowserRouter as Router for consistency
  Routes,
  Route,
  Navigate,
  Outlet,} from "react-router-dom";
import {
	Link
}
from 'react-router-dom';

// --- Page Component Imports (Adjust paths if different in your file system) ---
// Assuming LoginPage handles login and provides role
import LoginPage from "./pages/LoginPage"; // Will be created/modified below




// AdminLayout will serve as the main page for the /admin/* routes
import AdminLayout from "./pages/AdminLayout"; // Your AdminLayout
import AdminDashboardOverview from "./pages/admin/AdminDashboardOverview"; // Your AdminDashboardOverview
import BatchesListPage from "./pages/admin/BatchesListPage";
import CreateBatchPage from "./pages/admin/CreateBatchPage";
import SubjectsListPage from "./pages/admin/SubjectsListPage";
import CreateSubjectPage from "./pages/admin/CreateSubjectPage";

// Assuming these pages also exist
import PublicHomePage from "./pages/PublicHomePage"; // TO MAKE
import FacultyDashboardPage from "./pages/FacultyDashboardPage"; // If you have one
import NotFoundPage from "./pages/NotFoundPage"; // If you have one
import './index.css'; // Your global CSS import

function App() {
     
  const batches = []; // USE API from DB
  const subjects = []; //USE API from DB

  // MODIFY THESE FUNCTIONS API call using SessionIds

        const addBatch = (batch) => {
        console.log("Add batch", batch);
        };

        const deleteBatch = (batchId) => {
        console.log("Delete batch", batchId);
        };

        const addSubject = (subject) => {
        console.log("Add subject", subject);
        };

        const deleteSubject = (subjectId) => {
        console.log("Delete subject", subjectId);
        };

  // authDetails will store { email, role }
  const [authDetails, setAuthDetails] = useState(null);

  const handleLoginSuccess = (loginData) => { // loginData should be { email, role }
    console.log("App.jsx: Login successful, setting authDetails:", loginData);
    setAuthDetails(loginData);
  };

  const handleLogout = () => {
    console.log("App.jsx: Logout triggered, clearing authDetails.");
    setAuthDetails(null);
    // Important: Clear any user tokens/data from localStorage or sessionStorage
    // localStorage.removeItem('userToken');
    // sessionStorage.removeItem('userData');
  };

  const isAuthenticated = !!authDetails;
  const userRole = authDetails?.role;

  // INSECURES ASF
    const ProtectedRoute = ({ children, allowedRoles }) => {
      if (!isAuthenticated) {
        console.log("ProtectedRoute: Not authenticated, redirecting to /login.");
        return <Navigate to="/login" replace />;
      }
      if (allowedRoles && !allowedRoles.includes(userRole)) {
        console.warn(
          `ProtectedRoute: Access denied. User role "${userRole}" not in allowed roles: ${allowedRoles.join(", ")}.`
        );
        // Redirect to a common home or access denied page
        return <Navigate to="/" replace />;
      }
      console.log(`ProtectedRoute: Access granted for role "${userRole}".`);
      return children;
    };

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-slate-100">
        
       

        <main className="flex-grow">
          <Routes>
            {/* Public Home Page */}
            <Route path="/" element={<PublicHomePage />} />

            {/* Login Page */}
            <Route
              path="/login"
              element={
                // If authenticated, redirect based on role
                isAuthenticated ? (
                  userRole === "admin" ? (
                    <Navigate to="/admin/dashboard" replace />
                  ) : userRole === "faculty" ? (
                    <Navigate to="/faculty/dashboard" replace />
                  ) : (
                    <Navigate to="/" replace /> // Default redirect for other roles
                  )
                ) : (
                  // If not authenticated, show login page
                  <LoginPage onLoginSuccess={handleLoginSuccess} />
                )
              }
            />

            {/* Admin Nested Routes (Protected) */}
            <Route
              path="/admin"
              element={
                <ProtectedRoute allowedRoles={["admin"]}>
                  {/* AdminLayout is the shell for admin routes */}
                  <AdminLayout user={authDetails} onLogout={handleLogout} />
                </ProtectedRoute>
              }
            >
              {/* Nested Admin Routes */}
              <Route index element={<Navigate to="dashboard" replace />} /> {/* /admin -> /admin/dashboard */}
              <Route path="dashboard" element={<AdminDashboardOverview />} />
              <Route path="batches" element={<BatchesListPage batches={batches} deleteBatch={deleteBatch} />} />
              <Route path="batches/new" element={<CreateBatchPage addBatch={addBatch} />} />
              {/* Example for future edit route: <Route path="batches/edit/:batchId" element={<EditBatchPage />} /> */}
              <Route path="subjects" element={<SubjectsListPage subjects={subjects} deleteSubject={deleteSubject} />} />
              <Route path="subjects/new" element={<CreateSubjectPage addSubject={addSubject} />} />
              {/* Example for future edit route: <Route path="subjects/edit/:subjectId" element={<EditSubjectPage />} /> */}
              {/* Example settings page: <Route path="settings" element={<AdminSettingsPage />} /> */}
            </Route>

            {/* Faculty Routes (Protected - assuming FacultyDashboardPage is a standalone page) */}
            <Route
              path="/faculty/dashboard"
              element={
                <ProtectedRoute allowedRoles={["faculty"]}>
                  <FacultyDashboardPage user={authDetails} onLogout={handleLogout} />
                </ProtectedRoute>
              }
            />

            {/* Catch-all for unknown routes */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        {/* Global Footer (Optional - adjust visibility as needed) */}
        {!isAuthenticated && (
          <footer className="bg-slate-900 text-slate-400 py-8 text-center text-sm">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              &copy; {new Date().getFullYear()} University Timetable Project.
            </div>
          </footer>
        )}
      </div>
    </Router>
  );
}

export default App;