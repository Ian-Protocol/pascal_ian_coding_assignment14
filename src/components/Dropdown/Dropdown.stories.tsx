import type { Meta, StoryObj } from "@storybook/react-vite";
import { Dropdown } from "./Dropdown";
import { DropdownOption } from "./Dropdown.types";

const meta: Meta<typeof Dropdown> = {
  title: "Components/Dropdown",
  component: Dropdown,
  tags: ["autodocs"],
  argTypes: {
    options: { control: "object" },
    disabled: { control: "boolean" },
    backgroundColor: { control: "color" },
  },
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

const defaultOptions: DropdownOption[] = [
  { label: "Option 1", value: "option1" },
  { label: "Option 2", value: "option2" },
  { label: "Option 3", value: "option3" },
];

export const Default: Story = {
  args: {
    options: defaultOptions,
    disabled: false,
    backgroundColor: "white",
  },
};

export const Disabled: Story = {
  args: {
    options: defaultOptions,
    disabled: true,
    backgroundColor: "white",
  },
};
