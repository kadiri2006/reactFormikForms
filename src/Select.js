import { ErrorMessage, Field } from "formik";
import React from "react";
import MyError from "./MyError";

export default function Select({ label, labelValue, ...props }) {
  const { languages } = props;
  return (
    <div>
      <label htmlFor={label}>{labelValue}</label>
      <Field name={label}>
        {({ field }) => {
          
          return (
            <select {...field}>
              {languages.map((v, i) => (
                <option key={i}>{v}</option>
              ))}
            </select>
          );
        }}
      </Field>
      <ErrorMessage name={label} component={MyError} />
    </div>
  );
}
