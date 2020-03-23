import React from "react"

const ClientLogo = ({ src }) => {
  return (
    <div className="col-4">
      <div className="client-logo">
        <img src={src} alt="logo" />
      </div>
    </div>
  )
}

export default ClientLogo
