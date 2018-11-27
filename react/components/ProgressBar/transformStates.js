export default function transformStates(states) {
  const newStates = states.reduce((acc, state, index) => {
    return index === states.length - 1
      ? acc.concat({ ...state, originalIndex: index })
      : acc.concat(
          { ...state, originalIndex: index },
          { isLine: true, originalIndex: index }
        )
  }, [])

  return newStates
}
