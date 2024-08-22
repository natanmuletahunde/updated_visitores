/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center p-6">
      <h1 className="text-6xl font-extrabold text-gray-800 mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-6">Oops! The page youre looking for doesnt exist.</p>
      <Link to="/" className="text-blue-500 hover:text-blue-700 text-lg">Go Back to Home</Link>
    </div>
  );
};

export default NotFound;
