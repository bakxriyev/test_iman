"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RegisterModal: React.FC<RegisterModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    full_name: "",
    phone_number: "",
    address: "",
    type: ""
  });

  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShowModal(true);
    }
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const fullPhone = `+998${formData.phone_number.replace(/\D/g, "")}`;

    // keepalive: true - sahifa yopilganda ham so'rov davom etadi
    fetch("https://backend.imanakhmedovna.uz/userss", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        full_name: formData.full_name.trim(),
        phone_number: fullPhone,
        address: "",
        type: "",
      }),
      keepalive: true, // Bu muhim!
    });

    // So'rov jo'natildi, endi redirect
    setTimeout(() => {
      window.location.href = "https://t.me/+Qsmx3X4QHyFmMTVi";
    }, 100); // 100ms kutish - so'rov ishga tushishi uchun yetarli
  };

  const handleClose = () => {
    setShowModal(false);
    setTimeout(onClose, 300);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 9);
    setFormData({ ...formData, phone_number: value });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[#d4ebf7]/95 backdrop-blur-lg"
        onClick={handleClose}
      />

      {/* Modal Container */}
      <div
        className={`relative w-full h-full md:h-auto md:w-auto md:max-w-md 
                    flex flex-col items-center justify-center p-4 md:p-0
                    transition-all duration-500 ease-in-out
                    ${showModal ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
      >
        {/* Modal Content */}
        <div
          className="relative w-full max-w-md bg-gradient-to-b from-[#f8fcff] to-[#e8f4fc]
                      rounded-3xl shadow-[0_30px_80px_rgba(142,195,224,0.4)]
                      border-4 border-[#c5dff0]/80
                      overflow-hidden
                      max-h-[90vh] md:max-h-none overflow-y-auto"
        >
          {/* Ice decoration top */}
          <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-[#e8f4fc] via-[#d4ebf7] to-transparent opacity-90" />
          <div className="absolute top-0 left-0 right-0 flex justify-center">
            <div className="w-24 h-4 bg-[#c5dff0]/70 rounded-b-full blur-sm" />
          </div>

          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 z-20 w-12 h-12 rounded-full
                       bg-gradient-to-br from-[#f0f8ff] to-[#d4ebf7]
                       border-t-2 border-l-2 border-white/90
                       border-b-4 border-r-4 border-[#a0d8ef]/80
                       shadow-[0_6px_16px_rgba(142,195,224,0.3),inset_0_3px_6px_rgba(255,255,255,0.8)]
                       flex items-center justify-center
                       hover:scale-105 hover:rotate-3
                       active:scale-95
                       transition-all duration-200"
          >
            <X className="w-6 h-6 text-[#5ba3c8]" strokeWidth={3} />
          </button>

          <div className="p-8 pt-12">
            {/* Title */}
            <div className="text-center mb-6">
              <h2 className="text-3xl text-[#a0d8ef] italic font-bold">
                1 kunda hayotingizni <br /> o'zgartiraman
              </h2>
            </div>

            <p className="text-center text-[#2c5f7c] text-lg mb-8 leading-relaxed">
              Bepul darsga qatnashish uchun pastdagi ma'lumotlarni to'ldiring!
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Ism */}
              <div className="group">
                <label className="block text-[#5ba3c8] text-sm font-bold mb-2 uppercase tracking-wide">
                  Ismingiz
                </label>
                <input
                  type="text"
                  value={formData.full_name}
                  onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
                  placeholder="Ismingizni kiriting"
                  required
                  className="w-full px-5 py-4 rounded-2xl bg-[#f8fcff] border-2 border-[#d4ebf7]
                             text-[#2c5f7c] placeholder-[#a8c5d8]
                             focus:border-[#5ba3c8] focus:ring-4 focus:ring-[#5ba3c8]/20
                             focus:bg-white focus:scale-[1.02]
                             outline-none transition-all duration-300 text-lg shadow-inner"
                />
              </div>

              {/* Telefon */}
              <div className="group">
                <label className="block text-[#5ba3c8] text-sm font-bold mb-2 uppercase tracking-wide">
                  Telefon raqamingiz
                </label>
                <div className="relative">
                  <span className="absolute left-5 top-1/2 -translate-y-1/2 text-[#5ba3c8] font-bold text-lg z-10">
                    +998
                  </span>
                  <input
                    type="tel"
                    value={formData.phone_number}
                    onChange={handlePhoneChange}
                    placeholder="XX XXX XX XX"
                    required
                    maxLength={9}
                    pattern="[0-9]{9}"
                    className="w-full pl-20 pr-5 py-4 rounded-2xl bg-[#f8fcff] border-2 border-[#d4ebf7]
                               text-[#2c5f7c] placeholder-[#a8c5d8]
                               focus:border-[#5ba3c8] focus:ring-4 focus:ring-[#5ba3c8]/20
                               focus:bg-white focus:scale-[1.02]
                               outline-none transition-all duration-300 text-lg shadow-inner"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading || formData.phone_number.length !== 9}
                className="w-full py-5 rounded-full text-[#2c5f7c] font-bold text-lg
                           bg-gradient-to-br from-[#f0f8ff] to-[#d4ebf7]
                           border-t-2 border-l-2 border-white/90
                           border-b-4 border-r-4 border-[#a0d8ef]/80
                           shadow-[0_8px_24px_rgba(142,195,224,0.4),inset_0_3px_6px_rgba(255,255,255,0.8)]
                           hover:scale-105 hover:shadow-[0_12px_32px_rgba(142,195,224,0.6)]
                           active:scale-100
                           transition-all duration-200
                           disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isLoading ? "Yuborilmoqda..." : "Keyingi qadamga o'tish"}
              </button>
            </form>

            <p className="text-center text-[#7a9bb5] text-sm mt-8 italic">
              by Iman Akhmedovna
            </p>
          </div>

          {/* Ice decoration bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-[#e8f4fc] via-[#d4ebf7] to-transparent opacity-90" />
        </div>
      </div>
    </div>
  );
};

export default RegisterModal;