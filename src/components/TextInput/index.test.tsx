import { render, screen, fireEvent } from "@testing-library/react";
import { TextInput } from ".";

describe("Testing input component", () => {
  const onChangeFunction = jest.fn();

  it("should render the input component", () => {
    render(
      <TextInput label="Test label" id="test" onChange={onChangeFunction} />
    );
    expect(screen.getByLabelText("Test label")).toBeInTheDocument();
  });

  it("should call the given function on onChange event happens", () => {
    render(
      <TextInput label="Test label" id="test" onChange={onChangeFunction} />
    );
    fireEvent.change(screen.getByRole("textbox"), { target: { value: "a" } });
    expect(onChangeFunction).toBeCalled();
  });

  it("should render error message when error is set", () => {
    render(
      <TextInput
        id="test"
        onChange={onChangeFunction}
        error
        errorMessage="Error"
      />
    );
    expect(screen.getByText("Error")).toBeInTheDocument();
  });
});
