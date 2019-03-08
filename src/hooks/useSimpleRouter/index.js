import { useEffect, useMemo, useState } from 'react'
import isRegExp from 'lodash/isRegExp'
import isNil from 'lodash/isNil'


export const getUrl = () => {
  const { hash } = window.location
  return hash.substr(1)
}
export const push = (url = '') => {
  window.location = `#${url}`
}

export default function useSimpleRouter(routes) {
  const [url, setUrl] = useState(
    useMemo(getUrl, [])
  )
  useEffect(() => {
    const handleHashChange = () => {
      setUrl(getUrl())
    }
    window.addEventListener('hashchange', handleHashChange)

    return function cleanup() {
      window.removeEventListener('hashchange', handleHashChange)
    }
  })

  const result = useMemo(() => {
    let match
    const route = routes.find(({ url: routeUrl }) => {
      if (isNil(routeUrl)) {
        return true
      } else {
        if (isRegExp(routeUrl)) {
          match = url.match(routeUrl)
          return Boolean(match)
        }
        return routeUrl === url
      }
    })

    return {
      match,
      push,
      route: route || { url },
    }
  }, [routes, url])

  return result
}
