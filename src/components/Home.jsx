// src/components/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='bg-white p-6 rounded shadow-md w-100 text-center'>
        <h2 className='text-lg font-bold mb-4 '>Welcome to the Chat App</h2>
        <div className='space-y-4 py-4 '>
          <Link to="/register">
            <button className='bg-blue-500 text-white p-2 rounded w-full my-4'>Register</button>
          </Link>
          <Link to="/login">
            <button className='bg-green-500 text-white p-2 rounded w-full my-4'>Login</button>
          </Link>
         
        </div>
      </div>
    </div>
  );
}

export default Home;
