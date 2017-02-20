import { view } from 'ramda'
import strToLens from './str-to-lens'

export default (path, obj) => {
  return view(
    strToLens(path),
    obj
  )
}
