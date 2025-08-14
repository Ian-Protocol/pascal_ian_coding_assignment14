import type { Meta, StoryObj } from "@storybook/react-vite";
import { Table } from "./Table";

const meta: Meta<typeof Table> = {
  title: "Components/Table",
  component: Table,
  tags: ["autodocs"],
  argTypes: {
    headers: { control: "object" },
    rows: { control: "object" },
    footer: { control: "object" },
    disabled: { control: "boolean" },
    backgroundColor: { control: "color" },
  },
};

export default meta;
type Story = StoryObj<typeof Table>;

export const Default: Story = {
  args: {
    headers: ["Column 1", "Column 2"],
    rows: [
      ["Content", "Content"],
      ["Content", "Content"],
    ],
    footer: ["Footer", "Footer"],
    disabled: false,
    backgroundColor: "white",
  },
};

export const Disabled: Story = {
  args: {
    headers: ["Column 1", "Column 2"],
    rows: [
      ["Content", "Content"],
      ["Content", "Content"],
    ],
    footer: ["Footer", "Footer"],
    disabled: true,
    backgroundColor: "white",
  },
};
