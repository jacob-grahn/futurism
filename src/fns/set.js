export default function set (obj, { key, value }) {
  const dotIndex = key.indexOf('.')
  if (dotIndex !== -1) {
    const leftKey = key.substr(0, dotIndex)
    const rightKey = key.substr(dotIndex + 1)
    return {
      ...obj,
      [leftKey]: set(obj[leftKey], {key: rightKey, value})
    }
  }
  return {
    ...obj,
    [key]: value
  }
}
