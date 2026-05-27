import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home.jsx'
import Collections from '../pages/Collections.jsx'

const NavRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/collections" element={<Collections />}/>
        </Routes>
    </div>
  )
}

export default NavRoutes