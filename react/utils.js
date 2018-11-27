import React from 'react'
import reduce from 'lodash/reduce'
import { FormattedMessage } from 'react-intl'

export function estimateShipping(deliveryPackage) {
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

export function reduceBundleItems(items) {
  return reduce(
    items,
    (acc, item) => {
      acc = acc.concat(item)
      acc = acc.concat(...checkForAttachments(item))

      if (item.bundleItems && item.bundleItems.length > 0) {
        acc = acc.concat(
          item.bundleItems.map(bundleItem =>
            addBundleItemFlagAndParentItemQuantity(item, bundleItem)
          )
        )
        acc = acc.concat(...item.bundleItems.map(checkForAttachments))
      }

      return acc
    },
    []
  )
}

function checkForAttachments(item) {
  if (item.attachments && item.attachments.length > 0) {
    return item.attachments.map(addAttachmentFlag)
  }

  return []
}

function addAttachmentFlag(attachment) {
  return {
    ...attachment,
    isAttachment: true,
  }
}

function addBundleItemFlagAndParentItemQuantity(product, bundleItem) {
  return {
    ...bundleItem,
    parentItemQuantity: product.quantity,
    isBundleItem: true,
  }
}
