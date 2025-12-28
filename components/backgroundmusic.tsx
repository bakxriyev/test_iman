"use client"

import { useEffect } from "react"

export default function BackgroundMusic() {
  useEffect(() => {
    const audio = new Audio("/background.m4a")
    audio.loop = true
    audio.volume = 1 // past ovoz o‘rniga eshitiladigan qilib
    audio.preload = "auto"

    const startMusic = () => {
      audio.play().catch(err => {
        console.warn("Still blocked:", err)
      })
      window.removeEventListener("pointerdown", startMusic)
      window.removeEventListener("keydown", startMusic)
    }

    window.addEventListener("pointerdown", startMusic)
    window.addEventListener("keydown", startMusic)

    return () => {
      audio.pause()
      window.removeEventListener("pointerdown", startMusic)
      window.removeEventListener("keydown", startMusic)
    }
  }, [])

  return null
}
