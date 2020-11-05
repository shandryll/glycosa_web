import React from 'react'

import NavRoutes from './NavRoutes'

export default (props) => {
  return (
    <React.Fragment>
      <aside className='menu-area d-none d-md-flex'>
        <nav className="menu">
          <NavRoutes />
        </nav>
      </aside>
    </React.Fragment>
  )
}
