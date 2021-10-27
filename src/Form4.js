/* used Formik components Formik, */

import { ErrorMessage, Field, Form, Formik, useFormik } from "formik";
import React from "react";
import * as yup from "yup";
import MyError from "./MyError";

export default function Form4() {
  const initialValues = {
    name: "",
    phoneNumber: "",
  };
  const onSubmit = (values, { resetForm }) => {
    resetForm();
    alert("submitted");
  };
  const validationSchema = yup.object({
    name: yup
      .string()
      .required("name not be blank")
      .min(5, "requiers minimum 5 characters"),
    phoneNumber: yup
      .string()
      .min(10, "phone number is 10 numbers or less")
      .max(10,"phone number cannt be more than 10 numbers")
      .required("phoneNumber not be blank"),
  });

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      <Form>
        <label htmlFor="name">
          name
          <Field name="name" />
          <ErrorMessage name="name" component={MyError}/>
        </label>
        <label htmlFor="phoneNumber">
          phoneNumber
          <Field type="number" name="phoneNumber" />
          <ErrorMessage name="phoneNumber" component={MyError}/>
        </label>
        <button>submit</button>
      </Form>
    </Formik>
  );
}
