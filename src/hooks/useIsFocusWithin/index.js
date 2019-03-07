import { useEffect, useState } from 'react'

import remove from 'lodash/remove'


let watchers = []

const addToGlobalHandlers = (ref, setIsFocusWithin) => {
  watchers.push({
    isFocusWithin: false,
    ref,
    setIsFocusWithin,
  })
  if (Object.keys(watchers).length === 1) {
    document.body.addEventListener('mousedown', checkIfFocusIsWithin)
    document.body.addEventListener('keydown', checkIfFocusIsWithin)
    document.body.addEventListener('keyup', checkIfFocusIsWithin)
  }
}

const removeFromGlobalHandlers = (ref) => {
  remove(watchers, (watcher) => watcher.ref === ref)

  if (Object.keys(watchers).length === 0) {
    document.body.removeEventListener('mousedown', checkIfFocusIsWithin)
    document.body.removeEventListener('keydown', checkIfFocusIsWithin)
    document.body.removeEventListener('keyup', checkIfFocusIsWithin)
  }
}

const checkIfFocusIsWithin = ({ target }) => {
  watchers = watchers.map((watcher) => {
    const currentElement = watcher.ref.current
    if (!currentElement) {
      return watcher
    }
    const isFocusWithin = currentElement.contains(target)
    if (watcher.isFocusWithin === isFocusWithin) {
      return watcher
    } else {
      watcher.setIsFocusWithin(isFocusWithin)
      return {
        ...watcher,
        isFocusWithin,
      }
    }
  })
}

export default function useIsFocusWithin(ref) {
  const [isFocusWithin, setIsFocusWithin] = useState(false)
  useEffect(() => {
    addToGlobalHandlers(ref, setIsFocusWithin)

    return function cleanup() {
      removeFromGlobalHandlers(ref)
    }
  }, [])

  return isFocusWithin
}
