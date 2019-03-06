import cloneDeep from 'lodash/cloneDeep'
import isArray from 'lodash/isArray'
import isFunction from 'lodash/isFunction'
import isObject from 'lodash/isObject'
import isPlainObject from 'lodash/isPlainObject'
import isRegExp from 'lodash/isRegExp'
import mergeWith from 'lodash/mergeWith'


export function mergeObjects(destination, source) {
  if (isPlainObject(destination)) {
    return mergeWith(
      cloneDeep(destination),
      source,
      (destinationEntry, sourceEntry) => {
        if (isArray(destinationEntry)) {
          return sourceEntry
        }
        return undefined
      }
    )
  } else if (source !== undefined) {
    return source
  } else {
    return destination
  }
}

export function deepMergeObjects(destination, source) {
  const merged = mergeObjects(destination, source)
  if (isPlainObject(merged)) {
    return mapObject(merged, (key) => deepMergeObjects(
      isPlainObject(destination) ? destination[key] : undefined,
      isPlainObject(source) ? source[key] : undefined
    ))
  } else if (source !== undefined) {
    return source
  } else {
    return destination
  }
}


export function mapObject(object, callback) {
  return Object.keys(object).reduce(
    (acc, key) => ({
      ...acc,
      [key]: callback(key, object[key]),
    }),
    {}
  )
}

export function mapEverything(object, callback) {
  if (isArray(object)) {
    return Array.prototype.map.call(object, (value, index) => callback(index, value))
  } else if (isObject(object) && !isRegExp(object) && !isFunction(object)) {
    return mapObject(object, callback)
  } else {
    return object
  }
}
