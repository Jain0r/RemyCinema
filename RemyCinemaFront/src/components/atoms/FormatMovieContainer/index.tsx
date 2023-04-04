import React from "react";
import "./index.scss";
interface FormatProps {
  text: string;
}

const FormatMovieContainer = ({ text }: FormatProps) => {
  return <span className="format_container">{text}</span>;
};

export default FormatMovieContainer;
