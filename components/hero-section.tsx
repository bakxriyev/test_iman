"use client"
import { ArrowLeft } from "lucide-react"
import Image from "next/image"

const HeroSection = ({ onOpenForm }: { onOpenForm?: () => void }) => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* BACKGROUND */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/bg1.webp')",
          backgroundAttachment: "fixed",
        }}
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#eef7ff]/40 via-[#f4fbff]/50 to-white" />

      <div className="relative z-10">
        {/* ================= MOBILE ================= */}
        <div className="lg:hidden flex flex-col px-4 pt-6">
          {/* TOP */}
          <p className="text-center text-[#6b8fa6] tracking-[0.35em] text-xs uppercase">1 KUNLIK ONLAYN INTENSIV</p>

          {/* TITLE */}
          <h1
            className="text-center mt-3 text-4xl leading-tight"
            style={{
              fontFamily: "'Allura', cursive",
              color: "#b7ddf6",
              textShadow: "0 2px 8px rgba(120,170,210,0.35)",
            }}
          >
            Mo'jizaviy hayotga <br /> 4 ta yo'l
          </h1>

          {/* DESCRIPTION (TITLE OSTIDA) */}
          <div className="text-center mt-4 text-sm leading-relaxed px-2">
            <p className="text-[#2e4f66]">
              <span className="font-bold text-[#3b79a8]" style={{ fontFamily: "'Dancing Script', bold" }}>
                2026 yilni ham
              </span>{" "}
              <span style={{ fontFamily: "'Dancing Script', bold" }}>
                2025 yildek o'tkazishni hohlamaganlar va yangi yilda o'zini oson yo'l bilan o'zgartirishni
                hohlovchilarga
              </span>
              <br />
              <span className="font-bold text-[#2e5f85]" style={{ fontFamily: "'Dancing Script', bold" }}>
                1 kunlik onlayn intensiv
              </span>
            </p>
          </div>

          {/* IMAGE BLOCK */}
          <div className="relative flex justify-center mt-[-140px]">
            {/* LEFT IMAGE */}
            <Image
              src="/images/13.webp"
              alt="gifts"
              width={300}
              height={420}
              className="absolute left-[-110px] bottom-[60px] w-[240px] z-10"
              priority
            />

            {/* PERSON */}
            <div className="relative z-20">
              <Image
                src="/images/iman.png"
                alt="Amira"
                width={420}
                height={760}
                className="h-[520px] w-auto object-contain"
                priority
              />

              {/* NAME */}
              <div className="absolute right-[-5px] top-[30%]" style={{ fontFamily: "'Dancing Script', cursive" }}>
                <p className="text-[#2c4a5e] text-lg">
                  by Iman <br /> Akhmedovna
                </p>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <Image
              src="/images/11.webp"
              alt="tree"
              width={320}
              height={460}
              className="absolute right-[-120px] bottom-[60px] w-[250px] z-10"
              priority
            />

            {/* BUTTON OVER IMAGE */}
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
    </section>
  )
}

export default HeroSection