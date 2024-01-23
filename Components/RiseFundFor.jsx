import Link from "next/link";
import Image from "next/image";
import React from "react";
import gift from "../public/icons/downarrow.gif";

const RiseFundFor = () => {
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
      <ul>
        <li>
          <h1>Fund</h1>
        </li>
        <li>
          <h2>Get Balance</h2>
        </li>
        <li>
          <h2>Donators</h2>
        </li>
        <li>
          <h2>Withdraw</h2>
        </li>
      </ul>
    </div>
  );
};

export default RiseFundFor;
