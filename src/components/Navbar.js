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
    <header>
      <div className='max-lg:h-20 z-[999]  max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:right-0  w-full lg:hidden'>
        <div className=' max-lg:absolute bg-light   flex justify-center w-full items-center gap-5'>
          <div className=' flex justify-center items-center w-full'>
            <li className='flex  items-center justify-center  '>
              <img src={logo} alt='logo' height={40} width={40} />
              <Link
                to='/'
                className='text-gradient text-center block font-semibold italic  text-2xl'
              >
                Altura
              </Link>
            </li>
          </div>
          <div className='w-full flex  items-center justify-center'>
            {user ? (
              <li
                className={`flex flex-col items-center text-dark  w-28 py-2 rounded-xl ${
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
                    <GrUserManager className='text-sm lg:text-xl ' />
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
                  "max-lg:w-auto  text-xs"
                )}
              >
                Register
              </Link>
            )}
          </div>
        </div>
      </div>
      <div className='lg:h-[100vh] w-40   max-lg:h-20 max-lg:w-full  bg-light shadow-sm border-dark/70 lg:border-r-2 max-lg:border-t-2  border-bsticky md:top-0 left-0 bottom-0 border-b border-b-dim_dark/30 fixed  z-[999]'>
        <div className=' max-lg:flex lg:flex-col  px-2 items-center justify-center w-full max-lg:h-full lg:h-full gap-5 '>
          <ul className='nav-links flex lg:flex-col max-lg:items-center max-lg:justify-between max-2xl:justify-center max-lg:px-3 w-full   lg:gap-5 h-full font-medium lg:text-sm '>
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
                <strong
                  className={` ${
                    activeLink === "/" ? "active-text" : "max-md:text-[0.60rem]"
                  }`}
                >
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
                  className={` ${
                    activeLink === "/men"
                      ? "active-text"
                      : "max-md:text-[0.60rem]"
                  }`}
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
                  className={` ${
                    activeLink === "/women"
                      ? "active-text"
                      : "max-md:text-[0.60rem]"
                  }`}
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
                  className={` ${
                    activeLink === "/kids"
                      ? "active-text"
                      : "max-md:text-[0.60rem]"
                  }`}
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
                  className={` ${
                    activeLink === "/story"
                      ? "active-text whitespace-nowrap"
                      : "max-md:text-[0.60rem] whitespace-nowrap"
                  }`}
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
                  <strong className=' lg:text-2xl text-xl relative'>
                    <FaCartPlus />
                    <small className='absolute text-sm border border-red px-1 rounded-full text-gradient -top-3  lg:left-4 left-2 z-[10]'>
                      {cartItems.length}
                    </small>
                  </strong>{" "}
                  <strong
                    className={` ${
                      activeLink === "/cart"
                        ? "active-text"
                        : "max-md:text-[0.60rem]"
                    }`}
                  >
                    Cart
                  </strong>
                </Link>
              </li>

              <div className='w-full flex  items-center justify-center max-lg:hidden'>
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
                        <GrUserManager className='text-sm lg:text-xl ' />
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
      </div>
    </header>
  );
};

export default Navber;
