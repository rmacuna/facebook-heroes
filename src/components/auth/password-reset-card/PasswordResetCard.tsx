import React from "react";
import Router from "next/router";
import FButton from "../../common/button/FButton";
import NavLogo from "../../../components/layout/navbar/NavLogo";
import FCInput from "../../common/input/FCInput";

export default function PasswordResetCard() {
  return (
    <div className="lg:max-w-xl divide-y-2 w-full border border-gray-200 lg:border-none  bg-white lg:shadow-xl rounded-md">
      <div className="pt-4 pb-2 px-7 ">
        <h1 className="font-semibold text-2xl">Find your account</h1>
      </div>
      <div className="pt-4 pb-2 px-7">
        <p className="text-gray-800 pb-4">
          Please enter your email or mobile number to search for your account.
        </p>
        <div className="pb-4">
          <FCInput placeholder="Mobile number" type="tel" />
        </div>
      </div>
      <div className="py-4 px-7 flex justify-end">
        <div className="w-3/12 mr-4">
          <FButton onClick={() => Router.back()} type="ghost" size="sm">
            Cancel
          </FButton>
        </div>
        <div className="w-3/12">
          <FButton size="sm">Search</FButton>
        </div>
      </div>
    </div>
  );
}
