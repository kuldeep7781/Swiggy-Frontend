import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RxCaretDown } from "react-icons/rx";
import { IoSearchSharp } from "react-icons/io5";
import { CiDiscount1 } from "react-icons/ci";
import { IoMdHelp } from "react-icons/io";
import { FaSignInAlt } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [toggle, setToggle] = useState(false);

  const showSideMenu = () => {
    setToggle(true);
  };

  const hideSideMenu = () => {
    setToggle(false);
  };

  const links = [
    {
      link: "/",
      icon: <IoSearchSharp />,
      name: "Search",
    },
    {
      link: "/",
      icon: <CiDiscount1 />,
      name: "Offers",
    },
    {
      link: "/",
      icon: <IoMdHelp />,
      name: "Help",
    },
    {
      link: "/signin",
      icon: <FaSignInAlt />,
      name: "Sign In",
    },
    {
      link: "/",
      icon: <FaCartArrowDown />,
      name: "Cart",
    },
  ];

  return (
    <>
      <div
        className="black-overlay w-full h-full fixed duration-500 "
        onClick={hideSideMenu}
        style={{
          opacity: toggle ? 1 : 0,
          visibility: toggle ? "visible" : "hidden",
        }}
      >
        <div
          onClick={(e) => {
            // e.stopPropagation()
          }}
          className="w-[500px] bg-white absolute duration-500"
          style={{
            left: toggle ? "0%" : "-100%",
          }}
        ></div>
      </div>
      <header className="App sticky top-0 bg-white p-[2vw] shadow-xl text-[#686b78] z-50">
        <div className="max-w-[75vw] mx-auto flex items-center justify-between">
          <div className="md:w-[35vw] w-[60vw] flex justify-between items-center">
            <img src="images/logo.png" alt="" className="md:w-[40px] w-[7vw]" />
            <div className="">
              <span className="font-bold border-b-[3px] border-black">
                Indore
              </span>{" "}
              Madhya Pradesh, India{" "}
              <RxCaretDown
                fontSize={25}
                onClick={showSideMenu}
                className="inline font-[0.9rem] text-[#fc8019] cursor-pointer"
              />
            </div>
          </div>
          <nav className="md:flex ml-auto text-[12px] text-[#51535d] font-semibold mr-2">
            <div className="dropbtn md:hidden" onClick={toggleMenu}>
              <span className="cursor-pointer text-2xl font-bold">☰</span>
            </div>
            {/* <ul className="flex list-none gap-10">
            <li><IoSearchSharp className='inline hover:text-[#fc8019] items-center'/> Search</li>
            <li><CiDiscount1 className='inline hover:text-[#fc8019] items-center'/> Offers</li>
            <li><IoMdHelp className='inline hover:text-[#fc8019] items-center'/> Help</li>
            <li><FaSignInAlt className='inline hover:text-[#fc8019] items-center'/> SignIn</li>
            <li><FaCartArrowDown className='inline hover:text-[#fc8019] items-center'/> Cart</li>
          </ul> */}

            {/* OR */}

            <ul
              className={`absolute md:relative right-[10vw] md:flex md:space-x-4 ${
                isOpen ? "block" : "hidden"
              } md:block bg-white p-6 md:p-0`}
            >
              {links.map((data, index) => {
                return (
                  <li
                    key={index}
                    className="flex hover:text-[#fc8019] items-center gap-2 cursor-pointer m-4 md:m-0"
                  >
                    <Link to={data.link} className="flex items-center gap-2">
                      {data.icon}
                      {data.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
