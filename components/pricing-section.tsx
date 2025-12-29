"use client";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";

const PricingSection = ({ onOpenForm }: { onOpenForm?: () => void }) => {
  const learningPoints = [
    "harkuni ertadan o’zgaraman deb vada berasizu nega o’zgarolmasligiz sabablari va unga eng oson yechim",
    "dangasalik orqali boy hayotga erishish siri",
    "maqsad qo’yish va unga tez yo’l orqali erishishni eng sodda siri",
    "o’zingizga bergan vadalarni bajarolmaslik natijasidagi ichki aybdorlik, o’ziga bo’lgan ishonchni so’nishini yengish",
    "orzu va maqsadlarga erishishni eng sodda yo’li, huzur halovatda yashash sirlarini bilib olasiz",
  ];

  return (
    <section className="relative w-full min-h-screen py-10 overflow-hidden flex flex-col items-center justify-center">
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <Image
          src="/images/bg3.webp"
          alt="background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 w-full max-w-[600px] px-4 flex flex-col items-center">
        {/* Title */}
        <h3
          className="text-2xl md:text-4xl font-bold text-[#1e3a5f] text-center mb-12 drop-shadow-sm px-4"
          style={{ fontFamily: "'Dancing Script', cursive" }}
        >
          1 kunda siz nimalarni o’rganasiz?
        </h3>

        <div className="relative w-full aspect-[1/1.8] flex flex-col items-center">
          {/* Parchment background */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/15.webp"
              alt="parchment"
              fill
              className="object-fill drop-shadow-2xl scale-y-110"
            />
          </div>

          {/* Content inside parchment */}
          <div className="relative z-10 flex flex-col items-center text-center px-10 pt-16 pb-12 w-full h-full">
            {/* Learning points list – yonma-yon bullet */}
            <div className="w-full flex flex-col items-start justify-center space-y-10 py-10 max-w-lg mx-auto">
              {learningPoints.map((point, index) => (
                <div
                  key={index}
                  className="flex items-start 
              -gap-2 text-left"
                >
                  {/* Qor parcha bullet (yonida) */}
                  <Image
                    src="https://static.vecteezy.com/system/resources/thumbnails/029/697/752/small/one-big-blue-snowflake-isolated-on-transparent-background-winter-holiday-clip-art-element-for-new-year-christmas-prints-designs-and-any-other-purposes-png.png"
                    alt="❄️"
                    width={32}
                    height={32}
                    className="flex-shrink-0 mt-2 gap-2"
                  />
                  <p className="text-[#2c4a5e] text-[20px] md:text-[16px] px-12 leading-relaxed cursiv">
                    {point}
                  </p>
                </div>
              ))}
            </div>

            {/* BUTTON */}
            <div className="absolute bottom-[12px] left-1/2 -translate-x-1/2 w-full max-w-xs z-100">
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
                            className="relative w-full animate-drip py-5 rounded-full font-bold text-[#3a6a8a] shadow-2xl"
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
  );
};

export default PricingSection;
