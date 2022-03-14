import { shallow } from "enzyme";
import Input from ".";

describe("Testing input component", () => {
  const onChangeFunction = jest.fn();
  const wrapper = shallow(<Input id="test" onChange={onChangeFunction} />);

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should render the input component", () => {
    expect(wrapper).toHaveLength(1);
  });

  it("should call the given function on onChange event happens", () => {
    wrapper.find("#test").simulate("change");
    expect(onChangeFunction).toBeCalled();
  });

  it("should render error message when error is set", () => {
    const wrapper2 = shallow(
      <Input id="test" onChange={onChangeFunction} error errorMessage="Error" />
    );
    expect(wrapper2.find("p").text()).toEqual("Error");
  });
});
