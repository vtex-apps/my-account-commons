import { FIRST_STEP, SECOND_STEP, THIRD_STEP } from '../constants'
import getOrderProgress from '../getOrderProgress'

export default function getPackageProgress(
  pack: any,
  orderStatus: any,
  orderPackages: any
) {
  if (
    getOrderProgress(orderStatus, orderPackages) < THIRD_STEP ||
    orderPackages.length < 2 ||
    !pack
  ) {
    return null
  }
  if (pack.courierStatus && pack.courierStatus.finished) {
    return THIRD_STEP
  }
  if (pack.trackingUrl || pack.trackingNumber) {
    return SECOND_STEP
  }
  return FIRST_STEP
}
