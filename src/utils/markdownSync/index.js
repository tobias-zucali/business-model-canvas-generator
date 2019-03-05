import { mapObject } from 'utils/object'

import markdownToModel from './markdownToModel'
import modelToMarkdown from './modelToMarkdown'


export function addKeyToSection(key, section) {
  return {
    ...section,
    key,
  }
}

export function addKeysToModelSections(model) {
  const modelWithSectionKeys = {
    ...model,
    sections: mapObject(model.sections, addKeyToSection),
  }
  return modelWithSectionKeys
}

export function storeLocal(model) {
  localStorage.setItem(model.localStorageKey, modelToMarkdown(model))
}

export function getInitialModel(defaultModel) {
  const storedModel = localStorage.getItem(defaultModel.localStorageKey)
  const defaultModelWithSectionKeys = addKeysToModelSections(defaultModel)
  if (storedModel) {
    return markdownToModel(defaultModelWithSectionKeys, storedModel)
  } else {
    return defaultModelWithSectionKeys
  }
}
