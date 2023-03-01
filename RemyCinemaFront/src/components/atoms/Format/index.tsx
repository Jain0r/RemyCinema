import React from "react";
import "./index.scss";
interface FormatProps {
  text: string;
}

const Format = ({ text }: FormatProps) => {
  return <span className="format_container">{text}</span>;
};

export default Format;
