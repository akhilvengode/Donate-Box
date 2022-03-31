import { Button } from ".";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Testing Button component", () => {
  const onClickMock = jest.fn();

  it("should render the button correctly", () => {
    render(
      <Button type="button" onClick={onClickMock}>
        Hello
      </Button>
    );
    expect(screen.getByRole("button")).toHaveTextContent(/hello/i);
  });

  it("should call the function when clicked", () => {
    render(
      <Button type="button" onClick={onClickMock}>
        Hello
      </Button>
    );
    userEvent.click(screen.getByRole("button"));
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
