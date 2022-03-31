import { Checkbox } from "../components";
import { ComponentStory } from "@storybook/react";

export default {
  title: "Checkbox",
  component: Checkbox,
};

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  label: "Primary",
  color: "primary",
  checked: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Secondary",
  color: "secondary",
  checked: true,
};

export const Success = Template.bind({});
Success.args = {
  label: "Success",
  color: "success",
  checked: true,
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Small",
  checked: true,
};

export const Medium = Template.bind({});
Medium.args = {
  size: "medium",
  label: "Medium",
  checked: true,
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Large",
  checked: true,
};
