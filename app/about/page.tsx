'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Navbar from '@/components/Navbar'
import Image from 'next/image'

const teamMembers = [
  {
    name: 'Jasnam Singh Arora',
    image: '/jasnam.png',
  },
  {
    name: 'Vanya Gulati',
    image: '/vanya.jpeg',
  },
  {
    name: 'Doyel Nahar',
    image: '/doyel.jpeg',
  },
]

export default function AboutPage() {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  return (
    <main className="relative min-h-screen">
      <Navbar />
      
      <section className="section-full flex items-center justify-center relative overflow-hidden bg-eco-darker">
        {/* Background gradient */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-b from-eco-teal/20 via-transparent to-eco-green/20" />
        </div>

        <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6 w-full py-20">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="text-7xl md:text-9xl font-display font-bold text-center mb-6 text-gradient"
          >
            ABOUT US
          </motion.h1>

          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl text-center text-white/80 mb-20 max-w-3xl mx-auto leading-relaxed"
          >
            We're building the future of waste management through intelligent automation
            and sustainable technology. We started Ecosort to help the workers that are forced
            into manual segregation of waste which risks diseases and is inhumane.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ y: 100, opacity: 0, scale: 0.9 }}
                animate={inView ? { y: 0, opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
                className="group"
              >
                <div className="bg-eco-gray/50 backdrop-blur-sm rounded-3xl p-8 border border-eco-teal/30 hover:border-eco-teal/60 transition-all hover:scale-105">
                  {/* Photo */}
                  <div className="relative w-full aspect-square mb-6 rounded-2xl overflow-hidden bg-eco-gray border border-eco-teal/20">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-eco-green/20 to-eco-cyan/20 opacity-0 group-hover:opacity-100 transition-opacity"
                      whileHover={{ scale: 1.1 }}
                    />
                  </div>

                  {/* Name */}
                  <h3 className="text-3xl font-bold text-white text-center">{member.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mission statement */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-20 text-center"
          >
            <div className="inline-block bg-eco-gray/50 backdrop-blur-sm rounded-2xl p-12 border border-eco-green/30 max-w-4xl">
              <h2 className="text-4xl font-bold text-eco-green mb-6">Our Mission</h2>
              <p className="text-xl text-white/80 leading-relaxed">
                To revolutionize waste management through AI-powered automation,
                making sustainable practices accessible, affordable, and scalable
                for cities worldwide. We believe technology can eliminate the need
                for manual waste segregation while creating a cleaner, healthier planet.
              </p>
            </div>
          </motion.div>

          {/* Video */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-20"
          >
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-eco-green mb-8 text-center">Our Story</h2>
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-eco-teal/30 bg-eco-gray/30">
                <video
                  src="/conrad.mp4"
                  controls
                  className="w-full h-full object-contain"
                  preload="metadata"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
