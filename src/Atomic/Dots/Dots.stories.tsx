import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Dots } from "./Dots";

export default {
  title: "Atomic/Dots",
  component: Dots,
} as ComponentMeta<typeof Dots>;

const Template: ComponentStory<typeof Dots> = (args) => <Dots {...args} />;

export const Light = Template.bind({});
Light.args = {
  color: "light",
};

export const Dark = Template.bind({});
Dark.args = {
  color: "dark",
};
