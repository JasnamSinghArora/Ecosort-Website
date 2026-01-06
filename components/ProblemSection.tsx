'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState, useEffect } from 'react'

function AnimatedCounter({ end, suffix = '', duration = 2 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0)
  const [ref, inView] = useInView({ threshold: 0.5, triggerOnce: true })

  useEffect(() => {
    if (!inView) return

    let startTime: number | null = null
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1)
      setCount(Math.floor(progress * end))
      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setCount(end)
      }
    }
    requestAnimationFrame(animate)
  }, [inView, end, duration])

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  )
}

export default function ProblemSection() {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  const stats = [
    { value: 2, suffix: ' billion', label: 'tonnes of waste annually worldwide', color: 'eco-green' },
    { value: 33, suffix: '%', label: 'mismanaged globally', color: 'eco-teal' },
    { value: 170, suffix: 'M kg/day', label: 'waste generated in India', color: 'eco-cyan' },
    { value: 50, suffix: '%', label: 'unsegregated in India', color: 'eco-green' },
    { value: 45, suffix: '%', label: 'ends in landfills', color: 'eco-teal' },
  ]

  return (
    <section
      ref={ref}
      className="section-full flex items-center justify-center relative overflow-hidden bg-eco-dark"
    >
      {/* Dark environmental background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-eco-gray/50 to-eco-darker" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl font-display font-bold text-center mb-20 text-white"
        >
          THE GLOBAL CRISIS
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.slice(0, 3).map((stat, index) => (
            <motion.div
              key={index}
              initial={{ y: 100, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-eco-gray/50 backdrop-blur-sm rounded-2xl p-8 border border-eco-teal/20 hover:border-eco-teal/50 transition-all"
            >
              <motion.div
                className={`text-5xl md:text-6xl font-bold mb-4 ${
                  stat.color === 'eco-green' ? 'text-eco-green' :
                  stat.color === 'eco-teal' ? 'text-eco-teal' :
                  'text-eco-cyan'
                }`}
                whileHover={{ scale: 1.1 }}
              >
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </motion.div>
              <p className="text-white/70 text-lg">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Last 2 items centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-8">
          {stats.slice(3).map((stat, index) => (
            <motion.div
              key={index + 3}
              initial={{ y: 100, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: (index + 3) * 0.1 }}
              className="bg-eco-gray/50 backdrop-blur-sm rounded-2xl p-8 border border-eco-teal/20 hover:border-eco-teal/50 transition-all"
            >
              <motion.div
                className={`text-5xl md:text-6xl font-bold mb-4 ${
                  stat.color === 'eco-green' ? 'text-eco-green' :
                  stat.color === 'eco-teal' ? 'text-eco-teal' :
                  'text-eco-cyan'
                }`}
                whileHover={{ scale: 1.1 }}
              >
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </motion.div>
              <p className="text-white/70 text-lg">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-2xl text-white/80 max-w-3xl mx-auto">
            Current waste management systems are failing. The cost of inaction is
            environmental devastation and human suffering.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
