import { Field } from "formik";
import React from "react";

export default function Radio({ label, labelValue, ...props }) {
  const { genderOption } = props;

  return (
    <div>
      select gender : <span />
      {genderOption.map((v, i) => (
        <React.Fragment key={i}>
          <label htmlFor={v}>{v}</label>
          <Field type="radio" name="gender" id={v} value={v} />
        </React.Fragment>
      ))}
    </div>
  );
}
