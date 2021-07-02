import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { Subtitle } from "./Subtitle";

export default {
  title: "Atomic/Subtitle",
  component: Subtitle,
} as ComponentMeta<typeof Subtitle>;

const Template: ComponentStory<typeof Subtitle> = (args) => (
  <Subtitle {...args} />
);

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
