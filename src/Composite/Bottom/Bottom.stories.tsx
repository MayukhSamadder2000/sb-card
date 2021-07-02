import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Bottom } from "./Bottom";

export default {
  title: "Composite/Bottom",
  component: Bottom,
} as ComponentMeta<typeof Bottom>;

const Template: ComponentStory<typeof Bottom> = (args) => <Bottom {...args} />;

export const Default = Template.bind({});

Default.args = {
  bgColor: "light",
};
