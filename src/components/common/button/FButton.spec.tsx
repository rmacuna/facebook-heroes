/**
 * @jest-environment jsdom
 */

import * as React from "react";

import { render } from "@testing-library/react";

import FCButton from "./FButton";

describe("When a button without props is displayed", () => {
  it("Should render a primary button without any props", () => {
    const { getByRole } = render(<FCButton>Primary Button</FCButton>);
    const buttonWithChildren = getByRole("button");
    expect(buttonWithChildren).toBeVisible();
    expect(buttonWithChildren).toHaveClass("bg-primary-500");
    expect(buttonWithChildren).toHaveClass("font-semibold");
    expect(buttonWithChildren).toHaveTextContent("Primary Button");
  });
});

describe("When a button is rendered with type secondary", () => {
  it("Should render button with class bg-secondary-500", () => {
    const { getByRole, container } = render(
      <FCButton type="secondary">Secondary Button</FCButton>
    );
    const buttonWithChildren = getByRole("button");
    expect(buttonWithChildren).toBeVisible();
    expect(buttonWithChildren).toHaveTextContent("Secondary Button");
    expect(buttonWithChildren).toHaveClass("bg-secondary-500");
  });
});
