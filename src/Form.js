import { useFormik } from "formik";
import React from "react";

export default function Form() {
  const formik = useFormik({
    initialValues: {
      name: "",
      password: "",
      
    },
    onSubmit: (values, { resetForm }) => {
      resetForm();
      alert("submitted")
    },
    validate: (values) => {
      const obj = {};
      if (!values.name) {
        obj.name = "name cannt be blank";
      }
      if (!values.password) {
        obj.password = "password cannt be blank";
      }
      return obj;
    },
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
        <label htmlFor="password">
          password
          <input
            type="password"
            id="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            onBlur={formik.handleBlur}
          />
          <p>
            {formik.errors.password && formik.touched.password
              ? formik.errors.password
              : ""}
          </p>
        </label>
        <button>submit</button>
      </form>
     {/*  {console.log(formik)} */}
    </div>
  );
}
