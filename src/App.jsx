import React, { Component } from 'react'

const newBackgroundColor = `hsl(180, 90%, 50%)`
const newStyle = { backgroundColor: newBackgroundColor }
export class App extends Component {
  state = {
    hValue: 180,
    sValue: 50,
    lValue: 50,
  }

  changeSomething = async () => {
    console.log(this.state.hValue)
  }
  newBackgroundColor = `hsl(${this.state.hValue}, ${this.state.sValue}%, ${this.state.lValue}%)`
  newStyle = { backgroundColor: newBackgroundColor }
  render() {
    return (
      <div className="everything">
        <header>
          <h1>Color</h1>
          {/* box that shows color */}
          <div className="color output box" style={newStyle}></div>
          <p>{newBackgroundColor}</p>
        </header>
        <div className="all sliders">
          <div className="hue slide container">
            <h2>H</h2>
            {/* hue slider */}
            <input
              type="range"
              min="1"
              max="360"
              value={this.state.hValue}
              className="h slider"
              onDrag={this.changeSomething}
            ></input>
          </div>
          <div className="saturation slide container">
            {/* saturation slider */}
            <h2>S</h2>
            <input
              type="range"
              min="1"
              max="100"
              value={this.state.sValue}
              className="s slider"
            ></input>
          </div>
          <div className="lightness slide container">
            {/* lightness slider */}
            <h2>L</h2>
            <input
              type="range"
              min="1"
              max="100"
              value={this.state.lValue}
              className="l slider"
            ></input>
          </div>
        </div>
      </div>
    )
  }
}
