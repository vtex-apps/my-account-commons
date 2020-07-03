export const ACTIVE = 'ACTIVE'

export const FIRST_STEP = 0
export const SECOND_STEP = 1
export const THIRD_STEP = 2
export const FOURTH_STEP = 3
export const FIFTH_STEP = 4

export const progressBarStates = [
  {
    todo: 'order.progress.confirmOrder',
    done: 'order.progress.orderConfirmed',
    doing: 'order.progress.confirmingOrder',
  },
  {
    todo: 'order.progress.approvePayment',
    done: 'order.progress.paymentApproved',
    doing: 'order.progress.approvingPayment',
  },
  {
    todo: 'order.progress.handleShipping',
    done: 'order.progress.shippingHandled',
    doing: 'order.progress.handlingShipping',
  },
  {
    shipping: {
      todo: 'order.progress.deliverToCarrier',
      done: 'order.progress.delivered',
      doing: 'order.progress.delivering',
    },
    pickup: {
      todo: 'order.progress.deliverToPickup',
      done: 'order.progress.deliveredToPickup',
      doing: 'order.progress.deliveringToPickup',
    },
  },
  {
    shipping: {
      todo: 'order.progress.ship',
      done: 'order.progress.shipped',
      doing: 'order.progress.shipping',
    },
    pickup: {
      todo: 'order.progress.pickup',
      done: 'order.state.pickedUp',
      doing: 'order.state.ready-for-pickup',
    },
  },
]

export const packageProgressBarStates = [
  {
    todo: 'package.progress.handleShipping',
    done: 'package.progress.shippingHandled',
    doing: 'package.progress.handlingShipping',
  },
  {
    todo: 'package.progress.deliverToCarrier',
    done: 'package.progress.delivered',
    doing: 'package.progress.delivering',
  },
  {
    todo: 'package.progress.ship',
    done: 'package.progress.shipped',
    doing: 'package.progress.shipping',
  },
]
