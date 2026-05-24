import { motion } from 'framer-motion'
import { UtensilsCrossed, Award } from 'lucide-react'
import ScrollReveal from '../components/ui/ScrollReveal'

export default function Story() {
  return (
    <section id="story" className="py-20 md:py-28 lg:py-36 px-6 md:px-12 lg:px-24 bg-ink-950">
      <div className="mx-auto max-w-[1400px]">
        <ScrollReveal>
          <p className="text-brand-400 text-sm md:text-base tracking-[0.3em] uppercase mb-4 text-center font-medium">
            Our Philosophy
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white text-center mb-16 md:mb-20">
            Where Tradition{' '}
            <span className="bg-gradient-to-r from-brand-300 to-amber-200 bg-clip-text text-transparent">
              Meets Innovation
            </span>
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center">
          {/* Image placeholder */}
          <ScrollReveal direction="left">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-500/20 to-amber-600/10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <UtensilsCrossed size={48} className="text-brand-400/50 mx-auto mb-4" />
                  <p className="text-white/30 text-sm tracking-widest uppercase">Interior</p>
                </div>
              </div>
              <div className="absolute inset-0 border border-white/5 rounded-2xl" />
            </div>
          </ScrollReveal>

          {/* Text content */}
          <ScrollReveal direction="right">
            <div className="space-y-6">
              <p className="text-white/70 leading-relaxed text-lg">
                Founded in the heart of Manhattan in 2018, Aura was born from a singular vision — to
                create a dining experience that transcends the ordinary. Our founder, Chef Marcus
                Bellamy, dreamed of a space where European culinary traditions meet the vibrant
                energy of modern New York.
              </p>
              <p className="text-white/60 leading-relaxed">
                Every dish tells a story of meticulously sourced ingredients, time-honored
                techniques, and bold reimaginings. From the rolling hills of Tuscany to the
                coastal markets of Santorini, we travel the continent to bring you the finest
                Europe has to offer — then we make it unmistakably our own.
              </p>

              {/* Signature dish highlight */}
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 mt-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-500/20 flex items-center justify-center flex-shrink-0">
                    <Award size={24} className="text-brand-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Signature Dish</h4>
                    <p className="text-white/60 text-sm leading-relaxed">
                      Our{' '}
                      <span className="text-brand-300 font-medium">
                        Truffle & Sage Agnolotti
                      </span>{' '}
                      — hand-rolled pasta filled with wild mushrooms, finished with black
                      truffle shavings and brown butter sage emulsion. A celebration of
                      simplicity and depth.
                    </p>
                  </div>
                </div>
              </div>

              <motion.p
                className="text-white/50 italic text-sm mt-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                "Cooking is not about complexity — it's about respect for the ingredient and
                the story it carries."
              </motion.p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
