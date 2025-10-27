// src/types/about.ts
export interface Leader {
  id: number
  name: string
  title: string
  image: string
  bio: string
  quote: string
  linkedin: string
  email: string
  education: string
  experience: string
  achievements: string[]
  expertise: string[]
}

export interface Milestone {
  year: string
  title: string
  description: string
  icon: any
  image: string
  highlights: string[]
  stats: {
    employees: number
    facilities: number
    revenue: string
  }
}

export interface CultureHighlight {
  icon: any
  title: string
  description: string
  color: string
}