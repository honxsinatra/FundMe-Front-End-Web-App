import Link from "next/link";
import Image from "next/image";
import React from "react";
import gift from "../public/icons/downarrow.gif";

const RiseFundFor = () => {
  return (
    <div className="RFFConrainer">
      <div className="gift-container">
        <h2>Raise fund for</h2>
        <Image
          src={gift}
          loading="lazy"
          alt="Animated arrow"
          width={22}
          height={22}
        />
      </div>
      <ul>
        <li>Charity</li>
        <li>Project</li>
        <li>Event/Party</li>
        <li>DisasterRelief</li>
        <li>SpaceResearch</li>
        <li>MedicalAid</li>
        <li>Other</li>
      </ul>
    </div>
  );
};

export default RiseFundFor;
