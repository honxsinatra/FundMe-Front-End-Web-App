import { ethers } from "./ethers-5.6.esm.min.js";
import { abi, contractAddress } from "./constants.js";

const connectButton = document.getElementById("connectButton");
const fundButton = document.getElementById("fundButton");
const balanceButton = document.getElementById("balanceButton");
const withdrawButton = document.getElementById("withdrawButton");
const fundLogs = document.getElementById("fundLogs");
const withdrawLogs = document.getElementById("withdrawLogs");
const connectLogs = document.getElementById("connectLogs");

withdrawButton.onclick = withdraw;
balanceButton.onclick = getBalance;
connectButton.onclick = connect;
fundButton.onclick = fund;

/*async function connect() {
  if (typeof window.ethereum !== "undefined") {
    await window.ethereum.request({ method: "eth_requestAccounts" });
    connectButton.innerHTML = "Connected";
  } else {
    connectButton.innerHTML = "Please Install MetaMask";
  }
}*/

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
