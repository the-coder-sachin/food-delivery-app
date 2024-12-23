import React from 'react'
import './header.css'
import Button from '../../Button/Button'

const Header = () => {
  return (
    <div>
      <header className="h-[279px] mt-[30px] m-auto rounded-2xl">
        <div className="overlay absolute h-full w-full bg-[#000000a8]"></div>
        <div className="header-content flex absolute flex-col items-start max-w-[70%] gap-[1.5vw] bottom-[10%] left-[6vw]">
          <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl">Order Food & Bring Happiness</h2>
          <p className="text-[12px] sm:text-xs">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor
            voluptate ex, reiciendis natus minima quam fugit nihil totam,
            praesentium voluptatum, 
          </p>
          <Button>View More</Button>
        </div>
      </header>
    </div>
  );
}

export default Header