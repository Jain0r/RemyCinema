import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import "./index.scss";

export interface OptionSelect {
  idValue: number;
  value: string;
  nameValue: string;
}

interface AdminSelectProps {
  options: OptionSelect[];
  inputName: string;
  label?: string;
  onChange(e: React.ChangeEvent<HTMLSelectElement>): void;
  defaultValue: string;
  disabled?: boolean;
  value: string;
}

const AdminSelect = ({
  options,
  inputName,
  value,
  label,
  onChange,
  defaultValue,
  disabled,
}: AdminSelectProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e);
  };

  return (
    <div className="adminmovie_select_container">
      {label ? <p>{label}</p> : null}
      <select
        disabled={disabled ? disabled : false}
        name={inputName}
        value={value}
        onChange={handleChange}
      >
        <option value="">{defaultValue}</option>
        {options &&
          options?.map((option: OptionSelect) => {
            return (
              <option key={option.idValue} value={option.value}>
                {option.nameValue}
              </option>
            );
          })}
      </select>
      <MdKeyboardArrowDown />
    </div>
  );
};

export default AdminSelect;
