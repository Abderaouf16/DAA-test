import React, { useState, useEffect, useRef } from "react";
import header from "../CSS/header.css";
import { NavLink } from "react-router-dom";
import { useLogout } from "../../hooks/useLogout";
import { useAuthContext } from "../../hooks/useAuthContext";
import { images } from "../../images/exports";
import hamburger from "../../images/icon-hamburger.svg";

export default function Header() {
  // FOR THE SIDEBAR TOGGLE
  const [open, setOpen] = useState(false);
  const handdelSideBar = (e) => {
    e.preventDefault();
    setOpen(!open);
  };

  const { user } = useAuthContext();

  // FOR UPDATING THE STATE "LOGOUT"
  const { logout } = useLogout();
  const handleClick = () => {
    logout();
  };
  // FOR CLOSING THE DROPDOWN WHEN WE LOGOUT
  const handleLogout = () => {
    handleClick();
    toggleDropdown();
  };

  //FOR THE DROPDOWN

  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // FOR CLOSING THE DROPDOWN WHEN WE PRESS AWAY
  const dropdownRef = useRef(null);
  useEffect(() => {
    // add event listener to detect clicks outside of the dropdown
    function handleClickOutside(event) {
      // Check if the clicked element is outside of the dropdown using the contains method on the dropdown reference
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false); // Close the dropdown if the clicked element is outside of the dropdown
      }
    }
    document.addEventListener("click", handleClickOutside);
    // cleanup function to remove event listener when component unmounts
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <>
      <header>
        <nav className="nav flex items-center justify-around py-10 bg-white w-full">
          <a
            className="text-black title   pr-2  font-bold  pl-5  "
            href="/home"
          >
            Archi World
          </a>
          <ul className={open ? "nav_items active " : "nav_items"}>
            <li className="text-black ">
              <a href="/home">Home</a>
            </li>
            <li className="text-black">
              <a href="/projects">Projects</a>
            </li>
            {!user && (
              <>
                <li className="text-black">
                  <a href="/login">Login</a>
                </li>
                <li className=" signupBtn text-white border-2 rounded-md border-black px-7 py-2 z-50">
                  <a href="/signup">Signup</a>
                </li>
              </>
            )}
          </ul>
          {user && (
            <>
              <div
                ref={dropdownRef}
                className="pofileSection flex gap-2 border border-grey-300 rounded-full py-2 px-4 bg-white p-2"
              >
                <div className="text-white">
                  <svg
                    onClick={() => setIsOpen(!isOpen)}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 "
                    onClick={toggleDropdown}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                </div>

                {isOpen && (
                  <div className=" dropeDown flex flex-col border-black border-2">
                    <ul className=" cursor-pointer">
                      <li className="my-1">
                        <a href="/profile">profile</a>
                      </li>
                      {user && (
                        <button onClick={handleLogout} className="p-0">
                          <a href="/home">logout</a>
                        </button>
                      )}
                    </ul>
                  </div>
                )}

                <div className=" px-4 flex justify-center items-center  ">
                  <h2 className="text-white text-md font-bold  ">
                    {user.username}
                  </h2>
                </div>
              </div>
            </>
          )}
          <svg
            onClick={handdelSideBar}
            className="hamborger z-50 "
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
          >
            <g fill="none" fillRule="evenodd">
              <path
                fill="#FFF"
                stroke="#2C2830"
                strokeWidth="1.5"
                d="M.75.75h30.5v30.5H.75z"
              />
              <g fill="#2C2830">
                <path d="M8 10h16v1.5H8zM8 15h16v1.5H8zM8 20h16v1.5H8z" />
              </g>
            </g>
          </svg>
        </nav>
      </header>
    </>
  );
}
