import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./NavBar.css";
import React, { useState, useEffect } from "react";

const NavBar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  const { pathname } = useLocation();

  // Scroll to top when a nav link is clicked, even for the same route
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
    setClick(false); // Close the mobile menu if open
  };

  useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return () => window.removeEventListener("scroll", changeColor);
  }, []);

  return (
    <div className={color ? "headder headder-bg" : "headder"}>
      <Link to={"/"}>
        <h1>Portfolio</h1>
      </Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/" onClick={handleLinkClick}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/Experience" onClick={handleLinkClick}>
            Experience
          </Link>
        </li>
        <li>
          <Link to="/Projects" onClick={handleLinkClick}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="/Education" onClick={handleLinkClick}>
            Education
          </Link>
        </li>
        <li>
          <Link to="/Contact" onClick={handleLinkClick}>
            Contact
          </Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: "#fff" }} />
        ) : (
          <FaBars size={20} style={{ color: "#fff" }} />
        )}
      </div>
    </div>
  );
};

export default NavBar;
