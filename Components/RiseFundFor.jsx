import Link from "next/link";
import Image from "next/image";
import React from "react";
import gift from "../public/icons/downarrow.gif";

const RiseFundFor = () => {
  function logMessage(logType, message) {
    const logElement = document.createElement("div");
    logElement.textContent = message;
    logType.appendChild(logElement);
  }

  async function fund() {
    const ethAmount = document.getElementById("ethAmount").value;
    logMessage(fundLogs, `Funding with ${ethAmount}...`);
    if (typeof window.ethereum !== "undefined") {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(contractAddress, abi, signer);
      try {
        const transactionResponse = await contract.fund({
          value: ethers.utils.parseEther(ethAmount),
        });
        await listenForTransactionMine(transactionResponse, provider);
        logMessage(fundLogs, `Funding completed.`);
      } catch (error) {
        logMessage(fundLogs, error);
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

      try {
        const balanceDisplay = document.getElementById("balanceDisplay");
        balanceDisplay.textContent = `Balance: ${balance}`;
      } catch (error) {
        console.error("Error fetching balance:", error);
      }
    }
  }
  async function withdraw() {
    if (typeof window.ethereum !== "undefined") {
      logMessage(withdrawLogs, "Withdrawing...");
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(contractAddress, abi, signer);
      try {
        const transactionResponse = await contract.withdraw();
        await listenForTransactionMine(transactionResponse, provider);
        logMessage(withdrawLogs, "Withdrawn successfully.");
      } catch (error) {
        logMessage(withdrawLogs, error);
      }
    }
  }

  return (
    <div className="RFFConrainer">
      <div className="gift-container">
        <h2>Read the DApp conract</h2>
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
          <button onClick={fund}>Fund</button>

          <button>Get Balance</button>

          <button>Donators</button>

          <button>Withdraw</button>
        </div>
      </div>
    </div>
  );
};

export default RiseFundFor;
