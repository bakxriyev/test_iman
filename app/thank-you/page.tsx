"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { ArrowLeft, ArrowRight, ArrowUp, CheckCircle } from "lucide-react"

interface Snowflake {
  x: number
  y: number
  radius: number
  speed: number
  opacity: number
  wind: number
}

const ThankYouPage = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let snowflakes: Snowflake[] = []

    const resizeCanvas = (): void => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const createSnowflakes = (): void => {
      const flakeCount = Math.floor(canvas.width / 8)
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

    const drawSnowflakes = (): void => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      snowflakes.forEach((flake) => {
        ctx.beginPath()
        ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${flake.opacity})`
        ctx.fill()
      })
    }

    const updateSnowflakes = (): void => {
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

    const animate = (): void => {
      drawSnowflakes()
      updateSnowflakes()
      animationFrameId = requestAnimationFrame(animate)
    }

    resizeCanvas()
    createSnowflakes()
    animate()

    const handleResize = (): void => {
      resizeCanvas()
      createSnowflakes()
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  const handleTelegramClick = () => {
    window.location.href = "https://t.me/+Qsmx3X4QHyFmMTVi"
  }

  return (
    <div className="relative w-full min-h-screen overflow-hidden flex flex-col items-center justify-center">
      {/* Snow Animation */}
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-50"
      />

      {/* Background */}
      <div className="absolute inset-0">
        <Image 
          src="/images/bg3.webp" 
          alt="background" 
          fill 
          className="object-cover" 
          priority 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-white/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-lg mx-auto px-6 text-center">
        {/* Icicle decoration top */}
        <div className="absolute -top-10 left-0 right-0 pointer-events-none">
          <Image
            src="/images/8.webp"
            alt="icicle decoration"
            width={500}
            height={150}
            className="w-full h-auto object-contain drop-shadow-md"
            priority
          />
        </div>

        {/* Card */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 md:p-12 border-4 border-[#c5dff0]/80 mt-16">
          {/* Success Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#a0d8ef] to-[#5ba3c8] flex items-center justify-center shadow-lg">
              <CheckCircle className="w-14 h-14 text-white" strokeWidth={2.5} />
            </div>
          </div>

          {/* Title */}
          <h1 
            className="text-4xl md:text-5xl font-bold text-[#1e3a5f] mb-4 drop-shadow-lg"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            Tabriklaymiz! 🎉
          </h1>

          <h2 className="text-2xl md:text-3xl font-bold text-[#5ba3c8] mb-6 italic">
            Siz ro'yxatdan o'tdingiz!
          </h2>

          <p className="text-[#2c4a5e] text-lg md:text-xl leading-relaxed mb-8">
            Pastdagi <span className="text-blue">BEPUL DARSGA QO`SHILISH</span> tugmasi orqali<span className="font-bold text-[#092e5e]"> <br /> darsimizga qo`shiling</span> 
          </p>

          {/* Iman avatar with message */}
          <div className="bg-[#f0f8ff]/80 rounded-2xl p-5 mb-2 border border-[#c5dff0] flex items-center gap-4">
            <div className="w-12 h-12 rounded-full overflow-hidden border-3 border-[#a0d8ef] shadow-md">
              <Image
                src="/images/iman.png"
                alt="Iman Akhmedovna"
                width={200}
                height={208}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="text-left">
              <p className="text-[#5ba3c8] font-bold ">Iman Akhmedovna</p>
              <p className="text-[#2c4a5e] text-base text-[12px]">
                Sizni darsimda kutib qolaman! ❄️
              </p>
            </div>
          </div>

          {/* Telegram Button */}
          <button
            onClick={handleTelegramClick}
            className="group relative w-full py-5 rounded-full font-bold text-lg text-white
                       bg-gradient-to-r from-[#0088cc] via-[#00a8e8] to-[#0088cc]
                       shadow-[0_8px_0_#006699,0_12px_30px_rgba(0,136,204,0.5)]
                       hover:shadow-[0_6px_0_#006699,0_10px_25px_rgba(0,136,204,0.6)]
                       hover:translate-y-[2px]
                       active:shadow-[0_2px_0_#006699,0_4px_15px_rgba(0,136,204,0.4)]
                       active:translate-y-[6px]
                       transition-all duration-150
                       flex items-center justify-center gap-2"
          >
            <svg 
              className="w-7 h-7" 
              viewBox="0 0 24 24" 
              fill="currentColor"
            >
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
            </svg>
            <span>BEPUL DASRSGA QO`SHILISH</span>
            <ArrowLeft className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-200" />
          </button>

          {/* Pulsating arrow indicator */}
          <div className="mt-6 flex justify-center animate-bounce">
            <div className="bg-[#0088cc]/20 rounded-full p-3">
              <ArrowUp className="w-8 h-8 text-[#0088cc]" />
            </div>
          </div>

          <p className="text-[#7a9bb5] text-sm mt-6 italic">
            BEPUL DASRSGA QO`SHILISH UCHUN SHU TUGMANI BOSING!
          </p>
        </div>

        {/* Icicle decoration bottom */}
        <div className="absolute -bottom-6 left-0 right-0 pointer-events-none rotate-180">
          <Image
            src="/images/8.webp"
            alt="icicle decoration"
            width={500}
            height={150}
            className="w-full h-auto object-contain drop-shadow-md"
            priority
          />
        </div>

        {/* Footer */}
        <p className="text-[#5ba3c8] text-sm mt-16 italic font-medium">
          by Iman Akhmedovna ❄️
        </p>
      </div>
    </div>
  )
}

export default ThankYouPage