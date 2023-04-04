import { Field, useField } from "formik";
import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import InputErrorMessage from "../InputErrorMessage";
import "./index.scss";

export interface OptionSelect {
  idValue: number;
  value: string;
  nameValue: string;
}

interface AdminSelectProps {
  options: OptionSelect[];
  name: string;
  label?: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  defaultValue?: string;
  disabled?: boolean;
  value: string;
  validate?: boolean;
}

const AdminSelect = ({
  options,
  name,
  value,
  label,
  onChange,
  defaultValue,
  disabled,
  validate,
}: AdminSelectProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e);
  };

  if (validate) {
    const [field, meta] = useField({ name });
    return (
      <div className="adminmovie_select_dropdown_container">
        {label ? <p>{label}</p> : null}
        <div className="adminmovie_select_container">
          <Field
            name={name}
            onChange={handleChange}
            as="select"
            disabled={disabled ? disabled : false}
          >
            {defaultValue ? <option value="">{defaultValue}</option> : null}
            {options &&
              options?.map((option: OptionSelect) => {
                return (
                  <option key={option.idValue} value={option.value?.toString()}>
                    {option.nameValue}
                  </option>
                );
              })}
          </Field>
          <MdKeyboardArrowDown />
        </div>
        <InputErrorMessage
          text={meta.touched && meta.error ? meta.error : ""}
        />
      </div>
    );
  } else {
    return (
      <div className="adminmovie_select_dropdown_container">
        {label ? <p>{label}</p> : null}
        <div className="adminmovie_select_container">
          <select
            disabled={disabled ? disabled : false}
            name={name}
            value={value}
            onChange={handleChange}
          >
            {defaultValue ? <option value="">{defaultValue}</option> : null}
            {options &&
              options?.map((option: OptionSelect) => {
                return (
                  <option key={option.idValue} value={option.value?.toString()}>
                    {option.nameValue}
                  </option>
                );
              })}
          </select>
          <MdKeyboardArrowDown />
        </div>
      </div>
    );
  }
};

export default AdminSelect;
