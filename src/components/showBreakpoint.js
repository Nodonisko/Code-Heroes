import React from "react"

const ShowBreakpoint = () => {
  console.log(process.env)
  if (process.env.NODE_ENV !== "development") return null

  return (
    <div
      style={{
        position: "fixed",
        left: 5,
        top: 0,
      }}
    >
      <div className="d-block d-sm-none">XS</div>
      <div className="d-none d-sm-block d-md-none">SM</div>
      <div className="d-none d-md-block d-lg-none">MD</div>
      <div className="d-none d-lg-block d-xl-none">LG</div>
      <div className="d-none d-xl-block">XL</div>
    </div>
  )
}

export default ShowBreakpoint
