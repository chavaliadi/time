// src/pages/FacultyDashboardPage.jsx
import React from 'react';

const FacultyDashboardPage = ({ user, onLogout }) => {
  return (
    <div className="p-8 text-center text-xl text-gray-700">
      <h1>Faculty Dashboard</h1>
      <p>Welcome, {user?.email || 'Faculty'}!</p>
      <button onClick={onLogout} className="mt-4 px-4 py-2 bg-red-500 text-white rounded">Logout</button>
    </div>
  );
};
export default FacultyDashboardPage;