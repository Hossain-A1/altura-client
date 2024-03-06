import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { GrUserManager } from "react-icons/gr";
import { IoManSharp, IoWoman } from "react-icons/io5";
import { FaHistory, FaCartPlus, FaBaby } from "react-icons/fa";
import { cn } from "../lib/utils";
import { buttonVariance } from "./ui/Button";
import { useAuthContext } from "../hooks/useAuthContext";
import { useCartContext } from "../hooks/useCartContext";
import logo from "../assets/images/logo.svg";
const Navber = () => {
  const [activeLink, setActiveLink] = useState("/");
  const { user } = useAuthContext();
  const { cartItems } = useCartContext();

  const handleLinkClick = (Link) => {
    setActiveLink(Link);
  };

  return (
    <header className='lg:h-[100vh] w-40   max-lg:h-20 max-md:w-full  bg-light shadow-sm border-dark/70 lg:border-r-2 max-lg:border-t-2  border-bsticky md:top-0 left-0 bottom-0 border-b border-b-dim_dark/30 fixed  z-[999]'>
      <div className=' max-lg:flex lg:flex-col  px-2 items-center justify-center w-full max-lg:h-full lg:h-full gap-5 '>
        <ul className='nav-links flex lg:flex-col max-lg:items-center lg:mt-5 lg:w-full  max-md:text-xs lg:gap-5 h-full font-medium lg:text-sm '>
          <li className='flex  items-center justify-center  max-md:hidden'>
            <img src={logo} alt='logo' height={40} width={40} />
            <Link
              to='/'
              className='text-gradient font-semibold italic  text-2xl'
            >
              Altura
            </Link>
          </li>
          <li className=' w-full '>
            <Link
              to='/'
              className={`lg:px-4 py-2 rounded-xl w-full text-dark flex lg:gap-5 max-lg:flex-col leading-[0.85rem] items-center ${
                activeLink === "/" ? "active" : ""
              }`}
              onClick={() => handleLinkClick("/")}
            >
              <strong className='link-item lg:text-2xl max-lg:text-xl'>
                <IoMdHome />
              </strong>{" "}
              <strong className={` ${activeLink === "/" ? "active-text" : ""}`}>
                Home
              </strong>
            </Link>
          </li>
          <li className='w-full'>
            <Link
              to='/men'
              className={`lg:px-4 px-2 py-2 rounded-xl w-full text-dark flex lg:gap-5 max-lg:flex-col leading-[0.85rem] items-center ${
                activeLink === "/men" ? "active" : ""
              }`}
              onClick={() => handleLinkClick("/men")}
            >
              <strong className='link-item lg:text-2xl max-lg:text-xl'>
                <IoManSharp />
              </strong>{" "}
              <strong
                className={` ${activeLink === "/men" ? "active-text" : ""}`}
              >
                Men
              </strong>
            </Link>
          </li>
          <li className='w-full'>
            <Link
              to='/women'
              className={`lg:px-4 px-2 py-2 rounded-xl w-full text-dark flex lg:gap-5 max-lg:flex-col leading-[0.85rem] items-center ${
                activeLink === "/women" ? "active" : ""
              }`}
              onClick={() => handleLinkClick("/women")}
            >
              <strong className='link-item lg:text-2xl max-lg:text-xl'>
                <IoWoman />
              </strong>
              <strong
                className={` ${activeLink === "/women" ? "active-text" : ""}`}
              >
                Women
              </strong>
            </Link>
          </li>
          <li className='w-full'>
            <Link
              to='/kids'
              className={`lg:px-4 px-2 py-2 rounded-xl w-full text-dark flex lg:gap-5 max-lg:flex-col leading-[0.90rem] items-center ${
                activeLink === "/kids" ? "active" : ""
              }`}
              onClick={() => handleLinkClick("/kids")}
            >
              <strong className='link-item lg:text-2xl max-lg:text-xl'>
                <FaBaby />
              </strong>{" "}
              <strong
                className={` ${activeLink === "/kids" ? "active-text" : ""}`}
              >
                Kids
              </strong>
            </Link>
          </li>
          <li className='w-full'>
            <Link
              to='/story'
              className={`lg:px-4 px-2 py-2 rounded-xl w-full text-dark flex lg:gap-5 max-lg:flex-col leading-[0.85rem] items-center ${
                activeLink === "/story" ? "active" : ""
              }`}
              onClick={() => handleLinkClick("/story")}
            >
              <strong className='link-item lg:text-2xl max-lg:text-xl'>
                <FaHistory />
              </strong>{" "}
              <strong
                className={` ${activeLink === "/story" ? "active-text" : ""}`}
              >
                Our story
              </strong>
            </Link>
          </li>
          <div className='lg:space-y-5 max-lg:flex items-center max-lg:gap-1 w-full'>
            <li className='w-full'>
              <Link
                to='/cart'
                className={`lg:px-4 px-2 py-2 rounded-xl w-full text-dark flex lg:gap-5 max-lg:flex-col leading-[0.85rem] items-center ${
                  activeLink === "/cart" ? "active" : ""
                }`}
                onClick={() => handleLinkClick("/cart")}
              >
                <strong className=' lg:text-2xl max-lg:text-xl relative'>
                  <FaCartPlus />
                  <small className='absolute text-sm border border-red px-1 rounded-full text-gradient -top-3 left-4 z-[10]'>
                    {cartItems.length}
                  </small>
                </strong>{" "}
                <strong
                  className={` ${activeLink === "/cart" ? "active-text" : ""}`}
                >
                  Cart
                </strong>
              </Link>
            </li>

            <div className='w-full flex  items-center justify-center'>
              {user ? (
                <li
                  className={`flex flex-col items-center text-dark  w-full py-2 rounded-xl ${
                    activeLink === "/profile" ? "active" : ""
                  }`}
                >
                  <Link
                    to='/profile'
                    className={`border-blue text-dark border p-1 
                    rounded-full ${activeLink === "/profile" ? "active" : ""}`}
                    onClick={() => handleLinkClick("/profile")}
                  >
                    <strong>
                      <GrUserManager className='text-2xl ' />
                    </strong>
                  </Link>
                  <small
                    className={` ${
                      activeLink === "/profile" ? "active-text" : ""
                    }`}
                  >
                    profile
                  </small>
                </li>
              ) : (
                <Link
                  to='login'
                  className={cn(
                    buttonVariance({ variant: "gradient", size: "full" }),
                    "max-lg:w-auto"
                  )}
                >
                  Register
                </Link>
              )}
            </div>
          </div>
        </ul>
      </div>
    </header>
  );
};

export default Navber;
