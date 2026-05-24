import { Check, PenTool, MessageSquare } from 'lucide-react'
import { motion } from 'framer-motion'
import Section from '@/components/ui/Section'
import ScrollReveal from '@/components/ui/ScrollReveal'
import AnimatedText from '@/components/ui/AnimatedText'
import Button from '@/components/ui/Button'

const features = [
  'Precision multi-head digitizing for consistent results at scale',
  '3,000+ thread colors with Pantone matching available',
  'Custom patches, badges, and woven labels',
  '3D puff embroidery for dimensional logo treatments',
  'Bulk production up to 10,000+ units per run',
  'Compatible with hats, polos, jackets, bags, and more',
]

export default function Embroidery() {
  return (
    <Section id="embroidery" dark>
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <ScrollReveal direction="left">
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-brand-900/30 to-ink-900 border border-white/10 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(12,130,240,0.08),transparent_70%)]" />
              <div className="text-center relative z-10">
                <PenTool size={48} className="text-brand-400 mx-auto mb-4" />
                <p className="text-white/30 text-sm">Embroidery Preview</p>
              </div>
            </div>

            <motion.div
              className="absolute -bottom-4 -right-4 w-32 h-32 rounded-2xl bg-brand-500/5 border border-brand-500/10 backdrop-blur-sm flex items-center justify-center"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-brand-400">12K</div>
                <div className="text-xs text-white/40">Stitches/min</div>
              </div>
            </motion.div>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="right">
          <div>
            <AnimatedText
              text="Precision Embroidery"
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white"
            />
            <p className="text-white/50 text-lg mt-4 mb-8 leading-relaxed">
              Our state-of-the-art multi-head embroidery machines deliver flawless stitch quality at industrial volumes.
              From team uniforms to corporate apparel, every thread is placed with micron-level accuracy.
            </p>

            <div className="space-y-3 mb-10">
              {features.map((feature) => (
                <div key={feature} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-500/10 border border-brand-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={12} className="text-brand-400" />
                  </div>
                  <span className="text-white/60 text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <Button variant="primary" size="lg" href="#quote" icon={<MessageSquare size={18} />}>
              Discuss Your Design
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </Section>
  )
}
