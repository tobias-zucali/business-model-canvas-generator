import { getArrayObjectKeys } from 'utils/array'
import isPlainObject from 'lodash/isPlainObject'
import findIndex from 'lodash/findIndex'
import debounce from 'lodash/debounce'
import FileSaver from 'file-saver'

import { storeLocal } from './index'
import modelToMarkdown from './modelToMarkdown'

const debouncedStoreLocal = debounce(storeLocal, 250)


export default function getMarkdownSyncApi({
  initialModel,
  model,
  onModelChange,
}) {
  if (!isPlainObject(initialModel)) {
    throw new Error('Model must be provided: useMarkdownSync({ model })')
  }

  let currentModel = initialModel
  const handleModelChange = (nextModel) => {
    currentModel = nextModel
    debouncedStoreLocal(nextModel)
    onModelChange(nextModel)
  }

  const markdownSyncApi = {
    get SECTION_KEYS() {
      return getArrayObjectKeys(initialModel.sections, 'key')
    },
    get sections() {
      return currentModel.sections
    },
    getSectionIndex(key) {
      return findIndex(markdownSyncApi.sections, ['key', key])
    },
    getSection(key) {
      return markdownSyncApi.sections[
        markdownSyncApi.getSectionIndex(key)
      ]
    },
    updateSection(key, sectionUpdate) {
      const index = markdownSyncApi.getSectionIndex(key)

      if (index === -1) {
        throw new Error(`Section with key "${key}" not available in model`, initialModel)
      }
      const currentSection = currentModel.sections[index]
      const nextSections = Array.from(currentModel.sections)
      nextSections[index] = {
        ...currentSection,
        ...sectionUpdate,
      }

      handleModelChange({
        ...currentModel,
        sections: nextSections,
      })
    },

    get header() {
      return currentModel.header
    },
    updateHeader(headerUpdate) {
      handleModelChange({
        ...currentModel,
        header: headerUpdate,
      })
    },

    get PROP_KEYS() {
      return getArrayObjectKeys(initialModel.props, 'key')
    },
    get props() {
      return currentModel.props
    },
    getPropertyIndex(key) {
      return findIndex(markdownSyncApi.props, ['key', key])
    },
    getProperty(key) {
      return markdownSyncApi.props[
        markdownSyncApi.getPropertyIndex(key)
      ]
    },
    updateProperty(key, propertyUpdate) {
      const index = markdownSyncApi.getPropertyIndex(key)

      if (index === -1) {
        throw new Error(`Property with key "${key}" not available in model`, initialModel)
      }
      const currentProperty = currentModel.props[index]
      const nextProps = Array.from(currentModel.props)
      nextProps[index] = {
        ...currentProperty,
        ...propertyUpdate,
      }

      handleModelChange({
        ...currentModel,
        props: nextProps,
      })
    },

    reset() {
      handleModelChange(model)
    },
    saveAs() {
      const blob = new Blob([modelToMarkdown(currentModel)], { type: 'text/plain;charset=utf-8' })
      const fileName = `business model canvas - ${currentModel.header.substr(0, 20).replace(/[^a-zA-Z0-9]+/g, ' ')}.txt`
      FileSaver.saveAs(blob, fileName)
    },
  }

  return markdownSyncApi
}
