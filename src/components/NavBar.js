import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import   './NavBar.css'

function NavBar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = ()=>{
    if(window.innerWidth <=960){
        setButton(false);
    }else{
        setButton(true);
    }
  }

//   asta este ca butonul sa nu mai apara dupa refresh
  useEffect(()=>{showButton();},[])

  window.addEventListener('resize', showButton);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* LOGO */}
        <Link to="/trvl/" className="navbar-logo" onClick={closeMobileMenu}>
          TRVL <i className="fab fa-typo3"></i>
        </Link>

        {/* MOBILE MENU */}
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
        </div>

        {/* NAVIGATION MENU */}
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/trvl/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/services"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/products"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Products
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/sign-up"
              className="nav-links-mobile"
              onClick={closeMobileMenu}
            >
              Sign-Up
            </Link>
          </li>
        </ul>

        {/* BUTTON SIGN-UP */}
        {button && <Button buttonStyle="btn--outline" to="/sign-up">SIGN UP</Button>}
      </div>
    </nav>
  );
}

export default NavBar;
