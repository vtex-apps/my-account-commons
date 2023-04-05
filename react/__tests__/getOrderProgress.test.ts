import packagify from '@vtex/delivery-packages'

import getOrderProgress from '../components/ProgressBar/getOrderProgress'
import {
  FIRST_STEP,
  SECOND_STEP,
  THIRD_STEP,
  FOURTH_STEP,
  FIFTH_STEP,
} from '../components/ProgressBar/constants'
import deliveredOrder from '../mocks/NotDeliveredOrder'
import notDeliveredOrder from '../mocks/NotDeliveredOrder'

describe('getOrderProgress', () => {
  it('Should return undefined when status is not mapped', () => {
    const progress = getOrderProgress('order-cancelled', [])
    expect(progress).toEqual(undefined)
  })

  it('Should map status order-created to the first step of the progress bar', () => {
    const progress = getOrderProgress('order-created', [])

    expect(progress).toEqual(FIRST_STEP)
  })

  it('Should map status order-completed to the first step of the progress bar', () => {
    const progress = getOrderProgress('order-completed', [])

    expect(progress).toEqual(FIRST_STEP)
  })

  it('Should map status on-order-completed to the first step of the progress bar', () => {
    const progress = getOrderProgress('on-order-completed', [])

    expect(progress).toEqual(FIRST_STEP)
  })

  it('Should map status payment-pending to the second step of the progress bar', () => {
    const progress = getOrderProgress('payment-pending', [])

    expect(progress).toEqual(SECOND_STEP)
  })

  it('Should map status approve-payment to the second step of the progress bar', () => {
    const progress = getOrderProgress('approve-payment', [])

    expect(progress).toEqual(SECOND_STEP)
  })

  it('Should map status payment-approved to the third step of the progress bar', () => {
    const progress = getOrderProgress('payment-approved', [])

    expect(progress).toEqual(THIRD_STEP)
  })

  it('Should map status ready-for-handling to the third step of the progress bar', () => {
    const progress = getOrderProgress('ready-for-handling', [])

    expect(progress).toEqual(THIRD_STEP)
  })

  it('Should map status authorize-fullfilment to the third step of the progress bar', () => {
    const progress = getOrderProgress('authorize-fullfilment', [])

    expect(progress).toEqual(THIRD_STEP)
  })

  it('Should map status release-to-fullfilment to the third step of the progress bar', () => {
    const progress = getOrderProgress('release-to-fulfillment', [])

    expect(progress).toEqual(THIRD_STEP)
  })

  it('Should map status handling to the third step of the progress bar', () => {
    const progress = getOrderProgress('handling', [])

    expect(progress).toEqual(THIRD_STEP)
  })

  it('Should map status invoice to the third step of the progress bar', () => {
    const progress = getOrderProgress('invoice', [])

    expect(progress).toEqual(THIRD_STEP)
  })

  it('Should map status invoiced to the fourth step of the progress bar', () => {
    const progress = getOrderProgress('invoiced', [])

    expect(progress).toEqual(FOURTH_STEP)
  })

  it('Should map to the fifth step of the progress bar since all packages were delivered and its status is invoiced', () => {
    const packages = packagify(deliveredOrder)

    const progress = getOrderProgress(deliveredOrder.status, packages)

    expect(progress).toEqual(FOURTH_STEP)
  })

  it('Should map to the fourth step of the progress bar since all packages were not delivered even though its status is invoiced', () => {
    const packages = packagify(notDeliveredOrder)

    const progress = getOrderProgress(notDeliveredOrder.status, packages)

    expect(progress).toEqual(FOURTH_STEP)
  })
  it('Should return FIFTH_STEP since all packages have courierStatus.data with length greater than 1', () => {
    const packages = [
      {
        items: [[Object]],
        package: {
          items: [Array],
          invoiceNumber: '243433',
          invoiceValue: 5699,
          invoiceUrl: '',
          trackingNumber: '423243423',
          trackingUrl: 'http://ufcg.edu.br',
          courierStatus: {
            status: 'unknown',
            finished: false,
            data: [
              {
                lastChange: '2015-06-23T00:00:00.0000000+00:00',
                city: 'Rio de Janeiro',
                state: 'RJ',
                description: 'Coletado pela transportadora',
              },
            ],
          },
          index: 0,
        },
        item: undefined,
      },
    ]

    const progress = getOrderProgress('invoiced', packages)

    expect(progress).toEqual(FIFTH_STEP)
  })

  it('Should return FOURTH_STEP since there are packages that do not have courierStatus.data with length greater than 1', () => {
    const packages = [
      {
        package: {
          trackingNumber: '423243423',
          trackingUrl: 'http://ufcg.edu.br',
          type: 'Output',
          courierStatus: {
            status: 'unknown',
            finished: false,
            data: [
              {
                lastChange: '2015-06-23T00:00:00.0000000+00:00',
                city: 'Rio de Janeiro',
                state: 'RJ',
                description: 'Coletado pela transportadora',
              },
            ],
          },
          index: 0,
        },
        item: undefined,
      },
      {
        items: [[Object]],
        package: {
          invoiceNumber: '243433',
          trackingNumber: '423243423',
          trackingUrl: 'http://ufcg.edu.br',
          courierStatus: null,
          index: 0,
        },
        item: undefined,
      },
    ]

    const progress = getOrderProgress('invoiced', packages)

    expect(progress).toEqual(FOURTH_STEP)
  })
})
