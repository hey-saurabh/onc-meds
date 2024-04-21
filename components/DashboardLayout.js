import React, { Fragment } from 'react'
import Navbar from './NavBar/navBar'

const DashboardLayout = ({ children }) => {
  return (
    <Fragment>
      <div className="sticky-top">
        <Navbar />
      </div>
      {children}
    </Fragment>
  )
}

export default DashboardLayout