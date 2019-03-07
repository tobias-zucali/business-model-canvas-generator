
import { getArrayObjectKeys, mergeArraysByKey } from 'utils/array'
import { deepMergeObjects } from 'utils/object'
import logger from 'utils/logger'

import without from 'lodash/without'

import splitMarkdown from './splitMarkdown'


export default function markdownToModel(defaultModel, markdown) {
  try {
    const model = splitMarkdown(markdown)

    const modelSectionKeys = getArrayObjectKeys(model.sections, { key: 'key' })
    const defaultModelSectionKeys = getArrayObjectKeys(defaultModel.sections, { key: 'key' })
    const invalidSectionKeys = without(
      modelSectionKeys,
      ...defaultModelSectionKeys
    )
    if (invalidSectionKeys.length > 0) {
      logger.warn('Unexpected sections found:', invalidSectionKeys)
      invalidSectionKeys.forEach((invalidSectionKey) => {
        delete model.sections[invalidSectionKey]
      })
    }

    const modelPropertyKeys = getArrayObjectKeys(model.sections, { key: 'key' })
    const defaultModelPropertyKeys = getArrayObjectKeys(defaultModel.sections, { key: 'key' })
    const invalidPropertyKeys = without(
      modelPropertyKeys,
      ...defaultModelPropertyKeys
    )
    if (invalidPropertyKeys.length > 0) {
      logger.warn('Unexpected props found:', invalidPropertyKeys)
      invalidPropertyKeys.forEach((invalidPropertyKey) => {
        delete model.sections[invalidPropertyKey]
      })
    }

    model.sections = mergeArraysByKey(
      defaultModel.sections,
      model.sections,
      { key: 'key' }
    )

    model.props = mergeArraysByKey(
      defaultModel.props,
      model.props,
      { key: 'key' }
    )

    const mergedModel = deepMergeObjects(
      defaultModel,
      model,
      { arrayKey: 'key' },
    )
    return mergedModel
  } catch (error) {
    logger.error('Parsing model failed')
    logger.error(error)
  }
  return defaultModel
}
