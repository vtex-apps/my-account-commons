import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

import getOrderProgress from './getOrderProgress'

class OrderStatus extends Component {
  render() {
    const { status, packages, render } = this.props
    return <Fragment>{render(getOrderProgress(status, packages))}</Fragment>
  }
}

OrderStatus.propTypes = {
  render: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
  packages: PropTypes.arrayOf(PropTypes.object),
}

export default OrderStatus
