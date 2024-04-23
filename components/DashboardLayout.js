import React, { Fragment } from 'react'
import Navbar from './NavBar/navBar'

const DashboardLayout = ({ isDark, setIsDark, toggleDark, children }) => {
  return (
    <div className={isDark ? "bgDark" : "bgLight"}>
      <div className="sticky-top">
        <Navbar isDark={isDark} setIsDark={setIsDark} toggleDark={toggleDark} />
      </div>
      {children}
    </div>
  )
}

export default DashboardLayout