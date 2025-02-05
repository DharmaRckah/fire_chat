import React, { useEffect, useState } from 'react'
import useAuth from '../hooks/useAuth'
const Register = () => {
   const [email,setEmail]=useState("")
   const [password,setPassword]=useState("")
   const [error,setError]=useState(null)
   const {signup} = useAuth();

   const handleSubmit  = async(e)=>{
    e.preventDefault();
    try {
        await signup(email,password)
        setEmail('')
        setPassword("")
        setError(null)
        
    } catch (error) {
        setError(error.message)
        
    }
   }
    
  return (
    <div className='flex items-center  justify-center h-screen'>
      <form action="" className='bg-white p-6 rounded shadow-md w-100'>
        <h2 className='text-lg font-bold mb-4'>Register</h2>
        {error &&  <p className='text-red-500'> {error}</p>}
        <input type="email" placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)} required className='border p-2 mb-4  w-full' />
        <input type="password" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)} required className='border  p-2 mb-4 w-full'  />
        <button  type="submit" className='bg-blue-500 text-white p-2 rounded w-full'>Register</button>
      </form>
    </div>
  )
}

export default Register
