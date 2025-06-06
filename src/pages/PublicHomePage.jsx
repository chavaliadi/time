// src/pages/PublicHomePage.jsx
import React from 'react';

const PublicHomePage = () => {
  return (
    <div className="p-8 text-center text-xl text-gray-700">
      <h1>Welcome to the Timetable Portal!</h1>
      <p>Please log in to access the dashboard.</p>
      <p><Link to="/login" className="text-blue-600 hover:underline">Go to Login</Link></p>
    </div>
  );
};
export default PublicHomePage;

