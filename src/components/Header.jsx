// src/components/Header.jsx
import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { FaBell, FaUserCircle, FaBars, FaTimes } from 'react-icons/fa'; // Import icons from react-icons

const Header = () => {
  const { logout, user } = useAuth(); // Get the user from context
  const [menuOpen, setMenuOpen] = useState(false); // State to manage menu toggle

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className='bg-blue-500 text-white p-4 flex justify-between items-center'>
      <h1 className='text-xl font-bold'>Chat </h1>
      
      <div className='flex items-center'>
        <button className='relative mr-4'>
          <FaBell className='text-white text-2xl' />
          {/* You can add a notification badge here if needed */}
        </button>
        
        <div className='relative hidden md:flex items-center'>
          <button onClick={toggleMenu} className='flex items-center'>
            <FaUserCircle className='text-white text-2xl mr-2' />
            <span>{user ? user.email : 'Guest'}</span> {/* Display user's email or 'Guest' */}
          </button>
          
          {menuOpen && (
            <div className='absolute right-0 mt-2 w-48 bg-white text-black rounded shadow-lg z-10'>
              <ul>
                <li className='px-4 py-2 hover:bg-gray-200 cursor-pointer' onClick={logout}>
                  Logout
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Hamburger Menu for Mobile View */}
        <button className='md:hidden text-white' onClick={toggleMenu}>
          {menuOpen ? <FaTimes className='text-2xl' /> : <FaBars className='text-2xl' />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className='absolute top-16 right-0 w-full bg-white text-black rounded shadow-lg z-10 md:hidden'>
          <ul>
            <li className='px-4 py-2 hover:bg-gray-200 cursor-pointer' onClick={logout}>
              Logout
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;