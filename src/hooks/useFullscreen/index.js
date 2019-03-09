import { useEffect, useState } from 'react'
import { supports } from 'utils/environment'


const requestFullscreen = (element = document.documentElement) => {
  if (element.requestFullscreen) {
    element.requestFullscreen()
  } else if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen()
  } else if (element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT || {})
  }
}
const exitFullscreen = () => {
  if (document.exitFullscreen) {
    document.exitFullscreen()
  } else if (document.mozExitFullscreen) {
    document.mozExitFullscreen()
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen()
  }
}
const getIsFullscreen = () => Boolean(document.fullscreenElement || document.webkitCurrentFullScreenElement)
const toggleFullscreen = () => {
  if (!getIsFullscreen()) {
    requestFullscreen()
  } else if (document.exitFullscreen) {
    exitFullscreen()
  }
}

export default function useFullscreen() {
  const [isFullscreen, setIsFullscreen] = useState(getIsFullscreen())
  useEffect(() => {
    const handleFullscreenChange = () => setIsFullscreen(getIsFullscreen())
    document.addEventListener('fullscreenchange', handleFullscreenChange)
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange)
    document.addEventListener('mozfullscreenchange', handleFullscreenChange)

    return function cleanup() {
      document.removeEventListener('fullscreenchange', handleFullscreenChange)
    }
  }, [setIsFullscreen])

  return {
    isFullscreen,
    isFullscreenSupported: supports.fullscreen,
    toggleFullscreen,
  }
}
