import type { Meta, StoryObj } from "@storybook/react-vite";
import { Text } from "./Text";

const meta: Meta<typeof Text> = {
  title: "Components/Text",
  component: Text,
  tags: ["autodocs"],
  argTypes: {
    content: { control: "text" },
    disabled: { control: "boolean" },
    backgroundColor: { control: "color" },
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    content: "This is a sample text.",
    disabled: false,
    backgroundColor: "transparent",
  },
};

export const Disabled: Story = {
  args: {
    content: "This text is disabled.",
    disabled: true,
    backgroundColor: "transparent",
  },
};
