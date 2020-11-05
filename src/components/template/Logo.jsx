import React from 'react'

import Logo from '../../assets/img/glycosa-logo.png'

export default (props) => {
  return (
    <React.Fragment>
      <aside className='logo'>
        <i className="fas fa-bars d-flex d-md-none" data-toggle="collapse" data-target="#collapseNavMobile" aria-expanded="false" aria-controls="collapseNavMobile"></i>
        <span className='logo'>
          <img src={Logo} alt="Logo" className='img-fluid' />
        </span>
      </aside>
    </React.Fragment>
  )
}
