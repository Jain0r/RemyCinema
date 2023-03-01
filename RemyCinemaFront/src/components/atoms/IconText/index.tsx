import React from "react";
import "./index.scss";
interface IconTextProps {
  text: string;
  icon: JSX.Element;
}

const IconText = ({ text, icon }: IconTextProps) => {
  return (
    <div className="icontext_container">
      <span>{icon}</span>
      <p>{text}</p>
    </div>
  );
};

export default IconText;
