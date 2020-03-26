import React from "react"

class FlipCard extends React.Component {
  state = {
    flipped: false,
  }

  toggleFlip = () => {
    this.setState((prev) => ({ flipped: !prev.flipped }))
  }

  render() {
    const { flipped } = this.state
    const { FrontSide, BackSide } = this.props

    return (
      <div className={`flip-card ${flipped ? "flipped" : ""}`}>
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <FrontSide toggleFlip={this.toggleFlip} />
          </div>
          <div className="flip-card-back">
            <BackSide toggleFlip={this.toggleFlip} />
          </div>
        </div>
      </div>
    )
  }
}

export default FlipCard
