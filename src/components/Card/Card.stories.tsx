import type { Meta, StoryObj } from "@storybook/react-vite";
import { Card } from "./Card";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
    content: { control: "text" },
    disabled: { control: "boolean" },
    backgroundColor: { control: "color" },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    title: "Card Title",
    content: "This is the card content.",
    disabled: false,
    backgroundColor: "white",
  },
};

export const Disabled: Story = {
  args: {
    title: "Card Title",
    content: "This is the card content.",
    disabled: true,
    backgroundColor: "white",
  },
};
