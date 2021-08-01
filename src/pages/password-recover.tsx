import React from "react";
import PasswordResetCard from "../components/auth/password-reset-card/PasswordResetCard";
import NavLogo from "../components/layout/navbar/NavLogo";

export default function PasswordRecover() {
  return (
    <div className="bg-primary-50 h-screen relative">
      <div className="h-full flex flex-col items-center justify-center ">
        <div className="py-3 -mt-12">
          <NavLogo />
        </div>

        <PasswordResetCard />
      </div>
    </div>
  );
}
