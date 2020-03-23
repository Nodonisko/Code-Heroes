import React from "react"

const Row = ({ children, className = "" }) => {
  return <div className={`row ${className}`}>{children}</div>
}

export default Row
