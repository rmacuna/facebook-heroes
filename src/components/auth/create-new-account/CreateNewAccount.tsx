import React from "react";

import FadeDiv from "components/common/animated-elements/FadeDiv";
import FCInput from "components/common/input/FCInput";

export default function CreateNewAccount() {
  return (
    <>
      <div className="relative w-full mx-auto my-6 lg:w-4/12 md:max-w-3xl">
        <FadeDiv className="relative flex flex-col w-full bg-white border-0 shadow-lg outline-none divide-y divide-gray-200 dark:divide-darkGray-light rounded-3xl dark:bg-darkGray focus:outline-none">
          <div className="px-4 py-3 border-b">
            <h1 className="text-3xl font-bold">Sign Up</h1>
            <p className="text-sm text-gray-600">It’s quick and easy </p>
          </div>
          <div className="px-4 py-3">
            {/* Input Component */}

            <div className="flex pb-2">
              <FCInput type="text" placeholder="First name" className="mr-3" />
              <FCInput type="text" placeholder="Last name" />
            </div>

            <FCInput
              type="text"
              placeholder="Mobile number of email"
              className="mb-2"
            />
            <FCInput
              type="password"
              placeholder="New password"
              className="mb-2"
            />

            {/* New section: Date of birthday */}

            <div className="flex items-center pb-1">
              <h6 className="text-xs font-semibold text-gray-600">Birthday</h6>
              <span className="pl-1 text-sm text-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
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
            <div className="flex items-center w-full">
              {/* Month Select */}
              <select
                className="flex-auto px-1 py-2 border border-gray-300 rounded-lg"
                name="month-select"
                id="month-select"
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
                className="flex-auto px-1 py-2 mx-2 border border-gray-300 rounded-lg"
                name="day-select"
                id="day-select"
              >
                <option disabled value="">
                  Select a day
                </option>
                {[
                  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
                  19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
                ].map((item, i) => (
                  <option key={Date.now() + i}> {item}</option>
                ))}
              </select>

              {/* Year Select */}
              <select
                className="flex-auto px-1 py-2 border border-gray-300 rounded-lg"
                name=""
                id=""
              >
                <option disabled value="">
                  Select a year
                </option>
                {/* Map the last 80 years and render a option tag */}
                {[...Array(80)].map((_, index) => (
                  <option key={Date.now() + index}> {index + 1970}</option>
                ))}
              </select>
            </div>

            {/* New section: Select Gender */}

            <div className="flex flex-col pt-2">
              <div className="flex items-center pb-1 ">
                <h6 className="text-xs font-semibold text-gray-600">Gender</h6>
                <span className="pl-1 text-sm text-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
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
              <div className="flex items-center w-full">
                {/* Create a Radio Button component (Male) */}
                <div className="flex items-center justify-between flex-auto px-1 py-2 border border-gray-300 rounded-lg">
                  <span>Male</span>
                  <input name="gender" type="radio" value="male" />
                </div>
                {/* Create a Radio Button component (Female) */}
                <div className="flex items-center justify-between flex-auto px-1 py-2 mx-2 border border-gray-300 rounded-lg">
                  <span>Female</span>
                  <input name="gender" type="radio" value="female" />
                </div>
                {/* Create a Radio Button component (Custom) */}
                <div className="flex items-center justify-between flex-auto px-1 py-2 border border-gray-300 rounded-lg">
                  <span>Custom</span>
                  <input name="gender" type="radio" value="custom" />
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
              <div className="flex justify-center pt-6">
                <button className="w-full p-3 text-white button focus:ring-green-800 bg-secondary-500 hover:bg-secondary-700">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </FadeDiv>
      </div>
    </>
  );
}
