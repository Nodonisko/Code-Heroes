import React from "react"

const ClientLogo = (props) => {
  return (
    <div className="col-md-4 col-sm-6">
      <div className="client-logo">
        <img {...props} />
      </div>
    </div>
  )
}

export default ClientLogo
