import {
  FIRST_STEP,
  SECOND_STEP,
  THIRD_STEP,
} from '../components/ProgressBar/constants'

import getPackageProgress from '../components/ProgressBar/PackageProgressBar/getPackageProgress'
import deliveredOrder from '../mocks/DeliveredOrder'
import notDeliveredOrder from '../mocks/NotDeliveredOrder'

describe('getPackageProgress', () => {
  it('Should return null when the order has less than 2 packages', () => {
    const pack = {
      courier: 'Teste CHECKOUT Sedex',
      trackingNumber: '4132244343',
      invoiceKey: null,
      trackingUrl: 'vtex.com.br',
      courierStatus: {
        status: 'unknown',
        finished: true,
        data: [],
      },
    }
    expect(getPackageProgress(pack, notDeliveredOrder.status, [pack])).toEqual(
      null
    )
  })

  it('Should return null when the order progress bar hasnt get to the third step yet', () => {
    expect(
      getPackageProgress(
        deliveredOrder.packageAttachment.packages[0],
        'payment-pending',
        deliveredOrder.packageAttachment.packages
      )
    ).toEqual(null)
  })

  it('Should return FIRST_STEP when the package does not have courierStatus as finished, nor trackingUrl and trackingNumber ', () => {
    const pack = {
      items: [
        {
          itemIndex: 1,
          quantity: 1,
          price: 3300,
          description: null,
        },
      ],
      courier: 'Transportadora',
      trackingNumber: null,
      trackingUrl: null,
      courierStatus: {
        status: 'unknown',
        finished: false,
        data: [],
      },
    }
    expect(
      getPackageProgress(
        pack,
        deliveredOrder.status,
        deliveredOrder.packageAttachment.packages
      )
    ).toEqual(FIRST_STEP)
  })

  it('Should return SECOND_STEP when package has trackingUrl or trackingNumber', () => {
    const pack = {
      items: [
        {
          itemIndex: 1,
          quantity: 1,
          price: 3300,
          description: null,
        },
      ],
      courier: 'Transportadora',
      trackingUrl: 'jadlog.com.br',
      trackingNumber: '24343',
      courierStatus: {
        status: 'unknown',
        finished: false,
        data: [],
      },
    }
    expect(
      getPackageProgress(
        pack,
        deliveredOrder.status,
        deliveredOrder.packageAttachment.packages
      )
    ).toEqual(SECOND_STEP)
  })

  it('Should return THIRD_STEP when package has courierStatus as finished', () => {
    const pack = {
      items: [
        {
          itemIndex: 1,
          quantity: 1,
          price: 3300,
          description: null,
        },
      ],
      courier: 'Transportadora',
      trackingUrl: null,
      trackingNumber: null,
      courierStatus: {
        status: 'unknown',
        finished: true,
        data: [],
      },
    }

    expect(
      getPackageProgress(
        pack,
        deliveredOrder.status,
        deliveredOrder.packageAttachment.packages
      )
    ).toEqual(THIRD_STEP)
  })
})
