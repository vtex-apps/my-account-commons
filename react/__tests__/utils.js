import utils from '../utils'

describe('estimateShipping', () => {
  it('with unit as days should return the correct payload', () => {
    const currentDate = new Date()
    const mockDeliveryPackage = {
      shippingEstimate: '1d',
      shippingEstimateDate: currentDate,
    }

    const response = utils.estimateShipping(mockDeliveryPackage)

    expect(response.date).toBe(currentDate)
    expect(response.isEstimateInHoursOrMinutes).toBe(false)
  })

  it('with unit as hours should return the correct payload', () => {
    const currentDate = new Date()
    const mockDeliveryPackage = {
      shippingEstimate: '1h',
      shippingEstimateDate: currentDate,
    }

    const response = utils.estimateShipping(mockDeliveryPackage)

    expect(response.date).toBe(currentDate)
    expect(response.isEstimateInHoursOrMinutes).toBe(true)
  })

  it('with only shippingEstimate the correct payload', () => {
    const currentDate = new Date()
    const value = '1'
    const type = 'h'
    const mockDeliveryPackage = {
      shippingEstimate: `${value}${type}`,
    }

    const response = utils.estimateShipping(mockDeliveryPackage)

    expect(response.unit).toBe(parseInt(value))
    expect(response.type).toBe(type)
    expect(response.label).not.toBeNull()
  })

  it('with only shippingEstimateDate returns the correct payload', () => {
    const currentDate = new Date()
    const mockDeliveryPackage = {
      shippingEstimateDate: currentDate,
    }

    const response = utils.estimateShipping(mockDeliveryPackage)

    expect(response.date).toBe(currentDate)
  })

  it('without info returns null', () => {
    const mockedDeliveryPackage = {}

    const response = utils.estimateShipping(mockedDeliveryPackage)

    expect(response).toBeNull()
  })

  it('with empty shippingEstimate unit should return shippingEstimateDate', () => {
    const currentDate = new Date()
    const mockDeliveryPackage = {
      shippingEstimate: '1',
      shippingEstimateDate: currentDate,
    }

    const response = utils.estimateShipping(mockDeliveryPackage)

    expect(response.date).toBe(currentDate)
  })
})
