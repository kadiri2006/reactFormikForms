/* used Formik components Formik,used as,field validate,render prop,nested obj,array */

import { ErrorMessage, Field, Form, Formik, useFormik } from "formik";
import React from "react";
import * as yup from "yup";
import MyError from "./MyError";

export default function Form5() {
  const initialValues = {
    name: "",
    phoneNumber: "",
    description: "",
    socialmediaAccounts: {
      twitter: "",
      linkdin: "",
    },
    telephone: ["", ""],
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
      .max(10, "phone number cannt be more than 10 numbers")
      .required("phoneNumber not be blank"),
    socialmediaAccounts: yup.object({
      twitter: yup.string().required("twitter account not be empty"),
      linkdin: yup.string().required("linkdin not be empty"),
    }),
    telephone: yup.array().of(yup.number().required("number must be requierd")),
  });
  const desValidation = (value) => {
    let obj = "";
    if (!value) {
      obj = "must fill description block";
    }
    return obj;
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <Form>
        <label htmlFor="name">
          name
          <Field name="name" />
          <ErrorMessage name="name" component={MyError} />
        </label>
        <label htmlFor="phoneNumber">
          phoneNumber
          <Field type="number" name="phoneNumber" />
          <ErrorMessage name="phoneNumber" component={MyError} />
        </label>
        <label htmlFor="description">description</label>
        <Field id="description" name="description" validate={desValidation}>
          {(props) => {
            console.log(props);
            const { field } = props;
            return (
              <textarea
                id={field.name}
                {...field}
                style={{ width: "400px", height: "50px" }}
              />
            );
          }}
        </Field>
        <ErrorMessage name="description">
          {(props) => {
            return <span style={{ color: "tomato" }}>{props}</span>;
          }}
        </ErrorMessage>
        <label htmlFor="twitter">
          twitter
          <Field name="socialmediaAccounts.twitter" />
          <ErrorMessage
            name="socialmediaAccounts.twitter"
            component={MyError}
          />
        </label>
        <label htmlFor="linkdin">
          linkdin
          <Field name="socialmediaAccounts.linkdin" />
          <ErrorMessage
            name="socialmediaAccounts.linkdin"
            component={MyError}
          />
        </label>
       
        <label htmlFor="telephone1">
          telephone1
          <Field name="telephone[0]" />
          <ErrorMessage name="telephone[0]" component={MyError} />
        </label>
       
        <label htmlFor="telephone2">
          telephone2
          <Field name="telephone[1]" />
          <ErrorMessage name="telephone[1]" component={MyError} />
        </label>
        <button>submit</button>
      </Form>
    </Formik>
  );
}
