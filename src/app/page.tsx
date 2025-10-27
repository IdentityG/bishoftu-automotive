import AboutSection from '@/components/sections/about/AboutSection'
import BrandTrustBar from '@/components/sections/brand-trust/BrandTrustBar'
import HeroSection from '@/components/sections/hero/HeroSection'
import ServicesSection from '@/components/sections/services/ServicesSection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <BrandTrustBar />
      <AboutSection />
      <ServicesSection />
      {/* Other sections will be added here */}
    </>
  )
}