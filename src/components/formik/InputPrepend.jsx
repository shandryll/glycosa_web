import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'

function InputPrepend (props) {
  const { label, name, prependText, ...rest } = props

  return (
    <React.Fragment>
      <div className='form-group'>
        <label htmlFor={name}>{label}</label>
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">{prependText}</span>
          </div>
          <Field id={name} name={name} {...rest} />
          <ErrorMessage component={TextError} name={name} />
        </div>
      </div>
    </React.Fragment>
  )
}

export default InputPrepend
