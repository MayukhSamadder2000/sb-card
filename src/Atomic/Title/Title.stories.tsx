import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Title } from "./Title";

export default {
  title: "Atomic/Title",
  component: Title,
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = (args) => <Title {...args} />;

export const Light = Template.bind({});
Light.args = {
  color: "white",
  text: "Light",
};

export const Dark = Template.bind({});
Dark.args = {
  color: "black",
  text: "Dark",
};
