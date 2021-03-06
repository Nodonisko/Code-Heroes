import React from "react"
import Image from "./image"

const ClientLogo = (props) => {
  return (
    <div className="col-md-4 col-sm-6">
      <div className="client-logo">
        <Image
          {...props}
          style={{
            height: parseInt(props.height),
            width: parseInt(props.width),
          }}
        />
      </div>
    </div>
  )
}

export default ClientLogo
