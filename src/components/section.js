import React from "react"

const Section = ({ children }) => {
  return (
    <div className="section">
      <div className="container">{children}</div>
    </div>
  )
}

export default Section
