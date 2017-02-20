import { compose, split, lensPath } from 'ramda'

export default compose(lensPath, split('.'))
