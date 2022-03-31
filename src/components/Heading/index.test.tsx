import { render, screen } from "@testing-library/react";
import { Heading } from ".";

describe("Testing Heading Component", () => {
  it("should render h1 with the given text", () => {
    render(<Heading>Test Head</Heading>);
    expect(screen.getByRole("heading")).toHaveTextContent(/test head/i);
  });
});
