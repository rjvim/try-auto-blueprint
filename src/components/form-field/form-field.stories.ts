import type { Meta, StoryObj } from "@storybook/react";
import { FormField } from "./form-field";

const meta = {
  title: "Form/FormField",
  component: FormField,
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
      description: "Label text for the form field",
    },
    placeholder: {
      control: "text",
      description: "Placeholder text for the input",
    },
  },
} satisfies Meta<typeof FormField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Email Address",
    placeholder: "Enter your email",
  },
};

// Additional stories to show different use cases
export const Username: Story = {
  args: {
    label: "Username",
    placeholder: "Choose a username",
  },
};

export const PhoneNumber: Story = {
  args: {
    label: "Phone Number",
    placeholder: "+1 (555) 000-0000",
  },
};
