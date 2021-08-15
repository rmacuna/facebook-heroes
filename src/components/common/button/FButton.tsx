import { memo } from "react";

import { FCButton } from "../types";
import { BaseButtonStyles, ButtonSize, ButtonType } from "./FButton.theme";

const BaseButton = ({
  isDisabled,
  children,
  type,
  size,
  onClick,
  ...props
}: FCButton) => {
  const classNames =
    BaseButtonStyles.base + " " + ButtonType[type] + " " + ButtonSize[size];

  return (
    <button
      className={classNames}
      disabled={isDisabled}
      type="button"
      role="button"
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

const MemoizedButton = memo(BaseButton);
export default function FButton({ ...props }: FCButton) {
  return <MemoizedButton {...props} />;
}

FButton.defaultProps = {
  isDisabled: false,
  type: "primary",
  size: "md",
};
