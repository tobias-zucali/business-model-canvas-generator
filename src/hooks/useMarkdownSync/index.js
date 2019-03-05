import { useMemo, useState } from 'react'

import { getInitialModel, getMarkdownSyncApi } from 'utils/markdownSync'


export default function useMarkdownSync({
  model,
}) {
  const initialModel = useMemo(() => getInitialModel(model))
  const [currentModel, setCurrentModel] = useState(initialModel)

  const markdownSyncApi = useMemo(
    () => getMarkdownSyncApi({
      model: currentModel,
      onModelChange: setCurrentModel,
    }),
    []
  )
  return markdownSyncApi
}
