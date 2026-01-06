'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

export default function HeroSection() {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  return (
    <section
      ref={ref}
      className="section-full flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          background: [
            'radial-gradient(circle at 20% 50%, rgba(0, 255, 136, 0.3) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 50%, rgba(0, 212, 170, 0.3) 0%, transparent 50%)',
            'radial-gradient(circle at 50% 20%, rgba(0, 184, 212, 0.3) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 50%, rgba(0, 255, 136, 0.3) 0%, transparent 50%)',
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center pt-32 md:pt-40">
        <motion.h1
          initial={{ scale: 0.5, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-9xl md:text-[12rem] font-display font-bold mb-6 text-gradient leading-none"
        >
          ECOSORT
        </motion.h1>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-2xl md:text-4xl text-white/90 mb-4 font-light"
        >
          AI-powered automatic waste segregation
        </motion.p>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-eco-teal mb-8"
        >
          for smarter cities
        </motion.p>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-3xl mx-auto mt-12"
        >
          <p className="text-lg text-white/70 leading-relaxed">
            EcoSort is an intelligent waste-segregation system that uses computer vision
            to automatically classify waste at the point of disposal—eliminating manual
            segregation and landfill dependency.
          </p>
        </motion.div>

        {/* Product image */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-20 w-full max-w-4xl mx-auto relative"
        >
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-eco-teal/30 bg-gradient-to-b from-eco-teal/10 to-transparent">
            <Image
              src="/o.png"
              alt="Ecosort Product"
              fill
              className="object-contain"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1024px"
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-eco-teal/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-eco-teal rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
