import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

describe("test suite", () =>
  it("renders learn react link", () => {
    expect.hasAssertions();
    const { getByText } = render(<App />);
    const linkElement = getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  }));
