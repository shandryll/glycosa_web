import React from 'react'
import { Link } from 'react-router-dom'

export default (props) => {
  return (
    <React.Fragment>
      <Link to={props.path}>
        <i className={`fas fa-${props.icon}`}></i> {props.label}
      </Link>
    </React.Fragment>
  )
}
