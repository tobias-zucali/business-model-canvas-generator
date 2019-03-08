import { useEffect, useState } from 'react'


const getIsFullscreen = () => Boolean(document.fullscreenElement)
const toggleFullscreen = () => {
  if (!getIsFullscreen()) {
    document.documentElement.requestFullscreen()
  } else if (document.exitFullscreen) {
    document.exitFullscreen()
  }
}

export default function useFullscreen() {
  const [isFullscreen, setIsFullscreen] = useState(getIsFullscreen())
  useEffect(() => {
    const handleFullscreenChange = () => setIsFullscreen(getIsFullscreen())
    document.addEventListener('fullscreenchange', handleFullscreenChange)

    return function cleanup() {
      document.removeEventListener('fullscreenchange', handleFullscreenChange)
    }
  }, [setIsFullscreen])

  return {
    isFullscreen,
    toggleFullscreen,
  }
}
