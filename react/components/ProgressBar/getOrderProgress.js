import {
  FIRST_STEP,
  SECOND_STEP,
  THIRD_STEP,
  FOURTH_STEP,
  FIFTH_STEP,
} from './constants'
import { isDelivered } from './utils'

const statusMap = {
  'order-created': FIRST_STEP,
  'order-completed': FIRST_STEP,
  'on-order-completed': FIRST_STEP,
  'payment-pending': SECOND_STEP,
  'window-to-cancel': THIRD_STEP,
  'approve-payment': SECOND_STEP,
  'payment-approved': THIRD_STEP,
  'ready-for-handling': THIRD_STEP,
  'authorize-fullfilment': THIRD_STEP,
  'release-to-fulfillment': THIRD_STEP,
  handling: THIRD_STEP,
  invoice: THIRD_STEP,
  invoiced: FOURTH_STEP,
}

export default function getOrderProgress(status, packages) {
  let progress = statusMap[status]
  if (
    progress === FOURTH_STEP &&
    (isDelivered(packages) || isCarrierHandling(packages))
  ) {
    progress = FIFTH_STEP
  }
  return progress
}

function isCarrierHandling(packages) {
  let isCarrierHandling = true
  if (packages.length === 0) {
    isCarrierHandling = false
  }
  packages.map(pack => {
    if (
      !pack.package ||
      !pack.package.courierStatus ||
      (pack.package.courierStatus.data &&
        pack.package.courierStatus.data.length === 0)
    ) {
      isCarrierHandling = false
      return
    }
  })
  return isCarrierHandling
}
