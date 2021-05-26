import React, { Component } from 'react'

export class App extends Component {
  state = {
    hValue: Math.ceil(Math.random() * 360),
    sValue: Math.ceil(Math.random() * 100),
    lValue: Math.ceil(Math.random() * 100),
  }

  randomizeColor = () => {
    this.setState({ hValue: Math.ceil(Math.random() * 360) })
    this.setState({ sValue: Math.ceil(Math.random() * 100) })
    this.setState({ lValue: Math.ceil(Math.random() * 100) })
  }

  render() {
    return (
      <div className="everything">
        <header>
          <h1>Color</h1>
          {/* box that shows color */}
          <div
            className="color output box"
            style={{
              backgroundColor: `hsl(${this.state.hValue}, ${this.state.sValue}%, ${this.state.lValue}%)`,
            }}
          ></div>
          <p>
            hsl({this.state.hValue}, {this.state.sValue}%, {this.state.lValue}%)
          </p>
          <button onClick={() => this.randomizeColor()}>Random Color</button>
        </header>
        <div className="all sliders">
          <div className="hue slide container">
            <h2>H</h2>
            {/* hue slider */}
            <input
              type="range"
              min="0"
              max="360"
              value={this.state.hValue}
              className="h slider"
              onChange={event => this.setState({ hValue: event.target.value })}
            ></input>
          </div>
          <div className="saturation slide container">
            {/* saturation slider */}
            <h2>S</h2>
            <input
              type="range"
              min="0"
              max="100"
              value={this.state.sValue}
              className="s slider"
              onChange={event => this.setState({ sValue: event.target.value })}
            ></input>
          </div>
          <div className="lightness slide container">
            {/* lightness slider */}
            <h2>L</h2>
            <input
              type="range"
              min="0"
              max="100"
              value={this.state.lValue}
              className="l slider"
              onChange={event => this.setState({ lValue: event.target.value })}
            ></input>
          </div>
        </div>
      </div>
    )
  }
}
