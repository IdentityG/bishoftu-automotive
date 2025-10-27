// src/app/about/page.tsx
import AboutHero from '@/components/about/AboutHero'
import CompanyOverview from '@/components/about/CompanyOverview'
import TimelineSection from '@/components/about/TimelineSection'
import LeadershipGrid from '@/components/about/LeadershipGrid'
import CultureShowcase from '@/components/about/CultureShowcase'
import PageNavigation from '@/components/about/PageNavigation'
import FacilitiesSection from '@/components/about/FacilitiesSection'
import StatsCounter from '@/components/about/StatsCounter'
import InnovationLab from '@/components/about/InnovationLab'
import ProgressIndicator from '../ProgressIndicator'

export const metadata = {
  title: 'About Us - Bishoftu Automotive & Locomotive Industry',
  description: 'Learn about Ethiopia\'s leading automotive and locomotive solutions provider. Discover our story, leadership, and commitment to excellence.',
}

export default function AboutPage() {
  return (
    <>
      <ProgressIndicator />
      <PageNavigation />
      <main className="overflow-x-hidden">
        <AboutHero />
        <CompanyOverview />
        <TimelineSection />
        <LeadershipGrid />
        <CultureShowcase />
        <FacilitiesSection />
        <StatsCounter />
        <InnovationLab />
        {/* More sections to be added */}
      </main>
    </>
  )
}