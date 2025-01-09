import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./input";

const meta = {
  title: "Form/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["text", "email", "password", "number", "tel", "url"],
      description: "Type of input",
    },
    placeholder: {
      control: "text",
      description: "Placeholder text",
    },
    disabled: {
      control: "boolean",
      description: "Disable the input",
    },
    required: {
      control: "boolean",
      description: "Mark input as required",
    },
    className: {
      control: "text",
      description: "Additional CSS classes",
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Text: Story = {
  args: {
    type: "text",
    placeholder: "Enter your name",
  },
};

export const Email: Story = {
  args: {
    type: "email",
    placeholder: "example@domain.com",
    required: true,
  },
};

export const Password: Story = {
  args: {
    type: "password",
    placeholder: "Enter your password",
    required: true,
  },
};

export const DisabledInput: Story = {
  args: {
    type: "text",
    placeholder: "This input is disabled",
    disabled: true,
  },
};

export const WithValue: Story = {
  args: {
    type: "text",
    value: "Prefilled value",
    onChange: (e) => console.log("Value changed:", e.target.value),
  },
};
