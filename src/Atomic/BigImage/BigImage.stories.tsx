import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { BigImage } from "./BigImage";

export default {
  title: "Atomic/BigImage",
  component: BigImage,
} as ComponentMeta<typeof BigImage>;

const Template: ComponentStory<typeof BigImage> = (args) => (
  <BigImage {...args} />
);

export const Default = Template.bind({});
Default.args = {
  borRad: 20,
};
