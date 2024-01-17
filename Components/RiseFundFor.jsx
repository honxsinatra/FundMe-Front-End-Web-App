import Link from "next/link";
import React from "react";

const RiseFundFor = () => {
  return (
    <div className="RFFConrainer">
      <Link href={""} className="howButton">
        How it works
      </Link>
      <section>
        <div>
          <span>Rise fund for</span>
          <i class="fa-solid fa-angle-down"></i>
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
      </section>
    </div>
  );
};

export default RiseFundFor;
