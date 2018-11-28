import React from 'react'
import PropTypes from 'prop-types'

const ConcludedLine = ({ isPackage }) => (
  <div
    className={`${
      isPackage
        ? 'myo-package-progress-bar__line w3-ns w-50'
        : 'myo-progress-bar__line w-20'
    } myo-progress-bar__height1 bt bw1 b--success mt5`}
  />
)

ConcludedLine.propTypes = {
  isPackage: PropTypes.bool,
}

export default ConcludedLine
