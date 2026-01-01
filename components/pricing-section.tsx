"use client"
import { useState, useEffect } from "react"
import { ArrowLeft } from "lucide-react"
import Image from "next/image"

const PricingSection = ({ onOpenForm }: { onOpenForm?: () => void }) => {
  const learningPoints = [
    "- dangasalik orqali badavlat va suyukli ayol bo'lishni o'rganasiz",
    "- Chilla texnikasi orqali istalgan orzuyingizga tez erishasiz",
    "- ortiq o'zgaraman deb o'zingizga vada bermaysiz, maqsadlarga qadamba qadam yurishni bilib olasiz"]

  const [notificationVisible, setNotificationVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      if (scrollY > 200) {
        setNotificationVisible(false)
      } else {
        setNotificationVisible(true)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="relative w-full min-h-screen py-16 px-4 overflow-hidden flex flex-col items-center justify-center bg-[#f8fcff]">
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <Image src="/images/bg3.webp" alt="background" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-[#f8fcff] via-transparent to-[#f8fcff]" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 w-full max-w-2xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h3 className="text-4xl md:text-6xl font-bold text-[#1e3a5f] drop-shadow-lg" style={{ fontFamily: "'Dancing Script', cursive" }}>
            Darsda siz:
          </h3>
        </div>

        {/* SMS Notification – scroll qilganda sekin chiqib ketadi */}
        <div
          className={`fixed bottom-24 right-4 z-50 max-w-sm transition-all duration-700 ease-in-out ${
            notificationVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20 pointer-events-none"
          }`}
        >
          <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-2xl p-4 border border-[#d4ebf7] flex items-start gap-3">
            {/* Avatar */}
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#a0d8ef] flex-shrink-0">
              <Image
                src="/images/iman.png"
                alt="Iman Akhmedovna"
                width={200}
                height={208}
                className="object-cover w-full h-full"
              />
            </div>

            {/* Xabar matni */}
            <div>
              <p className="text-[#2c4a5e] text-sm font-medium">
                <span className="font-bold">Iman Akhmedovna:</span><br />
                Men beradigan <span className="text-[#1e3a5f] font-bold">4 ta yo'l</span> orqali<br />
                <span className="text-[#e74c3c] font-bold">1 kunda hayotingiz o'zgaradi</span>
              </p>
            </div>
          </div>
        </div>

        {/* Learning points */}
        <div className="space-y-10 mb-16">
          {learningPoints.map((point, index) => (
            <div
              key={index}
              className="relative bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl px-8 py-8 border border-[#d4ebf7] mx-2"
            >
              <div className="absolute -top-20 left-0 right-0 pointer-events-none">
                <Image
                  src="/images/8.webp"
                  alt="icicle decoration"
                  width={400}
                  height={120}
                  className="w-full h-auto object-contain drop-shadow-md"
                  priority
                />
              </div>

              <div className="flex items-start gap-4 mt-4">
                <Image
                  src="/images/5.webp"
                  alt="❄️"
                  width={32}
                  height={32}
                  className="flex-shrink-0 mt-1"
                />
                <p className="text-[#2c4a5e] text-base md:text-lg leading-relaxed font-medium italic text-start">
                  {point}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* BUTTON */}
        <div className="relative z-50">
          <div className="absolute -top-26 z-20 left-1/2 -translate-x-1/2 pointer-events-none w-full max-w-sm">
            <Image
              src="/images/8.webp"
              alt="icicle border"
              width={400}
              height={120}
              className="w-full h-auto object-contain drop-shadow-lg"
              priority
            />
          </div>

          <button
            onClick={onOpenForm}
            className="relative w-full max-w-sm mx-auto block py-5 rounded-full font-bold text-[#3a6a8a] shadow-2xl"
            style={{
              background: "linear-gradient(180deg, #ffffff 0%, #e8f4fc 50%, #b8dae8 100%)",
              boxShadow: "0 10px 0 #9fc5dc, 0 16px 30px rgba(150,200,230,0.6)",
            }}
          >
            INTENSIVGA QO'SHILISH <ArrowLeft className="inline w-12" />
          </button>
        </div>

        {/* Footer */}
        
      </div>
    </div>
  )
}

export default PricingSection