'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function TurningPointSection() {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  const features = [
    {
      title: 'Pre-disposal Segregation',
      description: 'Classify waste at the point of disposal, before it becomes a problem',
    },
    {
      title: 'Zero User Awareness Required',
      description: 'Fully automatic—users simply dispose, the system handles the rest',
    },
    {
      title: 'Compact AI-Driven System',
      description: 'Intelligent, space-efficient design that fits anywhere',
    },
  ]

  return (
    <section
      ref={ref}
      className="section-full flex items-center justify-center relative overflow-hidden"
    >
      {/* Clean, intelligent background */}
      <motion.div
        className="absolute inset-0"
        animate={inView ? {
          background: [
            'radial-gradient(circle at 50% 50%, rgba(0, 255, 136, 0.2) 0%, transparent 70%)',
            'radial-gradient(circle at 30% 70%, rgba(0, 212, 170, 0.2) 0%, transparent 70%)',
            'radial-gradient(circle at 70% 30%, rgba(0, 184, 212, 0.2) 0%, transparent 70%)',
            'radial-gradient(circle at 50% 50%, rgba(0, 255, 136, 0.2) 0%, transparent 70%)',
          ],
        } : {}}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl font-display font-bold mb-6 text-gradient"
          >
            THE ECOSORT TURNING POINT
          </motion.h2>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl text-white/80 max-w-3xl mx-auto"
          >
            A new paradigm in waste management—intelligent, efficient, and scalable
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ y: 100, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
              className="bg-eco-gray/30 backdrop-blur-sm rounded-2xl p-8 border border-eco-teal/30 hover:border-eco-teal/60 transition-all hover:scale-105"
            >
              <h3 className="text-2xl font-bold text-eco-green mb-4">{feature.title}</h3>
              <p className="text-white/70 text-lg">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
