/* used Formik components Formik,Field array,validateField,setFieldTouched,setTouched,validateForm,setSubmitting,isValid,validateOnMount,enableReinitialize */

import {
  ErrorMessage,
  FastField,
  Field,
  FieldArray,
  Form,
  Formik,
  useFormik,
} from "formik";
import React, { useState } from "react";
import * as yup from "yup";
import MyError from "./MyError";
import "./App.css";

export default function Form6() {
  const [value, setValue] = useState("");

  const mycheck = (e) => {
    let err;
    if (!e) {
      err = "must enter check value";
    }

    return err;
  };

  const savedlValues = {
    name: "bharath",
    phoneNumber: "8985052593",
    TelephoneNumbers: ["9052298979"],
    check: "9618234033",
  };

  const firstvalues = {
    name: "",
    phoneNumber: "",
    TelephoneNumbers: [""],
    check: "",
  };
  const onSubmit = (values, { resetForm, setSubmitting }) => {
    setTimeout(() => {
      setSubmitting(false);
      resetForm();
    }, 1000);
  };
  const validationSchema = yup.object({
    name: yup
      .string()
      .required("name not be blank")
      .min(1, "requiers minimum 1 characters"),
    phoneNumber: yup
      .string()
      .min(1, "phone number is 1 numbers or less")
      .max(10, "phone number cannt be more than 10 numbers")
      .required("phoneNumber not be blank"),
    TelephoneNumbers: yup
      .array()
      .of(yup.number().required("fill number field")),
  });

  return (
    <Formik
      initialValues={value || firstvalues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      validateOnBlur={true}
      validateOnChange={true}
      validateOnMount={false}
      enableReinitialize
    >
      {({
        validateForm,
        validateField,
        errors,
        touched,
        setFieldTouched,
        setTouched,
        isSubmitting,
        isValid,
        dirty,
        initialValues,
      }) => (
        <Form>
          <label htmlFor="name">
            name
            <FastField name="name" />
            <ErrorMessage name="name" component={MyError} />
          </label>
          <label htmlFor="phoneNumber">
            phoneNumber
            <FastField type="number" name="phoneNumber" />
            <ErrorMessage name="phoneNumber" component={MyError} />
          </label>
          <label htmlFor="TelephoneNumbers">
            TelephoneNumbers
            <FieldArray name="TelephoneNumbers">
              {(value) => {
                /* console.log(value); */
                const { push } = value;
                const { remove } = value;
                const { form } = value;

                return (
                  /* value.form.values.TelephoneNumbers !== undefined && */
                  value.form.values.TelephoneNumbers.map((value, index) => (
                    <div key={index}>
                      <FastField
                        type="number"
                        name={`TelephoneNumbers[${index}]`}
                      />
                      <button type="button" onClick={() => push("")}>
                        add
                      </button>
                      {form.values.TelephoneNumbers.length > 1 && (
                        <button type="button" onClick={() => remove(index)}>
                          remove
                        </button>
                      )}
                      <ErrorMessage
                        name={`TelephoneNumbers[${index}]`}
                        component={MyError}
                      />
                    </div>
                  ))
                );
              }}
            </FieldArray>
          </label>
          <label htmlFor="check">check</label>
          <Field name="check" validate={mycheck} />
          {errors.check && touched.check && <p>{errors.check}</p>}
          <button type="button" onClick={() => validateField("check")}>
            check:vakidateField
          </button>
          <button
            type="button"
            onClick={() => validateForm().then((e) => console.log(e))}
          >
            validate all
          </button>
          <button type="button" onClick={() => setFieldTouched("check")}>
            setFieldTouched("check")
          </button>
          <button
            type="button"
            onClick={() =>
              setTouched({
                name: true,
                phoneNumber: true,
                TelephoneNumbers: [true, true],
                check: true,
              })
            }
          >
            setTouched
          </button>

          <button type="button" disabled={!isValid}>
            isValid
          </button>

          {/* {console.log(isValid)} */}
          {/* {console.log(errors)} */}
          {console.log(`initialValues is`, initialValues)}
          <button type="button" onClick={() => setValue(savedlValues)}>
            fill with saved values
          </button>
          <button type="button" onClick={() => setValue(firstvalues)}>
            fill with initialvalues
          </button>

          <button disabled={isSubmitting}>submit</button>
        </Form>
      )}
    </Formik>
  );
}
