'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState, useEffect } from 'react'

function AnimatedMetric({ end, suffix = '', decimals = 0 }: { end: number; suffix?: string; decimals?: number }) {
  const [count, setCount] = useState(0)
  const [ref, inView] = useInView({ threshold: 0.5, triggerOnce: true })

  useEffect(() => {
    if (!inView) return

    let startTime: number | null = null
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / 2000, 1)
      const easeOut = 1 - Math.pow(1 - progress, 3)
      setCount(easeOut * end)
      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setCount(end)
      }
    }
    requestAnimationFrame(animate)
  }, [inView, end])

  return (
    <span ref={ref}>
      {count.toFixed(decimals)}{suffix}
    </span>
  )
}

export default function ImpactSection() {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  const metrics = [
    { value: 10, suffix: ' kg/day', label: 'Waste Segregated', color: 'eco-green' },
    { value: 4.1, suffix: ' kg CO₂', label: 'Emissions Avoided', color: 'eco-teal', decimals: 1 },
    { value: 9.02, suffix: ' kWh', label: 'Energy Recovered', color: 'eco-cyan', decimals: 2 },
  ]

  return (
    <section
      ref={ref}
      className="section-full flex items-center justify-center relative overflow-hidden bg-eco-dark"
    >
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={inView ? {
          background: [
            'radial-gradient(circle at 30% 50%, rgba(0, 255, 136, 0.3) 0%, transparent 50%)',
            'radial-gradient(circle at 70% 50%, rgba(0, 212, 170, 0.3) 0%, transparent 50%)',
            'radial-gradient(circle at 50% 30%, rgba(0, 184, 212, 0.3) 0%, transparent 50%)',
            'radial-gradient(circle at 30% 50%, rgba(0, 255, 136, 0.3) 0%, transparent 50%)',
          ],
        } : {}}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl font-display font-bold text-center mb-20 text-white"
        >
          REAL-WORLD IMPACT
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={inView ? { scale: 1, opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`bg-eco-gray/50 backdrop-blur-sm rounded-2xl p-8 border-2 ${
                metric.color === 'eco-green' ? 'border-eco-green/30' :
                metric.color === 'eco-teal' ? 'border-eco-teal/30' :
                'border-eco-cyan/30'
              } text-center hover:scale-105 transition-all`}
            >
              <motion.div
                className={`text-6xl md:text-7xl font-bold mb-4 ${
                  metric.color === 'eco-green' ? 'text-eco-green' :
                  metric.color === 'eco-teal' ? 'text-eco-teal' :
                  'text-eco-cyan'
                }`}
                whileHover={{ scale: 1.1 }}
              >
                <AnimatedMetric
                  end={metric.value}
                  suffix={metric.suffix}
                  decimals={metric.decimals || 0}
                />
              </motion.div>
              <p className="text-white/70 text-xl">{metric.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <div className="inline-block bg-eco-gray/50 backdrop-blur-sm rounded-2xl p-8 border border-eco-green/30">
            <p className="text-3xl text-eco-green font-bold mb-2">
              1.5 Million
            </p>
            <p className="text-xl text-white/80">
              Informal waste workers can be freed from hazardous manual segregation
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
