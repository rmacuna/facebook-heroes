import React from "react";

import { NavigationItemProps } from "../../common/types";
import NavigationItem from "./NavigationItem";
import NavMoreItem from "./NavMoreItem";

type Props = {
  navigationLinks: NavigationItemProps[];
};
export default function NavigationList({ navigationLinks }: Props) {
  return (
    <ul role="list" className="hidden lg:flex">
      {navigationLinks.map(({ id, path, title }) => {
        if (id === "nav_more") return <NavMoreItem key={id} />;
        return <NavigationItem key={id} value={title} path={path} />;
      })}
    </ul>
  );
}
