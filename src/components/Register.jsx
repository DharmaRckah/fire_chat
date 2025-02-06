import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const Register = () => {
  const [username, setUsername] = useState(''); // New state for username
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const { signup } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Reset error state before attempting signup

    try {
      // Pass username along with email and password to signup
      await signup(email, password, username);
      setEmail('');
      setPassword('');
      setUsername(''); // Reset username field
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      <form onSubmit={handleSubmit} className='bg-white p-8 rounded-lg shadow-md w-full max-w-sm'>
        <h2 className='text-2xl font-bold mb-6 text-center'>Create an Account</h2>
        {error && <p className='text-red-500 mb-4 text-center'>{error}</p>}
        
        <input
          type='text'
          placeholder='Username' // New input for username
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          className='border border-gray-300 p-3 mb-4 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
        />
        
        <input
          type='email'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className='border border-gray-300 p-3 mb-4 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
        />
        
        <input
          type='password'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className='border border-gray-300 p-3 mb-4 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
        />
        
        <button type='submit' className='bg-blue-500 text-white p-3 rounded w-full hover:bg-blue-600 transition duration-200'>
          Register
        </button>
        
        <p className='mt-4 text-center text-gray-600'>
          Already have an account? <a href='/login' className='text-blue-500 hover:underline'>Login</a>
        </p>
      </form>
    </div>
  );
};

export default Register;