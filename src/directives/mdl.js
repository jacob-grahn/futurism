export default {
  bind: function (el) {
    if (!window.componentHandler) return
    window.componentHandler.upgradeElement(el)
  }
}
