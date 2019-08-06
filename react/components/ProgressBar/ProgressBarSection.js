import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ProgressBar from './ProgressBar'
import { intlShape, injectIntl } from 'react-intl'

class ProgressBarSection extends Component {
  render() {
    const { currentState, states, intl, hasFinished } = this.props
    if (!currentState) return null
    return (
      <div className="myo-progress-bar w-100 h4-plus pb9 ph5 fl b--muted-5 bw1 ba">
        <div className="myo-progress-bar__title-font c-on-base mt2 mb5 tracked-mega lh-solid ttu f6 pt5">
          <span>
            {intl.formatMessage({
              id: 'progressBar.order.status',
            })}
          </span>
        </div>
        <div className="pt7">
          <ProgressBar
            states={states}
            currentState={currentState}
            hasFinished={hasFinished}
          />
        </div>
      </div>
    )
  }
}

ProgressBarSection.propTypes = {
  currentState: PropTypes.number,
  states: PropTypes.array.isRequired,
  intl: intlShape.isRequired,
  hasFinished: PropTypes.bool,
}

export default injectIntl(ProgressBarSection)
