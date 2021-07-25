import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import CreateNewAccount from "../components/auth/create-new-account/CreateNewAccount";
import Modal from "../components/common/modal/Modal";
import { useModal } from "../hooks/use-modal";
import Layout from "../components/layout/Layout";
import DailyQuote from "../components/auth/daily-quote/DailyQuote";

export default function Login() {
  const { modalOpen, toggle } = useModal();

  return (
    <>
      <Modal isOpen={modalOpen} onClose={toggle}>
        <CreateNewAccount />
      </Modal>
      <Layout>
        <nav className="pt-4 ">
          {/* NavigationBar */}
          <div className="max-w-7xl px-10 mx-auto xl:max-w-7xl">
            <div className="flex justify-center lg:justify-between items-center">
              {/* Primary Navigation */}
              <div className="flex items-center ">
                {/* Facebook logo...*/}
                <div className="pr-5">
                  <Image
                    src="/facebook_logo.svg"
                    alt="facebook_logo"
                    width={189}
                    height={66}
                  />
                </div>

                {/* Navigation list  */}
                <ul role="navigation" className="hidden lg:flex">
                  <li className="text-gray-500 hover:text-gray-900 text-sm pr-8 font-medium  cursor-pointer">
                    Messenger
                  </li>
                  <li className="text-gray-500 hover:text-gray-900 text-sm pr-8 font-medium cursor-pointer">
                    Facebook Lite
                  </li>
                  <li className="text-gray-500 hover:text-gray-900 text-sm pr-8 font-medium cursor-pointer">
                    Whatsapp
                  </li>
                  <li className="text-gray-500 hover:text-gray-900 text-sm pr-8 font-medium cursor-pointer">
                    Instagram
                  </li>
                  <li className="text-gray-500 hover:text-gray-900 text-sm pr-8 font-medium cursor-pointer">
                    Careers
                  </li>
                  <li className="text-gray-500 hover:text-gray-900 text-sm pr-8 font-medium cursor-pointer">
                    Others
                  </li>
                </ul>
              </div>

              {/* Language pick up */}
              <div>
                <div className="flex flex-col items-end">
                  <span className="text-xs text-gray-500">Language</span>
                  <span className="flex cursor-pointer items-center text-black">
                    <div className="pr-3">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.66663 6L7.99996 11.3333L13.3333 6"
                          stroke="black"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    English
                  </span>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <div className="sm:px-14 sm:pt-12 mx-auto xl:max-w-7xl">
          <div className="flex flex-col lg:flex-row lg:justify-between ">
            {/* Welcome Header {Component} */}
            <div className="max-w-lg order-2 lg:order-1">
              <h1 className="text-4xl leading-x36 font-semibold hidden lg:block">
                Facebook helps you <br />
                <span className="text-blue-500">connect and share</span> with
                the people who are part of your life.
              </h1>

              {/* Recent Login */}
              <div className="pt-4 hidden lg:block">
                <span className="text-sm text-gray-500">
                  Click your picture or add your recent account
                </span>
                <div className="pt-2">
                  <ul className="flex m-0">
                    {/* RecentLogin (Value) */}
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
                    {/* RecentLogin (No Value) */}
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
                        <button className="bg-none text-blue-500 hover:underline">
                          Add Account
                        </button>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
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
                    <button
                      role="button"
                      className="bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-600 hover:bg-blue-600 transition-transform active:transform active:scale-95 font-semibold text-lg text-white w-full p-3 rounded-lg"
                    >
                      Log In
                    </button>
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
