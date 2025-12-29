"use client"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"

const BenefitsSection = ({ onOpenForm }: { onOpenForm?: () => void }) => {
  const benefits = [
    {
      icon: "/images/11.webp",
      text1: "Orzu maqsad yozib, ro’yobidan qiynalayotganlar",
    },
    {
      icon: "/images/6.webp",
      text1: "Yangi hayot boshlashni istovchilar",
    },
    {
      icon: "/images/5.webp",
      text1: "Energiyasizlik, dangasalikdan qiynalayotganlar",
    },
    {
      icon: "/images/4.webp",
      text1: "Moliyaviy erkinlikka chiqish, munosabatlarni to’g’irlash va rivojlanishni xoxlayotganlar",
    },
    {
      icon: "/images/2.webp",
      text1: "Ichki aybdorlik, qo’rquvdan halos bo’lishni istovchilar",
    },
    {
      icon: "/images/3.webp",
      text1: "Yomon gumon, yopishqoq fikrlardan halos bo’lishni istovchilar",
    },
  ]

  return (
    <section className="relative min-h-screen py-16  px-4 overflow-hidden flex flex-col">
      {/* Unified Winter Background */}
      <div className="absolute inset-0">
        <Image src="/images/bg3.webp" alt="background" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-2xl mx-auto text-center flex-1 flex flex-col justify-start mt-10">
        <h2 className="text-5xl md:text-9xl text-[#a0d8ef] mb-4" style={{ fontFamily: "'Allura', cursive" }}>
          Bepul intensivda
        </h2>
        <p className="text-3xl md:text-5xl text-[#5c9dc9] mb-16" style={{ fontFamily: "'Dancing Script', cursive" }}>
          nimalarni o'rganasiz?
        </p>

        <div className="space-y-10 flex-1">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="bg-white/85 backdrop-blur-md rounded-3xl shadow-2xl py-7 px-10 flex items-center gap-7 max-w-lg mx-auto"
            >
              <div className="w-20 h-20 flex-shrink-0">
                <Image src={item.icon} alt="icon" width={80} height={80} className="object-contain" />
              </div>
              <div className="text-left">
                <p className="text-lg md:text-xl text-[#2c4a5e] font-semibold">{item.text1}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer - Section ichida, pastda joylashgan */}
        <footer className="w-full py-8 mt-12">
          <div className="flex items-center justify-center gap-3">
            <p className="text-gray-500 text-sm">Created by</p>
            <a
              href="https://t.me/it_zoneuz"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-all duration-300 transform hover:scale-105"
            >
              <img
                src="./itzone.png"
                alt="IT Zone Telegram"
                width={150}
                height={100}
                className="cursor-pointer filter brightness-12 invert-[20%] sepia-[300%] saturate-[10000%] hue-rotate-[500deg]"
              />
            </a>
          </div>
        </footer>
      </div>

      {/* BUTTON - Fixed pastda (scroll qilganda ham ko'rinib turadi) */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 w-full max-w-xs z-50 px-4">
        {/* Icicle border */}
        <div className="absolute -top-20 left-0 right-0 pointer-events-none z-50">
          <Image
            src="/images/8.webp"
            alt="dripping icicle border"
            width={400}
            height={120}
            className="w-full h-auto object-contain drop-shadow-lg"
            priority
          />
        </div>

        {/* Button */}
        <button
          onClick={onOpenForm}
          className=" w-full py-5 rounded-full animate-drip font-bold text-[#3a6a8a] shadow-2xl"
          style={{
            background: "linear-gradient(180deg, #ffffff 0%, #e8f4fc 50%, #b8dae8 100%)",
            boxShadow: "0 10px 0 #9fc5dc, 0 16px 30px rgba(150,200,230,0.6)",
          }}
        >
          INTENSIVGA QO'SHILISH <ArrowLeft className="inline w-12" />
        </button>
      </div>
    </section>
  )
}

export default BenefitsSection