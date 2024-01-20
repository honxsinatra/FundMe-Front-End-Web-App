import React from "react";
import Nav from "./Nav";
import RiseFundFor from "./RiseFundFor";
import Image from "next/image";
import buku from "../public/images/buku.jpg";
import raiser from "../public/images/raiser.jpg";

const WelcomePage = () => {
  return (
    <div className="welcomeContainer">
      <div className="left-side">
        <div className="fixed">
          <Nav />
          <RiseFundFor />
        </div>
      </div>
      <div className="right-side">
        <div className="right-container">
          <h1>
            Welcome to <span className="fundraiser">FUNDRAISER</span> –
            Empowering Change with Transparency through Blockchain technology!
          </h1>
          <div className="images">
            <Image
              src={buku}
              alt="An old man holding Tshs.1000/="
              loading="lazy"
            />
            <Image
              src={raiser}
              alt="Woman's hand holding dollars"
              loading="lazy"
            />
          </div>
          <p>
            Join us on our mission to make a positive impact together.
            Experience a new era of fundraising where transparency is our
            foundation. Explore how funds are raised and precisely track how
            every contribution is making a difference. We believe in openness,
            accountability, and the power of collective action
          </p>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
