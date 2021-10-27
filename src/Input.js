import { ErrorMessage, Field } from 'formik'
import React from 'react'
import MyError from './MyError'

export default function Input({label,labelValue}) {
    return (
        <div>
        <label htmlFor={label}>{labelValue}</label>
        <Field name={label}/>
        <ErrorMessage name={label} component={MyError}/>
        </div>
    )
}
