
import { getArrayObjectKeys, mergeArraysByKey } from 'utils/array'
import { deepMergeObjects } from 'utils/object'
import logger from 'utils/logger'

import without from 'lodash/without'

import splitMarkdown from './splitMarkdown'


export default function markdownToModel(model, markdown) {
  try {
    const nextModel = splitMarkdown(markdown)

    const modelSectionKeys = getArrayObjectKeys(nextModel.sections, { key: 'key' })
    const defaultModelSectionKeys = getArrayObjectKeys(model.sections, { key: 'key' })
    const invalidSectionKeys = without(
      modelSectionKeys,
      ...defaultModelSectionKeys
    )
    if (invalidSectionKeys.length > 0) {
      logger.warn('Unexpected sections found:', invalidSectionKeys)
      invalidSectionKeys.forEach((invalidSectionKey) => {
        delete nextModel.sections[invalidSectionKey]
      })
    }

    const modelPropertyKeys = getArrayObjectKeys(nextModel.sections, { key: 'key' })
    const defaultModelPropertyKeys = getArrayObjectKeys(model.sections, { key: 'key' })
    const invalidPropertyKeys = without(
      modelPropertyKeys,
      ...defaultModelPropertyKeys
    )
    if (invalidPropertyKeys.length > 0) {
      logger.warn('Unexpected props found:', invalidPropertyKeys)
      invalidPropertyKeys.forEach((invalidPropertyKey) => {
        delete nextModel.sections[invalidPropertyKey]
      })
    }

    nextModel.sections = mergeArraysByKey(
      model.sections,
      nextModel.sections,
      { key: 'key' }
    )

    nextModel.props = mergeArraysByKey(
      model.props,
      nextModel.props,
      { key: 'key' }
    )

    const mergedModel = deepMergeObjects(
      model,
      nextModel,
      { arrayKey: 'key' },
    )
    return mergedModel
  } catch (error) {
    logger.error('Parsing model failed')
    logger.error(error)
  }
  return model
}
