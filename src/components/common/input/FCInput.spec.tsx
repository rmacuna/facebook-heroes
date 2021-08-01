/**
 * @jest-environment jsdom
 */

import * as React from "react";

import { render } from "@testing-library/react";

import FCInput from "./FCInput";

it("Should render FCInput", () => {
  const { getByRole } = render(<FCInput />);
  const baseTextInput = getByRole("textbox");
  expect(baseTextInput).toBeInTheDocument();
});

it("Should render FCInput with sm properties", () => {
  const { getByRole } = render(<FCInput inputSize="sm" />);
  const baseTextInput = getByRole("textbox");
  expect(baseTextInput).toHaveClass("h-12");
  expect(baseTextInput).toBeInTheDocument();
});
