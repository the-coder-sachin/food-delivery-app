import React from 'react'
import { assets } from '../../assets/assets'
const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between items-center px-6 py-3">
        <img
          className="size-12 sm:size-20 md:size-20 animate-bounce mt-[32px] cursor-pointer bg-red-500 rounded-full"
          src={assets.logo}
          alt="logo"
        />
        <img
          className="size-16 object-cover rounded-full p-1 border-2"
          src={assets.dp}
          alt="dp"
        />
      </nav>
    </>
  );
}

export default Navbar