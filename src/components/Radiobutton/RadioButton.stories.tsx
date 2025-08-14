import type { Meta, StoryObj } from "@storybook/react-vite";
import { RadioButton } from "./RadioButton";

const meta: Meta<typeof RadioButton> = {
  title: "Components/RadioButton",
  component: RadioButton,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    name: { control: "text" },
    value: { control: "text" },
    disabled: { control: "boolean" },
    backgroundColor: { control: "color" },
  },
};

export default meta;
type Story = StoryObj<typeof RadioButton>;

export const Default: Story = {
  args: {
    label: "Option A",
    name: "example",
    value: "optionA",
    disabled: false,
    backgroundColor: "transparent",
  },
};

export const Disabled: Story = {
  args: {
    label: "Option A",
    name: "example",
    value: "optionA",
    disabled: true,
    backgroundColor: "transparent",
  },
};
