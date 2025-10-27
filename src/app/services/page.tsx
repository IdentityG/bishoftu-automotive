// src/app/services/page.tsx
import ServiceHero from '@/components/services/ServiceHero'
import ServicesOverview from '@/components/services/ServicesOverview'
import ServicesGrid from '@/components/services/ServicesGrid'
import ProcessFlow from '@/components/services/ProcessFlow'
import IndustrySolutions from '@/components/services/IndustrySolutions'
import ServiceSLA from '@/components/services/ServiceSLA'
import ServiceMap from '@/components/services/ServiceMap'
import TechnologyTools from '@/components/services/TechnologyTools'
import MaintenancePrograms from '@/components/services/MaintenancePrograms'
import EmergencyServices from '@/components/services/EmergencyServices'
import BookingCTA from '@/components/services/BookingCTA'


export const metadata = {
  title: 'Our Services - Bishoftu Automotive & Locomotive Industry',
  description: 'Comprehensive automotive and locomotive services including manufacturing, maintenance, repair, parts supply, and technical support. 24/7 service available.',
  keywords: 'automotive services, locomotive maintenance, vehicle repair, parts supply, technical support, fleet management',
}

export default function ServicesPage() {
  return (
    <main className="overflow-x-hidden">
      <ServiceHero />
      <ServicesOverview />
      <ServicesGrid />
      <ProcessFlow />
      <IndustrySolutions />
      <ServiceSLA />
      <TechnologyTools />
      <ServiceMap />
      <MaintenancePrograms />
      <EmergencyServices />
      <BookingCTA />
    </main>
  )
}