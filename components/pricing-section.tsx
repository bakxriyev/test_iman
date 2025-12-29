"use client"
import { useState, useEffect } from "react"
import { ArrowLeft } from "lucide-react"
import Image from "next/image"

const PricingSection = ({ onOpenForm }: { onOpenForm?: () => void }) => {
  const learningPoints = [
    "harkuni ertadan o’zgaraman deb vada berasizu nega o’zgarolmasligiz sabablari va unga eng oson yechim",
    "dangasalik orqali boy hayotga erishish siri",
    "maqsad qo’yish va unga tez yo’l orqali erishishni eng sodda siri",
    "o’zingizga bergan vadalarni bajarolmaslik natijasidagi ichki aybdorlik, o’ziga bo’lgan ishonchni so’nishini yengish",
    "orzu va maqsadlarga erishishni eng sodda yo’li, huzur halovatda yashash sirlarini bilib olasiz",
  ]

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
    <div className="relative w-full min-h-screen py-16 px-4 overflow-hidden flex flex-col items-center justify-center">
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <Image src="/images/bg3.webp" alt="background" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-white/60" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 w-full max-w-2xl mx-auto">
        {/* Title */}
        <div className="text-center mb-20">
          <h3 className="text-4xl md:text-6xl font-bold text-[#1e3a5f] drop-shadow-lg" style={{ fontFamily: "'Dancing Script', cursive" }}>
            1 kunda siz nimalarni o’rganasiz?
          </h3>
        </div>

        {/* SMS Notification – scroll qilganda sekin chiqib ketadi */}
        <div
          className={`fixed bottom-24 right-4 z-50 max-w-sm transition-all duration-700 ease-in-out ${
            notificationVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20 pointer-events-none"
          }`}
        >
          <div className="bg-white/45 backdrop-blur-md rounded-2xl shadow-2xl p-5 border border-white/50 flex items-start gap-4">
            {/* Avatar */}
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#a0d8ef] flex-shrink-0">
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
              <p className="text-[#2c4a5e] text-base font-medium">
                <span className="font-bold">Iman Akhmedovna:</span><br />
                Men beradigan <span className="text-[#1e3a5f] font-bold">4 ta yo’l</span> orqali<br />
                <span className="text-[#e74c3c] font-bold">1 kunda hayotingiz o’zgaradi</span>
              </p>
            </div>
          </div>
        </div>

        {/* Learning points */}
        <div className="space-y-16 mb-32">
          {learningPoints.map((point, index) => (
            <div
              key={index}
              className="relative bg-white/75 backdrop-blur-lg rounded-3xl shadow-2xl px-10 py-10 border border-white/40 mx-4"
            >
              <div className="absolute -top-22 left-0 right-0 pointer-events-none">
                <Image
                  src="/images/8.webp"
                  alt="icicle decoration"
                  width={400}
                  height={120}
                  className="w-full h-auto object-contain drop-shadow-md"
                  priority
                />
              </div>

              <div className="flex items-start gap-6 mt-6">
                <Image
                  src="/images/5.webp"
                  alt="❄️"
                  width={40}
                  height={40}
                  className="flex-shrink-0 mt-1"
                />
                <p className="text-[#2c4a5e] text-lg md:text-xl leading-relaxed font-medium italic text-start">
                  {point}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* BUTTON */}
        <div className="relative z-50 mt-10">
          <div className="absolute -top-14 z-20 left-1/2 -translate-x-1/2 pointer-events-none">
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
            className="relative w-80 py-5 left-1/9 rounded-full font-bold text-[#3a6a8a] shadow-2xl"
            style={{
              background: "linear-gradient(180deg, #ffffff 0%, #e8f4fc 50%, #b8dae8 100%)",
              boxShadow: "0 10px 0 #9fc5dc, 0 16px 30px rgba(150,200,230,0.6)",
            }}
          >
            INTENSIVGA QO'SHILISH <ArrowLeft className="inline w-12" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default PricingSection