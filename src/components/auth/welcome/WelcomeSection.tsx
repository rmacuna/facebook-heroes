import React from "react";

import { recentLogins } from "../../../fake-data/fake";
import RecentLoginList from "../recent-login/RecentLoginList";

export default function WelcomeSection() {
  return (
    <>
      <h1 role="heading" className="hidden text-4xl font-semibold lg:block">
        Facebook helps you <br />
        <span className="text-blue-500">connect and share</span> with the people
        who are part of your life.
      </h1>

      <div className="hidden pt-4 lg:block">
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
