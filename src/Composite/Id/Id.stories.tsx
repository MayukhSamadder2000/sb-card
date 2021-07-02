import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { ID } from "./Id";

export default {
  title: "Composite/Id",
  component: ID,
} as ComponentMeta<typeof ID>;

const Template: ComponentStory<typeof ID> = (args) => <ID {...args} />;

export const Default = Template.bind({});

Default.args = {
  wdt: 90,
  bg: "light",
};
