"use client";
import Nav from "./Nav";
import RiseFundFor from "./RiseFundFor.jsx";
import Image from "next/image";
import buku from "../public/images/buku.jpg";
import raiser from "../public/images/raiser.jpg";
import metamask from "../public/images/metamask.png";
import "@rainbow-me/rainbowkit/styles.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { http, createConfig, WagmiProvider } from "wagmi";
import { sepolia, goerli, polygonMumbai } from "wagmi/chains";
import { CustomConnectButton } from "./CustomConnectButton";
import { injected, safe, walletConnect } from "wagmi/connectors";
//import { abi, contractAddress } from "../constants.js";

const WelcomePage = () => {
  const projectId = process.env.PROJECT_ID;

  const queryClient = new QueryClient();

  const config = createConfig({
    chains: [sepolia, goerli, polygonMumbai],
    connectors: [
      injected({ target: "metaMask" }),
      walletConnect({ projectId }),
      safe(),
    ],
    transports: {
      [sepolia.id]: http("https://eth-sepolia.g.alchemy.com/v2/demo"),
      [goerli.id]: http("https://eth-goerli.g.alchemy.com/v2/demo"),
      [polygonMumbai.id]: http("https://polygon-mumbai.g.alchemy.com/v2/demo"),
    },
  });

  /*const { connectors } = getDefaultWallets({
    appName: "FundRaiser DApp",
    projectId: "process.env.PROJECT_ID",
    chains,
  });
  const wagmiConfig = createConfig({
    autoConnect: true,
    connectors,
    publicClient,
  });*/

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider coolMode chains={chains}>
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
                  Please connect to Metamask <CustomConnectButton />
                  <Image src={metamask} alt="metamask icon" />
                </div>
                <div id="connectLogs" className="arrangement"></div>
                <h1>
                  Welcome to <span className="fundraiser">FUNDRAISER</span>
                  Empowering Change with Transparency through Blockchain
                  technology!
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
                  fundraising, emphasizing openness, accountability, and the
                  power of collective action. Use this platform to raise funds,
                  establishing trust with donors through transparent
                  transactions. As a donor, you can track how your contribution
                  has been utilized.
                </p>
              </div>
            </div>
          </div>{" "}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};

export default WelcomePage;
