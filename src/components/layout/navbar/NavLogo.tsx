import React from "react";

import Image from "next/image";

export default function NavLogo() {
  return (
    <Image
      role="img"
      src="/facebook_logo.svg"
      alt="Facebook logo"
      width={189}
      height={66}
    />
  );
}
