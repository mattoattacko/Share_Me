import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom'
import Login from './components/Login'
import Home from './container/Home'
import { fetchUser } from './utils/fetchUser'

// We need to send users back to the Login on start. Covers times where users login expires.
const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const user = fetchUser();

    if(!user) {
      navigate('/login');
    }
  }, [])
  
  return (
    <Routes>
      <Route path='login' element={<Login />} />
      <Route path='/*' element={<Home />} />
    </Routes>
  )
}

export default App
