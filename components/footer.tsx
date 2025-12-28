import { footerData } from "@/lib/data/mock"

const Footer = () => {
  return (
    <footer className="relative py-16 px-4 overflow-hidden">
      {/* Background with winter theme */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/images/bg-snowy.webp')` }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Decorative Christmas tree at top */}
        <div className="flex justify-center mb-8">
          <img src="/images/tree-decorated.webp" alt="" className="w-32 h-auto object-contain opacity-80" />
        </div>

        {/* Main title */}
        <h2 className="text-3xl md:text-5xl text-[#2c4a5e] font-bold mb-6 leading-tight px-4">{footerData.title}</h2>

        {/* Description */}
        <p className="text-sm md:text-base text-[#4a7a95] leading-relaxed mb-8 px-4 max-w-2xl mx-auto">
          {footerData.description}
        </p>

        {/* Bottom branding */}
        <div className="mt-12 pt-8 border-t border-[#c5dff0]/30">
          <h3 className="text-3xl md:text-4xl text-[#c5dff0] mb-4" style={{ fontFamily: "'Allura', cursive" }}>
            maqsadiya
          </h3>
          <p className="text-xs md:text-sm text-[#7a9bb5] tracking-widest uppercase">Mo'jizaviy hayotga 4 ta yo'l</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
