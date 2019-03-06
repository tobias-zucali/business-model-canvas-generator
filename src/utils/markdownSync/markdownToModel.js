
import { mergeArraysByKey } from 'utils/array'
import { deepMergeObjects } from 'utils/object'
import logger from 'utils/logger'

import without from 'lodash/without'

import splitMarkdown from './splitMarkdown'


const getSectionKeys = ({ sections }) => sections.map(({ key }) => key)

export default function markdownToModel(defaultModel, markdown) {
  try {
    const model = splitMarkdown(markdown)
    const modelSectionKeys = getSectionKeys(model)
    const defaultModelSectionKeys = getSectionKeys(defaultModel)

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

    model.sections = mergeArraysByKey(
      defaultModel.sections,
      model.sections,
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
