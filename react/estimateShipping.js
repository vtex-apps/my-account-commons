import React from 'react'
import { FormattedMessage } from 'react-intl'

export default deliveryPackage => {
  const {
    shippingEstimate: slaShippingEstimate,
    shippingEstimateDate: slaShippingEstimateDate,
  } = deliveryPackage

  let shippingEstimate
  if (slaShippingEstimateDate) {
    const isEstimateInHoursOrMinutes =
      slaShippingEstimate.match(/\d+|[a-zA-Z]+/g)[1].indexOf('h') !== -1 ||
      slaShippingEstimate.match(/\d+|[a-zA-Z]+/g)[1].indexOf('m') !== -1

    shippingEstimate = {
      date: slaShippingEstimateDate,
      isEstimateInHoursOrMinutes: isEstimateInHoursOrMinutes,
    }
  } else if (slaShippingEstimate) {
    const shippingEstimateParts = slaShippingEstimate.match(/\d+|[a-zA-Z]+/g)

    const number = parseInt(shippingEstimateParts[0])
    const type = shippingEstimateParts[1]

    const label = (
      <FormattedMessage
        id={`order.shippingEstimate.${type}`}
        values={{ timeAmount: number }}
      />
    )

    shippingEstimate = {
      unit: number,
      type: type,
      label: label,
    }
  }
  return shippingEstimate
}
