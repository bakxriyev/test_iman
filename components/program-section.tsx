"use client"

import { useState } from "react"
import { programData } from "@/lib/data/mock"
import { ChevronLeft, ChevronRight } from "lucide-react"

const ProgramDay = ({ onOpenForm }: { onOpenForm?: () => void }) => {
  

  return (
    <div className="animate-fadeIn">
      {/* Day Header */}
      

      {/* Video Materials Section */}
      <div className="mb-8">
        <div className="text-center mb-4">
          <h4
            className="text-4xl md:text-5xl text-[#c5dff0] font-light tracking-wider"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            VIDEO
          </h4>
          <p className="text-[#5ba3c8] italic text-lg" style={{ fontFamily: "'Dancing Script', cursive" }}>
            materiallar
          </p>
        </div>

        <ul className="space-y-3 max-w-xl mx-auto">
          {data.content.slice(0, 2).map((item, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <span className="text-[#5ba3c8] mt-1">•</span>
              <span className="text-[#2c5f7c]">
                {item.includes("JONLI") ? (
                  <>
                    <span className="font-semibold text-[#5ba3c8]">Amira Rashidova </span>
                    bilan <span className="font-semibold">JONLI FORMATda</span> kirish efiri.
                  </>
                ) : item.includes("Parizoda") ? (
                  <>
                    Orzularga erishishga to'sqinlik qiladigan fikrlar.
                    <span className="text-[#5ba3c8]"> Parizoda Kurahmedova</span>
                  </>
                ) : (
                  item
                )}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Psychological Practices Section */}
      <div className="mb-8">
        <div className="text-center mb-4">
          <h4
            className="text-4xl md:text-5xl text-[#c5dff0] font-light tracking-wider"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            PSIXOLOGIK
          </h4>
          <p className="text-[#5ba3c8] italic text-lg" style={{ fontFamily: "'Dancing Script', cursive" }}>
            praktikalar
          </p>
        </div>

        <ul className="space-y-3 max-w-xl mx-auto">
          {data.content.slice(2).map((item, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <span className="text-[#5ba3c8] mt-1">•</span>
              <span className="text-[#2c5f7c]">
                {item.includes("12 oyi") ? (
                  <>
                    2025-yilning <span className="font-semibold">12 oyi tahlili.</span>
                  </>
                ) : item.includes("muhim sohalar") ? (
                  <>
                    Ayol hayotidagi <span className="font-semibold text-[#5ba3c8]">muhim sohalar tahlili.</span>
                  </>
                ) : item.includes("to'sqinlik") ? (
                  <>
                    <span className="text-[#5ba3c8]">Orzu</span> va{" "}
                    <span className="text-[#5ba3c8]">maqsadlarga to'sqinlik qiluvchi,</span> cheklovchi fikrlar va
                    ko'nikmalar tahlili
                  </>
                ) : (
                  item
                )}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Day Summary */}
      <div className="bg-gradient-to-r from-[#c5dff0] to-[#d4e8f5] rounded-t-[50px] rounded-b-3xl p-6 mt-8">
        <h4 className="text-[#2c5f7c] text-xl font-semibold mb-3 text-center">Kun mazmuni</h4>
        <p className="text-[#2c5f7c] text-center">{data.description}</p>
      </div>
    </div>
  )
}

const ProgramSection = ({ onOpenForm }) => {
  const [currentDay, setCurrentDay] = useState(0)

  const nextDay = () => {
    setCurrentDay((prev) => (prev + 1) % programData.length)
  }

  const prevDay = () => {
    setCurrentDay((prev) => (prev - 1 + programData.length) % programData.length)
  }

  return (
    <section id="program" className="relative py-16 px-4">
      {/* Background - semi-transparent */}
      <div className="absolute inset-0 bg-white/70" />

      <div className="relative z-10 max-w-3xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-8">
          <h2 className="text-[#7a9bb5] text-2xl md:text-3xl tracking-wider mb-2">INTENSIV PROGRAMMASI</h2>
        </div>

        {/* Program Content */}
        <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-6 md:p-10 shadow-lg border border-[#e0eff8]">
          {programData.map((day, index) => (
            <ProgramDay key={day.day} data={day} isActive={index === currentDay} />
          ))}

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevDay}
              className="bg-gradient-to-r from-[#f5deb3] to-[#ffe4b3] p-4 rounded-full 
                       hover:shadow-lg transition-all duration-300 text-[#8b6914]"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextDay}
              className="bg-gradient-to-r from-[#f5deb3] to-[#ffe4b3] p-4 rounded-full 
                       hover:shadow-lg transition-all duration-300 text-[#8b6914]"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Day Indicators */}
          <div className="flex justify-center gap-2 mt-4">
            {programData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentDay(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentDay ? "bg-[#5ba3c8] scale-125" : "bg-[#d4e8f5] hover:bg-[#b8d9ef]"
                }`}
              />
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-8">
          <button
            onClick={onOpenForm}
            className="relative px-12 py-4 rounded-full text-[#2c5f7c] font-semibold text-lg
                       bg-gradient-to-b from-[#d4e8f5] to-[#b8d9ef] 
                       border-2 border-[#8ec3e0]
                       shadow-lg hover:shadow-xl
                       transform hover:scale-105 transition-all duration-300"
          >
            INTENSIVGA QO'SHILISH
          </button>
        </div>
      </div>
    </section>
  )
}

export default ProgramSection
