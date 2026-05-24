import Section from '@/components/ui/Section'
import GlassCard from '@/components/ui/GlassCard'
import ScrollReveal from '@/components/ui/ScrollReveal'
import AnimatedText from '@/components/ui/AnimatedText'

const fabrics = [
  {
    name: 'Combed Cotton',
    weight: '180–300 GSM',
    uses: 'T-shirts, polos, tote bags',
    desc: 'Premium ringspun cotton with a soft hand feel. Our most popular choice for custom apparel with superior print adhesion.',
    gradient: 'from-blue-500/10 to-cyan-500/10',
  },
  {
    name: 'Polyester Blends',
    weight: '200–350 GSM',
    uses: 'Sportswear, jerseys, outerwear',
    desc: 'Moisture-wicking, durable, and colorfast. Ideal for activewear and sublimation printing with vibrant results.',
    gradient: 'from-purple-500/10 to-pink-500/10',
  },
  {
    name: 'Bamboo Fiber',
    weight: '160–240 GSM',
    uses: 'Luxury basics, sustainable lines',
    desc: 'Eco-friendly, naturally antibacterial, and incredibly soft. Perfect for premium sustainable apparel collections.',
    gradient: 'from-green-500/10 to-emerald-500/10',
  },
  {
    name: 'Organic Cotton',
    weight: '180–280 GSM',
    uses: 'Basics, kids wear, eco-lines',
    desc: 'GOTS-certified organic cotton grown without pesticides. Our highest sustainability standard for responsible brands.',
    gradient: 'from-amber-500/10 to-yellow-500/10',
  },
]

export default function Fabrics() {
  return (
    <Section id="fabrics" dark={false}>
      <div className="text-center mb-16 md:mb-20">
        <AnimatedText
          text="Premium Materials"
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white"
        />
        <ScrollReveal delay={0.2}>
          <p className="text-white/50 text-lg mt-4 max-w-2xl mx-auto">
            We source only the finest materials from certified mills. Every fabric is chosen for its print quality, durability, and feel.
          </p>
        </ScrollReveal>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {fabrics.map((fabric, i) => (
          <ScrollReveal key={fabric.name} delay={i * 0.1} direction="up">
            <GlassCard className="h-full">
              <div className={`h-32 rounded-xl bg-gradient-to-br ${fabric.gradient} border border-white/5 mb-5 flex items-end p-4`}>
                <span className="text-xs font-mono text-white/30">{fabric.weight}</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{fabric.name}</h3>
              <p className="text-xs text-brand-400 font-medium uppercase tracking-wider mb-3">{fabric.uses}</p>
              <p className="text-white/50 text-sm leading-relaxed">{fabric.desc}</p>
            </GlassCard>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  )
}
