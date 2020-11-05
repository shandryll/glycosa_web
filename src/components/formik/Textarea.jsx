import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'

function Textarea (props) {
  const { label, name, ...rest } = props

  return (
    <React.Fragment>
      <div className='form-group'>
        <label htmlFor={name}>{label}</label>
        <Field as='textarea' id={name} name={name} {...rest} />
        <ErrorMessage component={TextError} name={name} />
      </div>
    </React.Fragment>
  )
}

export default Textarea
