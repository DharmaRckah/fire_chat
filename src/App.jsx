import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Register from './components/Register'
import Login from './components/Login'
function App() {


  return (
  <BrowserRouter>
   <Routes>
    <Route path ="/register" element={<Register/>}/>
    <Route path ="/login" element={<Login/>}/>

   </Routes>
  </BrowserRouter>
  )
}

export default App
