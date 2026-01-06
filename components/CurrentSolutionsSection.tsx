'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function CurrentSolutionsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  })

  const problems = [
    {
      title: '$10,000+ Bulky Machines',
      description: 'Expensive post-disposal sorting equipment that requires massive infrastructure',
      icon: '💰',
    },
    {
      title: 'Manual Segregation',
      description: 'Health risks for workers, inhumane conditions, and inconsistent results',
      icon: '👷',
    },
    {
      title: 'Hardcoded Sensor Bins',
      description: 'Poor accuracy, limited categories, and frequent failures',
      icon: '📦',
    },
  ]

  const y1 = useTransform(scrollYProgress, [0, 0.3], [0, -100])
  const y2 = useTransform(scrollYProgress, [0.3, 0.6], [0, -100])
  const y3 = useTransform(scrollYProgress, [0.6, 1], [0, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [1, 1, 1, 0])

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-eco-darker py-20 md:py-24 -mt-8"
    >
      {/* Animated background effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, rgba(239, 68, 68, 0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, rgba(220, 38, 38, 0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 50% 20%, rgba(185, 28, 28, 0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, rgba(239, 68, 68, 0.3) 0%, transparent 50%)',
            ],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-900/10 to-eco-darker" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-4xl mx-auto leading-relaxed">
            Current waste management systems are failing. The cost of inaction is environmental devastation and human suffering.
          </p>
        </motion.div>

        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-7xl font-display font-bold text-center mb-12 text-white"
        >
          WHY CURRENT SOLUTIONS FAIL
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {problems.map((problem, index) => {
            const yTransforms = [y1, y2, y3]
            return (
              <motion.div
                key={index}
                initial={{ y: 100, opacity: 0, scale: 0.8 }}
                whileInView={{ y: 0, opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.15 }}
                style={{ y: yTransforms[index] }}
                className="group relative"
              >
                {/* Glow effect on hover */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500/0 via-red-500/50 to-red-500/0 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
                
                <div className="relative bg-eco-gray/40 backdrop-blur-md rounded-2xl p-8 border-2 border-red-500/40 group-hover:border-red-500/70 transition-all h-full flex flex-col">
                  {/* Icon with animation */}
                  <motion.div
                    className="text-7xl mb-6 flex justify-center"
                    whileHover={{ scale: 1.2, rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    {problem.icon}
                  </motion.div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold text-red-400 mb-4 text-center group-hover:text-red-300 transition-colors">
                      {problem.title}
                    </h3>
                    <p className="text-lg text-white/70 text-center leading-relaxed">
                      {problem.description}
                    </p>
                  </div>

                  {/* Animated underline */}
                  <motion.div
                    className="h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent mt-6"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 + index * 0.15 }}
                  />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
