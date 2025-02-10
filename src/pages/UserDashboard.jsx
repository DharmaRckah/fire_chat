// src/pages/UserDashboard.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import Header from '../components/Header'; // Import the Header component
import Dashboard from '../components/Dashboard';
import Message from '../components/Message';
import { useAuth } from '../context/AuthContext';
import { FaBars } from 'react-icons/fa'; // Import the hamburger icon

const UserDashboard = () => {
  const { user } = useAuth();
  const [selectedUser , setSelectedUser ] = useState(null);
  const [isOpen, setIsOpen] = useState(true); // State to manage sidebar visibility
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    // Check if user is not authenticated
    if (!user) {
      navigate('/login'); // Redirect to login page
    }
  }, [user, navigate]); // Dependency array includes user and navigate

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='flex flex-col h-screen'>
      <Header /> {/* Include the Header component */}
      
      {/* Sidebar Toggle Button */}
      <button 
        className='md:hidden p-2 bg-blue-500 text-white rounded-full fixed top-4 left-4 z-10' 
        onClick={toggleSidebar}
        aria-label="Toggle Sidebar"
      >
        <FaBars className='text-2xl' />
      </button>

      <div className='flex flex-grow'>
        {/* Sidebar */}
        <div className={`transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
          <Dashboard setSelectedUser ={setSelectedUser } isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
        
        {/* Main Content Area */}
        <div className='flex-grow'>
          {selectedUser  ? (
            <Message selectedUser ={selectedUser } currentUser ={user} />
          ) : (
            <div className='flex items-center justify-center h-full'>
              <h2 className='text-xl'>Select a user to start chatting</h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;