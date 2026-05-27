import { Link } from 'react-router-dom'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between px-5 h-15 items-center bg-[#5b14cc] text-white'>
        <div><h1 className='text-2xl font-bold'>Media Search</h1></div>
        <div className='flex gap-10'>
            <Link to="/" className='text-xl font-bold'>Search</Link>
            <Link to="/collections" className='text-xl font-bold'>Collections</Link>
        </div>
    </div>
  )
}

export default Navbar