import React from "react";

const Nav = () => {
  return (
    <nav className="Nav">
      <ul className="ul-main">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Mechanism</a>
        </li>
        <li>
          <a href="#">
            Rise Funds For
            <ul>
              <li>
                <a href="#">Charity</a>
              </li>
              <li>
                <a href="#">Group Goals</a>
              </li>
              <li>
                <a href="#">Event</a>
              </li>
              <li>
                <a href="#">Party</a>
              </li>
              <li>
                <a href="#">Project</a>
              </li>
              <li>
                <a href="#">Crisis Relief</a>
              </li>
              <li>
                <a href="#">Other</a>
              </li>
            </ul>
          </a>
        </li>
        <li>Sign In</li>
        <li>Register</li>
      </ul>
    </nav>
  );
};

export default Nav;
