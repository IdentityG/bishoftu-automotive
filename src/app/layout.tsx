import type { Metadata } from 'next'
import { Inter, Orbitron, Poppins } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/navbar/Navbar'
import Footer from '@/components/layout/footer/Footer'
import ProgressIndicator from './ProgressIndicator'

// Primary font for body text - clean and readable
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

// Display font for headings - tech/automotive feel
const orbitron = Orbitron({ 
  subsets: ['latin'],
  variable: '--font-orbitron',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900']
})

// Secondary font for special sections
const poppins = Poppins({ 
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700']
})

export const metadata: Metadata = {
  title: 'Bishoftu Automotive & Locomotive Industry',
  description: 'Leading automotive and locomotive manufacturing industry in Ethiopia',
  keywords: 'automotive, locomotive, manufacturing, Ethiopia, Bishoftu',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${orbitron.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased bg-white text-secondary-900">
        <ProgressIndicator />
        <Navbar />
       <main className="pt-20 lg:pt-32">
          {children}
       </main>
       <Footer />
      </body>
    </html>
  )
}