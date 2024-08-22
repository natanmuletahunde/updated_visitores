/* eslint-disable no-unused-vars */
/* Header.jsx */
import React from 'react';
import './Header.css'; // Import a CSS file for custom animations

const Header = () => {
  return (
    <header className="bg-green-800 p-6">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-4xl font-extrabold tracking-wide animate-slide-in-left">
          Football Site
        </h1>
        <nav>
          <ul className="flex space-x-6">
            <li className="text-white hover:text-yellow-300 text-xl font-bold animate-glitch hover:animate-glitch-hover">
              <a href="/" className="relative">Home</a>
            </li>
            <li className="text-white hover:text-yellow-300 text-xl font-bold animate-glitch hover:animate-glitch-hover">
              <a href="/Blog" className="relative">Blogs</a>
            </li>
            <li className="text-white hover:text-yellow-300 text-xl font-bold animate-glitch hover:animate-glitch-hover">
              <a href="/News" className="relative">News</a>
            </li>
            <li className="text-white hover:text-yellow-300 text-xl font-bold animate-glitch hover:animate-glitch-hover">
              <a href="/Events" className="relative">Events</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
