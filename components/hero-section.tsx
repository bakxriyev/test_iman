"use client"
import { useState, useEffect } from "react"
import { ArrowLeft, ArrowUpIcon } from "lucide-react"
import Image from "next/image"

const HeroSection = ({ onOpenForm }: { onOpenForm?: () => void }) => {
  const [timeLeft, setTimeLeft] = useState({ minutes: 2, seconds: 0 })
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)

    const savedTime = localStorage.getItem("heroCountdownTimer")

    if (savedTime) {
      const { minutes, seconds, timestamp } = JSON.parse(savedTime)
      const now = Date.now()
      const elapsed = Math.floor((now - timestamp) / 1000)
      const totalSeconds = minutes * 60 + seconds - elapsed

      if (totalSeconds > 0) {
        setTimeLeft({
          minutes: Math.floor(totalSeconds / 60),
          seconds: totalSeconds % 60,
        })
      } else {
        setTimeLeft({ minutes: 2, seconds: 0 })
        localStorage.setItem(
          "heroCountdownTimer",
          JSON.stringify({
            minutes: 2,
            seconds: 0,
            timestamp: Date.now(),
          }),
        )
      }
    } else {
      localStorage.setItem(
        "heroCountdownTimer",
        JSON.stringify({
          minutes: 2,
          seconds: 0,
          timestamp: Date.now(),
        }),
      )
    }
  }, [])

  useEffect(() => {
    if (!isClient) return

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          const newTime = { ...prev, seconds: prev.seconds - 1 }
          localStorage.setItem(
            "heroCountdownTimer",
            JSON.stringify({
              ...newTime,
              timestamp: Date.now(),
            }),
          )
          return newTime
        } else if (prev.minutes > 0) {
          const newTime = { minutes: prev.minutes - 1, seconds: 59 }
          localStorage.setItem(
            "heroCountdownTimer",
            JSON.stringify({
              ...newTime,
              timestamp: Date.now(),
            }),
          )
          return newTime
        } else {
          const newTime = { minutes: 2, seconds: 0 }
          localStorage.setItem(
            "heroCountdownTimer",
            JSON.stringify({
              ...newTime,
              timestamp: Date.now(),
            }),
          )
          return newTime
        }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [isClient])

  const formatNumber = (num: number) => num.toString().padStart(2, "0")

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#eef7ff] via-[#f4fbff] to-[#f8fcff]">
      {/* BACKGROUND */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/bg1.webp')",
          backgroundAttachment: "fixed",
        }}
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#eef7ff]/40 via-[#f4fbff]/50 to-[#f8fcff]" />

      <div className="relative z-10">
        {/* ================= MOBILE ================= */}
        <div className="lg:hidden flex flex-col px-1 pt-5 pb-16">
          {/* TOP */}
          <p className="text-center font-semibold text-[#6b8fa6] tracking-[0.15em] text-[16px] uppercase">
            1 kunlik online bepul darslik
          </p>

          {/* TITLE */}
          <h1
            className="text-center text-[#7da4bb] font-bold mt-3 text-4xl leading-tight uppercase"
            style={{ fontFamily: "var(--font-anton), Impact, sans-serif" }}
          >
            Bugun o'zgaraman
          </h1>

          {/* DESCRIPTION - Anton shrifti bilan */}
          <div className="text-center mt-4 text-[21px] leading-relaxed px-4 questrial">
            <span className="font-bold text-[#3283a3]">Ortiqcha harakatlarsiz </span>
            <span className="text-black">2026 - yilda yangi o'zingizni yaratish uchun </span>
            <span className="font-bold text-[#1d7293]">
              <b>oson va yengil 4 ta yo'l</b>
            </span>
          </div>

          {/* IMAGE BLOCK */}
          <div className="relative flex justify-center mt-[-140px]">
            {/* LEFT IMAGE */}
            <Image
              src="/images/13.webp"
              alt="gifts"
              width={300}
              height={420}
              className="absolute left-[-110px] bottom-[140px] w-[240px] z-10"
              priority
            />

            {/* PERSON with gradient */}
            <div className="relative z-20">
              <div className="relative">
                <Image
                  src="/images/iman.png"
                  alt="Amira"
                  width={420}
                  height={760}
                  className="h-[520px] w-auto object-contain"
                  priority
                />
                {/* Pastiga gradient */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-[150px] pointer-events-none"
                  style={{
                    background: "linear-gradient(to bottom, transparent 0%, #f8fcff 100%)",
                  }}
                />
              </div>

              {/* NAME */}
              <div className="absolute right-[6px] top-[30%]" style={{ fontFamily: "'Dancing Script', cursive" }}>
                <p className="text-[#2c4a5e] text-[16px]">
                  by Iman <br /> Akhmedovna <br />
                </p>
              </div>

              {/* BEPUL badge */}
              <div className="absolute left-[1px] top-[30%] flex flex-col gap-2">
                {/* Sovg'a va narx */}
                <div className="backdrop-blur-sm rounded-3xl px-2 py-2 shadow-lg border border-[#e0e0e0] flex items-center gap-2 bg-white/50">
                  <Image src="/gift.png" alt="sovg'a" width={30} height={30} className="object-contain" />
                  <p className="text-[#2c4a5e] text-[15px] leading-tight">
                    <span className="relative inline-block mr-2 questrial">
                      998.000
                      <span className="absolute left-[-4px] right-[-4px] top-1/2 -translate-y-1/2 h-[2.5px] bg-gradient-to-r from-transparent via-[#e74c3c] to-transparent rounded-full opacity-95 transform rotate-[-8deg]"></span>
                    </span>{" "}
                    <br />
                    <span className="text-[#e74c3c] font-bold text-[17px] questrial">BEPUL</span>
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <Image
              src="/images/11.webp"
              alt="tree"
              width={320}
              height={460}
              className="absolute right-[-120px] bottom-[140px] w-[250px] z-10"
              priority
            />

            {/* BUTTON - PASTROQDA */}
            <div className="absolute bottom-[-60px] left-1/2 -translate-x-1/2 w-full max-w-xs z-50">
              {/* Button Container */}
              <div className="relative">
                {/* Icicle border */}
                <div className="absolute -top-22 left-0 right-0 pointer-events-none z-20">
                  <Image
                    src="/images/8.webp"
                    alt="dripping icicle border"
                    width={400}
                    height={120}
                    className="w-full h-auto object-contain drop-shadow-lg"
                    priority
                  />
                </div>

                {/* Timer */}
                {isClient && (
                  <div className="absolute -top-16 right-2 bg-white/90 backdrop-blur-sm rounded-xl px-6 py-2 shadow-lg border border-[#d4ebf7] z-30">
                    <span className="text-[#2c4a5e] text-xl font-bold tracking-wider">
                      {formatNumber(timeLeft.minutes)}:{formatNumber(timeLeft.seconds)}
                    </span>
                  </div>
                )}

                {/* Button */}
                <button
                  onClick={onOpenForm}
                  className="relative w-full py-5 rounded-full font-bold text-[#3a6a8a] shadow-2xl"
                  style={{
                    background: "linear-gradient(180deg, #ffffff 0%, #e8f4fc 50%, #b8dae8 100%)",
                    boxShadow: "0 10px 0 #9fc5dc, 0 16px 30px rgba(150,200,230,0.6)",
                  }}
                >
                  INTENSIVGA QO'SHILISH <ArrowLeft className="inline w-12" />
                </button>

                <div className="flex items-center justify-center mt-4 gap-2">
                  <p className="text-[#2c4a5e] text-sm italic">Yopiq kanalga qo'shilish uchun bosing</p>
                  <ArrowUpIcon className="w-6 h-6 text-[#2c4a5e] animate-bounce" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
