// should we use button color instead of button type
// Button types could be something like filled, outlined, text....
// color could be something like primary, secondary, success, warning, danger, light, dark, etc.
// todo: Create correct variants..

export const ButtonType = {
  primary: "bg-primary-500 focus:ring-blue-600 hover:bg-primary-600 text-white",
  secondary:
    "bg-secondary-500 focus:ring-green-500 hover:bg-secondary-600 text-white",
  ghost: "bg-gray-200 focus:ring-gray-500 hover:bg-gray-300 text-gray-900",
  text: "bg-none hover:bg-primary-200 text-blue-500 focus:ring-blue-200 ",
};

// export const ButtonColor = {
//   primary_filled: "bg-primary-500 focus:ring-blue-600 text-white",
//   primary_text: "bg",
// }

export const ButtonSize = {
  md: "text-lg px-3 py-3",
  sm: "py-2 px-2",
};

export const BaseButtonStyles = {
  base: "rounded-lg font-semibold w-full disabled:bg-gray-300 disabled:text-gray-800 transition-all  active:transform active:scale-95 focus:outline-none focus:ring-2",
};
