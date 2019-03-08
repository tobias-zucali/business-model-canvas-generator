import { useEffect, useMemo, useState } from 'react'

import getMarkdownSyncApi from 'utils/getMarkdownSyncApi'


const getInitialMarkdownSyncApi = (model) => {
  const markdownSyncApi = getMarkdownSyncApi({ model })
  markdownSyncApi.loadFromLocalStorage()
  return markdownSyncApi
}

export default function useMarkdownSync({
  model,
}) {
  const markdownSyncApi = useMemo(
    () => getInitialMarkdownSyncApi(model),
    []
  )
  const [/* value */, triggerRenderCycle] = useState()
  useEffect(() => {
    markdownSyncApi.setOnChange(triggerRenderCycle)

    return function cleanup() {
      markdownSyncApi.removeOnChange()
    }
  })


  return markdownSyncApi
}
