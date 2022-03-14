import { shallow } from "enzyme";
import Heading from ".";

describe("Testing Heading Component", () => {
  const wrapper = shallow(<Heading>Test Head</Heading>);

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should render h1 element as default", () => {
    expect(wrapper.find("h1")).toHaveLength(1);
  });

  it("should render the right varient", () => {
    const wrapper = shallow(<Heading varient="h3">Testing h3</Heading>);
    expect(wrapper.find("h3")).toHaveLength(1);
  });
});
