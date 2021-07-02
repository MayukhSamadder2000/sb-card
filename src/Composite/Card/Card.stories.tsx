import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Card } from "./Card";

export default {
  title: "Composite/Card",
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Light = Template.bind({});
Light.args = {
  bgColor: "light",
};

export const Dark = Template.bind({});
Dark.args = {
  bgColor: "dark",
};
