import { shallow } from "enzyme";
import Checkbox from ".";

describe("Testing checkbox component", () => {
  const onChangeMock = jest.fn();
  const wrapper = shallow(
    <Checkbox label="test-checkbox" onChange={onChangeMock} checked />
  );

  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should render the checkbox", () => {
    expect(wrapper).toHaveLength(1);
  });

  it("should call the event handler function on change event happens", () => {
    wrapper.find("input").simulate("change");
    expect(onChangeMock).toBeCalled();
  });

  it("should be having the active css class when the value of checked prop is true", () => {
    expect(wrapper.find("span").hasClass("checkbox__box--active")).toBeTruthy();
  });

  it("shouldn't be having the active css class when the value of checked prop is false", () => {
    const wrapper = shallow(
      <Checkbox label="test-checkbox" onChange={onChangeMock} checked={false} />
    );
    expect(wrapper.find("span").hasClass("checkbox__box--active")).toBeFalsy();
  });

  it("should be having the size small modifier class for default size", () => {
    expect(wrapper.find("span").hasClass("checkbox__box--small")).toBeTruthy();
  });
});
