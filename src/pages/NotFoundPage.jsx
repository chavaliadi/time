// src/pages/NotFoundPage.jsx
import React from 'react';

const NotFoundPage = () => {
  return (
    <div className="p-8 text-center text-xl text-gray-700">
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <p><Link to="/" className="text-blue-600 hover:underline">Go to Home</Link></p>
    </div>
  );
};
export default NotFoundPage;