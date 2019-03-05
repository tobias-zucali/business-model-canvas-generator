import { useMemo, useState } from 'react'
import { deepMergeObjects } from 'utils/object'
import logger from 'utils/logger'

import isPlainObject from 'lodash/isPlainObject'

import { getInitialModel, storeLocal } from 'utils/markdownSync'


export default function useMarkdownSync({
  model,
}) {
  if (!isPlainObject(model)) {
    logger.error('Model must be provided: useMarkdownSync({ model })')
  }
  const initialModel = useMemo(() => getInitialModel(model))
  const [currentModel, setCurrentModel] = useState(initialModel)

  const markdownSync = useMemo(() => ({
    get SECTION_KEYS() {
      return Object.keys(model.sections)
    },
    get sections() {
      return currentModel.sections
    },
    getSection(key) {
      return markdownSync.sections[key]
    },
    updateSection(key, { key: ignoreKey, ...sectionUpdate }) {
      const nextModel = deepMergeObjects(
        currentModel,
        {
          sections: {
            [key]: sectionUpdate,
          },
        }
      )
      storeLocal(nextModel)
      setCurrentModel(nextModel)
    },
    mapSections(callback) {
      return markdownSync.SECTION_KEYS.map((key) => callback(markdownSync.getSection(key)))
    },

    get header() {
      return currentModel.header
    },

    get props() {
      return currentModel.props
    },
    getProps(key) {
      return markdownSync.props[key]
    },
  }), [])
  return markdownSync
}
