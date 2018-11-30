import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { intlShape, injectIntl } from 'react-intl'

import ConcludedCircle from '../ConcludedCircle'
import CurrentCircle from '../CurrentCircle'
import UnconcludedLine from '../UnconcludedLine'
import UnconcludedCircle from '../UnconcludedCircle'
import ConcludedLine from '../ConcludedLine'
import Caption from '../Caption'
import transformStates from '../transformStates'

class PackageProgressBar extends Component {
  render() {
    const { currentState, states } = this.props
    if (currentState == null) return null
    const progressStates = transformStates(states)
    return (
      <Fragment>
        <div className="myo-progress-bar flex w-100 mv2-s ml7-l">
          {progressStates.map((state, index) => {
            if (state.isLine) {
              return currentState > state.originalIndex ? (
                <ConcludedLine isPackage key={index} />
              ) : (
                <UnconcludedLine isPackage key={index} />
              )
            }
            if (currentState === state.originalIndex) {
              return <CurrentCircle key={index} isPackage label={state.label} />
            }
            if (currentState > state.originalIndex) {
              return (
                <ConcludedCircle key={index} isPackage label={state.label} />
              )
            }
            return (
              <UnconcludedCircle key={index} isPackage label={state.label} />
            )
          })}
        </div>
        {currentState != null && (
          <div className="caption">
            <Caption
              numberOfStates={states.length}
              currentState={currentState}
              progressStates={progressStates}
            />
          </div>
        )}
      </Fragment>
    )
  }
}

PackageProgressBar.propTypes = {
  currentState: PropTypes.number,
  states: PropTypes.array.isRequired,
  intl: intlShape.isRequired,
}

export default injectIntl(PackageProgressBar)
