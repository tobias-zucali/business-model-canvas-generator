import { mergeObjects } from 'utils/object'

import isArray from 'lodash/isArray'
import isNil from 'lodash/isNil'
import union from 'lodash/union'


export function forceArray(value) {
  if (isArray(value)) {
    return value
  } else if (!isNil(value)) {
    return [value]
  } else {
    return []
  }
}

export function getArrayObjectKeys(array, key) {
  return array.map((entry) => entry && entry[key])
}

export function mergeArraysByKey(destination, source, { key }) {
  if (isArray(destination) && isArray(source)) {
    const destinationKeyValues = getArrayObjectKeys(destination, key)
    const sourceKeyValues = getArrayObjectKeys(source, key)
    const mergedKeyValues = union(destinationKeyValues, sourceKeyValues)

    return mergedKeyValues.map((keyValue) => {
      const destinationEntry = destination[destinationKeyValues.indexOf(keyValue)]
      const sourceEntry = source[sourceKeyValues.indexOf(keyValue)]

      return mergeObjects(destinationEntry, sourceEntry)
    })
  } else if (isNil(source)) {
    return destination
  } else {
    return source
  }
}
