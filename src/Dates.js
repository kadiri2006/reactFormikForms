import { ErrorMessage, Field } from 'formik'
import React from 'react'
import MyError from './MyError'

export default function Dates() {
    return (
        <div>
        <label htmlFor="date">select today date</label>
        <Field type="date" id="date" name="date" />
        <ErrorMessage name="date" component={MyError}/>
        </div>
    )
}
