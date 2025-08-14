import type { Meta, StoryObj } from "@storybook/react-vite";
import { HeroImage } from "./HeroImage";

const meta: Meta<typeof HeroImage> = {
  title: "Components/HeroImage",
  component: HeroImage,
  tags: ["autodocs"],
  argTypes: {
    src: { control: "text" },
    alt: { control: "text" },
    disabled: { control: "boolean" },
    backgroundColor: { control: "color" },
  },
};

export default meta;
type Story = StoryObj<typeof HeroImage>;

export const Default: Story = {
  args: {
    src: "https://via.placeholder.com/600x300",
    alt: "Hero Image",
    disabled: false,
    backgroundColor: "transparent",
  },
};

export const Disabled: Story = {
  args: {
    src: "https://via.placeholder.com/600x300",
    alt: "Hero Image",
    disabled: true,
    backgroundColor: "transparent",
  },
};
