import React from "react";
import Image from "next/image";
import RecentLoginList from "../recent-login/RecentLoginList";
import { recentLogins } from "../../../fake-data/fake";

export default function WelcomeSection() {
  return (
    <>
      <h1 role="heading" className="text-4xl hidden lg:block font-semibold">
        Facebook helps you <br />
        <span className="text-blue-500">connect and share</span> with the people
        who are part of your life.
      </h1>

      <div className="pt-4 hidden lg:block">
        <span className="text-sm text-gray-500">
          Click your picture or add your recent account
        </span>
        <div className="pt-2">
          <RecentLoginList recentLoginList={recentLogins} />
        </div>
      </div>
    </>
  );
}
