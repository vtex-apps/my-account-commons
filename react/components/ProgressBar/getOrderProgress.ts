import {
  FIRST_STEP,
  SECOND_STEP,
  THIRD_STEP,
  FOURTH_STEP,
  FIFTH_STEP,
} from './constants'
import { isDelivered, isOrderPickUp, isOrderReadyToPickUp } from './utils'

interface StatusMap {
  'order-created': number
  'order-completed': number
  'on-order-completed': number
  'payment-pending': number
  'window-to-cancel': number
  'approve-payment': number
  'payment-approved': number
  'ready-for-handling': number
  'authorize-fullfilment': number
  'release-to-fulfillment': number
  handling: number
  invoice: number
  invoiced: number
  [key: string]: number
}

const statusMap: StatusMap = {
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

function isCarrierHandling(packages: any) {
  if (packages == null || packages.length === 0) return false

  return packages.every(
    (pck: any) => pck.package?.courierStatus?.data?.length > 0
  )
}

export default function getOrderProgress(status: string, packages: any) {
  let progress = statusMap[status]
  const isPickup = isOrderPickUp(packages)
  if (progress === FOURTH_STEP) {
    if (
      isDelivered(packages) ||
      (isPickup && isOrderReadyToPickUp(packages)) ||
      (!isPickup && isCarrierHandling(packages))
    ) {
      progress = FIFTH_STEP
    }
  }
  return progress
}
