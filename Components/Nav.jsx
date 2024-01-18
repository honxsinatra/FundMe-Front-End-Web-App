import React from "react";
import Link from "next/link";
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
          <Link href="#">FundRaiser</Link>
        </li>
        <li>
          <Image src={homeIcon} alt="Home Icon" className="homeIcon" />
          <Link href="#">Home</Link>
        </li>
        <li>
          <Image src={searchIcon} alt="Search icon" className="searchIcon" />
          <Link href="#">Search</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
