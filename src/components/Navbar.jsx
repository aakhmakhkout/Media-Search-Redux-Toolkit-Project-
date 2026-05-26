import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between px-5 h-15 items-center bg-[#5b14cc] text-white'>
        <div><h1 className='text-2xl font-bold'>Media Search</h1></div>
        <div className='flex gap-10'>
            <button className='text-xl font-bold'>Search</button>
        </div>
    </div>
  )
}

export default Navbar