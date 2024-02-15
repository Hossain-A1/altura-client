import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { IoManSharp, IoWoman } from "react-icons/io5";
import { FaHistory, FaCartPlus, FaBaby } from "react-icons/fa";
import { cn } from "../lib/utils";
import { buttonVariance } from "./ui/Button";

const Navber = () => {
  const [activeLink, setActiveLink] = useState("");
  // Function to handle link click
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <header className='lg:h-[100vh] w-40   max-lg:h-20 max-md:w-full  bg-light shadow-sm border-dark/70 lg:border-r-2 max-lg:border-t-2  border-bsticky md:top-0 left-0 bottom-0 border-b border-b-dim_dark/30 fixed  z-[999]'>
      <div className=' max-lg:flex lg:flex-col  px-2 items-center justify-center w-full max-lg:h-full lg:h-full gap-5 '>
        <ul className='nav-links flex lg:flex-col items-center justify-center   max-md:text-xs gap-5 h-full'>
          <li className='flex flex-col items-center  justify-center max-md:hidden'>
            <strong className='text-gradient  text-2xl'>Altura</strong>

            <div className=''>
              <input
                type='search'
                placeholder='Search shoes'
                className='py-1 rounded-full px-2 w-full max-md:text-xs outline-none bg-dark text-black '
              />
            </div>
          </li>
          <li className='link-item '>
            <Link
              to='/'
              className={`link-item text-dark flex flex-col leading-[0.85rem] items-center ${
                activeLink === "/" ? "active" : ""
              }`}
              onClick={() => handleLinkClick("/")}
            >
              <strong className='link-item lg:text-4xl max-lg:text-xl'>
                <IoMdHome />
              </strong>{" "}
              Home
            </Link>
          </li>
          <li className='link-item '>
            <Link
              to='/men'
              className={`link-item text-dark flex flex-col leading-[0.85rem] items-center ${
                activeLink === "/men" ? "active" : ""
              }`}
              onClick={() => handleLinkClick("/men")}
            >
              <strong className='link-item lg:text-4xl max-lg:text-xl'>
                <IoManSharp />
              </strong>{" "}
              Men
            </Link>
          </li>
          <li className='link-item '>
            <Link
              to='/women'
              className={`link-item text-dark flex flex-col leading-[0.85rem] items-center ${
                activeLink === "/women" ? "active" : ""
              }`}
              onClick={() => handleLinkClick("/women")}
            >
              <strong className='link-item lg:text-4xl max-lg:text-xl'>
                <IoWoman />
              </strong>
              Woman
            </Link>
          </li>
          <li className='link-item '>
            <Link
              to='/kids'
              className={`link-item text-dark flex flex-col leading-[0.90rem] items-center ${
                activeLink === "/kids" ? "active" : ""
              }`}
              onClick={() => handleLinkClick("/kids")}
            >
              <strong className='link-item lg:text-4xl max-lg:text-xl'>
                <FaBaby />
              </strong>{" "}
              Kids
            </Link>
          </li>
          <li className='link-item '>
            <Link
              to='/story'
              className={`link-item text-dark flex flex-col leading-[0.85rem] items-center ${
                activeLink === "/story" ? "active" : ""
              }`}
              onClick={() => handleLinkClick("/story")}
            >
              <strong className='link-item lg:text-4xl max-lg:text-xl'>
                <FaHistory />
              </strong>{" "}
              Our story
            </Link>
          </li>
          <div className='lg:space-y-5 max-lg:flex max-lg:gap-1 w-full'>
            <li className='link-item '>
              <Link
                to='/cart'
                className={`link-item text-dark flex flex-col leading-[0.85rem] items-center ${
                  activeLink === "/cart" ? "active" : ""
                }`}
                onClick={() => handleLinkClick("/cart")}
              >
                <strong className='link-item lg:text-4xl max-lg:text-xl'>
                  <FaCartPlus />
                </strong>{" "}
                Cart
              </Link>
            </li>

            <div className='w-full'>
              <Link
                to='login'
                className={cn(buttonVariance({variant:"gradient",size:"full"}),"max-lg:w-auto")}
              >
                Register
              </Link>
            </div>
          </div>
        </ul>
      </div>
    </header>
  );
};

export default Navber;
