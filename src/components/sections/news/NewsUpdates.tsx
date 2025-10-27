// src/components/home/NewsUpdates.tsx
'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { 
  Newspaper,
  Calendar,
  Clock,
  ArrowRight,
  Tag,
  User,
  Eye,
  TrendingUp,
  FileText,
  Radio,
  Video
} from 'lucide-react'
import Image from 'next/image'

const newsCategories = ['All', 'Press Release', 'Blog', 'Events', 'Industry News']

const newsItems = [
  {
    id: 1,
    type: 'press-release',
    category: 'Press Release',
    title: 'Bishoftu Automotive Wins $2.5B Railway Modernization Contract',
    excerpt: 'Major infrastructure deal to supply 50 electric locomotives and upgrade 750km of railway network across Ethiopia.',
    image: 'https://placehold.co/800x600/3B82F6/ffffff?text=Railway+Contract',
    author: 'Corporate Communications',
    date: '2024-01-15',
    readTime: '3 min read',
    views: 15420,
    tags: ['Railway', 'Contract', 'Infrastructure'],
    featured: true,
    icon: FileText
  },
  {
    id: 2,
    type: 'blog',
    category: 'Blog',
    title: 'The Future of Electric Locomotives: Sustainability Meets Innovation',
    excerpt: 'Exploring how electric locomotive technology is revolutionizing the transportation sector with zero emissions and improved efficiency.',
    image: 'https://placehold.co/800x600/10B981/ffffff?text=Electric+Locomotives',
    author: 'Dr. Alemayehu Worku',
    date: '2024-01-12',
    readTime: '5 min read',
    views: 8920,
    tags: ['Technology', 'Sustainability', 'Innovation'],
    featured: true,
    icon: Newspaper
  },
  {
    id: 3,
    type: 'event',
    category: 'Events',
    title: 'Join Us at the East Africa Transport Expo 2024',
    excerpt: 'Visit our booth at the region\'s largest transportation exhibition. Live demos of our latest products and exclusive networking opportunities.',
    image: 'https://placehold.co/800x600/F97316/ffffff?text=Transport+Expo',
    author: 'Events Team',
    date: '2024-02-20',
    readTime: '2 min read',
    views: 5640,
    tags: ['Expo', 'Events', 'Networking'],
    featured: false,
    icon: Radio
  },
  {
    id: 4,
    type: 'industry',
    category: 'Industry News',
    title: 'Ethiopia\'s Transportation Sector Shows 40% Growth in Q4 2023',
    excerpt: 'Industry analysis reveals significant expansion in logistics and public transportation, driven by infrastructure investments.',
    image: 'https://placehold.co/800x600/2563EB/ffffff?text=Industry+Growth',
    author: 'Market Research',
    date: '2024-01-08',
    readTime: '4 min read',
    views: 12350,
    tags: ['Market', 'Growth', 'Analysis'],
    featured: false,
    icon: TrendingUp
  },
  {
    id: 5,
    type: 'press-release',
    category: 'Press Release',
    title: 'New Manufacturing Facility Opens in Hawassa Industrial Park',
    excerpt: 'State-of-the-art production facility to increase manufacturing capacity by 60% and create 2,000 new jobs.',
    image: 'https://placehold.co/800x600/64748B/ffffff?text=New+Facility',
    author: 'Corporate Communications',
    date: '2024-01-05',
    readTime: '3 min read',
    views: 9870,
    tags: ['Manufacturing', 'Expansion', 'Jobs'],
    featured: false,
    icon: FileText
  },
  {
    id: 6,
    type: 'blog',
    category: 'Blog',
    title: 'AI-Powered Predictive Maintenance: Reducing Downtime by 40%',
    excerpt: 'How artificial intelligence is transforming fleet maintenance and saving millions in operational costs.',
    image: 'https://placehold.co/800x600/8B5CF6/ffffff?text=AI+Maintenance',
    author: 'Technology Team',
    date: '2024-01-03',
    readTime: '6 min read',
    views: 11240,
    tags: ['AI', 'Technology', 'Maintenance'],
    featured: true,
    icon: Video
  },
]

