
import { deepMergeObjects } from 'utils/object'
import logger from 'utils/logger'

import without from 'lodash/without'

import splitMarkdown from './splitMarkdown'


export default function markdownToModel(defaultModel, markdown) {
  try {
    const model = splitMarkdown(markdown)
    const invalidSectionKeys = without(
      Object.keys(model.sections),
      ...Object.keys(defaultModel.sections)
    )

    if (invalidSectionKeys.length > 0) {
      logger.warn('Unexpected sections found:', invalidSectionKeys)
      invalidSectionKeys.forEach((invalidSectionKey) => {
        delete model.sections[invalidSectionKey]
      })
    }

    return deepMergeObjects(
      defaultModel,
      model
    )
  } catch (error) {
    logger.error('Parsing model failed')
    logger.error(error)
  }
  return defaultModel
}
