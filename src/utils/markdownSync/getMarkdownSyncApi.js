import isPlainObject from 'lodash/isPlainObject'
import findIndex from 'lodash/findIndex'

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
      return model.sections.map(({ key }) => key)
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
        throw new Error(`Section with key "${key}" not available in model`, model)
      }
      const currentSection = currentModel.sections[index]
      const nextSections = Array.from(currentModel.sections)
      nextSections[index] = {
        ...currentSection,
        ...sectionUpdate,
      }
      currentModel = {
        ...currentModel,
        sections: nextSections,
      }

      storeLocal(currentModel)
      onModelChange(currentModel)
    },

    get header() {
      return currentModel.header
    },

    get PROP_KEYS() {
      return model.props.map(({ key }) => key)
    },
    get props() {
      return currentModel.props
    },
    getProps(key) {
      return markdownSyncApi.props[key]
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
        throw new Error(`Section with key "${key}" not available in model`, model)
      }
      const currentProperty = currentModel.props[index]
      const nextProps = Array.from(currentModel.props)
      nextProps[index] = {
        ...currentProperty,
        ...propertyUpdate,
      }
      currentModel = {
        ...currentModel,
        props: nextProps,
      }

      storeLocal(currentModel)
      onModelChange(currentModel)
    },
  }

  return markdownSyncApi
}
