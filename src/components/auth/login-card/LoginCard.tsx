import React from "react";

import Link from "next/link";

import { useModal } from "../../../hooks/use-modal";
import FButton from "../../common/button/FButton";
import Modal from "../../common/modal/Modal";
import CreateNewAccount from "../create-new-account/CreateNewAccount";
import DailyQuote from "../daily-quote/DailyQuote";
import LoginForm from "./LoginForm";

export default function LoginCard() {
  const { modalOpen, toggle } = useModal();
  return (
    <>
      <Modal isOpen={modalOpen} onClose={toggle}>
        <CreateNewAccount />
      </Modal>
      <div className="flex flex-col order-1 lg:order-2">
        <section className="w-full bg-white border border-gray-200 lg:max-w-md divide-y-2 lg:border-none lg:shadow-xl rounded-md">
          {/* Card Login Header And Content */}
          <div className="pt-4 pb-2 px-7">
            <DailyQuote />
            {/* Form */}
            <LoginForm />
            <div className="w-full pb-4">
              {/* Button Component */}
              <FButton>Log In</FButton>
            </div>
            <div className="flex justify-center w-full">
              <Link href="/password-recover">
                <a className="text-sm font-semibold text-blue-500 cursor-pointer hover:text-blue-600 hover:underline">
                  Forgot your password
                </a>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center p-6 text-center">
            <button
              onClick={toggle}
              className="p-3 text-lg font-semibold text-white rounded-lg bg-secondary-500 focus:outline-none focus:ring-2 focus:ring-green-500 hover:bg-secondary-600 transition-transform active:transform active:scale-95"
            >
              Create New Account
            </button>
          </div>
        </section>
        {/* Create Page For Bussiness Component */}
        <span className="pt-8 text-sm text-center text-gray-800 lg:max-w-md">
          <button
            type="button"
            className="font-semibold bg-none hover:underline"
          >
            Create a Page
          </button>{" "}
          for a celebrity, band or business.
        </span>
      </div>
    </>
  );
}
