// src/pages/admin/AdminDashboardOverview.jsx
import React from 'react';
import { Link } from 'react-router-dom';

// Shadcn UI Components - ENSURE THESE ARE .jsx IN src/components/ui/
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const AdminDashboardOverview = () => {
  return (
    <div className="flex flex-1 flex-col gap-4">
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Admin Dashboard Overview</h1>
      </div>
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
        {/* Manage Batches Card */}
        <Link to="/admin/batches" className="block h-full"> {/* Updated link path */}
          <Card className="hover:shadow-lg transition-shadow duration-200 ease-in-out h-full flex flex-col">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Manage Batches</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow flex items-center justify-center p-6">
              <img
                src="/illustrations/batches-illustration.png" // Assumes public/illustrations
                alt="Manage Batches Illustration"
                className="w-full h-auto object-contain max-h-36"
              />
            </CardContent>
          </Card>
        </Link>

        {/* Manage Subjects Card */}
        <Link to="/admin/subjects" className="block h-full"> {/* Updated link path */}
          <Card className="hover:shadow-lg transition-shadow duration-200 ease-in-out h-full flex flex-col">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Manage Subjects</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow flex items-center justify-center p-6">
              <img
                src="/illustrations/subjects-illustration.png" // Assumes public/illustrations
                alt="Manage Subjects Illustration"
                className="w-full h-auto object-contain max-h-36"
              />
            </CardContent>
          </Card>
        </Link>

        {/* Alerts and Notifications Card */}
        <Card className="hover:shadow-lg transition-shadow duration-200 ease-in-out h-full flex flex-col">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Alerts and Notifications</CardTitle>
          </CardHeader>
          <CardContent className="flex-grow flex items-center justify-center p-6">
            <img
              src="/illustrations/bell-illustration.png" // Assumes public/illustrations
              alt="Alerts and Notifications Illustration"
              className="w-full h-auto object-contain max-h-36"
            />
          </CardContent>
        </Card>

        {/* Manage Students Card */}
        <Card className="hover:shadow-lg transition-shadow duration-200 ease-in-out h-full flex flex-col">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Manage Students</CardTitle>
          </CardHeader>
          <CardContent className="flex-grow flex items-center justify-center p-6">
            <img
              src="/illustrations/students-illustration.png" // Assumes public/illustrations
              alt="Manage Students Illustration"
              className="w-full h-auto object-contain max-h-36"
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboardOverview;