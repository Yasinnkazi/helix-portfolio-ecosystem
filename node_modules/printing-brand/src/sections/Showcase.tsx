import { Shirt, Layers, ShirtIcon, Medal, HardHat, BaggageClaim } from 'lucide-react'
import Section from '@/components/ui/Section'
import ScrollReveal from '@/components/ui/ScrollReveal'
import AnimatedText from '@/components/ui/AnimatedText'

const categories = [
  { icon: Shirt, title: 'T-Shirts', desc: 'Crew necks, v-necks, premium ringspun cotton. Bulk orders from 50 units.' },
  { icon: Layers, title: 'Hoodies', desc: 'Pullover, zip-up, heavyweight fleece. Custom fits for any brand.' },
  { icon: ShirtIcon, title: 'Polo Shirts', desc: 'Classic pique, sports mesh, corporate-ready with embroidery options.' },
  { icon: Medal, title: 'Sports Jerseys', desc: 'Sublimated, screen-printed, full-uniform production for teams and leagues.' },
  { icon: HardHat, title: 'Workwear', desc: 'Hi-vis, safety vests, industrial uniforms built for durability.' },
  { icon: BaggageClaim, title: 'Bags', desc: 'Tote bags, drawstring sacks, premium cotton shoppers.' },
]

export default function Showcase() {
  return (
    <Section id="craft" dark>
      <div className="text-center mb-16 md:mb-20">
        <AnimatedText
          text="Our Craft"
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white"
        />
        <ScrollReveal delay={0.2}>
          <p className="text-white/50 text-lg mt-4 max-w-2xl mx-auto">
            Every garment tells a story. From premium screen printing to intricate embroidery, we bring your vision to life with industrial precision.
          </p>
        </ScrollReveal>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {categories.map((cat, i) => {
          const Icon = cat.icon
          return (
            <ScrollReveal key={cat.title} delay={i * 0.1}>
              <div className="group relative rounded-2xl p-6 md:p-8 bg-white/5 backdrop-blur-md border border-white/10 transition-all duration-500 hover:bg-white/[0.08] hover:border-white/20 hover:-translate-y-1">
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-500/5 to-transparent" />
                </div>
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center mb-5 group-hover:bg-brand-500/20 transition-colors duration-300">
                    <Icon size={24} className="text-brand-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{cat.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{cat.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          )
        })}
      </div>
    </Section>
  )
}
