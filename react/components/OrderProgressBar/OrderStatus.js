import React, { Component } from 'react'
import PropTypes from 'prop-types'

import getOrderProgress from './getOrderProgress'

class OrderStatus extends Component {
  render() {
    const { status, packages, render } = this.props
    return <div>{render(getOrderProgress(status, packages))}</div>
  }
}

OrderStatus.propTypes = {
  render: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
  packages: PropTypes.arrayOf(PropTypes.object),
}

export default OrderStatus
