import { motion } from 'framer-motion'
import Section from '@/components/ui/Section'
import ScrollReveal from '@/components/ui/ScrollReveal'
import AnimatedText from '@/components/ui/AnimatedText'

const brands = [
  'Velocity Athletics', 'Mountain & Peak', 'Urban Standard', 'Ironclad Workwear',
  'Primal Fit', 'Campus Collective', 'Horizon Supply Co.', 'Northbound Gear',
  'Strata Apparel', 'Foundation Basics', 'Apex Streetwear', 'Unity Brands',
  'Verdant Lifestyle', 'Metro Lifestyle Co.', 'Celtic Sportswear', 'Pinnacle Uniforms',
  'Eclipse Active', 'Terra Outdoor', 'Summit Teamwear', 'Core Athletics',
]

export default function Clients() {
  const duplicated = [...brands, ...brands]

  return (
    <Section id="clients" dark>
      <div className="text-center mb-16 md:mb-20">
        <AnimatedText
          text="Trusted Partners"
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white"
        />
        <ScrollReveal delay={0.2}>
          <p className="text-white/50 text-lg mt-4 max-w-2xl mx-auto">
            We partner with leading brands across fashion, sports, corporate, and retail sectors worldwide.
          </p>
        </ScrollReveal>
      </div>

      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-ink-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-ink-950 to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-16 items-center"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        >
          {duplicated.map((brand, i) => (
            <div
              key={`${brand}-${i}`}
              className="flex-shrink-0 px-8 py-4 rounded-xl border border-white/5 bg-white/[0.02]"
            >
              <span className="text-lg md:text-xl font-semibold text-white/20 whitespace-nowrap tracking-wider uppercase">
                {brand}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </Section>
  )
}
