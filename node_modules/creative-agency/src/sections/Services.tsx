import { Palette, Code, Layers, Zap, Users, PenLine } from 'lucide-react'
import Section from '../components/ui/Section'
import GlassCard from '../components/ui/GlassCard'
import ScrollReveal from '../components/ui/ScrollReveal'

const services = [
  {
    icon: <PenLine size={24} />,
    title: 'Strategy',
    description:
      'Brand positioning, market research, and strategic planning to define your digital presence and competitive advantage.',
  },
  {
    icon: <Palette size={24} />,
    title: 'Brand Design',
    description:
      'Comprehensive brand identities including visual systems, guidelines, and cohesive brand experiences.',
  },
  {
    icon: <Layers size={24} />,
    title: 'UI/UX Design',
    description:
      'User-centered interfaces with meticulous attention to detail, interaction design, and usability.',
  },
  {
    icon: <Code size={24} />,
    title: 'Development',
    description:
      'High-performance web applications built with modern technologies and best-in-class engineering.',
  },
  {
    icon: <Zap size={24} />,
    title: 'Motion Design',
    description:
      'Captivating animations and micro-interactions that bring digital products to life.',
  },
  {
    icon: <Users size={24} />,
    title: 'Content',
    description:
      'Strategic content creation including copywriting, photography, and video production.',
  },
]

export default function Services() {
  return (
    <Section id="services">
      <ScrollReveal>
        <div className="text-center mb-16 md:mb-24">
          <p className="text-brand-400 text-sm font-medium uppercase tracking-[0.2em] mb-4">
            What We Do
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white">
            Services
          </h2>
        </div>
      </ScrollReveal>

      <div className="relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-full bg-gradient-to-b from-transparent via-brand-500/20 to-transparent hidden lg:block" />
        <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-brand-500/20 to-transparent lg:hidden" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <ScrollReveal key={index} delay={index * 0.08}>
              <GlassCard className="relative group h-full">
                <div className="mb-5 w-12 h-12 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-400 group-hover:bg-brand-500/20 transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-display font-semibold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-white/50 leading-relaxed text-sm">
                  {service.description}
                </p>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </Section>
  )
}
