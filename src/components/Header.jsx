import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import menuIcon from "../assets/menu.svg";
import closeIcon from "../assets/cross.svg";
import { navigation } from "../constant/index";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-4 py-4">
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="Logo" className="h-10 w-auto cursor-pointer" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 text-[#1C427A] font-semibold uppercase">
          {navigation.map((item) => (
            <Link
              key={item.id}
              to={item.url}
              className="hover:text-[#E73535] transition-colors"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <Button
            text="Get in Touch"
            bgColor="#E73535"
            hoverBgColor="#e94949"
            textColor="#fff"
            onClick={() => {
              navigate("/contact");
            }}
          />
        </div>

        {/* Mobile Toggle Button */}
        <button onClick={toggleNavbar} className="md:hidden focus:outline-none">
          <img
            src={isOpen ? closeIcon : menuIcon}
            alt="Menu Toggle"
            className="w-6 h-6"
          />
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className=" absolute t-0 left-0 w-[100%] md:hidden bg-[#1C427A] shadow-lg border-t">
          <nav className="flex flex-col text-center px-4 py-8 gap-8 text-white uppercase font-semibold">
            {navigation.map((item) => (
              <Link
                key={item.id}
                to={item.url}
                onClick={() => setIsOpen(false)} // close menu on link click
                className="hover:text-[#E73535] transition-colors"
              >
                {item.title}
              </Link>
            ))}
            <Button
              text="Get in Touch"
              bgColor="#E73535"
              hoverBgColor="#e94949"
              textColor="#fff"
              onClick={() => {
                navigate("/contact");
                setIsOpen(false); // close menu on button click
              }}
            />
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
