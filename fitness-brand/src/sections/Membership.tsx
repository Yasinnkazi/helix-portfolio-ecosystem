import { motion } from 'framer-motion'
import { Check, X, ArrowRight, Star } from 'lucide-react'
import Section from '@/components/ui/Section'
import ScrollReveal from '@/components/ui/ScrollReveal'
import Button from '@/components/ui/Button'

const features = [
  { label: '24/7 Facility Access', included: [true, true, true] },
  { label: 'Group Fitness Classes', included: [false, true, true] },
  { label: 'Nutrition Plans', included: [false, true, true] },
  { label: 'Personal Training Sessions', included: [false, true, true] },
  { label: 'Recovery Suite Access', included: [false, false, true] },
  { label: 'Priority Class Booking', included: [false, false, true] },
  { label: 'Guest Passes', included: [false, false, true] },
]

const plans = [
  {
    name: 'Core',
    price: '29',
    description: 'Everything you need to get started',
    tier: 0,
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '59',
    description: 'Our most popular membership',
    tier: 1,
    highlighted: true,
  },
  {
    name: 'Elite',
    price: '99',
    description: 'The ultimate fitness experience',
    tier: 2,
    highlighted: false,
  },
]

export default function Membership() {
  return (
    <Section id="plans" dark>
      <ScrollReveal>
        <div className="text-center mb-16">
          <span className="text-brand-500 text-sm font-semibold uppercase tracking-[0.2em]">Membership</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mt-4 leading-tight">
            Choose Your <span className="text-brand-500">Path</span>
          </h2>
          <p className="text-white/50 text-lg mt-4 max-w-2xl mx-auto">
            No hidden fees. No long-term contracts. Cancel anytime.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.name}
            className={`relative rounded-2xl p-8 ${
              plan.highlighted
                ? 'bg-gradient-to-b from-brand-600/20 to-brand-800/10 border-2 border-brand-500/50 shadow-2xl shadow-brand-500/10'
                : 'bg-white/5 backdrop-blur-md border border-white/10'
            }`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: i * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {plan.highlighted && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="inline-flex items-center gap-1 px-4 py-1.5 bg-brand-500 text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-lg shadow-brand-500/30">
                  <Star size={12} /> Most Popular
                </span>
              </div>
            )}

            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-1">{plan.name}</h3>
              <p className="text-white/50 text-sm">{plan.description}</p>
            </div>

            <div className="mb-8">
              <span className="text-5xl font-black text-white">${plan.price}</span>
              <span className="text-white/40 text-lg ml-2">/month</span>
            </div>

            <ul className="space-y-4 mb-8">
              {features.map((feature) => (
                <li key={feature.label} className="flex items-center gap-3">
                  {feature.included[plan.tier] ? (
                    <Check size={18} className="text-brand-500 shrink-0" />
                  ) : (
                    <X size={18} className="text-white/20 shrink-0" />
                  )}
                  <span className={feature.included[plan.tier] ? 'text-white/80' : 'text-white/30'}>
                    {feature.label}
                  </span>
                </li>
              ))}
            </ul>

            <Button
              variant={plan.highlighted ? 'primary' : 'secondary'}
              className="w-full"
              icon={<ArrowRight size={16} />}
            >
              {plan.highlighted ? 'Get Started' : 'Join Now'}
            </Button>

            <p className="text-center text-white/30 text-xs mt-3">No commitment required</p>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
