'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true)
  const [phase, setPhase] = useState(0)

  useEffect(() => {
    // Check if user navigated to home via button click
    if (typeof window !== 'undefined') {
      const isHomeNavigation = sessionStorage.getItem('ecosort-home-navigation')
      
      if (isHomeNavigation === 'true') {
        // Skip loading animation for button navigation
        sessionStorage.removeItem('ecosort-home-navigation')
        setLoading(false)
        return
      }
    }

    // Show loading animation for fresh loads and refreshes
    const phases = [
      { duration: 2400, phase: 1 }, // Chaotic waste (800 * 3)
      { duration: 3000, phase: 2 }, // AI analysis (1000 * 3)
      { duration: 3000, phase: 3 }, // Clean segregation (1000 * 3)
      { duration: 4500, phase: 4 }, // EcoSort reveal (1500 * 3 - longer)
    ]

    let currentPhase = 0
    const timers: ReturnType<typeof setTimeout>[] = []

    phases.forEach(({ duration, phase }) => {
      const timer = setTimeout(() => {
        setPhase(phase)
        currentPhase++
        if (currentPhase === phases.length) {
          setTimeout(() => setLoading(false), 2000)
        }
      }, phases.slice(0, currentPhase).reduce((acc, p) => acc + p.duration, 0) + duration)
      timers.push(timer)
    })

    return () => timers.forEach(clearTimeout)
  }, [])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-eco-darker"
        >
          <div className="relative w-full h-full overflow-hidden">
            {/* Chaotic waste particles */}
            {phase >= 1 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0"
              >
                {Array.from({ length: 30 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-3 h-3 rounded-full bg-eco-green/30"
                    initial={{
                      x: typeof window !== 'undefined' ? Math.random() * window.innerWidth : 0,
                      y: typeof window !== 'undefined' ? Math.random() * window.innerHeight : 0,
                      scale: Math.random() * 0.5 + 0.5,
                    }}
                    animate={{
                      x: typeof window !== 'undefined' ? Math.random() * window.innerWidth : 0,
                      y: typeof window !== 'undefined' ? Math.random() * window.innerHeight : 0,
                      rotate: 360,
                    }}
                    transition={{
                      duration: Math.random() * 2 + 1,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  />
                ))}
              </motion.div>
            )}

            {/* AI analysis grid */}
            {phase >= 2 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="grid grid-cols-8 gap-2 w-96 h-96">
                  {Array.from({ length: 64 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className="bg-eco-teal/20 rounded"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{
                        duration: 1,
                        delay: i * 0.02,
                        repeat: Infinity,
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            )}

            {/* Clean segregation bins */}
            {phase >= 3 && (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute inset-0 flex items-center justify-center gap-8"
              >
                {['Wet', 'Dry', 'Hazardous'].map((type, i) => (
                  <motion.div
                    key={type}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: i * 0.2 }}
                    className="w-24 h-32 bg-eco-gray rounded-lg border-2 border-eco-teal/50 flex items-center justify-center"
                  >
                    <span className="text-eco-teal text-sm font-bold">{type}</span>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {/* EcoSort logo reveal */}
            {phase >= 4 && (
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.5, ease: 'easeOut' }}
                className="absolute inset-0 flex items-center justify-center"
              >
                {/* Particle burst effect */}
                <div className="absolute inset-0">
                  {Array.from({ length: 20 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 rounded-full bg-eco-green"
                      initial={{
                        x: '50%',
                        y: '50%',
                        scale: 0,
                        opacity: 1,
                      }}
                      animate={{
                        x: `calc(50% + ${(Math.random() - 0.5) * 400}px)`,
                        y: `calc(50% + ${(Math.random() - 0.5) * 400}px)`,
                        scale: [0, 1, 0],
                        opacity: [1, 1, 0],
                      }}
                      transition={{
                        duration: 2,
                        delay: i * 0.1,
                        repeat: Infinity,
                        repeatDelay: 1,
                      }}
                    />
                  ))}
                </div>

                {/* Glowing background circle */}
                <motion.div
                  className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-eco-green/20 via-eco-teal/20 to-eco-cyan/20 blur-3xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />

                {/* Letter-by-letter reveal */}
                <div className="relative flex">
                  {'ECOSORT'.split('').map((letter, i) => (
                    <motion.span
                      key={i}
                      className="text-8xl md:text-9xl font-display font-bold text-gradient inline-block"
                      initial={{ y: 100, opacity: 0, rotateX: -90 }}
                      animate={{ y: 0, opacity: 1, rotateX: 0 }}
                      transition={{
                        duration: 0.8,
                        delay: 0.5 + i * 0.15,
                        ease: 'easeOut',
                      }}
                      style={{
                        textShadow: '0 0 30px rgba(0, 255, 136, 0.5)',
                      }}
                    >
                      {letter === ' ' ? '\u00A0' : letter}
                    </motion.span>
                  ))}
                </div>

                {/* Pulsing glow rings */}
                {[1, 2, 3].map((ring) => (
                  <motion.div
                    key={ring}
                    className="absolute w-96 h-96 rounded-full border-2 border-eco-teal/30"
                    initial={{ scale: 0, opacity: 1 }}
                    animate={{
                      scale: [0, 2],
                      opacity: [1, 0],
                    }}
                    transition={{
                      duration: 2,
                      delay: 1 + ring * 0.3,
                      repeat: Infinity,
                      repeatDelay: 1.5,
                    }}
                  />
                ))}
              </motion.div>
            )}

            {/* Loading bar */}
            <motion.div
              className="absolute bottom-20 left-1/2 -translate-x-1/2 w-64 h-1 bg-eco-gray rounded-full overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <motion.div
                className="h-full bg-gradient-to-r from-eco-green via-eco-teal to-eco-cyan"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 12.9, ease: 'easeInOut' }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
