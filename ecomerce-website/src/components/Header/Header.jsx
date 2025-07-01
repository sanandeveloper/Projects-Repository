import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";
import { useSelector } from "react-redux";
import LogoutBtn from "./LogoutBtn";
import Logo from "../Logo";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";



function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const authStatus = useSelector((state) => state.auth.status);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);



  const navItems = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "About", path: "/about" },
    { name: "Contact Us", path: "/contactus" },
    { user: "Login", path: "/login", active: !authStatus },
  ];

 return (
  <header className="fixed top-0 left-0 right-0 bg-gray-800 text-white shadow-md z-50">
    <div className="container mx-auto px-4">
      <nav className="flex justify-between items-center py-4 relative">
        {/* Logo */}
        <div className="text-xl font-bold">
          <Logo />
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex gap-8">
          {navItems.map(
            (item, index) =>
              item.name && (
                <button
                  key={index}
                  className={`cursor-pointer py-2 px-1 transition-colors ${
                    location.pathname === item.path
                      ? "font-bold border-b-2 border-white"
                      : "hover:text-blue-200"
                  }`}
                  onClick={() => navigate(item.path)}
                >
                  {item.name}
                </button>
              )
          )}
        </div>

        {/* Right Side - Cart & Auth */}
        <div className="flex items-center gap-4">
          <Link to="/shoppingcart" className="relative">
            <CiShoppingCart className="h-6 w-6 hover:text-blue-200 transition-colors" />
          </Link>

          {/* Auth button */}
          <div className="hidden md:flex gap-2">
            {navItems.map(
              (item, index) =>
                item.active && (
                  <button
                    key={index}
                    className={`py-1 px-3 rounded transition-colors ${
                      location.pathname === item.path
                        ? "bg-white text-blue-800"
                        : "hover:text-blue-200"
                    }`}
                    onClick={() => navigate(item.path)}
                  >
                    {item.user}
                  </button>
                )
            )}
            {authStatus && <LogoutBtn />}
          </div>

          {/* Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white focus:outline-none"
          >
            {mobileMenuOpen ? (
              <IoMdClose className="w-6 h-6" />
            ) : (
              <GiHamburgerMenu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-gray-800 text-white flex flex-col items-start p-4 gap-4 md:hidden z-50 shadow-lg">
            {navItems.map(
              (item, index) =>
                item.name && (
                  <button
                    key={index}
                    className={`text-left w-full py-2 px-1 transition-colors ${
                      location.pathname === item.path
                        ? "font-bold border-b-2 border-white"
                        : "hover:text-blue-200"
                    }`}
                    onClick={() => {
                      setMobileMenuOpen(false);
                      navigate(item.path);
                    }}
                  >
                    {item.name}
                  </button>
                )
            )}

            {/* Mobile Auth Button */}
            {navItems.map(
              (item, index) =>
                item.active && (
                  <button
                    key={index}
                    className={`py-2 px-3 w-full text-left rounded transition-colors ${
                      location.pathname === item.path
                        ? "bg-white text-blue-800"
                        : "hover:text-blue-200"
                    }`}
                    onClick={() => {
                      setMobileMenuOpen(false);
                      navigate(item.path);
                    }}
                  >
                    {item.user}
                  </button>
                )
            )}

            {authStatus && <LogoutBtn />}
          </div>
        )}
      </nav>
    </div>
  </header>
);
}

export default Header;