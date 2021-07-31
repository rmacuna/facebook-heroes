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
    expect(
      buttonWithChildren.classList.contains("bg-primary-500")
    ).toBeTruthy();
    expect(buttonWithChildren.textContent).toBe("Primary Button");
  });
});

describe("When a button is rendered with type secondary", () => {
  it("Should render button with class bg-secondary-500", () => {
    const { getByRole, container } = render(
      <FCButton type="secondary">Secondary Button</FCButton>
    );
    const buttonWithChildren = getByRole("button");
    expect(buttonWithChildren).toBeVisible();
    expect(buttonWithChildren.textContent).toBe("Secondary Button");
    expect(
      buttonWithChildren.classList.contains("bg-secondary-500")
    ).toBeTruthy();
  });
});
