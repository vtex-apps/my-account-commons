import React from 'react'
import reduce from 'lodash/reduce'
import { FormattedMessage } from 'react-intl'

function estimateShipping(deliveryPackage) {
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

function reduceBundleItems(items) {
  return reduce(
    items,
    (acc, item) => {
      acc = acc.concat(item)
      acc = acc.concat(...checkForAttachments(item))

      if (item.bundleItems && item.bundleItems.length > 0) {
        acc = acc.concat(
          item.bundleItems.map((bundleItem) =>
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

function fixImageUrl(imageUrl, width = DEFAULT_WIDTH, height = DEFAULT_HEIGHT) {
  return changeImageUrlSize(
    replaceHttpToRelativeProtocol(cleanImageUrl(imageUrl)),
    width,
    height
  )
}

export default { fixImageUrl, reduceBundleItems, estimateShipping }

const DEFAULT_WIDTH = 50
const DEFAULT_HEIGHT = 50
const DEFAULT_HDF = 1

const baseUrlRegex = new RegExp(/.+ids\/(\d+)(?:-(\d+)-(\d+)|)\//)
const sizeRegex = new RegExp(/-(\d+)-(\d+)/)

function changeImageUrlSize(
  imageUrl,
  width,
  height,
  highDensityFactor = DEFAULT_HDF
) {
  // imageUrl example http://omniera.vteximg.com.br/arquivos/ids/155401-135-135/CAN-09-04--1-.jpg
  if (!imageUrl || !width || !height) return undefined
  const widthCalc = width * highDensityFactor
  const heightCalc = height * highDensityFactor
  if (imageUrl.slice(-1) !== '/') {
    return `${imageUrl}?width=${widthCalc}&height=${heightCalc}&aspect=true`
  }
  const resizedImageUrl = imageUrl.slice(0, -1) // Remove last "/"
  return `${resizedImageUrl}-${widthCalc}-${heightCalc}`
}

function replaceHttpToRelativeProtocol(url) {
  if (!url) {
    return undefined
  }
  return url.replace(/https:\/\/|http:\/\//, '//')
}

function cleanImageUrl(imageUrl) {
  let resizedImageUrl = imageUrl
  const result = baseUrlRegex.exec(imageUrl)
  if (result && result.length > 0) {
    if (
      result.length === 4 &&
      result[2] !== undefined &&
      result[3] !== undefined
    ) {
      resizedImageUrl = result[0].replace(sizeRegex, '')
    } else {
      resizedImageUrl = result[0]
    }
    return resizedImageUrl
  }
  return resizedImageUrl
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
