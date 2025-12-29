"use client";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";

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
        <div className="lg:hidden flex flex-col px-1 pt-5">
          {/* TOP */}
          <p className="text-center font-semibold text-[#6b8fa6] tracking-[0.1.5em] text-[16px] uppercase">
            1 kunda hayotingizni o’zgartiraman
          </p>

          {/* TITLE */}
          <h1
            className="text-center mt-3 text-4xl leading-tight"
            style={{
              fontFamily: "'Allura', cursive",
              color: "#85b9dbff",
              textShadow: "0 2px 8px rgba(161, 174, 212, 0.35)",
            }}
          >
            Mo'jizaviy hayotga <br /> 4 ta yo'l
          </h1>

          {/* DESCRIPTION - Endi Questrial shrift bilan (layoutdan keladi) */}
          <div className="text-center mt-4 text-[20px] leading-relaxed px-2 questrial">
            <span className="font-bold text-[#2c4a5e]">2026 yilni ham</span>{" "}
            <span className="text-[#4D4D4D]">
              2025 yildek o'tkazishni hohlamaganlar va yangi yilda o'zini oson
              yo'l bilan o'zgartirishni hohlovchilarga
            </span>
            <br />
            <span className="font-bold text-[#2c4a5e]">
              1 kunlik onlayn intensiv
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
              <div
                className="absolute right-[6px] top-[30%]"
                style={{ fontFamily: "'Dancing Script', cursive" }}
              >
                <p className="text-[#2c4a5e] text-[16px]">
                  by Iman <br /> Akhmedovna <br />
                </p>
              </div>

              <div className="absolute left-[1px] top-[30%]  backdrop-blur-sm rounded-3xl px-2 py-2 shadow-lg border border-[#e0e0e0] flex items-center gap-2">
                {/* Sovg'a rasm */}
                <Image
                  src="/gift.png" // public/images/gift.webp ga yuklang
                  alt="sovg'a"
                  width={30}
                  height={30}
                  className="object-contain"
                />

                <p className="text-[#2c4a5e] text-[15px] leading-tight">
                  <span className="relative inline-block mr-2 questrial ">
                    998.000
                    <span className="absolute left-[-4px] right-[-4px] top-1/2 -translate-y-1/2 h-[2.5px] bg-gradient-to-r from-transparent via-[#e74c3c] to-transparent rounded-full opacity-95 transform rotate-[-8deg]"></span>
                  </span>{" "}
                  <br />
                  <span className="text-[#e74c3c] font-bold  text-[17px] questrial ">
                    BEPUL
                  </span>
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

            {/* BUTTON WITH ICICLE BORDER */}
            <div className="absolute bottom-[20px] left-1/2 -translate-x-1/2 w-full max-w-xs z-50">
              {/* Icicle border */}
              <div className="absolute -top-16 left-0 right-0 pointer-events-none z-50">
                <Image
                  src="/images/8.webp"
                  alt="icicle border"
                  width={400}
                  height={100}
                  className="w-full h-auto object-contain drop-shadow-lg"
                  priority
                />
              </div>

              {/* Button */}
              <div className="absolute -bottom-[10px] left-1/2 -translate-x-1/2 w-full max-w-xs z-100">
                {/* Icicle border – tepada, endi 100% ko'rinadi */}
                <div className="absolute -top-20 left-0 right-0 pointer-events-none z-20">
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
                  className="relative w-full animate-drip animate-drip py-5 rounded-full font-bold text-[#3a6a8a] shadow-2xl"
                  style={{
                    background:
                      "linear-gradient(180deg, #ffffff 0%, #e8f4fc 50%, #b8dae8 100%)",
                    boxShadow:
                      "0 10px 0 #9fc5dc, 0 16px 30px rgba(150,200,230,0.6)",
                  }}
                >
                  INTENSIVGA QO'SHILISH <ArrowLeft className="inline w-12" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
