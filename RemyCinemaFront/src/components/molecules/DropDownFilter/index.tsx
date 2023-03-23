import React from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import "./index.scss";

interface DropDownFilterProps {
  children: JSX.Element;
  name: string;
  defaultShown: string;
  filterLabel: string;
  onChange(value: string): void;
  value: string;
}

const DropDownFilter = ({
  name,
  defaultShown,
  children,
  filterLabel,
  onChange,
  value,
}: DropDownFilterProps) => {
  console.log("valor", `${name} -> ${value}`);
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className="select_dropdown_container">
      <div className="select_dropdown_layout ">
        <div className="select_title">
          <span>{filterLabel}</span>
          <MdOutlineKeyboardArrowDown />
        </div>
        <div className="select_label">
          <span>{value ? value : defaultShown}</span>
        </div>
      </div>
      <select id={name} name={name} onChange={handleChange} value={value}>
        {children}
      </select>
    </div>
  );
};

export default DropDownFilter;
