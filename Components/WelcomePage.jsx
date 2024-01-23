"use client";

import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import RiseFundFor from "./RiseFundFor";
import Image from "next/image";
import buku from "../public/images/buku.jpg";
import raiser from "../public/images/raiser.jpg";

const WelcomePage = () => {
  const statements = [
    "Your Blockchain-Powered Decentralized Application",
    "Want to raise funds?",
    "Here is your solution",
  ];

  const [currentStatement, setCurrentStatement] = useState(0);
  const [currentText, setCurrentText] = useState("");

  useEffect(() => {
    if (currentStatement < statements.length) {
      const intervalId = setInterval(() => {
        const text = statements[currentStatement].substring(
          0,
          currentText.length + 1
        );
        setCurrentText(text);

        if (text === statements[currentStatement]) {
          clearInterval(intervalId);

          // Move to the next statement after a delay
          setTimeout(() => {
            setCurrentStatement(currentStatement + 1);
            setCurrentText("");
          }, 1000);
        }
      }, 100);

      return () => clearInterval(intervalId);
    }
  }, [currentStatement, currentText, statements]);

  return (
    <div className="welcomeContainer">
      <div className="left-side">
        <div className="fixed">
          <Nav />
          <RiseFundFor />
          <footer>&copy; 2024 Hongoa. All Rights Reserved.</footer>
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
            Join our mission for positive impact through transparent
            fundraising, emphasizing openness, accountability, and the power of
            collective action. Use this platform to raise funds, establishing
            trust with donors through transparent transactions. As a donor, you
            can track how your contribution has been utilized.
          </p>
          <div className="typing-container">
            <div className="typing-text">
              {currentText}
              <span className="blink">|</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
