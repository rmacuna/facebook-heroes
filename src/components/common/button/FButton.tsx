import React from "react";
import { FCButton } from "../types";
import { BaseButton, ButtonSize, ButtonType } from "./FButton.theme";

export default function FButton({
  isDisabled,
  children,
  type,
  size,
}: FCButton) {
  const classNames =
    BaseButton.base + " " + ButtonType[type] + " " + ButtonSize[size];

  return (
    <button
      className={classNames}
      disabled={isDisabled}
      type="button"
      role="button"
    >
      {children}
    </button>
  );
}

FButton.defaultProps = {
  isDisabled: false,
  type: "primary",
  size: "md",
};
