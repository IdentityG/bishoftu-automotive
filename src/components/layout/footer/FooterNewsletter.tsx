'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle, Sparkles } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function FooterNewsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email) return
    
    setStatus('loading')
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success')
      setEmail('')
      
      // Reset after 3 seconds
      setTimeout(() => {
        setStatus('idle')
      }, 3000)
    }, 1500)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2 }}
      className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-primary-600/20 to-accent-orange/20 backdrop-blur-sm border border-white/10"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Content */}
        <div>
          <div className="flex items-center space-x-2 mb-3">
            <Sparkles className="w-5 h-5 text-accent-orange" />
            <span className="text-accent-orange font-semibold text-sm uppercase tracking-wider">
              Newsletter
            </span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">
            Stay Updated with Industry News
          </h3>
          <p className="text-white/70">
            Get the latest updates on automotive and locomotive innovations delivered to your inbox.
          </p>
        </div>

        {/* Newsletter Form */}
        <form onSubmit={handleSubmit} className="relative">
          <div className="relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className={cn(
                "w-full px-5 py-4 pr-32 rounded-xl",
                "bg-white/10 backdrop-blur-sm border border-white/20",
                "text-white placeholder:text-white/50",
                "focus:outline-none focus:border-white/40 focus:bg-white/15",
                "transition-all duration-300"
              )}
              disabled={status === 'loading' || status === 'success'}
            />
            
            <motion.button
              type="submit"
              disabled={status === 'loading' || status === 'success'}
              className={cn(
                "absolute right-2 top-1/2 -translate-y-1/2",
                "px-6 py-2.5 rounded-lg font-semibold",
                "transition-all duration-300",
                "flex items-center space-x-2",
                status === 'success'
                  ? "bg-green-500 text-white"
                  : "bg-gradient-to-r from-primary-500 to-primary-600 text-white hover:from-primary-600 hover:to-primary-700"
              )}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {status === 'loading' && (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                >
                  <Send className="w-4 h-4" />
                </motion.div>
              )}
              {status === 'success' && <CheckCircle className="w-4 h-4" />}
              {status === 'idle' && <Send className="w-4 h-4" />}
              {status === 'error' && <Send className="w-4 h-4" />}
              
              <span>
                {status === 'loading' && 'Sending...'}
                {status === 'success' && 'Subscribed!'}
                {status === 'idle' && 'Subscribe'}
                {status === 'error' && 'Try Again'}
              </span>
            </motion.button>
          </div>

          {/* Success Message */}
          {status === 'success' && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute -bottom-6 left-0 text-green-400 text-sm"
            >
              Thank you for subscribing! Check your email for confirmation.
            </motion.p>
          )}
        </form>
      </div>
    </motion.div>
  )
}