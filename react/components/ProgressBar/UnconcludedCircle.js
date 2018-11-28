import React from 'react'
import { intlShape, injectIntl } from 'react-intl'
import PropTypes from 'prop-types'

import getNamespace from './getNamespace'

const UnconcludedCircle = ({ label, intl, isPackage }) => (
  <div
    className={`relative flex items-center flex-column br-100 myo-progress-bar__height1 w1 ${
      isPackage
        ? 'myo-package-progress-bar__circle myo-package-progress-bar__margin'
        : 'myo-progress-bar__circle'
    } bg-muted-3 ba b--white bw1 mv3 mh2`}>
    <div className="myo-progress-bar__subtitle mt5 pa3 tc f6">
      <span className={`c-muted-3 ${getNamespace(isPackage)}__text`}>
        {intl.formatMessage({
          id: label,
        })}
      </span>
    </div>
  </div>
)

UnconcludedCircle.propTypes = {
  label: PropTypes.string.isRequired,
  intl: intlShape.isRequired,
  isPackage: PropTypes.bool,
}

export default injectIntl(UnconcludedCircle)
