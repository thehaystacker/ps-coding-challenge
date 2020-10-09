import React from "react";
import "@testing-library/jest-dom";
import { render, within } from "@testing-library/react";
import Badge from "./index";

describe("Badge", () => {
  test("should render the component without crashing", () => {
    const { getByTestId } = render(<Badge></Badge>);
    const message = getByTestId("badge");

    expect(message).toBeVisible();
  });

  test("should render the badge text", () => {
    const { getByTestId } = render(<Badge>2016</Badge>);
    const { getByText } = within(getByTestId("badge"));
    const message = getByText(`2016`);

    expect(message).toBeInTheDocument();
  });

  test("should match the snapshot", () => {
    const { asFragment } = render(<Badge>2016</Badge>);
    expect(asFragment()).toMatchSnapshot();
  });
});
