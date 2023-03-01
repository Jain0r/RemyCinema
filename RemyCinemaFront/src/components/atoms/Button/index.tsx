import React from "react";
import "./index.scss";

interface ButtonProps {
  text: string;
  icon?: JSX.Element;
  styles?: object;
  className: string;
  disabled?: boolean;
  type: "button" | "submit" | "reset";
  onClick(): void;
}

const Button = ({
  text,
  icon,
  type,
  styles,
  className,
  onClick,
  disabled,
}: ButtonProps) => {
  return (
    <button
      className={className}
      style={styles}
      type={type}
      onClick={() => onClick()}
      disabled={disabled}
    >
      {icon}
      {text}
    </button>
  );
};

export default Button;
