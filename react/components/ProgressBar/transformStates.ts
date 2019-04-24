export default function transformStates(states: any) {
  const newStates = states.reduce((acc: any, state: any, index: number) => {
    return index === states.length - 1
      ? acc.concat({ ...state, originalIndex: index })
      : acc.concat(
          { ...state, originalIndex: index },
          { isLine: true, originalIndex: index }
        )
  }, [])

  return newStates
}
