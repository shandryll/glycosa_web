import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'

function Input (props) {
  const { label, name, ...rest } = props

  return (
    <React.Fragment>
      <div className='form-group'>
        <label htmlFor={name}>{label}</label>
        <Field id={name} name={name} {...rest} />
        <ErrorMessage component={TextError} name={name} />
      </div>
    </React.Fragment>
  )
}

export default Input