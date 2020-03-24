import React from "react"
import Image from "./image"

const ClientLogo = ({ src, scrollPosition }) => {
  return (
    <div className="col-4">
      <div className="client-logo">
        <Image src={src} alt="logo" scrollPosition={scrollPosition} />
      </div>
    </div>
  )
}

export default ClientLogo
