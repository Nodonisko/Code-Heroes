import React from "react"

const Section = ({ children, noBorder, className = "", ...props }) => {
  return (
    <div
      className={`section ${noBorder ? "no-border" : ""} ${className}`}
      {...props}
    >
      <div className="container">{children}</div>
    </div>
  )
}

export default Section
