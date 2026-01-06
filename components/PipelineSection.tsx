'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function PipelineSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  })

  const steps = [
    {
      title: 'Segment',
      subtitle: 'Meta SAM',
      description: 'Object segmentation using Meta\'s Segment Anything Model',
      color: 'eco-green',
      progress: [0, 0.33],
    },
    {
      title: 'Detect',
      subtitle: 'YOLOv11',
      description: 'Waste classification with custom-trained YOLOv11 model (40,000-image dataset)',
      color: 'eco-teal',
      progress: [0.33, 0.66],
    },
    {
      title: 'Confirm',
      subtitle: 'OpenAI API',
      description: 'Anomaly handling and confirmation layer for edge cases',
      color: 'eco-cyan',
      progress: [0.66, 1],
    },
  ]

  const step1Progress = useTransform(scrollYProgress, [0, 0.33], [0, 1])
  const step2Progress = useTransform(scrollYProgress, [0.33, 0.66], [0, 1])
  const step3Progress = useTransform(scrollYProgress, [0.66, 1], [0, 1])

  const step1Active = useTransform(scrollYProgress, [0, 0.33], [0, 1])
  const step2Active = useTransform(scrollYProgress, [0.33, 0.66], [0, 1])
  const step3Active = useTransform(scrollYProgress, [0.66, 1], [0, 1])

  const stepProgresses = [step1Progress, step2Progress, step3Progress]
  const stepActives = [step1Active, step2Active, step3Active]

  return (
    <section
      ref={ref}
      className="section-full flex items-center justify-center relative overflow-hidden bg-eco-dark"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl font-display font-bold text-center mb-20 text-white"
        >
          HOW ECOSORT WORKS
        </motion.h2>

        {/* Pipeline visualization */}
        <div className="relative">
          {/* Connection lines */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-eco-gray/30 -translate-y-1/2 hidden md:block">
            <motion.div
              className="h-full bg-gradient-to-r from-eco-green via-eco-teal to-eco-cyan"
              style={{
                scaleX: scrollYProgress,
                transformOrigin: 'left',
              }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
            {steps.map((step, index) => {
              const progress = stepProgresses[index]
              const isActive = stepActives[index]

              return (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <motion.div
                    className={`bg-eco-gray/50 backdrop-blur-sm rounded-2xl p-8 border-2 transition-all ${
                      index === 0 ? 'border-eco-green' :
                      index === 1 ? 'border-eco-teal' :
                      'border-eco-cyan'
                    }`}
                    style={{
                      scale: useTransform(isActive, [0, 1], [1, 1.1]),
                      boxShadow: useTransform(
                        isActive,
                        [0, 1],
                        ['0 0 0px rgba(0, 255, 136, 0)', `0 0 30px rgba(0, 255, 136, 0.5)`]
                      ),
                    }}
                  >
                    {/* Step number */}
                    <div className="text-6xl font-bold text-white/20 mb-4">
                      {String(index + 1).padStart(2, '0')}
                    </div>

                    {/* Step title */}
                    <h3 className={`text-4xl font-bold mb-2 ${
                      step.color === 'eco-green' ? 'text-eco-green' :
                      step.color === 'eco-teal' ? 'text-eco-teal' :
                      'text-eco-cyan'
                    }`}>
                      {step.title}
                    </h3>

                    {/* Subtitle */}
                    <p className="text-xl text-eco-teal mb-4">{step.subtitle}</p>

                    {/* Description */}
                    <p className="text-white/70 text-lg mb-6">{step.description}</p>

                    {/* Progress indicator */}
                    <div className="h-2 bg-eco-gray rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full ${
                          step.color === 'eco-green' ? 'bg-eco-green' :
                          step.color === 'eco-teal' ? 'bg-eco-teal' :
                          'bg-eco-cyan'
                        }`}
                        style={{
                          width: useTransform(progress, [0, 1], ['0%', '100%']),
                        }}
                      />
                    </div>
                  </motion.div>

                  {/* Arrow (desktop only) */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-2 -translate-y-1/2 z-10">
                      <motion.div
                        className="text-4xl text-eco-teal"
                        animate={{ x: [0, 10, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        →
                      </motion.div>
                    </div>
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Result display */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-eco-gray/50 backdrop-blur-sm rounded-2xl p-8 border border-eco-teal/30">
            <p className="text-2xl text-white/80 mb-4">
              <span className="text-eco-green font-bold">~95% accuracy</span> in{' '}
              <span className="text-eco-teal font-bold">5-10 seconds</span>
            </p>
            <p className="text-lg text-white/60">
              Classifies waste into: Wet • Dry • Hazardous
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
