import React, { useState } from 'react'
import useAuth from '../hooks/useAuth'

const Login = () => {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [error,setError]=useState("")
    const {login}=useAuth()
  return (
    <div className='flex items-center justify-center h-screen'>
      <form action="">
        <h2>Login</h2>
        <input type="email" placeholder='Email' />
        <input type="password" placeholder='Password' />
        <button>Login</button>
      </form>
    </div>
  )
}

export default Login
