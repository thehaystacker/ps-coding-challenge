import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Nodata from "./nodata";

describe("Nodata", () => {
  test("should render the component without crashing", () => {
    const { getByTestId } = render(<Nodata />);
    const message = getByTestId("message");

    expect(message).toBeVisible();
  });

  test("should output default message", () => {
    const { getByText } = render(<Nodata />);
    const message = getByText(`Oops! No data found`);

    expect(message).not.toBeNull();
  });

  test("should output the message passed as prop", () => {
    const { getByText } = render(<Nodata message="test message" />);
    const message = getByText(`test message`);

    expect(message).not.toBeNull();
  });

  test("should match the snapshot", () => {
    const { asFragment } = render(<Nodata />);
    expect(asFragment()).toMatchSnapshot();
  });
});
