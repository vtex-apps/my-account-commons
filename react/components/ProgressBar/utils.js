import { FIFTH_STEP, THIRD_STEP } from './constants'

export function generateProgressBarStates(states, currentState, packages) {
  return states.map((state, index) => {
    let label = null
    if (
      index === FIFTH_STEP &&
      currentState === FIFTH_STEP &&
      isDelivered(packages)
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

export function isDelivered(packages) {
  let isDelivered = true
  if (packages.length === 0) {
    isDelivered = false
  }
  packages.map(pack => {
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

export function generatePackageProgressBarStates(states, currentState, pack) {
  return states.map((state, index) => {
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
