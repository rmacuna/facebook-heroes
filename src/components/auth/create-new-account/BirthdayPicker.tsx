import React from "react";

import { QuestionMark } from "components/common/icons";

export default function BirthdayPicker() {
  return (
    <>
      <div className="flex items-center pb-1">
        <h6 className="text-xs font-semibold text-gray-600">Birthday</h6>
        <span className="pl-1 text-sm text-gray-500">
          <QuestionMark />
        </span>
      </div>
    </>
  );
}
