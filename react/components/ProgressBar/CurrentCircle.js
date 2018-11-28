import React from 'react'
import PropTypes from 'prop-types'
import { intlShape, injectIntl } from 'react-intl'

import getNamespace from './getNamespace'

const CurrentCircle = ({ label, intl, isPackage }) => (
  <div
    className={`relative z-0 ${getNamespace(
      isPackage
    )}__margin flex items-center flex-column ma3 br-100`}>
    <div
      className={`br-100 mb2 myo-progress-bar__height1 w1 relative ba b--white bw1 ${
        isPackage ? 'myo-package-progress-bar' : 'myo-progress-bar'
      }__ma-inner-circle c-success bg-success`}
    />
    <div className="absolute myo-progress-bar__highlighted-circle myo-progress-bar__subtitle mt5 pa3 tc f6">
      <span className={`${getNamespace(isPackage)}__text c-on-base`}>
        {intl.formatMessage({
          id: label,
        })}
      </span>
    </div>
  </div>
)

CurrentCircle.propTypes = {
  label: PropTypes.string.isRequired,
  isPackage: PropTypes.bool,
  intl: intlShape.isRequired,
}

export default injectIntl(CurrentCircle)
