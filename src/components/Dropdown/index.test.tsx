import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Dropdown } from ".";

describe("Testing Dropdown component", () => {
  const mockOptions = [
    { name: "First", value: "first" },
    { name: "Second", value: "second" },
  ];
  const onChangeMock = jest.fn();

  it("should render the dropdown properly", () => {
    render(
      <Dropdown
        options={mockOptions}
        onChange={onChangeMock}
        value={{ name: "Second", value: "second" }}
        label="Test Label"
      />
    );
    expect(screen.getByTestId("dropdown-head")).toBeInTheDocument();
    expect(screen.getByText("Test Label")).toBeInTheDocument();
  });

  it("should show/hide when we click on dropdown head", () => {
    render(
      <Dropdown
        options={mockOptions}
        onChange={onChangeMock}
        value={{ name: "Second", value: "second" }}
        label="Test Label"
      />
    );
    expect(screen.queryByTestId("dropdown-list")).not.toBeInTheDocument();
    userEvent.click(screen.getByTestId("dropdown-head"));
    expect(screen.getByTestId("dropdown-list")).toBeInTheDocument();
    userEvent.click(screen.getByTestId("dropdown-head"));
    expect(screen.queryByTestId("dropdown-list")).not.toBeInTheDocument();
  });

  it("should call onChange when change event happens", () => {
    render(
      <Dropdown
        options={mockOptions}
        onChange={onChangeMock}
        value={{ name: "Second", value: "second" }}
        label="Test Label"
      />
    );
    userEvent.click(screen.getByTestId("dropdown-head"));
    userEvent.click(screen.getAllByTestId("dropdown-option")[0]);
    expect(onChangeMock).toBeCalledTimes(1);
  });
});
