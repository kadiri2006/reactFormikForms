import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import * as yup from "yup";

export default function Registration({labelName}) {
  const initialValues = {
    email: "",
    password: "",
    confirmPassword: "",
  };

  const validation = yup.object({
    email: yup.string().email().required(),
    password: yup.string().required("my:its required"),
    confirmPassword: yup.string().when("password", {
      is: (value) => (value ? true : false),
      then: yup
        .string()
        .oneOf(
          [yup.ref("password")],
          " my :its must match with password field"
        ),
    }),
  });

  const submit = (values) => {
    console.log(values);
  };
  return (
    <div>
      <h2>My Registration</h2>
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
                <label htmlFor={labelName.email}>
                  {labelName.email} :
                  <Field id={labelName.email} name="email" type="email" />
                  <ErrorMessage name="email" />
                </label>
              </div>
              <div>
                <label htmlFor={labelName.password}>
                  {labelName.password} :
                  <Field id={labelName.password} name="password" type="password" />
                  <ErrorMessage name="password" />
                  {form.errors.password &&
                    !form.touched.password &&
                    form.touched.confirmPassword && (
                      <div className="text-red-200">{form.errors.password}</div>
                    )}
                </label>
              </div>
              <div>
                <label htmlFor={labelName.confirmPassword}>{labelName.confirmPassword} :</label>
                <Field id={labelName.confirmPassword} name="confirmPassword" />
                <ErrorMessage name="confirmPassword" />
              </div>
              <div>
                <button type="submit">Register</button>
                <Link to="/Login"> Login </Link>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
