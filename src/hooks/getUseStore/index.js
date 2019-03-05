import { useState } from 'react'


export default function getUseStore(initialState) {
  const store = {
    state: initialState,
    setState(value) {
      store.state = value
      store.setters.forEach((setter) => setter(store.state))
    },
    setters: [],
  }

  return function useStore() {
    const [state, set] = useState(store.state)
    if (!store.setters.includes(set)) {
      store.setters.push(set)
    }

    return [state, store.setState]
  }
}
