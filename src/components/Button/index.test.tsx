import MyButton from ".";
import { shallow } from "enzyme";

describe("Testing Button component", () => {
  const onClickMock = jest.fn();
  const wrapper = shallow(
    <MyButton id="test" type="button" onClick={onClickMock}>
      Hello
    </MyButton>
  );

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should render the button correctly", () => {
    expect(wrapper).toHaveLength(1);
  });

  it("should call the function when clicked", () => {
    wrapper.simulate("click");
    expect(onClickMock).toBeCalled();
  });
});
