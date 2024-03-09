import React, { useState } from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import { IoIosSearch } from "react-icons/io";
import { SlLocationPin } from "react-icons/sl";

const Header = ({ setQuery }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const [city, setCity] = useState("");

  const handleSearchClick = () => {
    if (city !== "") setQuery({ q: city });
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <div className="header flex flex-row justify-between h-11 py-2 mb-8">
        <div>
          <BiMenuAltLeft onClick={toggleMenu} className="h-6 w-6" />
        </div>
        <div className="flex flex-row ">
          <input
            value={city}
            onChange={(e) => setCity(e.currentTarget.value)}
            type="text"
            placeholder="Search for city...."
            className="text-md font-light p-2 w-full focus:outline-none"
          />
          <IoIosSearch
            className="h-6 w-6 cursor-pointer"
            onClick={handleSearchClick}
          />
        </div>
      </div>

      <div
        className={`navbar-menu relative z-50 ${isMenuOpen ? "" : "hidden"}`}
      >
        <div
          className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"
          onClick={toggleMenu}
        ></div>
        <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-full border-r overflow-y-auto md:px-40">
          <div className="flex-grow relative">
            <img
              src="/sidebar.jpg"
              alt="Background"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="flex items-center absolute top-44 left-10">
              <div className="flex text-white flex-row items-center bg">
                <SlLocationPin className="h-7 w-7" />
                <h1 className="text-lg text-white w-30 ml-2">
                  CURRENT LOACTION
                </h1>
              </div>
            </div>
            <div className="flex items-center absolute top-10 left-7">
              <button className="navbar-close" onClick={toggleMenu}>
                <svg
                  className="h-10 w-10 cursor-pointer text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            <div className="flex items-center absolute top-10 right-10">
              <button
                className="navbar-close bg-[#FF2D55] text-[#FFFFFF] py-2 px-4 text-center"
                onClick={toggleMenu}
              >
                LIVE
              </button>
            </div>
            <div className="flex items-center absolute top-60 left-10">
              <h1 className="text-5xl text-white w-30">
                New York, United States
              </h1>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
