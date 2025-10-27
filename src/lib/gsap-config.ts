import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TextPlugin } from 'gsap/TextPlugin'

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, TextPlugin)
  
  // Default GSAP settings
  gsap.config({
    force3D: true,
    nullTargetWarn: false,
  })
}

export { gsap, ScrollTrigger }