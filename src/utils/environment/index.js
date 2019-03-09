const userAgent = window.navigator.userAgent.toLowerCase()

const environment = {
  userAgent,
  isIos: (() => /iphone|ipad|ipod/.test(userAgent))(),
  getIsStandaloneMode() {
    return ('standalone' in window.navigator) && (window.navigator.standalone)
  },
}

export default environment
