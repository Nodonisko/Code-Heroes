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
    console.log(this.props, this.state, this.toggleFlip)
    return (
      <div class={`flip-card ${flipped ? "flipped" : ""}`}>
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <FrontSide toggleFlip={this.toggleFlip} />
          </div>
          <div class="flip-card-back">
            <BackSide toggleFlip={this.toggleFlip} />
          </div>
        </div>
      </div>
    )
  }
}

export default FlipCard
