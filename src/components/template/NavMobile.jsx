import React from 'react'

import NavRoutes from './NavRoutes'

export default (props) => {
  return (
    <React.Fragment>
      <div className='collapse sidebarMenu' id='collapseNavMobile'>
        <aside className='menu-area mobile d-flex d-md-none'>
          <nav className="menu">
            <NavRoutes  />
          </nav>
        </aside>
      </div>
    </React.Fragment>
  )
}
