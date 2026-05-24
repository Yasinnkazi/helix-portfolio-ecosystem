import { motion } from 'framer-motion'
import { ArrowRight, Zap } from 'lucide-react'
import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'

export default function CTA() {
  return (
    <Section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-600/20 via-ink-950 to-brand-800/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brand-500/10 blur-[120px]" />
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{
            background: 'repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(248,62,62,0.03) 20px, rgba(248,62,62,0.03) 40px)',
          }}
          animate={{ backgroundPosition: ['0px 0px', '40px 40px'] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-sm mb-8">
            <Zap size={16} />
            <span className="font-semibold">Limited Time Offer</span>
          </div>
        </motion.div>

        <motion.h2
          className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] tracking-tighter"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
        >
          Ready to
          <br />
          <span className="text-brand-500">Transform?</span>
        </motion.h2>

        <motion.p
          className="text-xl text-white/60 mt-6 max-w-lg mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        >
          First week free. No commitment required. No hidden fees.
        </motion.p>

        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <Button variant="primary" size="lg" className="text-lg px-10 py-5" icon={<ArrowRight size={20} />}>
            Claim Your Free Week
          </Button>
        </motion.div>

        <motion.p
          className="text-white/30 text-sm mt-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          Join 5,000+ members who have already transformed
        </motion.p>
      </div>
    </Section>
  )
}
