"use client";
import { ethers } from "../ethers-5.6.esm.min.js";
import { abi, contractAddress } from "../constants.js";
import Image from "next/image";
import { React, useState, useRef } from "react";
import gift from "../public/icons/downarrow.gif";

const RiseFundFor = () => {
  const [ethAmount, setEthAmount] = useState("");
  const [Logs, setLogs] = useState(""); // State to manage logs

  const handleEthAmountChange = (event) => {
    setEthAmount(event.target.value);
  };

  const LogsRef = useRef(null); // Ref to manage logs element

  // Function to update logs
  const logMessage = (message) => {
    setLogs((prevLogs) => message);
  };

  async function fund() {
    logMessage(`Funding with ${ethAmount}...`);
    if (typeof window.ethereum !== "undefined") {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(contractAddress, abi, signer);
      try {
        const transactionResponse = await contract.fund({
          value: ethers.utils.parseEther(ethAmount),
        });
        await listenForTransactionMine(transactionResponse, provider);
        logMessage(`Funding completed.`);
      } catch (error) {
        logMessage(error.message);
      }
    }
  }

  function listenForTransactionMine(transactionResponse, provider) {
    console.log(`Mining ${transactionResponse.hash}`);
    return new Promise((resolve, reject) => {
      try {
        provider.once(transactionResponse.hash, (transactionReceipt) => {
          console.log(
            `Completed with ${transactionReceipt.confirmations} confirmations. `
          );
          resolve();
        });
      } catch (error) {
        reject(error);
      }
    });
  }

  async function getBalance() {
    if (typeof window.ethereum !== "undefined") {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const balance = await provider.getBalance(contractAddress);
      console.log(ethers.utils.formatEther(balance));
      logMessage(`Balance: ${ethers.utils.formatEther(balance)}`);
    }
  }

  async function donators() {
    logMessage("Fetching the list of Funders...");
    if (typeof window.ethereum !== "undefined") {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(contractAddress, abi, signer);
      try {
        const transactionResponse = await contract.funders();
        await listenForTransactionMine(transactionResponse, provider);
      } catch (error) {
        logMessage(error.message);
      }
    }
  }

  async function withdraw() {
    if (typeof window.ethereum !== "undefined") {
      logMessage("Withdrawing...");
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(contractAddress, abi, signer);
      try {
        const transactionResponse = await contract.withdraw();
        await listenForTransactionMine(transactionResponse, provider);
        logMessage("Withdrawn successfully.");
      } catch (error) {
        logMessage(error.message);
      }
    }
  }

  return (
    <div className="RFFConrainer">
      <div className="gift-container">
        <h2>Read the DApp contract</h2>
        <Image
          src={gift}
          loading="lazy"
          alt="Animated arrow"
          width={22}
          height={22}
        />
      </div>
      <div className="buttons">
        <div>
          <div className="fundRoom">
            <button onClick={fund}>Fund</button>
            <input
              type="text"
              value={ethAmount}
              placeholder="Amount to fund (ETH)"
              onChange={handleEthAmountChange}
            />
          </div>
          <button onClick={getBalance}>Get Balance</button>
          <button onClick={donators}>Donators</button>
          <button onClick={withdraw}>Withdraw</button>
          <div id="Logs" ref={LogsRef}>
            {Logs.split("\n").map((log, index) => (
              <div key={index}>{log}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiseFundFor;
