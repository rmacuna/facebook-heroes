import React from "react";

import Image from "next/image";

import Modal from "components/common/modal/Modal";
import { useModal } from "hooks/use-modal";

import { RecentLoginProps } from "../../common/types";
import QuickAddAccount from "./QuickAddAccount";

type Props = {
  recentLogin?: RecentLoginProps;
};

export default function RecentLogin({ recentLogin }: Props) {
  const { modalOpen, toggle } = useModal();

  if (!recentLogin) {
    return (
      <>
        <Modal isOpen={modalOpen} onClose={toggle}>
          <QuickAddAccount toggle={toggle} />
        </Modal>
        <li onClick={toggle} className="recent-login-card">
          <div className="bg-gray-100 v-center">
            <div className="text-blue-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
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
              className="text-blue-500 bg-none hover:underline"
            >
              Add Account
            </button>
          </div>
        </li>
      </>
    );
  }

  return (
    <>
      <li className="mr-2 border-solid recent-login-card group">
        {/* Badge */}
        <span className="absolute top-0 right-0 z-10 w-6 h-6 -m-2 text-sm text-white rounded-full v-center bg-accent">
          4
        </span>
        <button className="absolute top-0 left-0 z-10 w-6 h-6 m-2 rounded-full transition-colors group-hover:shadow-lg group-hover:bg-white bg-blackTransparent">
          <div className="w-full text-white v-center group-hover:text-black transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
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
          className="object-cover w-full h-48 rounded-lg"
        />

        <div className="v-center">
          <span className="p-2 text-lg font-semibold cursor-pointer">
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
