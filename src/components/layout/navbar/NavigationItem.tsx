import React from "react";

type Props = {
  value: string;
};

export default function NavigationItem({ value }: Props) {
  return (
    <>
      <li role="listitem" className="navigation-item">
        {value}
      </li>
    </>
  );
}
