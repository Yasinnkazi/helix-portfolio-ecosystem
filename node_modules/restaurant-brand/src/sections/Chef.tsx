import { Award, MapPin, Calendar } from 'lucide-react'
import ScrollReveal from '../components/ui/ScrollReveal'
import GlassCard from '../components/ui/GlassCard'

const accolades = [
  { label: 'Michelin Star', year: '2021', description: 'Awarded for culinary excellence' },
  { label: 'James Beard Finalist', year: '2023', description: 'Best Chef: Northeast' },
  { label: 'World\'s 50 Best', year: '2024', description: 'Ranked #32 globally' },
  { label: 'AAA Five Diamond', year: '2022', description: 'Fine Dining recognition' },
]

export default function Chef() {
  return (
    <section id="chef" className="py-20 md:py-28 lg:py-36 px-6 md:px-12 lg:px-24 bg-ink-950">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid md:grid-cols-5 gap-12 md:gap-16 lg:gap-20 items-center">
          {/* Chef portrait */}
          <ScrollReveal direction="left" className="md:col-span-2">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-500/20 via-amber-500/10 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-4">
                    <Award size={36} className="text-brand-400/50" />
                  </div>
                  <p className="text-white/30 text-sm tracking-widest uppercase">Chef&apos;s Portrait</p>
                </div>
              </div>
              <div className="absolute inset-0 border border-white/5 rounded-2xl" />
              {/* Decorative corner accent */}
              <div className="absolute top-4 left-4 w-12 h-px bg-brand-400/40" />
              <div className="absolute top-4 left-4 w-px h-12 bg-brand-400/40" />
              <div className="absolute bottom-4 right-4 w-12 h-px bg-brand-400/40" />
              <div className="absolute bottom-4 right-4 w-px h-12 bg-brand-400/40" />
            </div>
          </ScrollReveal>

          {/* Chef info */}
          <ScrollReveal direction="right" className="md:col-span-3">
            <p className="text-brand-400 text-sm tracking-[0.3em] uppercase mb-4 font-medium">Our Chef</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-2">
              Marcus{' '}
              <span className="bg-gradient-to-r from-brand-300 to-amber-200 bg-clip-text text-transparent">
                Bellamy
              </span>
            </h2>
            <p className="text-white/40 text-lg mb-6">Executive Chef &amp; Founder</p>

            <p className="text-white/60 leading-relaxed mb-8">
              With over two decades in the world&apos;s most celebrated kitchens, Chef Marcus
              Bellamy brings a wealth of experience from Michelin-starred establishments across
              Paris, London, and Tokyo. His culinary journey began in his grandmother&apos;s
              kitchen in Lyon, where the foundations of classical French technique were laid.
              After training at Le Cordon Bleu and working under Alain Ducasse and Heston
              Blumenthal, Marcus returned to New York with a singular vision — to create a
              dining experience that honors tradition while fearlessly embracing innovation.
            </p>

            {/* Quote */}
            <div className="border-l-2 border-brand-500/50 pl-6 mb-10">
              <p className="text-white/70 text-lg italic leading-relaxed">
                &ldquo;Food is memory. Every plate we send out carries a piece of somewhere
                we&apos;ve been, someone we&apos;ve learned from, a moment we want to share.
                Our goal is not to impress — it is to transport.&rdquo;
              </p>
              <p className="text-brand-400 text-sm mt-3 font-medium">— Chef Marcus Bellamy</p>
            </div>

            {/* Accolades */}
            <h4 className="text-white/80 font-semibold mb-4 uppercase tracking-wider text-sm">Accolades &amp; Recognition</h4>
            <div className="grid grid-cols-2 gap-4">
              {accolades.map((a) => (
                <GlassCard key={a.label} hover={false} className="p-4">
                  <p className="text-brand-300 text-xs font-semibold tracking-wider uppercase">{a.year}</p>
                  <p className="text-white font-medium mt-1">{a.label}</p>
                  <p className="text-white/40 text-xs mt-0.5">{a.description}</p>
                </GlassCard>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
