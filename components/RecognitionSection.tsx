'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function RecognitionSection() {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  const achievements = [
    {
      title: 'North-East India Winner (1st)',
      competition: 'Design Championship 2025',
      description: 'Ecosort ranked 1st in the North-East region of the Design Championship in the coding category, which received a total of 1,500 submissions.',
      highlight: '1st Place',
      color: 'eco-green',
    },
    {
      title: 'Top 18 Finalist',
      competition: 'Sanrakshan Competition at Techfest \'24-25, IIT Bombay',
      description: 'This competition sought to award solutions that promoted innovative devices for rural areas. Our team ranked in the top 3% of solutions, being one of 18 finalists competing for the $2,000 prize pool.',
      highlight: 'Top 3%',
      color: 'eco-teal',
    },
    {
      title: 'Top 12 (Environment & Energy)',
      competition: 'Smart India Hackathon \'23-24',
      description: 'Our solution was a category finalist at this government-hosted competition aiming to fund and implement innovative solutions. We were shortlisted for further mentorship at a nearby nodal centre, along with being a semi-finalist (out of ~60,000 submissions), competing for government funding.',
      highlight: 'Top 12',
      color: 'eco-cyan',
    },
    {
      title: 'Top 50 Semi-Finalist',
      competition: 'YuvAI Competition - India AI Impact Summit \'26',
      description: 'Selected in the top 50 solutions (semi-finalist) for the YuvAI competition to be hosted during the India AI Impact Summit \'26, currently competing for a prize pool of ~$100,000.',
      highlight: 'Top 50',
      color: 'eco-green',
    },
    {
      title: 'Top 16 Semi-Finalist',
      competition: 'Harvard Undergraduate Clean Energy Group (HUCEG) Sustainability Challenge \'24',
      description: 'This competition centered around solutions promoting sustainability in our local communities. Worldwide competition.',
      highlight: 'Top 16',
      color: 'eco-teal',
    },
    {
      title: 'Top 50 Finalist',
      competition: 'Young Creators League \'23-24, Plaksha University',
      description: 'Ecosort was a shortlisted finalist at this innovation summit, and our team was invited to the Plaksha University Campus to present our solution.',
      highlight: 'Top 50',
      color: 'eco-cyan',
    },
  ]

  return (
    <section
      ref={ref}
      className="section-full flex items-center justify-center relative overflow-hidden bg-eco-dark"
    >
      {/* Animated background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-b from-eco-green/20 via-transparent to-eco-cyan/20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-12">
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl font-display font-bold text-center mb-12 text-white"
        >
          RECOGNITION & ACHIEVEMENTS
        </motion.h2>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-2xl text-center text-white/80 mb-16 max-w-4xl mx-auto"
        >
          Ecosort has been recognized and awarded at prestigious competitions worldwide,
          validating our innovative approach to waste management.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ y: 100, opacity: 0, scale: 0.9 }}
              animate={inView ? { y: 0, opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
              className={`bg-eco-gray/50 backdrop-blur-sm rounded-2xl p-8 border-2 transition-all hover:scale-105 ${
                achievement.color === 'eco-green' ? 'border-eco-green/30 hover:border-eco-green/60' :
                achievement.color === 'eco-teal' ? 'border-eco-teal/30 hover:border-eco-teal/60' :
                'border-eco-cyan/30 hover:border-eco-cyan/60'
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className={`text-2xl font-bold mb-2 ${
                    achievement.color === 'eco-green' ? 'text-eco-green' :
                    achievement.color === 'eco-teal' ? 'text-eco-teal' :
                    'text-eco-cyan'
                  }`}>
                    {achievement.title}
                  </h3>
                  <p className="text-lg text-eco-teal mb-3">{achievement.competition}</p>
                </div>
                <div className={`px-4 py-2 rounded-lg ${
                  achievement.color === 'eco-green' ? 'bg-eco-green/20 border-eco-green/50' :
                  achievement.color === 'eco-teal' ? 'bg-eco-teal/20 border-eco-teal/50' :
                  'bg-eco-cyan/20 border-eco-cyan/50'
                } border`}>
                  <span className={`text-sm font-bold ${
                    achievement.color === 'eco-green' ? 'text-eco-green' :
                    achievement.color === 'eco-teal' ? 'text-eco-teal' :
                    'text-eco-cyan'
                  }`}>
                    {achievement.highlight}
                  </span>
                </div>
              </div>
              <p className="text-white/70 text-base leading-relaxed">{achievement.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
