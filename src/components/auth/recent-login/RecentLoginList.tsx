import React from "react";

import { RecentLoginProps } from "../../common/types";
import RecentLogin from "./RecentLogin";

type Props = {
  recentLoginList: RecentLoginProps[];
};
export default function RecentLoginList({ recentLoginList }: Props) {
  return (
    <ul className="flex m-0" role="listitem">
      {recentLoginList.map((recentLogin) => (
        <RecentLogin key={recentLogin.date} recentLogin={recentLogin} />
      ))}
      <RecentLogin />
    </ul>
  );
}
RecentLoginList.defaultProps = {
  recentLoginList: [],
};
