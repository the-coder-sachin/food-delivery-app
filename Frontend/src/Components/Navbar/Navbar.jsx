import React, { useContext, useState } from 'react'
import { IoSearch } from "react-icons/io5";
import { IoBag } from "react-icons/io5";
import { logo } from '../../assets/assets';
import Button from '../Button/Button';
import { NavLink } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
const Navbar = ({ setShowLoginPopup }) => {
  const [menu, setMenu] = useState("");

  const {subTotalCart} = useContext(StoreContext)

  return (
    <div className="">
      <nav className="flex justify-between items-center">
        <NavLink to="/">
          <div className="logo flex flex-col items-center">
            <img
              className="size-12 sm:size-20 md:size-24 animate-bounce mt-[32px] cursor-pointer bg-red-500 rounded-full"
              src={logo}
              alt="logo"
            />
            <div className="stand w-[65px] sm:w-[100px] md:w-[120px] h-1 bg-gray-400 rounded-full"></div>
          </div>
        </NavLink>
        <ul className="hidden sm:flex sm:gap-2 sm:flex-wrap sm:text-xs md:flex md:text-[16px] md:gap-4 lg:gap-5 lg:text-lg font-bold">
          <li>
            <NavLink
              onClick={() => setMenu("home")}
              className={
                menu === "home"
                  ? "pb-1 border-b-2 text-purple-400 border-purple-600"
                  : "hover:text-gray-300"
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <a
              onClick={() => setMenu("menu")}
              className={
                menu === "menu"
                  ? "pb-1 border-b-2 text-purple-400 border-purple-600"
                  : "hover:text-gray-300"
              }
              href="#menu"
            >
              Menu
            </a>
          </li>
          <li>
            <a
              onClick={() => setMenu("mobile-app")}
              className={
                menu === "mobile-app"
                  ? "pb-1 border-b-2 text-purple-400 border-purple-600"
                  : "hover:text-gray-300"
              }
              href="#mobile"
            >
              Mobile-app
            </a>
          </li>
          <li>
            <a
              onClick={() => setMenu("contact-us")}
              className={
                menu === "contact-us"
                  ? "pb-1 border-b-2 text-purple-400 border-purple-600"
                  : "hover:text-gray-300"
              }
              href="#contact"
            >
              Contact Us
            </a>
          </li>
        </ul>
        <div className="btns flex gap-2 items-center">
          <div className="search-icon text-2xl active:animate-click hover:text-stone-300 cursor-pointer">
            <IoSearch />
          </div>
          <div className="bag text-2xl active:animate-click hover:text-stone-300 cursor-pointer relative">
            <NavLink to="/cart" onClick={() => setMenu("")}>
              <div
                className={
                  subTotalCart() &&
                  `dot size-2 bg-red-500 rounded-full absolute top-[-5px] right-[-1px]`
                }
              ></div>
              <IoBag />
            </NavLink>
          </div>
          <div
            onClick={() => {
              setShowLoginPopup(true);
            }}
          >
            <Button>Sign In</Button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar