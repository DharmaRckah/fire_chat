// src/NotificationToggle.jsx
import React, { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';
import axios from 'axios';
import { messaging } from '../firebase/firebaseConfig';

const NotificationToggle = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [currentUser , setCurrentUser ] = useState(null);
  const [notificationMessage, setNotificationMessage] = useState('');

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      setCurrentUser (user);
      if (user) {
        requestPermission();
      }
    });
  }, []);

  const requestPermission = async () => {
    const permission = await Notification.requestPermission();
    if (permission === 'granted') {
      const token = await messaging.getToken({ vapidKey: import.meta.env.VITE_VAPID_KEY });
      console.log('FCM Token:', token);
      // Save the token to Firestore
      if (currentUser ) {
        const db = getFirestore();
        await db.collection('users').doc(currentUser .uid).set({ fcmToken: token }, { merge: true });
      }
    } else {
      alert('You denied notification permission');
    }
  };

  const handleToggle = async () => {
    setIsEnabled(!isEnabled);
    // Update notification settings in your database
    const db = getFirestore();
    const usersCollection = collection(db, 'users');
    const q = query(usersCollection, where('isRegistered', '==', true));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // Update the user's notification settings
      // You can add a field to store the notification preference
    });
  };

  const handleSendNotification = async () => {
    if (!notificationMessage) {
      alert('Please enter a notification message.');
      return;
    }

    // Send notification to all registered users via Cloud Function
    try {
      const response = await axios.post('YOUR_CLOUD_FUNCTION_URL', {
        message: notificationMessage,
      });
      console.log('Notification sent successfully:', response.data);
    } catch (error) {
      console.error('Error sending notification:', error);
    }

    // Clear the input after sending
    setNotificationMessage('');
  };

  return (
    <div>
      <input type="checkbox" checked={isEnabled} on Change={handleToggle} />
      <label htmlFor="notification-toggle">Enable Notifications</label>
      <br />
      <input
        type="text"
        value={notificationMessage}
        onChange={(e) => setNotificationMessage(e.target.value)}
        placeholder="Enter notification message"
      />
      <button onClick={handleSendNotification}>Send Notification</button>
    </div>
  );
};

export default NotificationToggle;