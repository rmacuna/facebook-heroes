import Link from "next/link";
import React from "react";
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
        <section className="lg:max-w-md divide-y-2 w-full border border-gray-200 lg:border-none  bg-white lg:shadow-xl rounded-md">
          {/* Card Login Header And Content */}
          <div className="pt-4 pb-2 px-7">
            <DailyQuote />
            {/* Form */}
            <LoginForm />
            <div className="pb-4 w-full">
              {/* Button Component */}
              <FButton>Log In</FButton>
            </div>
            <div className="w-full flex justify-center">
              <Link href="/password-recover">
                <a className="text-blue-500 font-semibold text-sm cursor-pointer hover:text-blue-600 hover:underline">
                  Forgot your password
                </a>
              </Link>
            </div>
          </div>
          <div className="p-6 flex justify-center items-center text-center">
            <button
              onClick={toggle}
              className="bg-secondary-500 focus:outline-none focus:ring-2 focus:ring-green-500 hover:bg-secondary-600 transition-transform active:transform active:scale-95 font-semibold text-lg text-white  p-3 rounded-lg"
            >
              Create New Account
            </button>
          </div>
        </section>
        {/* Create Page For Bussiness Component */}
        <span className="text-sm  lg:max-w-md text-center pt-8 text-gray-800">
          <button
            type="button"
            className="bg-none hover:underline font-semibold "
          >
            Create a Page
          </button>{" "}
          for a celebrity, band or business.
        </span>
      </div>
    </>
  );
}
