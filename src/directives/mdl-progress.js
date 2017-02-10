/* global componentHandler */
// I haven't tested or used this, it just looks useful
// https://posva.net/js/2015/08/26/using-material-design-lite-with-vuejs

export default function(val) {
  // The directive may be called before the element have been upgraded
  if (!this.el.MaterialProgress) {
    componentHandler.upgradeElement(this.el)
  }
  this.el.MaterialProgress.setProgress(val)
}
