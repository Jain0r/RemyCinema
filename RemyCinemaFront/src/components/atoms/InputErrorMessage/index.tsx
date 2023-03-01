import React from "react";
import "./index.scss";
import { RiErrorWarningFill } from "react-icons/ri";

interface InputErrorMessageProps {
  text: string;
}
const InputErrorMessage = ({ text }: InputErrorMessageProps) => {
  return (
    <div className="input_error_message">
      {text ? (
        <>
          <p className="input_error_icon">{<RiErrorWarningFill />}</p>
          <p className="input_error_text">{text}</p>
        </>
      ) : null}
    </div>
  );
};

export default InputErrorMessage;
