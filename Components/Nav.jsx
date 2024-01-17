import React from "react";
import Image from "next/image";
import appIcon from "../public/icons/favicon.ico";
import homeIcon from "../public/icons/homeicon.png";
import searchIcon from "../public/icons/search.png";

const Nav = () => {
  return (
    <nav className="Nav">
      <ul>
        <li>
          <Image src={appIcon} alt="App icon" height={22} className="appIcon" />
          <a href="#">FundRiser</a>
        </li>
        <li>
          <Image src={homeIcon} alt="Home Icon" className="homeIcon" />
          <a href="#">Home</a>
        </li>
        <li>
          <Image src={searchIcon} alt="Search icon" className="searchIcon" />
          <a href="#">Search</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
