import React, { useState } from "react"

const FlipCard = ({ FrontSide, BackSide }) => {
  const [flipped, setFlip] = useState(false)

  const toggleFlip = () => {
    setFlip((prev) => !prev)
  }

  return (
    <div class={`flip-card ${flipped ? "flipped" : ""}`}>
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <FrontSide toggleFlip={toggleFlip} />
        </div>
        <div class="flip-card-back">
          <BackSide toggleFlip={toggleFlip} />
        </div>
      </div>
    </div>
  )
}

export default FlipCard
