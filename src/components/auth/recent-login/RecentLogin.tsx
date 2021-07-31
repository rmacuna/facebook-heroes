import React from "react";
import Image from "next/image";
import { RecentLoginProps } from "../../common/types";

type Props = {
  recentLogin?: RecentLoginProps;
};

export default function RecentLogin({ recentLogin }: Props) {
  if (!recentLogin) {
    return (
      <li className="recent-login-card">
        <div className="bg-gray-100 v-center">
          <div className="text-blue-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
        <div className="v-center">
          <button
            role="button"
            className="bg-none text-blue-500 hover:underline"
          >
            Add Account
          </button>
        </div>
      </li>
    );
  }

  return (
    <>
      <li className="recent-login-card mr-2 border-solid group">
        {/* Badge */}
        <span className="text-white -m-2 absolute right-0 top-0 z-10 rounded-full w-6 h-6 v-center bg-accent text-sm">
          4
        </span>
        <button className="absolute z-10  transition-colors group-hover:shadow-lg group-hover:bg-white left-0 top-0 m-2 w-6 h-6   rounded-full bg-blackTransparent">
          <div className="w-full v-center group-hover:text-black text-white transition-colors ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </button>

        <Image
          src="/captainAmerica.jpeg"
          alt="Capitan América"
          width="200"
          height="200"
          className="object-cover h-48 w-full rounded-lg"
        />

        <div className="v-center">
          <span className=" text-lg p-2 font-semibold cursor-pointer">
            Steve Rogers
          </span>
        </div>
      </li>
    </>
  );
}

RecentLogin.defaultProps = {
  recentLogin: undefined,
};
