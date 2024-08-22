/* eslint-disable no-unused-vars */
/* Footer.jsx */
import React from 'react';
import './Footer.css'; // Import a CSS file for custom animations

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center animate-slide-in-right">
        <p className="text-2xl font-bold tracking-wide animate-wave">
          &copy; 2024 Football Site. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
