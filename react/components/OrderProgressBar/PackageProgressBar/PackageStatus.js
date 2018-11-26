import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import getPackageProgress from './getPackageProgress'

class PackageStatus extends Component {
  render() {
    const { pack, status, packages, render } = this.props
    return (
      <Fragment>{render(getPackageProgress(pack, status, packages))}</Fragment>
    )
  }
}

PackageStatus.propTypes = {
  pack: PropTypes.any,
  render: PropTypes.func.isRequired,
  status: PropTypes.number.isRequired,
  packages: PropTypes.number.isRequired,
}

export default PackageStatus
