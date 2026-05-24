import type { FormEvent } from 'react'
import ScrollReveal from '../components/ui/ScrollReveal'
import Section from '../components/ui/Section'
import Button from '../components/ui/Button'
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react'

const inputClass =
  'w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-brand-500/50 focus:ring-1 focus:ring-brand-500/30 transition-all duration-300'

const labelClass = 'block text-sm text-white/60 mb-1.5 font-medium'

export default function Contact() {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
  }

  return (
    <Section id="contact">
      <ScrollReveal>
        <p className="text-brand-500 text-sm font-medium uppercase tracking-widest mb-4 text-center">
          Get in Touch
        </p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-4">
          Begin a Conversation
        </h2>
        <p className="text-white/40 text-center max-w-lg mx-auto mb-16 text-base">
          Whether you have a specific project in mind or are simply exploring possibilities,
          we would love to hear from you.
        </p>
      </ScrollReveal>

      <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 max-w-5xl mx-auto">
        <ScrollReveal direction="left" className="lg:col-span-3">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className={labelClass}>
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your full name"
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="email" className={labelClass}>
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  className={inputClass}
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="phone" className={labelClass}>
                  Phone
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="+44 20 7946 0182"
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="projectType" className={labelClass}>
                  Project Type
                </label>
                <select id="projectType" className={inputClass}>
                  <option value="" className="bg-ink-900">
                    Select a type
                  </option>
                  <option value="residential" className="bg-ink-900">
                    Residential
                  </option>
                  <option value="commercial" className="bg-ink-900">
                    Commercial
                  </option>
                  <option value="interior" className="bg-ink-900">
                    Interior
                  </option>
                  <option value="urban" className="bg-ink-900">
                    Urban Planning
                  </option>
                  <option value="conservation" className="bg-ink-900">
                    Conservation
                  </option>
                  <option value="other" className="bg-ink-900">
                    Other
                  </option>
                </select>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="location" className={labelClass}>
                  Location
                </label>
                <input
                  id="location"
                  type="text"
                  placeholder="City or region"
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="budget" className={labelClass}>
                  Budget Range
                </label>
                <select id="budget" className={inputClass}>
                  <option value="" className="bg-ink-900">
                    Select a range
                  </option>
                  <option value="under-500k" className="bg-ink-900">
                    Under £500K
                  </option>
                  <option value="500k-1m" className="bg-ink-900">
                    £500K – £1M
                  </option>
                  <option value="1m-3m" className="bg-ink-900">
                    £1M – £3M
                  </option>
                  <option value="3m-5m" className="bg-ink-900">
                    £3M – £5M
                  </option>
                  <option value="5m+" className="bg-ink-900">
                    £5M+
                  </option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="message" className={labelClass}>
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Tell us about your project..."
                className={`${inputClass} resize-none`}
              />
            </div>

            <Button type="submit" variant="primary" size="lg" icon={<Send size={16} />}>
              Send Inquiry
            </Button>
          </form>
        </ScrollReveal>

        <ScrollReveal direction="right" className="lg:col-span-2">
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">Studio Address</h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-brand-500/10 text-brand-500 flex items-center justify-center">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="text-white/80 text-sm font-medium">789 Design District</p>
                    <p className="text-white/40 text-sm">London, EC2A 4NE, UK</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-brand-500/10 text-brand-500 flex items-center justify-center">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="text-white/80 text-sm font-medium">+44 20 7946 0182</p>
                    <p className="text-white/40 text-sm">Mon–Fri, 9am–6pm</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-brand-500/10 text-brand-500 flex items-center justify-center">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-white/80 text-sm font-medium">studio@formandspace.com</p>
                    <p className="text-white/40 text-sm">We respond within 24 hours</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-brand-500/10 text-brand-500 flex items-center justify-center">
                    <Clock size={18} />
                  </div>
                  <div>
                    <p className="text-white/80 text-sm font-medium">Office Hours</p>
                    <p className="text-white/40 text-sm">Monday – Friday, 9:00 – 18:00</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-brand-500/10 via-stone-800/10 to-ink-900 border border-white/5 overflow-hidden">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center">
                  <MapPin size={32} className="text-brand-500/40 mx-auto mb-2" />
                  <p className="text-white/30 text-sm">Design District</p>
                  <p className="text-white/20 text-xs">London, UK</p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </Section>
  )
}
