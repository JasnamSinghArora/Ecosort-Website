'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-eco-darker/95 backdrop-blur-md border-b border-eco-gray/50'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link 
          href="/"
          onClick={() => {
            // Mark that we're navigating to home via button click
            if (typeof window !== 'undefined') {
              sessionStorage.setItem('ecosort-home-navigation', 'true')
            }
          }}
        >
          <motion.div
            className="text-2xl font-display font-bold text-gradient"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            ECOSORT
          </motion.div>
        </Link>

        <div className="flex items-center gap-8">
          {navItems.map((item) => (
            <Link 
              key={item.name} 
              href={item.href}
              onClick={() => {
                // Mark that we're navigating via button click
                if (typeof window !== 'undefined' && item.href === '/') {
                  sessionStorage.setItem('ecosort-home-navigation', 'true')
                }
              }}
            >
              <motion.div
                className={`relative px-4 py-2 ${
                  pathname === item.href
                    ? 'text-eco-green'
                    : 'text-white/70 hover:text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
                {pathname === item.href && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-eco-green"
                    layoutId="navbar-indicator"
                  />
                )}
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </motion.nav>
  )
}
