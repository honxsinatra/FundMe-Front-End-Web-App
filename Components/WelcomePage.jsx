"use client";

import React, { useEffect } from "react";
import Nav from "./Nav";
import RiseFundFor from "./RiseFundFor";
import Image from "next/image";
import buku from "../public/images/buku.jpg";
import raiser from "../public/images/raiser.jpg";
import metamask from "../public/images/metamask.png";
import { ethers } from "ethers";
import { Web3Provider } from "ethers/providers";
//import { abi, contractAddress } from "../constants.js";

const WelcomePage = () => {
  useEffect(() => {
    const connectButton = document.getElementById("connectButton");
    const connectLogs = document.getElementById("connectLogs");

    connectButton.onclick = connect;

    function logMessage(logType, message) {
      const logElement = document.createElement("div");
      logElement.textContent = message;
      logType.appendChild(logElement);
    }
  });

  // Check if Metamask is installed
  async function connect() {
    if (typeof window.ethereum !== "undefined") {
      // Initialize Metamask provider
      const provider = new ethers.providers.Web3Provider(window.ethereum);

      // Request access to the user's Ethereum account
      await ethereum
        .request({ method: "eth_requestAccounts" })
        .then((accounts) => {
          const userAddress = accounts[0];
          logMessage(
            connectLogs,
            `Connected to Metamask with address: ${userAddress}`
          );

          // You can now use `provider` to interact with the Ethereum blockchain
          // For example, you can use it to send transactions or query contract data.
        })
        .catch((error) => {
          logMessage(connectLogs, "Error connecting to Metamask:" + error);
        });
      connectButton.innerHTML = "Connected";
    } else {
      console.error("Metamask is not installed");
    }
  }
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
          <div className="connect">
            Please connect to Metamask{" "}
            <button id="connectButton">Connect</button>
            <Image src={metamask} alt="metamask icon" />
          </div>
          <div id="connectLogs" class="arrangement"></div>
          <h1>
            Welcome to <span className="fundraiser">FUNDRAISER</span>
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
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
