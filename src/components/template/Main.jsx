import React from 'react'

import Logo from'./Logo'
import Header from'./Header'
import NavWeb from './NavWeb'
import NavMobile from './NavMobile'
import Footer from './Footer'

function Main(props) {
  return (
    <React.Fragment>
      <Logo />
      <NavWeb />
      <NavMobile />
      <Header {...props} />
      <main className='content container-fluid'>
        <div className='p-4 mt-3'>
          {props.children}
        </div>
      </main>
      <Footer />
    </React.Fragment>
  )
}

export default Main
