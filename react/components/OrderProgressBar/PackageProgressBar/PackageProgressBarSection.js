import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { intlShape, injectIntl } from 'react-intl'
import transformStates from '../transformStates'
import PackageProgressBar from './PackageProgressBar'

class PackageProgressBarSection extends Component {
  render() {
    const { currentState, states } = this.props
    const progressStates = transformStates(states)
    if (currentState === null) return null
    return (
      <div className="myo-progress-bar pl6-l flex-column pt4-s pt0-l flex flex-row-l bl-l b--muted-5">
        <div className="tl-m tl-s pr3 myo-package-progress-bar__line-height">
          <span className="myo-package-progress-bar__maxWidth db f7 b--muted-3">
            {this.props.intl.formatMessage({
              id: 'progressBar.package.progress',
            })}
          </span>
          <span className="myo-package-progress-bar__maxWidth db f7 b b--emphasis">
            {this.props.intl.formatMessage({
              id: progressStates.find(
                state => state.originalIndex === currentState
              ).label,
            })}
          </span>
        </div>
        <PackageProgressBar currentState={currentState} states={states} />
      </div>
    )
  }
}

PackageProgressBarSection.propTypes = {
  currentState: PropTypes.number,
  states: PropTypes.array.isRequired,
  intl: intlShape.isRequired,
}

export default injectIntl(PackageProgressBarSection)
