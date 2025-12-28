"use client"

import { useEffect, useRef } from "react"

const SnowAnimation = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    let animationFrameId
    let snowflakes = []

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const createSnowflakes = () => {
      const flakeCount = Math.floor(canvas.width / 8) // More snowflakes
      snowflakes = []
      for (let i = 0; i < flakeCount; i++) {
        snowflakes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 4 + 1,
          speed: Math.random() * 1.5 + 0.5,
          opacity: Math.random() * 0.6 + 0.4,
          wind: Math.random() * 0.5 - 0.25,
        })
      }
    }

    const drawSnowflakes = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      snowflakes.forEach((flake) => {
        ctx.beginPath()
        ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${flake.opacity})`
        ctx.fill()
      })
    }

    const updateSnowflakes = () => {
      snowflakes.forEach((flake) => {
        flake.y += flake.speed
        flake.x += flake.wind + Math.sin(flake.y * 0.01) * 0.5

        if (flake.y > canvas.height) {
          flake.y = -flake.radius * 2
          flake.x = Math.random() * canvas.width
        }
        if (flake.x > canvas.width) {
          flake.x = 0
        } else if (flake.x < 0) {
          flake.x = canvas.width
        }
      })
    }

    const animate = () => {
      drawSnowflakes()
      updateSnowflakes()
      animationFrameId = requestAnimationFrame(animate)
    }

    resizeCanvas()
    createSnowflakes()
    animate()

    const handleResize = () => {
      resizeCanvas()
      createSnowflakes()
    }

    window.addEventListener("resize", handleResize)

    // Update canvas height on scroll
    const handleScroll = () => {
      // Keep canvas at viewport height
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("scroll", handleScroll)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-50"
      style={{ position: "fixed" }}
    />
  )
}

export default SnowAnimation
