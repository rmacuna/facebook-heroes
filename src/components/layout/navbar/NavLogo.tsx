import React from "react";
import Image from "next/image";

export default function NavLogo() {
  return (
    <div className="pr-5">
      <Image
        role="img"
        src="/facebook_logo.svg"
        alt="facebook_logo"
        width={189}
        height={66}
      />
    </div>
  );
}
