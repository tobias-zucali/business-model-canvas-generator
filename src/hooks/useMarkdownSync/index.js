import { useMemo, useState } from 'react'

import { getInitialModel, getMarkdownSyncApi } from 'utils/markdownSync'


export default function useMarkdownSync({
  model,
}) {
  const initialModel = useMemo(() => getInitialModel(model))
  const [currentModel, setCurrentModel] = useState(initialModel)

  const markdownSyncApi = useMemo(
    () => getMarkdownSyncApi({
      initialModel: currentModel,
      model,
      onModelChange: setCurrentModel,
    }),
    []
  )
  return markdownSyncApi
}
