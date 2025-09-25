declare global {
  interface Window {
    __bgAudio?: {
      play: () => Promise<void> | void
      pause: () => void
      setVolume: (volume: number) => void
      getVolume: () => number
      initialVolume: number
    }
  }
}

export {}


