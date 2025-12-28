"use client"
import { ArrowLeft } from "lucide-react"
import Image from "next/image"

const PricingSection = ({ onOpenForm }: { onOpenForm?: () => void }) => {
  const learningPoints = [
    "Harkuni ertadan o’zgaraman deb vada berasizu nega o’zgarolmasligiz sabablari va unga eng oson yechim",
    "Dangasalik orqali boy hayotga erishish siri",
    "Maqsad qo’yish va unga tez yo’l orqali erishishni eng sodda siri",
    "O’zingizga bergan vadalarni bajarolmaslik natijasidagi ichki aybdorlik, o’ziga bo’lgan ishonchni so’nishini yengish",
    "Orzu va maqsadlarga erishishni eng sodda yo’li, huzur halovatda yashash sirlarini bilib olasiz",
  ]

  return (
    <section className="relative w-full min-h-screen py-10 overflow-hidden flex flex-col items-center justify-center">
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <Image src="/images/bg3.webp" alt="background" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 w-full max-w-[600px] px-4 flex flex-col items-center">
        {/* Title placed ABOVE the parchment */}
        <h3
          className="text-2xl md:text-4xl font-bold text-[#1e3a5f] text-center mb-12 drop-shadow-sm px-4"
          style={{ fontFamily: "'Dancing Script', cursive" }}
        >
          1 kunda siz nimalarni o’rganasiz?
        </h3>

        <div className="relative w-full aspect-[1/1.8] flex flex-col items-center">
          {/* Xatnoma asosi - stretch to fit */}
          <div className="absolute inset-0 z-0">
            <Image src="/images/15.webp" alt="parchment" fill className="object-fill drop-shadow-2xl scale-y-110" />
          </div>

          {/* Xatnoma ichidagi yozuvlar */}
          <div className="relative z-10 flex flex-col items-center text-center px-10 pt-16 pb-12 w-full h-full">
            {/* Learning points list - centered layout to match reference image style */}
            <div className="w-full flex flex-col items-center justify-center space-y-8 py-14">
              {learningPoints.map((point, index) => (
                <div key={index} className="flex flex-col items-center text-center max-w-[85%]">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#3a6a8a]/40 mb-1" />
                  <p className="text-[#2c4a5e] text-[18px] md:text-[14px] leading-tight font-medium italic">{point}</p>
                </div>
              ))}
            </div>

            <div className="w-full space-y-6 mt-auto pb-6">
              {/* BUTTON */}
             <button
              onClick={onOpenForm}
              className="absolute bottom-[10px] left-1/2 -translate-x-1/2 w-full max-w-xs py-5 rounded-full font-bold text-[#3a6a8a] z-30"
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
      </div>
    </section>
  )
}

export default PricingSection
