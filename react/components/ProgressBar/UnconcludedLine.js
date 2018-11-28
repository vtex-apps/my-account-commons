import React from 'react'
import PropTypes from 'prop-types'

const UnconcludedLine = ({ isPackage }) => {
  return (
    <div
      className={`${
        isPackage
          ? 'myo-package-progress-bar__line w3-ns w-50'
          : 'myo-progress-bar__line w-20'
      } myo-progress-bar__height1 bt bw1 b--muted-3 mt5`}
    />
  )
}

UnconcludedLine.propTypes = {
  isPackage: PropTypes.bool,
}

export default UnconcludedLine
