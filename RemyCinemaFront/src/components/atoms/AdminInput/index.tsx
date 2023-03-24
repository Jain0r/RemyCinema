import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import "./index.scss";
interface AdminInputProps {
  placeholder: string;
  defaultValue: string;
  inputName: string;
  label?: string;
  icon?: JSX.Element;
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
}

const AdminInput = ({
  icon,
  placeholder,
  defaultValue,
  label,
  onChange,
  inputName,
}: AdminInputProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e);
  };

  return (
    <div className="input_search_container">
      {icon ? icon : null}
      {label ? <p>{label}</p> : null}
      <input
        name={inputName}
        value={defaultValue}
        onChange={handleChange}
        placeholder={placeholder}
      ></input>
    </div>
  );
};

export default AdminInput;
