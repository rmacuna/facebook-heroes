import React from "react";

import PasswordResetCard from "components/auth/password-reset-card/PasswordResetCard";
import NavLogo from "components/layout/navbar/NavLogo";

export default function PasswordRecover() {
  return (
    <div className="relative h-screen bg-primary-50">
      <div className="flex flex-col items-center justify-center h-full">
        <div className="py-3 -mt-12">
          <NavLogo />
        </div>

        <PasswordResetCard />
      </div>
    </div>
  );
}
