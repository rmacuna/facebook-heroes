/**
 * @jest-environment jsdom
 */
import * as React from "react";

import { render } from "@testing-library/react";

import NavLanguagePicker from "../NavLanguagePicker";

it("should render correctly in the screen", () => {
  const { getByRole } = render(<NavLanguagePicker />);
  const languagePicker = getByRole("combobox");
  expect(languagePicker).toBeInTheDocument();
});
