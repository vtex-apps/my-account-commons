import transformStates from '../components/ProgressBar/transformStates'

describe('transformStates', () => {
  it('Should return the right states when the number of input states is even', () => {
    const states = [
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
    ]

    const transformedStates = [
      {
        todo: 'order.progress.confirmOrder',
        done: 'order.progress.orderConfirmed',
        doing: 'order.progress.confirmingOrder',
        originalIndex: 0,
      },
      { isLine: true, originalIndex: 0 },
      {
        todo: 'order.progress.approvePayment',
        done: 'order.progress.paymentApproved',
        doing: 'order.progress.approvingPayment',
        originalIndex: 1,
      },
    ]
    expect(transformStates(states)).toEqual(transformedStates)
  })
  it('Should return the right states when the number of input states is odd', () => {
    const states = [
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
        todo: 'order.progress.confirmOrder',
        done: 'order.progress.orderConfirmed',
        doing: 'order.progress.confirmingOrder',
      },
    ]

    const transformedStates = [
      {
        todo: 'order.progress.confirmOrder',
        done: 'order.progress.orderConfirmed',
        doing: 'order.progress.confirmingOrder',
        originalIndex: 0,
      },
      { isLine: true, originalIndex: 0 },
      {
        todo: 'order.progress.approvePayment',
        done: 'order.progress.paymentApproved',
        doing: 'order.progress.approvingPayment',
        originalIndex: 1,
      },
      { isLine: true, originalIndex: 1 },
      {
        todo: 'order.progress.confirmOrder',
        done: 'order.progress.orderConfirmed',
        doing: 'order.progress.confirmingOrder',
        originalIndex: 2,
      },
    ]
    expect(transformStates(states)).toEqual(transformedStates)
  })

  it('Should return the right states when the the length of the input states is 7', () => {
    const states = [
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
        todo: 'order.progress.confirmOrder',
        done: 'order.progress.orderConfirmed',
        doing: 'order.progress.confirmingOrder',
      },
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
        todo: 'order.progress.confirmOrder',
        done: 'order.progress.orderConfirmed',
        doing: 'order.progress.confirmingOrder',
      },
      {
        todo: 'order.progress.confirmOrder',
        done: 'order.progress.orderConfirmed',
        doing: 'order.progress.confirmingOrder',
      },
    ]

    const transformedStates = [
      {
        todo: 'order.progress.confirmOrder',
        done: 'order.progress.orderConfirmed',
        doing: 'order.progress.confirmingOrder',
        originalIndex: 0,
      },
      { isLine: true, originalIndex: 0 },
      {
        todo: 'order.progress.approvePayment',
        done: 'order.progress.paymentApproved',
        doing: 'order.progress.approvingPayment',
        originalIndex: 1,
      },
      { isLine: true, originalIndex: 1 },
      {
        todo: 'order.progress.confirmOrder',
        done: 'order.progress.orderConfirmed',
        doing: 'order.progress.confirmingOrder',
        originalIndex: 2,
      },
      { isLine: true, originalIndex: 2 },
      {
        todo: 'order.progress.confirmOrder',
        done: 'order.progress.orderConfirmed',
        doing: 'order.progress.confirmingOrder',
        originalIndex: 3,
      },
      { isLine: true, originalIndex: 3 },
      {
        todo: 'order.progress.approvePayment',
        done: 'order.progress.paymentApproved',
        doing: 'order.progress.approvingPayment',
        originalIndex: 4,
      },
      { isLine: true, originalIndex: 4 },
      {
        todo: 'order.progress.confirmOrder',
        done: 'order.progress.orderConfirmed',
        doing: 'order.progress.confirmingOrder',
        originalIndex: 5,
      },
      { isLine: true, originalIndex: 5 },
      {
        todo: 'order.progress.confirmOrder',
        done: 'order.progress.orderConfirmed',
        doing: 'order.progress.confirmingOrder',
        originalIndex: 6,
      },
    ]
    expect(transformStates(states)).toEqual(transformedStates)
  })

  it('Should return the right states when the the length of the input states is 10', () => {
    const states = [
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
        todo: 'order.progress.confirmOrder',
        done: 'order.progress.orderConfirmed',
        doing: 'order.progress.confirmingOrder',
      },
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
        todo: 'order.progress.confirmOrder',
        done: 'order.progress.orderConfirmed',
        doing: 'order.progress.confirmingOrder',
      },
      {
        todo: 'order.progress.confirmOrder',
        done: 'order.progress.orderConfirmed',
        doing: 'order.progress.confirmingOrder',
      },
      {
        todo: 'order.progress.confirmOrder',
        done: 'order.progress.orderConfirmed',
        doing: 'order.progress.confirmingOrder',
      },
      {
        todo: 'order.progress.confirmOrder',
        done: 'order.progress.orderConfirmed',
        doing: 'order.progress.confirmingOrder',
      },
      {
        todo: 'order.progress.confirmOrder',
        done: 'order.progress.orderConfirmed',
        doing: 'order.progress.confirmingOrder',
      },
    ]

    const transformedStates = [
      {
        todo: 'order.progress.confirmOrder',
        done: 'order.progress.orderConfirmed',
        doing: 'order.progress.confirmingOrder',
        originalIndex: 0,
      },
      { isLine: true, originalIndex: 0 },
      {
        todo: 'order.progress.approvePayment',
        done: 'order.progress.paymentApproved',
        doing: 'order.progress.approvingPayment',
        originalIndex: 1,
      },
      { isLine: true, originalIndex: 1 },
      {
        todo: 'order.progress.confirmOrder',
        done: 'order.progress.orderConfirmed',
        doing: 'order.progress.confirmingOrder',
        originalIndex: 2,
      },
      { isLine: true, originalIndex: 2 },
      {
        todo: 'order.progress.confirmOrder',
        done: 'order.progress.orderConfirmed',
        doing: 'order.progress.confirmingOrder',
        originalIndex: 3,
      },
      { isLine: true, originalIndex: 3 },
      {
        todo: 'order.progress.approvePayment',
        done: 'order.progress.paymentApproved',
        doing: 'order.progress.approvingPayment',
        originalIndex: 4,
      },
      { isLine: true, originalIndex: 4 },
      {
        todo: 'order.progress.confirmOrder',
        done: 'order.progress.orderConfirmed',
        doing: 'order.progress.confirmingOrder',
        originalIndex: 5,
      },
      { isLine: true, originalIndex: 5 },
      {
        todo: 'order.progress.confirmOrder',
        done: 'order.progress.orderConfirmed',
        doing: 'order.progress.confirmingOrder',
        originalIndex: 6,
      },
      { isLine: true, originalIndex: 6 },
      {
        todo: 'order.progress.confirmOrder',
        done: 'order.progress.orderConfirmed',
        doing: 'order.progress.confirmingOrder',
        originalIndex: 7,
      },
      { isLine: true, originalIndex: 7 },
      {
        todo: 'order.progress.confirmOrder',
        done: 'order.progress.orderConfirmed',
        doing: 'order.progress.confirmingOrder',
        originalIndex: 8,
      },
      { isLine: true, originalIndex: 8 },
      {
        todo: 'order.progress.confirmOrder',
        done: 'order.progress.orderConfirmed',
        doing: 'order.progress.confirmingOrder',
        originalIndex: 9,
      },
    ]
    expect(transformStates(states)).toEqual(transformedStates)
  })
})
