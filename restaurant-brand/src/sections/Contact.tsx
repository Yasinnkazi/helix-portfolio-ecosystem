import { MapPin, Phone, Mail, Clock, ArrowRight, Instagram, Music2, Facebook } from 'lucide-react'
import ScrollReveal from '../components/ui/ScrollReveal'
import GlassCard from '../components/ui/GlassCard'

const hours = [
  { day: 'Monday–Thursday', time: '5:00 PM – 11:00 PM' },
  { day: 'Friday–Saturday', time: '5:00 PM – 12:00 AM' },
  { day: 'Sunday', time: '10:00 AM – 10:00 PM' },
]

const socialLinks = [
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Music2, label: 'TikTok', href: '#' },
  { icon: Facebook, label: 'Facebook', href: '#' },
]

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 lg:py-36 px-6 md:px-12 lg:px-24 bg-ink-950">
      <div className="mx-auto max-w-[1400px]">
        <ScrollReveal>
          <p className="text-brand-400 text-sm md:text-base tracking-[0.3em] uppercase mb-4 text-center font-medium">
            Find Us
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white text-center mb-16">
            We Look Forward to{' '}
            <span className="bg-gradient-to-r from-brand-300 to-amber-200 bg-clip-text text-transparent">
              Welcoming You
            </span>
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {/* Left — contact details */}
          <ScrollReveal direction="left">
            <div className="space-y-8">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-500/20 flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-brand-400" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Address</h4>
                  <p className="text-white/50">123 Gourmet Street<br />New York, NY 10012</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-500/20 flex items-center justify-center flex-shrink-0">
                  <Phone size={18} className="text-brand-400" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Phone</h4>
                  <p className="text-white/50">+1 (212) 555-0189</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-500/20 flex items-center justify-center flex-shrink-0">
                  <Mail size={18} className="text-brand-400" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Email</h4>
                  <p className="text-white/50">hello@aura.dining</p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-500/20 flex items-center justify-center flex-shrink-0">
                  <Clock size={18} className="text-brand-400" />
                </div>
                <div className="flex-1">
                  <h4 className="text-white font-medium mb-3">Hours</h4>
                  <div className="space-y-2">
                    {hours.map((h) => (
                      <div key={h.day} className="flex justify-between items-center text-sm">
                        <span className="text-white/60">{h.day}</span>
                        <span className="text-white/80">{h.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Social */}
              <div className="flex items-center gap-3 pt-4">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-brand-400 hover:border-brand-500/30 transition-all duration-300"
                  >
                    <s.icon size={18} />
                  </a>
                ))}
              </div>

              {/* Reserve CTA */}
              <a
                href="#reservation"
                className="inline-flex items-center gap-2 px-8 py-4 bg-brand-500 hover:bg-brand-600 text-white rounded-xl font-medium transition-all duration-300 shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40 mt-4"
              >
                Make a Reservation
                <ArrowRight size={18} />
              </a>
            </div>
          </ScrollReveal>

          {/* Right — map placeholder */}
          <ScrollReveal direction="right">
            <GlassCard hover={false} className="aspect-square md:aspect-[4/3] p-0 overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-ink-800 via-ink-900 to-ink-950 flex items-center justify-center">
                <div className="text-center">
                  <MapPin size={48} className="text-brand-500/30 mx-auto mb-4" />
                  <p className="text-white/30 text-sm">Map Integration</p>
                  <p className="text-white/20 text-xs mt-1">123 Gourmet Street, NYC</p>
                </div>
              </div>
            </GlassCard>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
