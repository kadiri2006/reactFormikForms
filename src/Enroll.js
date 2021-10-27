import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as yup from "yup";

export default function Enroll() {
  const initialValues = {
    email: "",
    fullname: "",
    chooseCourse: "",
    prerequisites: [],
    course: "",
    date: "",
  };

  const validation = yup.object({
    email: yup.string().email().required("my:email is required"),
    fullname: yup.string().required("my:fullname is required"),
    chooseCourse: yup.string().required("my:chooseCourse is required"),
    prerequisites: yup.array().min(1, "my:prerequisites is required"),
    course: yup.string().required("my:radio button must be entered"),
    date: yup.string().when("course", {
      is: (value) => value === "enroll",
      then: yup.string().required("my: date must be required"),
    }),
  });

  const submit = (values) => {
    console.log(values);
  };
  return (
    <div>
      <h2>Course Enrollment</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validation}
        onSubmit={submit}
      >
        {(form) => {
          /* console.log(form); */
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
                <label htmlFor="fullname">
                  fullname :
                  <Field id="fullname" name="fullname" />
                  <ErrorMessage name="fullname" />
                </label>
              </div>
              <div>
                <label htmlFor="chooseCourse">chooseCourse</label>
                <Field id="chooseCourse" name="chooseCourse" as="select">
                  <option value="html">html</option>
                  <option value="css">css</option>
                  <option value="">select</option>
                  <option value="js">js</option>
                </Field>
                <ErrorMessage name="chooseCourse" />
              </div>
              <div>
                <span>prerequisites</span>
                <br />
                <label htmlFor="english">english</label>
                <Field
                  type="checkbox"
                  name="prerequisites"
                  value="english"
                  id="english"
                />
                <label htmlFor="telugu">telugu</label>
                <Field
                  type="checkbox"
                  name="prerequisites"
                  value="telugu"
                  id="telugu"
                />
                <label htmlFor="hindi">hindi</label>
                <Field
                  type="checkbox"
                  name="prerequisites"
                  value="hindi"
                  id="hindi"
                />
                <ErrorMessage name="prerequisites" />
              </div>
              <div>
                <span>chooseCourseType:</span>
                <br />
                <label htmlFor="enroll">enroll</label>
                <Field type="radio" name="course" value="enroll" id="enroll" />
                <label htmlFor="purchase">purchase</label>
                <Field
                  type="radio"
                  name="course"
                  value="purchase"
                  id="purchase"
                />
                <ErrorMessage name="course" />
              </div>
              {form.values.course === "enroll" && (
                <div>
                  <label htmlFor="date">Enrollment Date :</label>
                  <Field type="date" name="date" />
                  <ErrorMessage name="date" />
                </div>
              )}

              <div>
                <button type="submit">confirm</button>
                <button type="button">logout</button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
