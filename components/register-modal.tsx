"use client"

import { useState } from "react"
import { X } from "lucide-react"

const RegisterModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState({ type: "", text: "" })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setMessage({ type: "", text: "" })

    try {
      const response = await fetch("https://backend.imanakhmedovna.uz/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
        }),
      })

      if (response.ok) {
        setMessage({ type: "success", text: "Muvaffaqiyatli ro'yxatdan o'tdingiz!" })
        setFormData({ name: "", phone: "" })
        setTimeout(() => {
          onClose()
          setMessage({ type: "", text: "" })
        }, 2000)
      } else {
        throw new Error("Registration failed")
      }
    } catch (error) {
      setMessage({ type: "error", text: "Xatolik yuz berdi. Qaytadan urinib ko'ring." })
    } finally {
      setIsLoading(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Backdrop with ice effect */}
      <div className="absolute inset-0 bg-[#d4ebf7]/95 backdrop-blur-md" onClick={onClose} />

      {/* Modal Container - Full screen on mobile */}
      <div
        className="relative w-full h-full md:h-auto md:w-auto md:max-w-md 
                      flex flex-col items-center justify-center p-4 md:p-0"
      >
        {/* Modal Content */}
        <div
          className="relative w-full max-w-md bg-white rounded-3xl 
                        shadow-[0_20px_60px_rgba(142,195,224,0.5)] 
                        border-4 border-[#e8f4fc]
                        overflow-hidden
                        max-h-[90vh] md:max-h-none overflow-y-auto"
        >
          {/* Ice decoration top */}
          <div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-b from-[#e8f4fc] to-transparent"></div>
          <div className="absolute top-0 left-0 right-0 flex justify-center">
            <div className="w-16 h-2 bg-[#c5dff0] rounded-b-full"></div>
          </div>

          {/* Close Button - Ice themed */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-12 h-12 rounded-full
                       bg-gradient-to-b from-[#f0f8ff] via-[#e0f0f8] to-[#c5dff0]
                       border-t-2 border-l-2 border-white/80
                       border-b-3 border-r-3 border-[#9ecce6]
                       shadow-[0_4px_12px_rgba(142,195,224,0.4),inset_0_2px_4px_rgba(255,255,255,0.9)]
                       flex items-center justify-center
                       hover:shadow-[0_2px_8px_rgba(142,195,224,0.4)]
                       hover:translate-y-0.5
                       active:translate-y-1
                       transition-all duration-150"
          >
            <X className="w-6 h-6 text-[#5ba3c8]" strokeWidth={3} />
          </button>

          <div className="p-8 pt-12">
            {/* Logo */}
            <div className="text-center mb-6">
              <h2 className="text-5xl text-[#c5dff0]" style={{ fontFamily: "'Allura', cursive" }}>
                 Mo'jizaviy hayotga <br /> 4 ta yo'l
              </h2>
            </div>

            {/* Title */}
            <p className="text-center text-[#2c5f7c] text-lg font-medium mb-8">
              Keyingi qadamga o'tish uchun ismingizni va raqamingizni qoldiring!
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-[#5ba3c8] text-sm font-bold mb-2 uppercase tracking-wide">Ismingiz</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Ismingizni kiriting"
                  required
                  className="w-full px-5 py-4 rounded-2xl
                             bg-[#f8fcff] border-2 border-[#e0eff8]
                             text-[#2c5f7c] placeholder-[#a8c5d8]
                             focus:border-[#5ba3c8] focus:ring-4 focus:ring-[#5ba3c8]/10
                             focus:bg-white
                             outline-none transition-all duration-300
                             text-lg"
                />
              </div>

              <div>
                <label className="block text-[#5ba3c8] text-sm font-bold mb-2 uppercase tracking-wide">
                  Telefon raqamingiz
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+998 XX XXX XX XX"
                  required
                  className="w-full px-5 py-4 rounded-2xl
                             bg-[#f8fcff] border-2 border-[#e0eff8]
                             text-[#2c5f7c] placeholder-[#a8c5d8]
                             focus:border-[#5ba3c8] focus:ring-4 focus:ring-[#5ba3c8]/10
                             focus:bg-white
                             outline-none transition-all duration-300
                             text-lg"
                />
              </div>

              {message.text && (
                <div
                  className={`p-4 rounded-2xl text-center font-medium ${
                    message.type === "success"
                      ? "bg-green-50 text-green-600 border-2 border-green-200"
                      : "bg-red-50 text-red-600 border-2 border-red-200"
                  }`}
                >
                  {message.text}
                </div>
              )}

              {/* Submit Button - 3D Ice Effect */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-5 rounded-full text-[#2c5f7c] font-bold text-lg
                           bg-gradient-to-b from-[#f0f8ff] via-[#e0f0f8] to-[#c5dff0]
                           border-t-2 border-l-2 border-white/80
                           border-b-4 border-r-4 border-[#9ecce6]
                           shadow-[0_8px_24px_rgba(142,195,224,0.5),inset_0_2px_6px_rgba(255,255,255,0.9)]
                           hover:shadow-[0_4px_16px_rgba(142,195,224,0.5),inset_0_2px_6px_rgba(255,255,255,0.9)]
                           hover:translate-y-1
                           active:translate-y-2 active:shadow-[0_2px_8px_rgba(142,195,224,0.4)]
                           transition-all duration-150 ease-out
                           disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isLoading ? "Yuborilmoqda..." : "Keyingi qadamga o'tish"}
              </button>
            </form>

            {/* Footer Text */}
            <p className="text-center text-[#7a9bb5] text-sm mt-8 italic">Orzular kutib turmaydi. Yangi yil ham.</p>
          </div>

          {/* Ice decoration bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-3 bg-gradient-to-t from-[#e8f4fc] to-transparent"></div>
        </div>
      </div>
    </div>
  )
}

export default RegisterModal
