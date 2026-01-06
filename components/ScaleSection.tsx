'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function ScaleSection() {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  const deployments = [
    { name: 'Parks', icon: '🌳' },
    { name: 'Malls', icon: '🏬' },
    { name: 'Transit Hubs', icon: '🚇' },
    { name: 'Institutions', icon: '🏛️' },
    { name: 'Public Infrastructure', icon: '🏗️' },
  ]

  return (
    <section
      ref={ref}
      className="section-full flex items-center justify-center relative overflow-hidden bg-eco-darker"
    >
      {/* City grid background */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-12 gap-4 h-full p-8">
          {Array.from({ length: 120 }).map((_, i) => (
            <motion.div
              key={i}
              className="bg-eco-teal/20 rounded"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: [0, 0.3, 0.2] } : {}}
              transition={{
                duration: 2,
                delay: i * 0.01,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl font-display font-bold text-center mb-12 text-white"
        >
          SCALE & GOVERNMENT DEPLOYMENT
        </motion.h2>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-2xl text-center text-white/80 mb-16 max-w-4xl mx-auto"
        >
          EcoSort is designed for <span className="text-eco-green font-bold">B2G deployment</span>,
          enabling government authorities to implement intelligent waste management at scale
        </motion.p>

        {/* Deployment locations */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-16">
          {deployments.map((deployment, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="bg-eco-gray/50 backdrop-blur-sm rounded-2xl p-6 border border-eco-teal/30 text-center hover:border-eco-teal/60 hover:scale-105 transition-all"
            >
              <div className="text-5xl mb-4">{deployment.icon}</div>
              <p className="text-lg font-semibold text-white">{deployment.name}</p>
            </motion.div>
          ))}
        </div>

        {/* Funding opportunity */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <div className="inline-block bg-gradient-to-r from-eco-green/20 to-eco-cyan/20 backdrop-blur-sm rounded-2xl p-12 border border-eco-teal/50">
            <p className="text-4xl md:text-5xl font-bold text-eco-green mb-4">
              $11B+
            </p>
            <p className="text-2xl text-white/80 mb-2">
              Urban Development Funding Opportunity
            </p>
            <p className="text-lg text-white/60">
              Government-backed initiatives for smart city infrastructure
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
