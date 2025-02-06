

import { useEffect, useState } from 'react';
import { db } from '../firebase/firebaseConfig'; // Adjust the import based on your Firebase setup
import { collection, getDocs } from 'firebase/firestore';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const usersCollection = collection(db, 'users');
      const usersSnapshot = await getDocs(usersCollection);
      const usersList = usersSnapshot.docs.map(doc => doc.data());
     
      setUsers(usersList);
    };

    fetchUsers();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">User List</h1>
      <ul className="space-y-2">
        {users.map(user => (
          <li key={user.uid} className="p-2 bg-gray-100 rounded-lg">
            <span className="font-medium">{user.email}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;