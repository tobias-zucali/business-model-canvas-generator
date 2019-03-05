import cloneDeep from 'lodash/cloneDeep'
import isArray from 'lodash/isArray'
import isFunction from 'lodash/isFunction'
import isObject from 'lodash/isObject'
import isPlainObject from 'lodash/isPlainObject'
import isRegExp from 'lodash/isRegExp'
import mergeWith from 'lodash/mergeWith'


export function mergeObjects(first, second) {
  if (isPlainObject(first)) {
    return mergeWith(
      cloneDeep(first),
      second,
      (destination, source) => {
        if (isArray(destination)) {
          return source
        }
        return undefined
      }
    )
  } else if (second !== undefined) {
    return second
  } else {
    return first
  }
}

export function deepMergeObjects(first, second) {
  const merged = mergeObjects(first, second)
  if (isPlainObject(merged)) {
    return mapObject(merged, (key) => deepMergeObjects(
      isPlainObject(first) ? first[key] : undefined,
      isPlainObject(second) ? second[key] : undefined
    ))
  } else if (second !== undefined) {
    return second
  } else {
    return first
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
