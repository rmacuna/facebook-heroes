import React from "react";

import Router from "next/router";

import FButton from "components/common/button/FButton";
import FCInput from "components/common/input/FCInput";

export default function PasswordResetCard() {
  return (
    <div className="w-full bg-white border border-gray-200 lg:max-w-xl divide-y-2 lg:border-none lg:shadow-xl rounded-md">
      <div className="pt-4 pb-2 px-7 ">
        <h1 className="text-2xl font-semibold">Find your account</h1>
      </div>
      <div className="pt-4 pb-2 px-7">
        <p className="pb-4 text-gray-800">
          Please enter your email or mobile number to search for your account.
        </p>
        <div className="pb-4">
          <FCInput placeholder="Mobile number" type="tel" />
        </div>
      </div>
      <div className="flex justify-end py-4 px-7">
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