export default function NewsUpdates() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [filteredNews, setFilteredNews] = useState(newsItems)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (activeCategory === 'All') {
      setFilteredNews(newsItems)
    } else {
      setFilteredNews(newsItems.filter(item => item.category === activeCategory))
    }
  }, [activeCategory])

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      gsap.from('.news-card', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [filteredNews])

  const featuredNews = filteredNews.find(item => item.featured)
  const regularNews = filteredNews.filter(item => !item.featured).slice(0, 3)

  return (
    <section 
      ref={sectionRef}
      className="section-padding relative overflow-hidden bg-gradient-to-br from-secondary-50 via-white to-primary-50"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-primary-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent-orange/20 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-700 rounded-full mb-6"
          >
            <Newspaper className="w-4 h-4" />
            <span className="text-sm font-semibold">News & Updates</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="heading-2 mb-6"
          >
            Latest{' '}
            <span className="gradient-text">News & Insights</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="body-large text-secondary-600 max-w-3xl mx-auto"
          >
            Stay updated with the latest developments, industry insights, 
            and company announcements.
          </motion.p>
        </div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {newsCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`
                px-6 py-3 rounded-lg font-semibold transition-all duration-300
                ${activeCategory === category
                  ? 'bg-primary-500 text-white shadow-lg scale-105'
                  : 'bg-white text-secondary-700 hover:bg-secondary-100 shadow-md'
                }
              `}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Featured News */}
        {featuredNews && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Image */}
                <div className="relative h-96 md:h-auto">
                  <Image
                    src={featuredNews.image}
                    alt={featuredNews.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-2 bg-accent-orange text-white rounded-full text-sm font-bold shadow-lg">
                      Featured
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                      <featuredNews.icon className="w-5 h-5 text-primary-600" />
                    </div>
                    <span className="text-sm font-semibold text-primary-600 uppercase tracking-wide">
                      {featuredNews.category}
                    </span>
                  </div>

                  <h3 className="heading-3 mb-4">{featuredNews.title}</h3>
                  <p className="body-large text-secondary-600 mb-6">
                    {featuredNews.excerpt}
                  </p>

                  {/* Meta Info */}
                  <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-secondary-600">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{featuredNews.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(featuredNews.date).toLocaleDateString('en-US', { 
                        month: 'long', 
                        day: 'numeric', 
                        year: 'numeric' 
                      })}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{featuredNews.readTime}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Eye className="w-4 h-4" />
                      <span>{featuredNews.views.toLocaleString()} views</span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredNews.tags.map((tag, index) => (
                    <span
                        key={index}
                        className="px-3 py-1 bg-secondary-100 text-secondary-700 rounded-full text-sm"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <a
                    href={`/news/${featuredNews.id}`}
                    className="btn-primary inline-flex items-center gap-2 w-fit"
                  >
                    Read Full Article
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Regular News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {regularNews.map((news, index) => (
            <motion.article
              key={news.id}
              className="news-card group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden bg-secondary-100">
                <Image
                  src={news.image}
                  alt={news.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full">
                    <news.icon className="w-4 h-4 text-primary-600" />
                    <span className="text-xs font-semibold text-secondary-900">
                      {news.category}
                    </span>
                  </div>
                </div>

                {/* Date Badge */}
                <div className="absolute bottom-4 right-4 px-3 py-1.5 bg-black/50 backdrop-blur-sm text-white rounded-lg text-sm">
                  {new Date(news.date).toLocaleDateString('en-US', { 
                    month: 'short', 
                    day: 'numeric' 
                  })}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="heading-5 mb-3 line-clamp-2 group-hover:text-primary-600 transition-colors">
                  {news.title}
                </h3>
                
                <p className="body-small text-secondary-600 mb-4 line-clamp-3">
                  {news.excerpt}
                </p>

                {/* Meta Info */}
                <div className="flex items-center gap-4 mb-4 text-xs text-secondary-500">
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{news.readTime}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Eye className="w-3 h-3" />
                    <span>{(news.views / 1000).toFixed(1)}K</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {news.tags.slice(0, 2).map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-primary-50 text-primary-600 rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Author & CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-secondary-200">
                  <div className="flex items-center gap-2 text-sm text-secondary-600">
                    <User className="w-4 h-4" />
                    <span className="truncate">{news.author}</span>
                  </div>
                  <a
                    href={`/news/${news.id}`}
                    className="text-primary-600 hover:text-primary-700 font-semibold text-sm flex items-center gap-1 group/link"
                  >
                    Read
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <a
            href="/news"
            className="btn-primary inline-flex items-center gap-2"
          >
            View All News & Updates
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
                