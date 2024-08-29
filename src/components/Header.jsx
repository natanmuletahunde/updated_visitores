/* eslint-disable no-unused-vars */
/* Header.jsx */
import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white shadow-lg p-16 flex justify-between items-center"> {/* Flex layout for header */}
      <div className="flex items-center space-x-4"> {/* Container for image and text */}
        <img 
          src="https://img.freepik.com/premium-vector/blue-white-logo-football-club-club_56103-1454.jpg" 
          className="h-24 w-24 rounded-full object-cover"  
          alt="Football Site Logo"
        />
        <h3 className="text-3xl font-bold tracking-wide text-black">
          Football Site
        </h3>
      </div>
      <nav>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-green-800 hover:text-yellow-300 text-3xl font-bold"
          >
            &#9776; {/* Menu icon */}
          </button>
        </div>
        <ul
          className={`${
            isOpen ? 'block' : 'hidden'
          } md:flex md:space-x-8 mt-4 md:mt-0`}
        >
          <li className="text-black hover:text-yellow-300 text-sm font-bold">
            <a href="/" className="relative">Home</a>
          </li>
          <li className="text-black hover:text-yellow-300 text-sm font-bold">
            <a href="/Blog" className="relative">Blogs</a>
          </li>
          <li className="text-black hover:text-yellow-300 text-sm font-bold">
            <a href="/News" className="relative">News</a>
          </li>
          <li className="text-black hover:text-yellow-300 text-sm font-bold">
            <a href="/Events" className="relative">Events</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
