import React, { Component } from 'react'
import PropTypes from 'prop-types'

import UnconcludedLine from './UnconcludedLine'
import ConcludedLine from './ConcludedLine'
import CurrentCircle from './CurrentCircle'
import ConcludedCircle from './ConcludedCircle'
import UnconcludedCircle from './UnconcludedCircle'
import Caption from './Caption'
import transformStates from './transformStates'
import { FIFTH_STEP } from './constants'

class ProgressBar extends Component {
  render() {
    const { states, currentState, hasFinished } = this.props
    if (!currentState) return null
    const progressStates = transformStates(states)
    return (
      <div className="myo-progress-bar">
        <div className="myo-progress-bar__mobile-text">
          <Caption
            numberOfStates={states.length}
            currentState={currentState}
            progressStates={progressStates}
          />
        </div>
        <div className="flex justify-center">
          {progressStates.map((state, index) => {
            if (state.isLine) {
              return currentState > state.originalIndex ? (
                <ConcludedLine key={index} />
              ) : (
                <UnconcludedLine key={index} />
              )
            }

            if (
              currentState > state.originalIndex ||
              (hasFinished && currentState === FIFTH_STEP)
            ) {
              return <ConcludedCircle key={index} label={state.label} />
            } else if (currentState === state.originalIndex) {
              return <CurrentCircle key={index} label={state.label} />
            }
            return <UnconcludedCircle key={index} label={state.label} />
          })}
        </div>
      </div>
    )
  }
}

ProgressBar.propTypes = {
  currentState: PropTypes.number.isRequired,
  states: PropTypes.array.isRequired,
  hasFinished: PropTypes.bool,
}

export default ProgressBar
