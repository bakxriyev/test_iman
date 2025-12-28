"use client"

import { useState } from "react"
import HeroSection from "@/components/hero-section"
import ChristmasBallsSection from "@/components/christmas-balls-section"
import LearningSection from "@/components/learning-section"
import ProgramSection from "@/components/program-section"
import PricingSection from "@/components/pricing-section"
import RegisterModal from "@/components/register-modal"
import SnowAnimation from "@/components/snow-animation"
import Footer from "@/components/footer"
import BackgroundMusic from "@/components/backgroundmusic"

export default function Home() {
  const [isFormOpen, setIsFormOpen] = useState(false)

  const openForm = () => setIsFormOpen(true)
  const closeForm = () => setIsFormOpen(false)

  return (
    <main className="relative bg-white overflow-hidden">
      {/* Snow animation background */}
      <SnowAnimation />
      <BackgroundMusic />

      {/* Hero Section */}
      <HeroSection onOpenForm={openForm} />

      <PricingSection onOpenForm={openForm} />
      <ChristmasBallsSection onOpenForm={openForm}/>
      {/* Registration Modal */}
      <RegisterModal isOpen={isFormOpen} onClose={closeForm} />
    </main>
  )
}
