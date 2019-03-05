import markdownToModel from './markdownToModel'
import modelToMarkdown from './modelToMarkdown'


export { default as getMarkdownSyncApi } from './getMarkdownSyncApi'

export function storeLocal(model) {
  localStorage.setItem(model.localStorageKey, modelToMarkdown(model))
}

export function getInitialModel(defaultModel) {
  const storedModel = localStorage.getItem(defaultModel.localStorageKey)
  if (storedModel) {
    return markdownToModel(defaultModel, storedModel)
  } else {
    return defaultModel
  }
}
