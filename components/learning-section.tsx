import { learningData } from "@/lib/data/mock"

const LearningSection = () => {
  return (
    <section className="relative py-16 px-4">
      {/* Background - transparent to show main bg */}
      <div className="absolute inset-0 bg-white/70" />

      <div className="relative z-10 max-w-2xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2
            className="text-[#7a9bb5] text-2xl md:text-3xl tracking-wider mb-2"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            1 KUNDA
          </h2>
          <p className="text-[#5ba3c8] text-xl md:text-2xl" style={{ fontFamily: "'Dancing Script', cursive" }}>
            siz nimalarni o'rganasiz?
          </p>
        </div>

        {/* Learning Cards */}
        <div className="space-y-4">
          {learningData.map((item) => (
            <div
              key={item.id}
              className="flex items-start gap-4 p-4 bg-white/90 rounded-2xl 
                         shadow-md border border-[#e8f4fc]
                         hover:shadow-lg transition-shadow duration-300"
            >
              {/* Bullet point icon */}
              <div
                className="w-8 h-8 rounded-full bg-gradient-to-br from-[#5ba3c8] to-[#3b7eb8] 
                              flex items-center justify-center flex-shrink-0 mt-1"
              >
                <span className="text-white text-lg">•</span>
              </div>
              <p className="text-[#2c5f7c] font-medium text-base md:text-lg leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Motivational Text */}
        <div className="text-center mt-12">
          <p className="text-[#2c5f7c] text-xl font-semibold mb-2">Bu motivatsiya emas.</p>
          <p className="text-[#5ba3c8] text-lg">
            Bu — <span className="font-semibold">aniq maqsadlarning yo'l xaritasi!</span>
          </p>
        </div>
      </div>
    </section>
  )
}

export default LearningSection
