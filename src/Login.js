import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as yup from "yup";

export default function Login() {
  const initialValues = {
    email: "",
    password: "",
  };

  const validation = yup.object({
    email: yup.string().email().required(),
    password: yup.string().required("my:its required"),
  });

  const submit = (values) => {
    console.log(values);
  };
  return (
    <div>
      <h2>login</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validation}
        onSubmit={submit}
      >
        {(form) => {
          console.log(form);
          return (
            <Form>
              <div>
                <label htmlFor="email">
                  email :
                  <Field id="email" name="email" type="email" />
                  <ErrorMessage name="email" />
                </label>
              </div>
              <div>
                <label htmlFor="password">
                  password :
                  <Field id="password" name="password" type="password" />
                  <ErrorMessage name="password" />
                </label>
              </div>

              <div>
                <button type="submit">login</button>
                <button type="button">forgot password</button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
