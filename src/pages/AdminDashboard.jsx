// src/pages/AdminDashboard.jsx
import React from 'react';
import UserList from '../components/UserList';
import Header from '../components/Header';

const AdminDashboard = () => {
  return (
    <div className='flex flex-col h-screen'>
      <Header />
      <div className='flex-grow p-4 bg-gray-100'>
        <h2 className='text-2xl font-bold mb-4'>Admin Dashboard</h2>
        <UserList />
      </div>
    </div>
  );
};

export default AdminDashboard;