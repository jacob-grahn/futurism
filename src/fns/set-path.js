import { set } from 'ramda'
import strToLens from './str-to-lens'

export default (path, value, obj) => {
  if (!obj) obj = {}
  return set(
    strToLens(path),
    value,
    obj
  )
}
