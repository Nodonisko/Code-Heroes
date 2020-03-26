import React from "react"
import Image from "./image"

const ClientLogo = (props) => {
  return (
    <div className="col-4">
      <div className="client-logo">
        <Image {...props} />
      </div>
    </div>
  )
}

export default ClientLogo
