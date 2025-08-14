import type { Meta, StoryObj } from "@storybook/react-vite";
import { Img } from "./Img";

const meta: Meta<typeof Img> = {
  title: "Components/Img",
  component: Img,
  tags: ["autodocs"],
  argTypes: {
    src: { control: "text" },
    alt: { control: "text" },
    disabled: { control: "boolean" },
    backgroundColor: { control: "color" },
  },
};

export default meta;
type Story = StoryObj<typeof Img>;

export const Default: Story = {
  args: {
    src: "test.jpg",
    alt: "Sample Image",
    disabled: false,
    backgroundColor: "transparent",
  },
};

export const Disabled: Story = {
  args: {
    src: "test.jpg",
    alt: "Sample Image",
    disabled: true,
    backgroundColor: "transparent",
  },
};
