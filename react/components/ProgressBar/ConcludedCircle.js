import React from 'react'
import PropTypes from 'prop-types'
import { intlShape, injectIntl } from 'react-intl'

import getNamespace from './getNamespace'

const ConcludedCircle = ({ label, intl, isPackage }) => (
  <div
    className={`relative flex items-center flex-column br-100 myo-progress-bar__height1 ${
      isPackage
        ? 'myo-package-progress-bar__circle myo-package-progress-bar__margin'
        : 'myo-progress-bar__circle mh2'
    } w1 bg-success ba b--white bw1 mv3 `}>
    <div className="myo-progress-bar__subtitle mt5 pa3 tc f6">
      <span className={`c-on-base ${getNamespace(isPackage)}__text`}>
        {intl.formatMessage({
          id: label,
        })}
      </span>
    </div>
  </div>
)

ConcludedCircle.propTypes = {
  label: PropTypes.string.isRequired,
  intl: intlShape.isRequired,
  isPackage: PropTypes.bool,
}

export default injectIntl(ConcludedCircle)
