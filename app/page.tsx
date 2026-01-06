'use client'

import LoadingScreen from '@/components/LoadingScreen'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import ProblemSection from '@/components/ProblemSection'
import CurrentSolutionsSection from '@/components/CurrentSolutionsSection'
import TurningPointSection from '@/components/TurningPointSection'
import PipelineSection from '@/components/PipelineSection'
import EnergySection from '@/components/EnergySection'
import ImpactSection from '@/components/ImpactSection'
import RecognitionSection from '@/components/RecognitionSection'

export default function Home() {
  return (
    <main className="relative">
      <LoadingScreen />
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <CurrentSolutionsSection />
      <TurningPointSection />
      <PipelineSection />
      <EnergySection />
      <ImpactSection />
      <RecognitionSection />
    </main>
  )
}
