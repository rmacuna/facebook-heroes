import { ReactChild } from "react";

type Props = {
  children: ReactChild;
};

export default function Dropdown({ children }: Props) {
  return (
    <div
      className="absolute right-0 w-56 mt-12 bg-white shadow-lg origin-top-right rounded-md ring-1 ring-black ring-opacity-5 focus:outline-none"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="menu-button"
      tabIndex={-1}
    >
      <div className="py-1" role="none">
        {children}
      </div>
    </div>
  );
}
