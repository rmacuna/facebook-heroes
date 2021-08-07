import clsx from "clsx";

import { FCButton } from "../types";
import { BaseStyles, IconButtonSizes } from "./IconButton.styles";

export default function IconButton({ children, size, onClick }: FCButton) {
  const classNames = BaseStyles.base + " " + IconButtonSizes[size];

  return (
    <button
      role="button"
      onClick={onClick}
      type="button"
      className={clsx([classNames])}
    >
      {children}
    </button>
  );
}

IconButton.defaultProps = {
  size: "base",
};
