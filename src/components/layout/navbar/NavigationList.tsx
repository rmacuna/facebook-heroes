import React from "react";
import { NavigationItemProps } from "../../common/types";
import NavigationItem from "./NavigationItem";

type Props = {
  navigationLinks: NavigationItemProps[];
};
export default function NavigationList({ navigationLinks }: Props) {
  return (
    <ul role="list" className="hidden lg:flex">
      {navigationLinks.map(({ id, title }) => (
        <NavigationItem key={id} value={title} />
      ))}
    </ul>
  );
}
