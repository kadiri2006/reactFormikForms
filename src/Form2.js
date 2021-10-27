/* included yup validation */

import { useFormik } from "formik";
import React from "react";
import * as yup from "yup";

export default function Form2() {
  const formik = useFormik({
    initialValues: {
      name: "",
      phoneNumber: "",
    },
    onSubmit: (values, { resetForm }) => {
      resetForm();
      alert("submitted");
    },
    validationSchema: yup.object({
      name: yup
        .string()
        .required("name not be blank")
        .min(5, "requiers minimum 5 characters"),
      phoneNumber: yup
        .string()
        .max(10, "phone number is 10 numbers or less")
        .required("phoneNumber not be blank"),
    }),
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">
          name
          <input
            type="text"
            id="name"
            onChange={formik.handleChange}
            value={formik.values.name}
            onBlur={formik.handleBlur}
          />
          <p>
            {formik.errors.name && formik.touched.name
              ? formik.errors.name
              : ""}
          </p>
        </label>
        <label htmlFor="phoneNumber">
          phoneNumber
          <input
            type="number"
            id="phoneNumber"
            onChange={formik.handleChange}
            value={formik.values.phoneNumber}
            onBlur={formik.handleBlur}
          />
          <p>
            {formik.errors.phoneNumber && formik.touched.phoneNumber
              ? formik.errors.phoneNumber
              : ""}
          </p>
        </label>
        <button>submit</button>
      </form>
      {console.log(formik)}
    </div>
  );
}
