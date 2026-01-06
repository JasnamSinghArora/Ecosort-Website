'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function EnergySection() {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  const comparisons = [
    {
      title: 'Hardware Cost',
      ecoSort: '$200',
      traditional: '$10,000+',
      savings: '98% cheaper',
    },
    {
      title: 'Power Consumption',
      ecoSort: 'Raspberry Pi 5',
      traditional: 'Expensive processors',
      savings: 'Energy efficient',
    },
    {
      title: 'Size',
      ecoSort: 'Compact',
      traditional: 'Bulky',
      savings: 'Space efficient',
    },
    {
      title: 'Inference Speed',
      ecoSort: '5-10 seconds',
      traditional: '20-30 seconds',
      savings: '2-3x faster',
    },
  ]

  return (
    <section
      ref={ref}
      className="section-full flex items-center justify-center relative overflow-hidden bg-eco-darker"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl font-display font-bold text-center mb-20 text-white"
        >
          WHY ECOSORT IS DIFFERENT
        </motion.h2>

        <div className="space-y-8">
          {comparisons.map((comparison, index) => (
            <motion.div
              key={index}
              initial={{ x: -100, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center"
            >
              {/* Traditional */}
              <motion.div
                className="bg-red-900/20 backdrop-blur-sm rounded-2xl p-6 border border-red-500/30 text-center"
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-xl text-red-400 mb-2">Traditional CV Systems</h3>
                <p className="text-3xl font-bold text-white">{comparison.traditional}</p>
              </motion.div>

              {/* Title */}
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white/80">{comparison.title}</h3>
                <motion.div
                  className="text-eco-green text-lg font-semibold mt-2"
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                >
                  {comparison.savings}
                </motion.div>
              </div>

              {/* EcoSort */}
              <motion.div
                className="bg-eco-teal/20 backdrop-blur-sm rounded-2xl p-6 border border-eco-teal/50 text-center glow-teal"
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-xl text-eco-teal mb-2">EcoSort</h3>
                <p className="text-3xl font-bold text-eco-green">{comparison.ecoSort}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-eco-gray/50 backdrop-blur-sm rounded-2xl p-8 border border-eco-green/30">
            <p className="text-2xl text-white/80 mb-2">
              <span className="text-eco-green font-bold">Energy-efficient pipeline</span> enables
            </p>
            <p className="text-3xl text-eco-teal font-bold">
              Low-cost Raspberry Pi 5 deployment
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
