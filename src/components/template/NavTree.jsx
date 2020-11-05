import React from 'react'
import { Link } from 'react-router-dom'

export default (props) => {
  return (
    <React.Fragment>
      <a data-toggle="collapse" href={`#${props.label}`}>
        <i className={`fas fa-${props.icon}`}></i> {props.label} <span data-toggle="collapse" href={`#${props.label}`}><i className="fas fa-angle-down"></i></span>
      </a>
      <li className="collapse" id={props.label}>
        {props.subItems.map((value, index) => {
          return (
            <React.Fragment key={index}>
              <Link to={value.path}>
                {value.label}
              </Link>
            </React.Fragment>
          )
        })}
      </li>
    </React.Fragment>
  )
}
