import { Fragment } from "react";

import { Menu, Transition } from "@headlessui/react";
import {
  ChevronDownIcon,
  TranslateIcon,
  PlusIcon,
} from "@heroicons/react/solid";

import { LANGUAGE_LIST_POPOVER } from "./navbar.constants";

export default function NavLanguagePicker() {
  return (
    <div className="relative w-56 text-right">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-black bg-gray-400 rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-800 focus-visible:ring-opacity-75">
            English
            <ChevronDownIcon
              className="w-5 h-5 ml-2 -mr-1 text-violet-200 hover:text-violet-100"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 w-56 mt-2 bg-white shadow-lg origin-top-right divide-y divide-gray-100 rounded-md ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              {LANGUAGE_LIST_POPOVER.map((elem) => {
                return (
                  <Menu.Item key={elem.name}>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? "bg-blue-500 text-white" : "text-gray-900"
                        } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                      >
                        <TranslateIcon
                          className="w-5 h-5 mr-2"
                          aria-hidden="true"
                        />
                        {elem.name}
                      </button>
                    )}
                  </Menu.Item>
                );
              })}
              <div className="p-1 bg-gray-50">
                <a
                  href=""
                  className="flex justify-center px-2 py-2  transition duration-150 ease-in-out rounded-md hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                >
                  <div className="justify-center w-5 h-5 ">
                    <PlusIcon />
                  </div>
                </a>
              </div>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
