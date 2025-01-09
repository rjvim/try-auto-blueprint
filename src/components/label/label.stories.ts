import type { Meta, StoryObj } from "@storybook/react";
import { Label } from "./label";

const meta = {
  title: "Example/Label",
  component: Label,
  tags: ["docsPage"],
  argTypes: {
    htmlFor: {
      control: { type: "text" },
      description: "Associates the label with form control",
    },
    children: {
      control: { type: "text" },
      description: "Label content",
    },
    className: {
      control: { type: "text" },
      description: "Additional CSS classes",
    },
  },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Email Address",
    htmlFor: "email-input",
  },
};

// You can add more stories to showcase different uses
export const Required: Story = {
  args: {
    children: "Username (required)",
    htmlFor: "username-input",
    className: "required-field",
  },
};

// Example with a longer label
export const LongLabel: Story = {
  args: {
    children: "I agree to the terms and conditions of this website",
    htmlFor: "terms-checkbox",
    className: "text-red-300",
  },
};
