import { TextInput } from "../components/TextInput";
import { ComponentStory } from "@storybook/react";

export default {
  title: "TextInput",
  component: TextInput,
};

const Template: ComponentStory<typeof TextInput> = (args) => (
  <TextInput {...args} />
);

export const TextInputDefault = Template.bind({});
TextInputDefault.args = {
  label: "Text Input",
  id: "text-input",
};
