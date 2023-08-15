import { FIFTH_STEP, progressBarStates, THIRD_STEP } from './constants'
import getOrderProgress from './getOrderProgress'

const OutputPackageType = 'Output'

export function generateProgressBarStates(
  progressBarStates: any[],
  currentState: number,
  packages: any
) {
  const wasDelivered = isDelivered(packages)
  const isPickup = isOrderPickUp(packages)

  return progressBarStates.map((_state, index) => {
    let label
    const state = _state.pickup
      ? isPickup
        ? _state.pickup
        : _state.shipping
      : _state

    if (index < currentState) {
      label = state.done
    } else if (index === currentState) {
      if (index === FIFTH_STEP && wasDelivered) {
        label = state.done
      } else {
        label = state.doing
      }
    } else {
      label = state.todo
    }

    return {
      ...state,
      label: label,
    }
  })
}

export function getCurrentProgressBarState(status: string, packages: any) {
  const currentProgressIndex = getOrderProgress(status, packages)

  const generatedProgressBarStates = generateProgressBarStates(
    progressBarStates,
    currentProgressIndex,
    packages
  )

  return generatedProgressBarStates[currentProgressIndex]?.label
}

export function isDelivered(packages: any) {
  if (packages == null || packages.length === 0) {
    return false
  }

  const isDelivered = !packages.some(
    (pack: any) => {
      if (!pack?.package) return true // In case you can't tell whether the invoice is input or output, the order as a whole should be considered as not delivered.

      return pack?.package?.type === OutputPackageType &&
      !pack?.package?.courierStatus?.finished
    })

  return isDelivered
}

export function generatePackageProgressBarStates(
  states: any,
  currentState: any,
  pack: any
) {
  return states.map((state: any, index: number) => {
    let label = null
    if (
      index === THIRD_STEP &&
      currentState === THIRD_STEP &&
      pack.courierStatus &&
      pack.courierStatus.finished === true
    ) {
      label = state.done
    } else if (currentState === index) {
      label = state.doing
    } else if (currentState > index) {
      label = state.done
    } else {
      label = state.todo
    }
    return {
      ...state,
      label: label,
    }
  })
}

export function isOrderReadyToPickUp(packages: any) {
  if (packages == null || packages.length === 0) return false

  return packages.every((item: any) => {
    const isPickUp = item.deliveryChannel === 'pickup-in-point'
    const isReadyToPickUp =
      !item.shippingEstimateDate ||
      Date.now() >= new Date(item.shippingEstimateDate).getTime()
    return isPickUp && isReadyToPickUp
  })
}

export function isOrderPickUp(packages: any) {
  if (packages == null || packages.length === 0) return false

  return packages.every((pck: any) => pck.deliveryChannel === 'pickup-in-point')
}
