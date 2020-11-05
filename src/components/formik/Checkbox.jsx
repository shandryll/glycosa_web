import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'

function Checkbox (props) {
  const { value, label, name, ...rest } = props

  return (
    <React.Fragment>
      <div className="col-md-4">
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <Field type="checkbox" name={name} value={value} />
              <ErrorMessage component={TextError} name={name} />
            </div>
          </div>
          <input readOnly value={label} {...rest} />
        </div>
      </div>
    </React.Fragment>
  )
}

export default Checkbox
