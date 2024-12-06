import React, { useState } from 'react'
import { menu_list } from '../../assets/img/img'
import './MenuList.css'
const MenuList = ({category, setCategory}) => {
  
  return (
    <>
    <div className='h-0 bg-black text-black' id='menu'></div>
      <div className="explore-menu mt-8">
        <h2 className="explore-menu-heading text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
          Explore our menu
        </h2>
        <p className="text-xs text-gray-300 sm:text-sm md:text-[16px]">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus
          voluptatem eos optio laudantium veritatis!
        </p>
        <div className="list-items flex gap-5 overflow-x-scroll pl-0 p-5 pb-0 cursor-pointer">
          {menu_list.map((item, index) => {
            return (
              <div
                onClick={() =>
                  setCategory((prev) =>
                    prev == item.menuName ? `All` : item.menuName
                  )
                }
                key={index}
                className="item min-w-[85px] sm:min-w-[130px] relative mt-4 mb-0 flex flex-col items-center transition-all duration-300 ease-in-out active:animate-click "
              >
                <img
                  src={item.menuImg}
                  className={
                    category == item.menuName
                      ? `size-20 sm:size-28 lg:size-32 rounded-full object-cover border-4 p-1 border-orange-600`
                      : `size-20 sm:size-28 lg:size-32 rounded-full object-cover border-4 p-1`
                  }
                  alt="img"
                />
                <p className="item-name text-center text-xs sm:text-xl mt-2 italic">
                  {item.menuName}
                </p>
              </div>
            );
          })}
        </div>
        <hr className="h-[2px] m-2" />
      </div>
    </>
  );
}

export default MenuList