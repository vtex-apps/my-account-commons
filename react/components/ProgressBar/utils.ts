import { FIFTH_STEP, THIRD_STEP, FOURTH_STEP } from './constants'

export function generateProgressBarStates(
  progressBarStates: any[],
  currentState: number,
  packages: any
) {
  const wasDelivered = isDelivered(packages)
  const isPickup = isOrderPickUp(packages)

  const states = progressBarStates.map((state, index) => {
    let label = state.todo

    if (isPickup && index == FOURTH_STEP) {
      if (index > currentState) {
        label = state.todo_pickup
      } else if (wasDelivered) {
        label = state.done_pickup
      } else {
        label = state.doing_pickup
      }
    } else if (index < currentState) {
      label = state.done
    } else if (index == currentState) {
      if (index == FIFTH_STEP && wasDelivered) {
        label = state.done
      } else {
        label = state.doing
      }
    }

    return {
      ...state,
      label: label,
    }
  })

  return isPickup ? states.splice(0, 4) : states
}

export function isDelivered(packages: any) {
  let isDelivered = true
  if (packages.length === 0) {
    isDelivered = false
  }
  packages.map((pack: any) => {
    if (
      !pack.package ||
      !pack.package.courierStatus ||
      pack.package.courierStatus.finished === false
    ) {
      isDelivered = false
      return
    }
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
