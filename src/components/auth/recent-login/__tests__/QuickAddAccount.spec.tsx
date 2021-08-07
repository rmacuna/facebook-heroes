// Import all the things for react-testing-library
import React from "react";

import { render } from "@testing-library/react";

import QuickAddAccount from "../QuickAddAccount";

it(`Should render a two textfields and a button`, () => {
  const { getByRole } = render(<QuickAddAccount />);
  const quickAddAccount = getByRole(`textbox`, { name: `email-field` });
  expect(quickAddAccount).toBeInTheDocument();
});
