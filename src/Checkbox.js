import { ErrorMessage, Field } from "formik";
import React from "react";
import MyError from "./MyError";

export default function Checkbox({ movieList }) {
  return (
    <div>
      checked watched movies list :
      {movieList.map((v, i) => (
        <label htmlFor={v} key={i}>
          {v}
          <Field type="checkbox" id={v} name="movie" value={v} />
        </label>
      ))}
      <div>
        <ErrorMessage name="movie" component={MyError} />
      </div>
    </div>
  );
}
