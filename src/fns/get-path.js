export default (path, obj) => {
  const keys = path.split('.')
  return keys.reduce((obj, key) => {
    return obj ? obj[key] : undefined
  }, obj)
}
