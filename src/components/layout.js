import "../styles/style.sass"
import React from "react"
import ShowBreakpoint from "./showBreakpoint"

const Layout = ({ children }) => {
  return (
    <>
      <ShowBreakpoint />
      {children}
    </>
  )
}

export default Layout
