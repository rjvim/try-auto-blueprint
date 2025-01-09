import { Input } from "../input";
import { Label } from "../label";
import { useState } from "react";

type FormFieldProps = {
  label: string;
  placeholder: string;
};

export const FormField = ({ label, placeholder }: FormFieldProps) => {
  console.log("Loading FormField");

  const [inputCustomCountValue, setInputCustomCountValue] = useState("");

  return (
    <>
      <Label className="bg-blue-200">{label}</Label>
      <Input
        placeholder={placeholder}
        value={inputCustomCountValue}
        onChange={(e) => setInputCustomCountValue(e.target.value)}
        className="border border-gray-200"
      />
    </>
  );
};
