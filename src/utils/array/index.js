import isArray from 'lodash/isArray'
import isNil from 'lodash/isNil'


export function forceArray(value) {
  if (isArray(value)) {
    return value
  } else if (!isNil(value)) {
    return [value]
  } else {
    return []
  }
}
