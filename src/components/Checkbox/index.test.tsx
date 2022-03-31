import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Checkbox } from ".";

describe("Testing checkbox component", () => {
  const onChangeMock = jest.fn();

  it("should render the checkbox", () => {
    render(
      <Checkbox label="test-checkbox" onChange={onChangeMock} checked={false} />
    );
    expect(screen.getByRole("checkbox")).not.toBeChecked();
  });

  it("should call the event handler function on change event happens", () => {
    render(
      <Checkbox label="test-checkbox" onChange={onChangeMock} checked={false} />
    );
    userEvent.click(screen.getByRole("checkbox"));
    expect(onChangeMock).toBeCalled();
  });
});
