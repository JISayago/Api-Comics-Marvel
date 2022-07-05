import React from 'react';
import "./css/navbar.css";
import NavbarTop from "./NavbarTop.jsx"
import NavbarBottom from "./NavbarBottom.jsx"

function Navbar() {
  return (
      <nav>
        <NavbarTop/>
        <NavbarBottom/>
    </nav>
  )
}
export default Navbar;