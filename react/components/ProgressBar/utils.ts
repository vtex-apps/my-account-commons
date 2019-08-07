import { FIFTH_STEP, THIRD_STEP } from './constants'

export function generateProgressBarStates(
  states: any[],
  currentState: number,
  packages: any
) {
  return states.map((state, index) => {
    let label = null
    if (
      index === FIFTH_STEP &&
      currentState === FIFTH_STEP &&
      isDelivered(packages)
    ) {
      label = state.done
    } else if (
      index === FIFTH_STEP &&
      currentState === FIFTH_STEP &&
      isOrderReadyToPickUp(packages)
    ) {
      label = state.doing_pickup
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

  return packages.every((pkg: any) => pkg.deliveryChannel === 'pickup-in-point')
}
