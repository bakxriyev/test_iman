import { christmasBallsData } from "@/lib/data/mock"
import { ArrowLeft } from "lucide-react"

const ChristmasBall = ({ data }) => {
  const ballImages = {
    wand: "/images/1.webp",
    "2026": "/images/2.webp",
    energy: "/images/3.webp",
    money: "/images/4.webp",
    treasure: "/images/5.webp",
    woman: "/images/6.webp",
  }

  // Bold words mapping
  const getBoldDescription = (title, description) => {
    const boldMap = {
      Orzulari: ["boshlashni bilmaganlar"],
      "2026 yilni": ["eng sermazmun yili"],
      Energiyasi: ["tushib ketganini"],
      Moliyaviy: ["karyerada rivojlanishda"],
      "Har safar": ["boshlab,"],
      "Ichki ishonchini": ["oshirishni istagan"],
    }

    const words = description.split(" ")
    const boldPhrases = boldMap[title] || []

    return words.map((word, i) => {
      const isBold = boldPhrases.some((phrase) => phrase.includes(word.replace(",", "")))
      return isBold ? (
        <span key={i} className="font-bold text-[#5ba3c8]">
          {word}{" "}
        </span>
      ) : (
        <span key={i}>{word} </span>
      )
    })
  }

  return (
    <div className="flex flex-col items-center text-center p-4">
      {/* Christmas Ball Image */}
      <div className="w-36 h-44 md:w-40 md:h-48 mb-4 relative">
        <img
          src={ballImages[data.icon] || "/placeholder.svg"}
          alt={data.title}
          className="w-full h-full object-contain drop-shadow-lg"
        />
      </div>

      {/* Title */}
      <h3 className="text-[#3b7eb8] text-2xl md:text-3xl mb-2" style={{ fontFamily: "'Dancing Script', cursive" }}>
        {data.title}
      </h3>

      {/* Description */}
      <p className="text-[#2c5f7c] text-sm md:text-base max-w-[200px] leading-relaxed">
        {getBoldDescription(data.title, data.description)}
      </p>
    </div>
  )
}

const ChristmasBallsSection = ({ onOpenForm }: { onOpenForm?: () => void }) => {
  return (
    <section className="relative py-16 px-4">
      {/* Background - semi-transparent */}
      <div className="absolute inset-0 bg-white/60" />

      <div className="relative  max-w-5xl mx-auto">
        {/* Section Header with curved banner */}
        <div className="relative mb-0">
          <div
            className="bg-gradient-to-r from-[#d0e5f2] via-[#e0f0f8] to-[#d0e5f2] 
                          rounded-t-[60px] rounded-b-[100px] py-8 px-12 text-center
                          shadow-lg border-b-4 border-[#b8d9ef]"
          >
            <h2 className="text-5xl md:text-6xl text-[#9cc5de] mb-2" style={{ fontFamily: "'Allura', cursive" }}>
              Intensivimiz
            </h2>
            <p className="text-[#3b7eb8] text-xl" style={{ fontFamily: "'Dancing Script', cursive" }}>
              kimlar uchun
            </p>
          </div>
        </div>

        {/* Christmas Balls Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
          {christmasBallsData.map((ball) => (
            <ChristmasBall key={ball.id} data={ball} />
          ))}
        </div>
        
      </div>
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
    </section>
  )
}

export default ChristmasBallsSection
