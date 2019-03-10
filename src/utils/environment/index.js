export const userAgent = window.navigator.userAgent.toLowerCase()

export const supports = {
  cssGrid: 'grid' in document.documentElement.style,
  fileReader: 'FileReader' in window,
  promise: 'Promise' in window,
  fullscreen: ('requestFullscreen' in document.documentElement)
    || ('mozRequestFullScreen' in document.documentElement)
    || ('webkitRequestFullscreen' in document.documentElement),
}
export const platform = {
  isIos: /iphone|ipad|ipod/.test(userAgent),
}
export const mode = {
  isStandalone: ('standalone' in window.navigator) && (window.navigator.standalone),
}
