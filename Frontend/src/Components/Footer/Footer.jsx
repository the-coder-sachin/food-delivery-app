import React from 'react'
import { logo } from '../../assets/assets'
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { appStore, playStore } from '../../assets/img/img';


const Footer = () => {
  return (
    <>
      <div className="logo-banner flex justify-center">
        <img src={logo}
        className='size-80 sm:size-96'
        alt="logo" />
      </div>
      <footer className="bg-slate-900 p-4">
        <div className="footer-content flex">
          <div className="left w-full hidden sm:block">
            <div className="logo flex flex-col justify-center items-center">
              <div className="logo-img">
                <img
                  className="size-20 sm:size-24 animate-bounce mt-[32px] cursor-pointer bg-red-500 rounded-full"
                  src={logo}
                  alt="logo"
                />
              </div>
              <div className="logo-title hidden md:block font-bold text-2xl">
                Chef's Place Good Food
              </div>
            </div>
          </div>
          <div className="middle w-full flex justify-center flex-col items-center">
            <h3 className="text-xl mb-3 hover:animate-click cursor-pointer">
              About Us
            </h3>
            <ul>
              <li className="cursor-pointer text-gray-400 hover:text-gray-300 text-xs sm:text-sm">
                Who We Are
              </li>
              <li className="cursor-pointer text-gray-400 hover:text-gray-300 text-xs sm:text-sm">
                Work With Us
              </li>
              <li className="cursor-pointer text-gray-400 hover:text-gray-300 text-xs sm:text-sm">
                Blog
              </li>
              <li className="cursor-pointer text-gray-400 hover:text-gray-300 text-xs sm:text-sm">
                Contact Us
              </li>
              <li className="cursor-pointer text-gray-400 hover:text-gray-300 text-xs sm:text-sm">
                Report Fraud
              </li>
            </ul>
          </div>
          <div className="right w-full flex justify-center flex-col items-center">
            <p className="text-xl text-nowrap mb-3 hover:animate-click cursor-pointer">
              Social Links
            </p>
            <div className="icons flex gap-1 sm:gap-3">
              <FaFacebook  className="cursor-pointer text-sm sm:text-xl" />
              <FaInstagram className="cursor-pointer text-sm sm:text-xl" />
              <FaYoutube   className="cursor-pointer text-sm sm:text-xl" />
              <FaLinkedin  className="cursor-pointer text-sm sm:text-xl" />
              <FaTwitter   className="cursor-pointer text-sm sm:text-xl" />
            </div>
            <img
              src={appStore}
              className="h-8 mt-2 cursor-pointer"
              alt="app-store"
            />
            <img
              src={playStore}
              className="h-8 mt-2 cursor-pointer"
              alt="play-store"
            />
          </div>
        </div>
        <hr className="my-3" />
        <div className="copyright text-xs text-gray-500">
          By continuing past this page, you agree to our Terms of Service,
          Cookie Policy, Privacy Policy and Content Policies. All trademarks are
          properties of their respective owners. 2008-2024 © Chef'sPlace™ Ltd. All
          rights reserved.
        </div>
      </footer>
    </>
  );
}

export default Footer