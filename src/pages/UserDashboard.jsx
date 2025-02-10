// src/pages/UserDashboard.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import Header from '../components/Header'; // Import the Header component
import Dashboard from '../components/Dashboard';
import Message from '../components/Message';
import { useAuth } from '../context/AuthContext';

const UserDashboard = () => {
  const { user } = useAuth();
  const [selectedUser , setSelectedUser ] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    // Check if user is not authenticated
    if (!user) {
      navigate('/login'); // Redirect to login page
    }
  }, [user, navigate]); // Dependency array includes user and navigate

  return (
    <div className='flex flex-col h-screen'>
      <Header /> {/* Include the Header component */}
      <div className='flex flex-grow'>
        <Dashboard setSelectedUser ={setSelectedUser } />
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