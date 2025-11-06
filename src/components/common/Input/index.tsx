import { ChangeEvent } from "react";
import {
  InputContainer,
  StyledInput,
  TextAreaContainer,
  StyledTextArea,
} from "./style";

interface InputProps {
  type?: "text" | "email" | "password" | "textarea";
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
}

const Input = ({
  type = "text",
  value,
  onChange,
  placeholder,
  disabled = false,
}: InputProps) => {
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    onChange(e.target.value);
  };

  if (type === "textarea") {
    return (
      <TextAreaContainer>
        <StyledTextArea
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          disabled={disabled}
        />
      </TextAreaContainer>
    );
  }

  return (
    <InputContainer>
      <StyledInput
        type={type}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        disabled={disabled}
      />
    </InputContainer>
  );
};

export default Input;
