// src/app/page.tsx
"use client"
import AboutSection from '@/components/sections/about/AboutSection'
import AwardsRecognition from '@/components/sections/award/AwardsRecognition'
import BrandTrustBar from '@/components/sections/brand-trust/BrandTrustBar'
import CTASection from '@/components/sections/cta/CTASection'
import FAQPreview from '@/components/sections/faq/FAQPreview'
import LatestProjects from '@/components/sections/gallery/LatestProjects'
import HeroSection from '@/components/sections/hero/HeroSection'
import IndustrySolutions from '@/components/sections/industry/IndustrySolutions'
import LocationMap from '@/components/sections/map/LocationMap'
import NewsUpdates from '@/components/sections/news/NewsUpdates'
import ServicesSection from '@/components/sections/services/ServicesSection'
import TechnologyInnovation from '@/components/sections/technology/TechnologyInnovation'
import Testimonials from '@/components/sections/testimonial/Testimonials'
import WhyChooseUs from '@/components/sections/why/WhyChooseUs'
import dynamic from 'next/dynamic'


// Dynamic import for better performance
const FeaturedProductsEnhanced = dynamic(
  () => import('@/components/sections/featured/FeaturedProducts'),
  {
    loading: () => (
      <div className="min-h-screen flex items-center justify-center bg-secondary-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-secondary-600">Loading Products...</p>
        </div>
      </div>
    ),
    ssr: false
  }
)

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <BrandTrustBar />
      <AboutSection />
      <ServicesSection />
      <FeaturedProductsEnhanced />
      <WhyChooseUs />
      <LatestProjects />
      <TechnologyInnovation />
      <Testimonials />
      <IndustrySolutions />
      <NewsUpdates />
      <AwardsRecognition />
      <CTASection />
      <FAQPreview />
      <LocationMap />
      {/* More sections will be added */}
    </main>
  )
}