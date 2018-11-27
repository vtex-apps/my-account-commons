import React, { Component } from 'react'
import { intlShape, injectIntl } from 'react-intl'
import PropTypes from 'prop-types'

class Caption extends Component {
  render() {
    const { currentState, progressStates, numberOfStates, intl } = this.props
    return (
      <div className="flex">
        <div style={{ width: `${(currentState / 2) * 100}%` }} />
        <div className="flex-grow-1 tc nowrap">
          <span className="db b c-link hover-c-link c-link--visited">
            {intl.formatMessage({
              id: progressStates.find(
                state => state.originalIndex === currentState
              ).label,
            })}
          </span>
        </div>
        <div
          style={{
            width: `${(1 - currentState / (numberOfStates - 1)) * 100}%`,
          }}
        />
      </div>
    )
  }
}

Caption.propTypes = {
  currentState: PropTypes.number,
  progressStates: PropTypes.array.isRequired,
  intl: intlShape.isRequired,
  numberOfStates: PropTypes.number.isRequired,
}

export default injectIntl(Caption)
