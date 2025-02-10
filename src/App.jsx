import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Register from './components/Register'
import Login from './components/Login'
import Message from './components/Message'
import Home from './components/Home'
import UserDashboard from './pages/UserDashboard'
import Dashboard from './components/Dashboard'
import NotificationToggle from './components/NotificationToggle'

function App() {


  return (
  <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path ="/register" element={<Register/>}/>
    <Route path ="/login" element={<Login/>}/>
     <Route path= "/message" element={<Message/>}/>
     <Route path="/dashboard" element={<UserDashboard/>}/>
     <Route path="/note" element={<NotificationToggle/>}/>
   </Routes>
    
  </BrowserRouter>
  )
}

export default App
