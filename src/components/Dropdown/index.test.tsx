import { shallow } from "enzyme";
import Dropdown from ".";

describe("Testing Dropdown component", () => {
  const mockOptions = [
    { name: "First", value: "first" },
    { name: "Second", value: "second" },
  ];
  const onChangeMock = jest.fn();
  const wrapper = shallow(
    <Dropdown
      options={mockOptions}
      onChange={onChangeMock}
      value={{ name: "Second", value: "second" }}
      label="Test Label"
    />
  );

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should render the dropdown properly", () => {
    expect(wrapper).toHaveLength(1);
  });

  it("should show/hide when we click on dropdown head", () => {
    expect(wrapper.find("#dropdown-list")).toHaveLength(0);
    wrapper.find("#dropdown-head").simulate("click");
    expect(wrapper.find("#dropdown-list")).toHaveLength(1);
    wrapper.find("#dropdown-head").simulate("click");
    expect(wrapper.find("#dropdown-list")).toHaveLength(0);
  });

  it("should call onChange when change event happens", () => {
    wrapper.find("#dropdown-head").simulate("click");
    wrapper.find(".dropdown__option").at(0).simulate("click");
    expect(onChangeMock).toBeCalledTimes(1);
  });
});
