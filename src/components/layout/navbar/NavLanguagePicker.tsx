import React from "react";

export default function NavLanguagePicker() {
  return (
    <div role="combobox" className="flex flex-col items-end">
      <span className="text-xs text-gray-500">Language</span>
      <span className="flex items-center text-black cursor-pointer">
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
  );
}
