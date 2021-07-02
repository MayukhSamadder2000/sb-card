import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Image } from "./Image";

export default {
  title: "Atomic/Image",
  component: Image,
} as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = (args) => <Image {...args} />;

export const Light = Template.bind({});
Light.args = {
  bgColor: "light",
};

export const Dark = Template.bind({});

Dark.args = {
  bgColor: "dark",
};
