import React from 'react'
import { assets } from '../assets/assets'
import nexcart_logo from '../assets/nexcart_logo.svg';

const Navbar = ({setToken}) => {
  return (
    <div className='flex items-center py-2 justify-between px-4'>
        <img className='w-50' src={nexcart_logo}/>
        <button onClick={(e)=>setToken('')} className='bg-gray-600 cursor-pointer text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm'>Logout</button>
    </div>
  )
}

export default Navbar