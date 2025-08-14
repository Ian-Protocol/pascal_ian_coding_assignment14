import type { Meta, StoryObj } from "@storybook/react-vite";
import { Label } from "./Label";

const meta: Meta<typeof Label> = {
  title: "Components/Label",
  component: Label,
  tags: ["autodocs"],
  argTypes: {
    text: { control: "text" },
    disabled: { control: "boolean" },
    backgroundColor: { control: "color" },
  },
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {
    text: "Sample Label",
    disabled: false,
    backgroundColor: "transparent",
  },
};

export const Disabled: Story = {
  args: {
    text: "Disabled Label",
    disabled: true,
    backgroundColor: "transparent",
  },
};
