import React, { useState } from 'react'
import { IoIosAddCircleOutline } from "react-icons/io";
import { FaRegCalendarCheck } from "react-icons/fa";
import { CiViewList } from "react-icons/ci";
import { NavLink } from 'react-router-dom';

const SideBar = () => {
    const [selectOption, setSelectOption] = useState('');
  return (
    < >
      <div className="sidebar w-1/3 h-[calc(100vh-136px)] max-w-60 bg-gray-950 text-white flex flex-col gap-4 pt-8 pl-8 border-r">
        <NavLink
          to="/add"
          onClick={() => setSelectOption("add")}
          className={
            selectOption == "add"
              ? `options border flex p-3 gap-2 bg-gray-200 text-black`
              : `options border flex p-3 gap-2 bg-gray-900`
          }
        >
          <div className="icon text-2xl">
            <IoIosAddCircleOutline />
          </div>
          <p className="hidden sm:block">Add items</p>
        </NavLink>
        <NavLink
          to="/list"
          onClick={() => setSelectOption("list")}
          className={
            selectOption == "list"
              ? `options border flex p-3 gap-2 bg-gray-200 text-black`
              : `options border flex p-3 gap-2 bg-gray-900`
          }
        >
          <div className="icon text-2xl">
            <CiViewList />
          </div>
          <p className="hidden sm:block">List items</p>
        </NavLink>
        <NavLink
          onClick={() => setSelectOption("orders")}
          to="/orders"
          className={
            selectOption == "orders"
              ? `options border flex p-3 gap-2 bg-gray-200 text-black`
              : `options border flex p-3 gap-2 bg-gray-900`
          }
        >
          <div className="icon text-2xl">
            <FaRegCalendarCheck />
          </div>
          <p className="hidden sm:block">Orders</p>
        </NavLink>
      </div>
    </>
  );
}

export default SideBar