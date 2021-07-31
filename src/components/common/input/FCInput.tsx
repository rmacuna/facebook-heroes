import { FCInputProps } from "../types";
import { FCInputBase, FCInputSize } from "./FCInput.theme";

export default function FCInput({
  type,
  placeholder,
  size,
  isDisabled,
  ...props
}: FCInputProps) {
  const classNames = FCInputBase.base + " " + FCInputSize[size];

  return (
    <>
      <input
        className={classNames}
        role="textbox"
        type={type}
        disabled={isDisabled}
        placeholder={placeholder}
        {...props}
      />
    </>
  );
}

FCInput.defaultProps = {
  type: "text",
  placeholder: "Please type something...",
  isDisabled: false,
};
