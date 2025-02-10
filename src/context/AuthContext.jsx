import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth, db } from '../firebase/firebaseConfig'; // Ensure the correct path to your firebase config
import { onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { collection, addDoc, getDoc, doc } from 'firebase/firestore'; // Import Firestore functions
import toast from 'react-hot-toast';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser ] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        // Fetch user data from Firestore
        const userDoc = await getDoc(doc(db, 'users', user.uid));
        if (userDoc.exists()) {
          const userData = userDoc.data();
          console.log("User  data from Firestore:", userData); // Debugging line
          setUser ({ ...user, username: userData.username }); // Include username in user state
        } else {
          console.log("No user data found in Firestore for UID:", user.uid); // Debugging line
          setUser (user); // If no user data found, just set the user
        }
      } else {
        setUser (null);
      }
    });
    return () => unsubscribe();
  }, []);

  const signup = async (email, password, username) => {
    console.log("Signing up with:", email, username); // Debugging line
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Store user information in Firestore
      await addDoc(collection(db, 'users'), {
        uid: user.uid,
        email: user.email,
        username: username, // Store the username
      });

      toast.success("Registration Successful");
    } catch (error) {
      toast.error(error.message);
      throw new Error(error.message);
    }
  };

  const login = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Login Successful");
    } catch (error) {
      toast.error(error.message);
      throw new Error(error.message);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      toast.success("Logout Successful");
    } catch (error) {
      toast.error(error.message);
      throw new Error(error.message);
    }
  };

  return (
    <AuthContext.Provider value={{ user, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);