import { ArrowRight, TrendingUp, Users, Clock } from 'lucide-react'
import Section from '../components/ui/Section'
import ScrollReveal from '../components/ui/ScrollReveal'
import GlassCard from '../components/ui/GlassCard'
import Button from '../components/ui/Button'

const caseStudies = [
  {
    client: 'Lumina Health',
    challenge:
      'A healthcare startup needed to establish trust and authority in a saturated digital health market.',
    solution:
      'We designed a comprehensive brand system and HIPAA-compliant platform that communicated security and compassion simultaneously.',
    metrics: [
      { icon: <TrendingUp size={16} />, value: '340%', label: 'User Growth' },
      { icon: <Users size={16} />, value: '96%', label: 'Retention Rate' },
      { icon: <Clock size={16} />, value: '60%', label: 'Faster Onboarding' },
    ],
    gradient: 'from-emerald-500/20 to-teal-500/10',
    initial: 'L',
  },
  {
    client: 'Titan Robotics',
    challenge:
      'An industrial robotics company required a digital presence matching their cutting-edge technology.',
    solution:
      'We created an immersive 3D web experience showcasing their products with real-time configurator and interactive demos.',
    metrics: [
      { icon: <TrendingUp size={16} />, value: '280%', label: 'Lead Gen' },
      { icon: <Users size={16} />, value: '4.5x', label: 'Time on Site' },
      { icon: <Clock size={16} />, value: '85%', label: 'Conversion Lift' },
    ],
    gradient: 'from-blue-500/20 to-cyan-500/10',
    initial: 'T',
  },
]

export default function CaseStudies() {
  return (
    <Section id="studies" className="bg-ink-950">
      <ScrollReveal>
        <div className="text-center mb-16 md:mb-24">
          <p className="text-brand-400 text-sm font-medium uppercase tracking-[0.2em] mb-4">
            Case Studies
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white">
            Impact in Action
          </h2>
        </div>
      </ScrollReveal>

      <div className="space-y-12 md:space-y-20">
        {caseStudies.map((study, index) => (
          <ScrollReveal key={index} delay={index * 0.15}>
            <GlassCard hover={false} className="overflow-hidden">
              <div className="grid md:grid-cols-5 gap-8 md:gap-12">
                <div className="md:col-span-3">
                  <p className="text-brand-400 text-sm font-medium uppercase tracking-wider mb-2">
                    Case Study
                  </p>
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-6">
                    {study.client}
                  </h3>

                  <div className="space-y-6">
                    <div>
                      <p className="text-sm text-white/40 uppercase tracking-wider mb-2">
                        Challenge
                      </p>
                      <p className="text-white/70 leading-relaxed">
                        {study.challenge}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-white/40 uppercase tracking-wider mb-2">
                        Solution
                      </p>
                      <p className="text-white/70 leading-relaxed">
                        {study.solution}
                      </p>
                    </div>
                  </div>

                  <div className="mt-8">
                    <Button variant="ghost" icon={<ArrowRight size={16} />}>
                      Read Case Study
                    </Button>
                  </div>
                </div>

                <div className="md:col-span-2">
                  <div
                    className={`rounded-2xl bg-gradient-to-br ${study.gradient} border border-white/5 p-6 md:p-8 h-full flex flex-col`}
                  >
                    <div className="w-16 h-16 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center mb-6">
                      <span className="text-2xl font-display font-bold text-white/40">
                        {study.initial}
                      </span>
                    </div>
                    <div className="space-y-4 flex-1 flex flex-col justify-center">
                      {study.metrics.map((metric, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-4 p-3 rounded-xl bg-white/5"
                        >
                          <div className="w-10 h-10 rounded-lg bg-brand-500/20 flex items-center justify-center text-brand-400">
                            {metric.icon}
                          </div>
                          <div>
                            <p className="text-xl font-display font-bold text-white">
                              {metric.value}
                            </p>
                            <p className="text-xs text-white/40">
                              {metric.label}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </GlassCard>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  )
}
