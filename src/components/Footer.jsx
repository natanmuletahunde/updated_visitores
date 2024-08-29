/* eslint-disable no-unused-vars */
/* Footer.jsx */
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Footer = () => {
  return (
    <footer className="bg-white shadow-lg p-16 text-black"> {/* Updated background color to match header */}
      <div className="container mx-auto text-center flex flex-col items-center">
        <p className="text-2xl font-bold tracking-wide mb-4">
          &copy; 2024 Football Site. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
