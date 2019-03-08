import { getArrayObjectKeys } from 'utils/array'
import isPlainObject from 'lodash/isPlainObject'
import findIndex from 'lodash/findIndex'
import debounce from 'lodash/debounce'
import FileSaver from 'file-saver'

import modelToMarkdown from './modelToMarkdown'
import markdownToModel from './markdownToModel'

const storeLocal = debounce((model) => {
  localStorage.setItem(model.localStorageKey, modelToMarkdown(model))
}, 250)


export default function getMarkdownSyncApi({
  model,
}) {
  if (!isPlainObject(model)) {
    throw new Error('Model must be provided: useMarkdownSync({ model })')
  }

  let currentModel = model
  let onModelChange
  const handleModelChange = (nextModel) => {
    currentModel = nextModel
    storeLocal(nextModel)
    if (onModelChange) {
      onModelChange(nextModel)
    }
  }

  const markdownSyncApi = {
    loadFromFile(file) {
      return new Promise((resolve, reject) => {
        const fileReader = new FileReader()
        fileReader.onload = (event) => {
          markdownSyncApi.loadMarkdown(
            event.target.result
          )
          resolve()
        }
        fileReader.onerror = reject
        fileReader.readAsText(file)
      })
    },
    loadFromLocalStorage() {
      markdownSyncApi.loadMarkdown(
        localStorage.getItem(model.localStorageKey)
      )
    },
    loadMarkdown(markdown) {
      if (markdown) {
        handleModelChange(
          markdownToModel(model, markdown)
        )
      }
    },
    saveAs() {
      const blob = new Blob([modelToMarkdown(currentModel)], { type: 'text/plain;charset=utf-8' })
      const fileName = `business model canvas - ${currentModel.header.value.substr(0, 20).replace(/[^a-zA-Z0-9]+/g, ' ')}.txt`
      FileSaver.saveAs(blob, fileName)
    },
    reset() {
      handleModelChange(model)
    },

    setOnChange(nextOnModelChange) {
      onModelChange = nextOnModelChange
    },
    removeOnChange() {
      onModelChange = null
    },

    get SECTION_KEYS() {
      return getArrayObjectKeys(model.sections, 'key')
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
      if (!isPlainObject(sectionUpdate)) {
        throw new Error('Invalid arguments for markdownSyncApi.updateSection(key: string, sectionUpdate: object)')
      }
      const index = markdownSyncApi.getSectionIndex(key)

      if (index === -1) {
        throw new Error(`Section with key "${key}" not available in model`, model)
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
      if (!isPlainObject(headerUpdate)) {
        throw new Error('Invalid arguments for markdownSyncApi.updateHeader(headerUpdate: object)')
      }
      handleModelChange({
        ...currentModel,
        header: {
          ...currentModel.header,
          ...headerUpdate,
        },
      })
    },

    get PROP_KEYS() {
      return getArrayObjectKeys(model.props, 'key')
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
      if (!isPlainObject(propertyUpdate)) {
        throw new Error('Invalid arguments for markdownSyncApi.updateHeader(key: string, propertyUpdate: object)')
      }

      const index = markdownSyncApi.getPropertyIndex(key)

      if (index === -1) {
        throw new Error(`Property with key "${key}" not available in model`, model)
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
  }

  return markdownSyncApi
}
