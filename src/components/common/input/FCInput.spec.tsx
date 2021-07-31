/**
 * @jest-environment jsdom
 */

import * as React from "react";
import { render } from "@testing-library/react";
import FCInput from "./FCInput";
import { FCInputBase } from "./FCInput.theme";

it("Should render FCInput", () => {
  const { getByRole } = render(<FCInput />);
  const baseTextInput = getByRole("textbox");
  expect(baseTextInput).toBeInTheDocument();
});

it("Should render FCInput with sm properties", () => {
  const { getByRole } = render(<FCInput size="sm" />);
  const baseTextInput = getByRole("textbox");
  expect(baseTextInput.classList.contains("h-12")).toBeTruthy();
  expect(baseTextInput).toBeInTheDocument();
});
