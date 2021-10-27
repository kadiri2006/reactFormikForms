import { Form, Formik } from "formik";
import React from "react";
import Controller from "./Controller";
import * as yup from "yup";
import Dates from "./Dates";

export default function Container() {
  const initialValues = {
    name: "",
    comment: "",
    gender: "",
    movie: [],
    date:"",
    language: "",
  };
  

  const movieList = ["spyder", "ahanapellanta", "3idiots"];
  const genderOption = ["male", "female"];

  const languages = ["", "html", "js", "reactjs"];

  const submit = (fieldValues, form) => {
    console.log(fieldValues);
  };

  const validation = yup.object({
    name: yup.string().required("name field not be blank"),
    comment: yup.string().required("comment field not be blank"),
    language: yup
      .string()
      .required("you cant skip select one from drop down list"),
    movie: yup.array().length(2, "you should take two values only"),
    date: yup
      .date()
      .max(new Date().toDateString(), "enter today date only")
      .min(new Date().toDateString(),"enter today date only")
      .required("date field not be empty"),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={submit}
      validationSchema={validation}
    >
      <Form>
        <h1>welcome to reusable react formik component</h1>
        <Controller ele="Input" label="name" labelValue="enter your name" />
        <Controller
          ele="Textarea"
          label="comment"
          labelValue="enter your comments here"
        />
        <Controller
          ele="Select"
          label="language"
          labelValue="select language from dropdown list"
          languages={languages}
        />
        <Controller
          ele="Radio"
          label="gender"
          labelValue="select Gender"
          genderOption={genderOption}
        />
        <Controller ele="Checkbox" movieList={movieList} />
        <Controller ele="Date" />
        <button type="submit">submit</button>
      </Form>
    </Formik>
  );
}
