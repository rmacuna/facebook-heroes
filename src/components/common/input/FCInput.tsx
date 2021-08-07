import clsx from "clsx";

import { FCInputProps } from "../types";
import { FCInputBase, FCInputSize } from "./FCInput.theme";

export default function FCInput({
  type,
  placeholder,
  inputSize,
  isDisabled,
  className,
  ...props
}: FCInputProps) {
  const classNames = FCInputBase.base + " " + FCInputSize[inputSize];

  return (
    <>
      <input
        role="textbox"
        type={type}
        disabled={isDisabled}
        placeholder={placeholder}
        className={clsx([classNames, className])}
        {...props}
      />
    </>
  );
}

FCInput.defaultProps = {
  type: "text",
  placeholder: "Please type something...",
  isDisabled: false,
  inputSize: "md",
};
