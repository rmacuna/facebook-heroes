import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import CreateNewAccount from "../components/auth/create-new-account/CreateNewAccount";
import Modal from "../components/common/modal/Modal";
import { useModal } from "../hooks/use-modal";
import Layout from "../components/layout/Layout";
import DailyQuote from "../components/auth/daily-quote/DailyQuote";
import Navbar from "../components/layout/navbar/Navbar";
import WelcomeSection from "../components/auth/welcome/WelcomeSection";
import FButton from "../components/common/button/FButton";

export default function Login() {
  const { modalOpen, toggle } = useModal();

  return (
    <>
      <Modal isOpen={modalOpen} onClose={toggle}>
        <CreateNewAccount />
      </Modal>
      <Layout>
        {/* Navbar */}
        <Navbar />
        {/* Content */}

        <div className="sm:px-14 sm:pt-12 mx-auto xl:max-w-7xl">
          <div className="flex flex-col lg:flex-row lg:justify-between ">
            {/* Welcome Header {Component} */}
            <div className="max-w-lg order-2 lg:order-1">
              <WelcomeSection />
              {/* Recent Login */}
            </div>

            {/* Card of login */}
            <div className="flex flex-col order-1 lg:order-2">
              <section className="lg:max-w-md divide-y-2 w-full border border-gray-200 lg:border-none  bg-white lg:shadow-xl rounded-md">
                {/* Card Login Header And Content */}
                <div className="pt-4 pb-2 px-7">
                  <DailyQuote />
                  {/* Form */}
                  <form className="pb-6">
                    <div className="w-full pb-3">
                      <input
                        type="text"
                        className="h-12 w-full shadow-inner  rounded-lg bg-gray-100 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 p-4"
                        placeholder="Email address"
                      />
                    </div>
                    <div className="w-full">
                      <input
                        type="password"
                        className="h-12 w-full shadow-inner  rounded-lg bg-gray-100 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 p-4"
                        placeholder="Password"
                      />
                    </div>
                  </form>
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
          </div>
        </div>
      </Layout>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        footer
      </footer>
    </>
  );
}
