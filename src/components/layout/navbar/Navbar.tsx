import { navigationLinks } from "./navbar.constants";
import NavigationList from "./NavigationList";
import NavLanguagePicker from "./NavLanguagePicker";
import NavLogo from "./NavLogo";

export default function Navbar() {
  return (
    <>
      <nav role="navigation" className="pt-4">
        <div className="px-10 mx-auto max-w-7xl xl:max-w-7xl">
          <div className="flex items-center justify-center lg:justify-between">
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
