import Button from "../components/Button";
import { ComponentStory } from "@storybook/react";

export default {
  title: "Button",
  component: Button,
};

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "Primary",
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: "Disabled",
  disabled: true,
};
