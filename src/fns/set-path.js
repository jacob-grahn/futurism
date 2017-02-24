export default (path, value, obj) => {
  const keys = path.split('.')
  const { topObj } = keys.reduce((state, key, index) => {
    let { innerObj, topObj } = state
    innerObj = innerObj || topObj
    if (index === keys.length - 1) {
      innerObj[key] = value
    } else {
      innerObj[key] = innerObj[key] || {}
      innerObj[key] = {...innerObj[key]}
      state.innerObj = innerObj[key]
    }
    return state
  }, {topObj: {...obj}})
  return topObj
}
