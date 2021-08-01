import React from "react";
import { NavigationItemProps } from "../../common/types";
import NavigationList from "./NavigationList";
import NavLanguagePicker from "./NavLanguagePicker";
import NavLogo from "./NavLogo";

const navigationLinks = [
  {
    id: "nav_messenger",
    title: "Messenger",
  },
  {
    id: "nav_fb_lite",
    title: "Facebook Lite",
  },
  {
    id: "nav_whatsapp",
    title: "WhatsApp",
  },
  {
    id: "nav_instagram",
    title: "Instagram",
  },
  {
    id: "nav_careers",
    title: "Careers",
  },
  {
    id: "nav_more",
    title: "More",
  },
] as NavigationItemProps[];

export default function Navbar() {
  return (
    <>
      <nav role="navigation" className="pt-4">
        <div className="max-w-7xl px-10 mx-auto xl:max-w-7xl">
          <div className="flex justify-center lg:justify-between items-center">
            <div className="flex items-center">
              <div className="pr-5">
                <NavLogo />
              </div>
              <NavigationList navigationLinks={navigationLinks} />
            </div>
            <NavLanguagePicker />
          </div>
        </div>
      </nav>
    </>
  );
}
