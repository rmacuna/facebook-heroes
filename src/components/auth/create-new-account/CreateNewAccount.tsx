import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function CreateNewAccount(props: Props) {
  return (
    <>
      <div className="relative w-full lg:w-4/12 my-6 mx-auto md:max-w-3xl ">
        <motion.div className="border-0 divide-y divide-gray-200 dark:divide-darkGray-light rounded-3xl shadow-lg relative flex flex-col w-full bg-white dark:bg-darkGray outline-none  focus:outline-none">
          <div className="py-3 px-4  border-b">
            <h1 className="text-3xl font-bold">Sign Up</h1>
            <p className="text-sm text-gray-600">It’s quick and easy </p>
          </div>
          <div className="py-3 px-4">
            {/* Input Component */}

            <div className="flex pb-2">
              <input
                type="text"
                placeholder="First name"
                className="py-2 px-4 mr-3 border border-gray-300 bg-gray-100 w-full rounded-lg"
              />

              <input
                type="text"
                placeholder="Last name"
                className="py-2 px-4 border border-gray-300 bg-gray-100 w-full rounded-lg"
              />
            </div>

            <input
              type="email"
              placeholder="Mobile number of email"
              className="py-2 px-4 mr-3 mb-2 border border-gray-300 bg-gray-100 w-full rounded-lg"
            />

            <input
              type="password"
              placeholder="New password"
              className="py-2 px-4 mr-3 mb-3  border border-gray-300 bg-gray-100 w-full rounded-lg"
            />

            {/* New section: Date of birthday */}

            <div className="flex items-center pb-1">
              <h6 className="text-gray-600 font-semibold text-xs">Birthday</h6>
              <span className="text-gray-500 text-sm pl-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </div>
            <div className="flex w-full items-center">
              {/* Month Select */}
              <select
                className="border flex-auto  border-gray-300 px-1 py-2 rounded-lg"
                name=""
                id=""
              >
                <option disabled value="">
                  Select a month
                </option>
                <option>January</option>
                <option>February</option>
                <option>March</option>
                <option>Abril</option>
                <option>May</option>
                <option>June</option>
                <option>July</option>
                <option>August</option>
                <option>September</option>
                <option>October</option>
                <option>November</option>
                <option>December</option>
              </select>

              {/* Day Select */}
              <select
                className="border mx-2 flex-auto  border-gray-300 px-1 py-2 rounded-lg"
                name=""
                id=""
              >
                <option disabled value="">
                  Select a day
                </option>
                {[
                  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
                  19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
                ].map((item) => (
                  <option key={Date.now()}> {item}</option>
                ))}
              </select>

              {/* Year Select */}
              <select
                className="border flex-auto  border-gray-300 px-1 py-2 rounded-lg"
                name=""
                id=""
              >
                <option disabled value="">
                  Select a year
                </option>
                {/* Map the last 80 years and render a option tag */}
                {[...Array(80)].map((item, index) => (
                  <option key={Date.now() + index}> {index + 1970}</option>
                ))}
              </select>
            </div>

            {/* New section: Select Gender */}

            <div className="pt-2 flex flex-col">
              <div className="flex items-center pb-1 ">
                <h6 className="text-gray-600 font-semibold text-xs">Gender</h6>
                <span className="text-gray-500 text-sm pl-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </div>

              {/* Gender seleccion */}
              <div className="flex w-full items-center">
                {/* Create a Radio Button component (Male) */}
                <div className="flex-auto flex justify-between items-center border border-gray-300 rounded-lg px-1 py-2">
                  <span>Male</span>
                  <input type="radio" />
                </div>
                {/* Create a Radio Button component (Female) */}
                <div className="flex-auto mx-2 flex justify-between items-center border border-gray-300 rounded-lg px-1 py-2">
                  <span>Female</span>
                  <input type="radio" />
                </div>
                {/* Create a Radio Button component (Custom) */}
                <div className="flex-auto flex justify-between items-center border border-gray-300 rounded-lg px-1 py-2">
                  <span>Custom</span>
                  <input type="radio" />
                </div>
              </div>

              <div className="pt-4">
                <p className="text-xs text-gray-500">
                  By clicking Sign Up, you agree to our{" "}
                  <a className="link" href="#">
                    Terms
                  </a>
                  ,{" "}
                  <a className="link" href="#">
                    Data Policy
                  </a>{" "}
                  and{" "}
                  <a className="link" href="#">
                    Cookies Policy.
                  </a>{" "}
                  You may receive SMS Notifications from us and can opt out any
                  time.
                </p>
              </div>

              {/* Sign up button */}
              <div className="pt-6 flex justify-center">
                <button className="button p-3 w-full focus:ring-green-800 bg-secondary-500 hover:bg-secondary-700 text-white">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
