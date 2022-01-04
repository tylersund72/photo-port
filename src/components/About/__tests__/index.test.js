import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import About from "..";

const { asFragment } = render(<About />);

afterEach(cleanup);

describe("About component", () => {
  //first test
  it("renders", () => {
    render(<About />);
  });

  //second test
  it("matches snapshot DOM note structure", () => {
    // render About
  });
});

expect(asFragment()).toMatchSnapshot();