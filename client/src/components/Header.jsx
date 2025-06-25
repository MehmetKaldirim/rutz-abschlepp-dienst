import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signoutSuccess } from "../redux/userSlice"; // adjust the import path
import { FiPhone } from "react-icons/fi";
import logo from "../assets/logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = (e) => {
    if (e.target.closest("nav") || e.target.closest(".hamburger")) {
      return;
    }
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("click", closeMenu);
    } else {
      document.removeEventListener("click", closeMenu);
    }
    return () => {
      document.removeEventListener("click", closeMenu);
    };
  }, [isOpen]);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const headerOpacity = scrollY > 900 ? 1 : 0.5 + scrollY / 1200;

  const handleSignOut = () => {
    dispatch(signoutSuccess()); // Dispatch the signout action
    setIsOpen(false); // Close the menu after signing out
  };

  const handleCallClick = () => {
    if (navigator.userAgent.includes("Windows")) {
      window.location.href = "tel:+4917683396077";
    } else {
      window.location.href = "facetime:+4917683396077";
    }
  };

  return (
    <header
      className="fixed top-0 left-0 w-full p-4 flex items-center justify-between z-50 transition-opacity duration-300"
      style={{
        backgroundColor: `rgba(255, 255, 255, ${headerOpacity})`,
        height: "60px",
      }}
    >
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-20 w-20 mr-4" />
      </div>

      <nav className="hidden md:flex flex-grow justify-center space-x-8">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <Link to="/leistungen" className="hover:underline">
          Leistungen
        </Link>
        <Link to="/uber" className="hover:underline">
          Über
        </Link>
        <Link to="/kontakt" className="hover:underline">
          Kontakt
        </Link>
        {currentUser ? (
          <button
            onClick={handleSignOut}
            className="hover:underline text-red-500"
          >
            Sign Out
          </button>
        ) : (
          <Link to="/admin" className="hover:underline">
            Admin
          </Link>
        )}
      </nav>

      <div className="hidden md:flex items-center">
        <button
          className="flex items-center rounded-full px-4 py-2 hover:bg-yellow-400 hover:text-white shadow-xl"
          onClick={handleCallClick}
        >
          <FiPhone className="mr-2 text-gray-700 hover:text-white" />
          Jetzt Anrufen
        </button>
      </div>

      {/* Hamburger menu icon */}
      <div className="md:hidden">
        <button className="relative z-50 hamburger" onClick={toggleMenu}>
          <div
            className={`w-6 h-0.5 my-1 bg-black transition-transform duration-300 ${
              isOpen ? "rotate-45 translate-y-3.5 " : ""
            }`}
          />
          <div
            className={`w-6 h-0.5 bg-black transition-opacity duration-300 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <div
            className={`w-6 h-0.5 my-1 bg-black transition-transform duration-300 ${
              isOpen ? "-rotate-45 translate-y-0.5 " : ""
            }`}
          />
        </button>
      </div>

      {/* Slide-out mobile menu */}
      <div
        className={`fixed top-0 right-0 bg-white w-64 h-screen shadow-lg flex flex-col p-6 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-500 ease-in-out z-30`}
      >
        <nav className="flex flex-col space-y-4 mt-10">
          <Link
            to="/"
            className="text-gray-800 hover:underline"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="/leistungen"
            className="text-gray-800 hover:underline"
            onClick={toggleMenu}
          >
            Leistungen
          </Link>
          <Link
            to="/uber"
            className="text-gray-800 hover:underline"
            onClick={toggleMenu}
          >
            Über
          </Link>
          <Link
            to="/kontakt"
            className="text-gray-800 hover:underline"
            onClick={toggleMenu}
          >
            Kontakt
          </Link>
          {currentUser ? (
            <button
              onClick={handleSignOut}
              className="text-red-500 hover:underline"
            >
              Sign Out
            </button>
          ) : (
            <Link
              to="/admin"
              className="text-gray-800 hover:underline"
              onClick={toggleMenu}
            >
              Admin
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
