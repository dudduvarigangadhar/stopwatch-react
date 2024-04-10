import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {isRunning: false, timerInSeconds: 0}

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  onReset = () => {
    clearInterval(this.timerID)
    this.setState({isRunning: false, timerInSeconds: 0})
  }

  onStop = () => {
    clearInterval(this.timerID)
    this.setState({isRunning: false})
  }

  tick = () => {
    this.setState(prevState => ({
      timerInSeconds: prevState.timerInSeconds + 1,
    }))
  }

  onStart = () => {
    this.timerID = setInterval(this.tick, 1000)
    this.setState({isRunning: true})
  }

  renderSeconds = () => {
    const {timerInSeconds} = this.state
    const seconds = Math.floor(timerInSeconds % 60)
    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  renderMinutes = () => {
    const {timerInSeconds} = this.state
    const minutes = Math.floor(timerInSeconds / 60)
    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  render() {
    const {isRunning} = this.state
    const time = `${this.renderMinutes()}:${this.renderSeconds()}`

    return (
      <div className="bg-container">
        <div className="timer-box">
          <h1 className="main-heading">Stopwatch</h1>
          <div className="timer-container">
            <div className="timer-heading">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
                className="timer-img"
              />
              <p>Timer</p>
            </div>
            <h1>{time}</h1>
            <div>
              <button
                type="button"
                className="start-button button"
                onClick={this.onStart}
                disabled={isRunning}
              >
                start
              </button>
              <button
                type="button"
                className="stop-button button"
                onClick={this.onStop}
                // disabled={isRunning}
              >
                Stop
              </button>
              <button
                type="button"
                className="reset-button button"
                onClick={this.onReset}
                // disabled={isRunning}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
