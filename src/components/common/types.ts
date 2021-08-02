import {
  DetailedHTMLProps,
  InputHTMLAttributes,
  PropsWithChildren,
} from "react";

export interface ModalProps {
  /** Show or hide modal */
  isOpen: boolean;
  /** Event on close the modal */
  onClose: () => void;
  /** Content of the modal  */
  children: React.ReactNode;
}

export interface NavigationItemProps {
  /** Title of the navigation item */
  title: string;
  /** Id of the navigation item */
  id: string;
  /** Path of the navigation item */
  path?: string;
}

export interface RecentLoginProps {
  /** Name of the login */
  name: string;
  /** Date of the login */
  date: string;
  /** Src of the profile image */
  src: string;
}

interface Disabable {
  /** If the component state is disabled */
  isDisabled?: boolean;
}

interface FCButtonProps extends Disabable {
  /**Type of the style in the button*/
  type?: "primary" | "secondary" | "ghost";
  /** Text color of the button */
  size?: "sm" | "md";

  onClick?();
}

export interface FCButton extends PropsWithChildren<FCButtonProps> {}

type BaseInputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;
export interface FCInputProps extends Disabable, BaseInputProps {
  // type?: string;
  // placeholder?: string;
  inputSize?: "sm" | "md";
}
