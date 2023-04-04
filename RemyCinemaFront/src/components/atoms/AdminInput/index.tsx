import { Field, useField } from "formik";
import React  from "react";
import InputErrorMessage from "../InputErrorMessage";
import "./index.scss";
interface AdminInputProps {
  placeholder?: string;
  value: string;
  name: string;
  type: string;
  label?: string;
  icon?: JSX.Element;
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
  validate: boolean;
}

const AdminInput = ({
  icon,
  placeholder,
  value,
  label,
  onChange,
  type,
  validate,
  name,
}: AdminInputProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e);
  };

  if (validate) {
    const [field, meta] = useField({ name });
    return (
      <div className="admin_input_container">
        {label ? <p>{label}</p> : null}
        <div className="input_main_container">
          {icon ? icon : null}
          <Field
            name={name}
            value={value}
            type={type}
            onChange={handleChange}
            placeholder={placeholder ? placeholder : ""}
          ></Field>
        </div>
        <InputErrorMessage
          text={meta.touched && meta.error ? meta.error : ""}
        />
      </div>
    );
  } else {
    return (
      <div className="admin_input_container">
        {label ? <p>{label}</p> : null}
        <div className="input_main_container">
          {icon ? icon : null}
          <input
            name={name}
            type={type}
            value={value}
            onChange={handleChange}
            placeholder={placeholder ? placeholder : ""}
          ></input>
        </div>
      </div>
    );
  }
};

export default AdminInput;
