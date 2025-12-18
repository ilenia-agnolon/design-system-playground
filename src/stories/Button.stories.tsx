import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../components/Button/Button";

/*
  Storybook metadata for the Button component.

  This configuration:
  - defines the sidebar location
  - links the React component
  - enables automatic documentation
*/
const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
};

export default meta;

/*
  Story type linked to the Button component.
  Ensures args are always compatible with Button props.
*/
type Story = StoryObj<typeof Button>;

/*
  Default Button story.

  This is the main reference example for the component.
  It represents the most common usage scenario.
*/
export const Default: Story = {
  args: {
    // Text rendered inside the button
    children: "Submit",

    // Default visual variant
    variant: "primary",

    // Default size
    size: "md",
  },
};
