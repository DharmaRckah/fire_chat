// src/components/Dashboard.jsx
import React, { useEffect, useState } from 'react';
import { db } from '../firebase/firebaseConfig'; // Adjust the import based on your Firebase setup
import { collection, onSnapshot } from 'firebase/firestore';

const Dashboard = ({ setSelectedUser , isOpen, setIsOpen }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'users'), (snapshot) => {
      const usersList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setUsers(usersList);
    });

    return () => unsubscribe(); // Cleanup subscription on unmount
  }, []);

  const handleUserClick = (user) => {
    setSelectedUser (user);
    // Close the sidebar on mobile view
    if (window.innerWidth < 768) {
      setIsOpen(false);
    }
  };

  return (  
    <div className={`p-4 w-1/4 bg-gray-100 transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      <ul className="space-y-2">
        {users.map(user => (
          <li
            key={user.id}
            className="p-2 bg-gray-200 rounded-lg cursor-pointer hover:bg-gray-300"
            onClick={() => handleUserClick(user)}
          >
            <span className="font-medium">{user.username}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;