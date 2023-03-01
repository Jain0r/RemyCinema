import React from "react";
import { useField, useFormikContext } from "formik";
import InputErrorMessage from "../InputErrorMessage";
import "./index.scss";
interface RCInputProps {
  name: string;
  label?: string;
  type: string;
  placeholder?: string;
}

const RCInput = ({ name, label, type, placeholder }: RCInputProps) => {
  const [field, meta] = useField({ name });

  return (
    <div className="RCInput_container">
      <div className="RCInput_main">
        <div
          className={
            meta.touched && meta.error
              ? "RCInput_input onerror"
              : "RCInput_input"
          }
        >
          <input
            {...field}
            id={name}
            placeholder={placeholder}
            type={type}
          ></input>
          {label ? <label htmlFor={name}>{label}</label> : null}
        </div>
      </div>
      <InputErrorMessage text={meta.touched && meta.error ? meta.error : ""} />
    </div>
  );
};

export default RCInput;
