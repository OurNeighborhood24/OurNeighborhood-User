import { ReactNode } from "react";
import { PrimaryButtonStyle, SecondaryButtonStyle } from "./style";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary";
  fullWidth?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

const Button = ({
  children,
  variant = "primary",
  fullWidth = false,
  disabled = false,
  onClick,
  type = "button",
}: ButtonProps) => {
  const ButtonComponent =
    variant === "primary" ? PrimaryButtonStyle : SecondaryButtonStyle;

  return (
    <ButtonComponent
      $fullWidth={fullWidth}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {children}
    </ButtonComponent>
  );
};

export default Button;
