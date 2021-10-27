import { ErrorMessage, Field } from 'formik'
import React from 'react'
import MyError from './MyError'

export default function Textarea({label,labelValue}) {
    return (
        <div>
        <label htmlFor={label}>{labelValue}</label>
        <Field name={label} as="textarea"/>
        <ErrorMessage name={label} component={MyError}/>
        </div>
    )
}
