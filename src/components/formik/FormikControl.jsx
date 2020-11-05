import React from 'react'

import Checkbox from './Checkbox'
import Input from './Input'
import InputPrepend from './InputPrepend'
import Multiple from './Multiple'
import Select from './Select'
import Textarea from './Textarea'

function FormikControl (props) {
  const { control, ...rest } = props

  switch(control) {
    case 'checkbox':
      return <Checkbox {...rest} />
    case 'input':
      return <Input {...rest} />
    case 'inputPrepend':
      return <InputPrepend {...rest} />
    case 'multiple':
      return <Multiple {...rest} />
    case 'select':
      return <Select {...rest} />
    case 'textarea':
      return <Textarea {...rest} />
    default:
      return null
  }
}

export default FormikControl
