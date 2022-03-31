import { Dropdown } from "../components";
import { ComponentStory } from "@storybook/react";

export default {
  title: "Dropdown",
  component: Dropdown,
};

const Template: ComponentStory<typeof Dropdown> = (args) => (
  <Dropdown {...args} />
);

export const DropdownComponent = Template.bind({});
DropdownComponent.args = {
  label: "Dropdown",
  placeHolder: "Select",
  options: [
    { name: "First", value: "first" },
    { name: "Second", value: "second" },
    { name: "Third", value: "third" },
  ],
};
