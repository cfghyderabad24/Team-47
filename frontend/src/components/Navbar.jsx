import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
import {useLogin} from '../context/LoginContext'
const Header = () => {
  const [activeLink, setActiveLink] = useState(null);
  const [scrollActive, setScrollActive] = useState(false);
  const {login,setLogin}= useLogin()
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);
  console.log(login,"login")
  return (
    <>
      <header
        className={
          "fixed top-0 w-full  z-30 bg-white-500 transition-all bg-white " +
          (scrollActive ? " shadow-md pt-0" : " pt-4")
        }
      >
        <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4">
          <div className="col-start-1 col-end-2 flex items-center">
            <NavLink to="/">
              <img src="https://www.nextskills360.in/wp-content/uploads/2020/09/cropped-Ns-logo-white-back.png" alt="logo" className="" />
            </NavLink>
          </div>
          <ul className="hidden lg:flex col-start-4 col-end-8 text-black-500  items-center">
            
            <LinkScroll
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("about");
              }}
              className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "about"
                  ? " text-orange-500 animation-active "
                  : " text-black-500 hover:text-orange-500 a")
              }
            >
              Home
            </LinkScroll>

            <LinkScroll
              activeClass="active"
              to="feature"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("feature");
              }}
              className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "feature"
                  ? " text-orange-500 animation-active "
                  : " text-black-500 hover:text-orange-500 ")
              }
            >
              About Us
            </LinkScroll>

            <LinkScroll
              activeClass="active"
              to="pricing"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("pricing");
              }}
              className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "pricing"
                  ? " text-orange-500 animation-active "
                  : " text-black-500 hover:text-orange-500 ")
              }
            >
              Contact Us
            </LinkScroll>

            {/* <LinkScroll
              activeClass="active"
              to="/testimoni"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("testimoni");
              }}
              className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "testimoni"
                  ? " text-orange-500 animation-active "
                  : " text-black-500 hover:text-orange-500 ")
              }
            >
              Product
            </LinkScroll> */}
            <NavLink to="/products" className="px-4 py-2 mx-2 text-orange-500 animation-active "/>
            
            {/* <NavLink to="/aboutus" className="px-4 py-2 mx-2 text-black-500">
              About Us
            </NavLink>
            <NavLink to="/contactus" className="px-4 py-2 mx-2 text-black-500">
              Contact Us
            </NavLink>
            <NavLink to="/charts" className="px-4 py-2 mx-2 text-black-500">
              Charts
            </NavLink> */}
          </ul>
          {!login&&<>
          <div className="col-start-10 col-end-12 font-medium flex justify-end items-center">
          <NavLink
              className="text-black-600 mx-2 sm:mx-4 capitalize tracking-wide hover:text-orange-500 transition-all"
              to="/signin"
            >
              Sign In
            </NavLink>
            <NavLink
              to="/signup"
              className="font-medium tracking-wide py-2 px-5 sm:px-8 border border-orange-500 text-orange-500 bg-white-500 outline-none rounded-l-full rounded-r-full capitalize hover:bg-orange-500 hover:text-white-500 transition-all hover:shadow-orange hover:text-white"
            >
              Sign Up
            </NavLink>
          </div>
          {
            !login&&<>
            
            <NavLink className="className=font-medium tracking-wide py-2 px-5 sm:px-8 border border-orange-500 text-orange-500 bg-white-500 outline-none rounded-l-full rounded-r-full capitalize hover:bg-orange-500 hover:text-white-500 transition-all hover:shadow-orange hover:text-white" to="/cart" >cart</NavLink>
          
            </>
          }
          </>
      }
   
        
          </nav>
      </header>
      
    </>
  );
};

export default Header;
