import React from "react";
import Address from "./Address.js";
import Hero from "./Hero.js";
import NavBar from "./NavBar.js";
import Topbar from "./Topbar.js";

const Header = () => {
  return (
    <div>
      <Topbar />
      <NavBar />
      <Address />
      <Hero />
    </div>
  );
};

export default Header;
