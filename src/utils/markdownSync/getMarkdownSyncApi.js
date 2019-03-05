import { deepMergeObjects } from 'utils/object'
import isPlainObject from 'lodash/isPlainObject'

import { storeLocal } from './index'


export default function getMarkdownSyncApi({
  model,
  onModelChange,
}) {
  if (!isPlainObject(model)) {
    throw new Error('Model must be provided: useMarkdownSync({ model })')
  }

  let currentModel = model

  const markdownSyncApi = {
    get SECTION_KEYS() {
      return Object.keys(model.sections)
    },
    get sections() {
      return currentModel.sections
    },
    getSection(key) {
      return markdownSyncApi.sections[key]
    },
    updateSection(key, { key: ignoreKey, ...sectionUpdate }) {
      throw new Error('TODOimplement for arrays!')
      currentModel = deepMergeObjects(
        currentModel,
        {
          sections: {
            [key]: sectionUpdate,
          },
        }
      )
      storeLocal(currentModel)
      onModelChange(currentModel)
    },
    mapSections(callback) {
      return markdownSyncApi.SECTION_KEYS.map((key) => callback(markdownSyncApi.getSection(key)))
    },

    get header() {
      return currentModel.header
    },

    get props() {
      return currentModel.props
    },
    getProps(key) {
      return markdownSyncApi.props[key]
    },
  }

  return markdownSyncApi
}
