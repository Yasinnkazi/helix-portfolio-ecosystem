import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CalendarDays, Clock, Users, CheckCircle2, ArrowRight } from 'lucide-react'
import ScrollReveal from '../components/ui/ScrollReveal'
import Button from '../components/ui/Button'

interface FormData {
  date: string
  time: string
  partySize: string
  name: string
  email: string
  phone: string
  specialRequests: string
}

export default function Reservation() {
  const [form, setForm] = useState<FormData>({
    date: '',
    time: '',
    partySize: '2',
    name: '',
    email: '',
    phone: '',
    specialRequests: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [step, setStep] = useState(1)

  const update = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const inputClass = 'w-full px-5 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-brand-500/50 focus:border-brand-500/50 transition-all duration-300 backdrop-blur-sm'
  const labelClass = 'block text-sm text-white/70 mb-1.5 font-medium'

  if (submitted) {
    return (
      <section id="reservation" className="py-20 md:py-28 lg:py-36 px-6 md:px-12 lg:px-24 bg-ink-900">
        <div className="mx-auto max-w-[600px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
              className="w-20 h-20 rounded-full bg-brand-500/20 flex items-center justify-center mx-auto mb-6"
            >
              <CheckCircle2 size={40} className="text-brand-400" />
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Reservation Confirmed
            </h2>
            <p className="text-white/50 mb-2">
              Thank you, {form.name}. We&apos;ve sent a confirmation to {form.email}.
            </p>
            <p className="text-white/40 text-sm mb-8">
              Party of {form.partySize} &middot; {form.date} at {form.time}
            </p>
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-left text-sm space-y-2">
              <p className="text-white/60">
                <strong className="text-white/80">Dress Code:</strong> Smart casual. Jackets
                encouraged for gentlemen.
              </p>
              <p className="text-white/60">
                <strong className="text-white/80">Cancellation:</strong> Please notify us at
                least 24 hours in advance to avoid a cancellation fee.
              </p>
              <p className="text-white/60">
                <strong className="text-white/80">Allergies:</strong> Please inform your server
                of any dietary restrictions upon arrival.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section id="reservation" className="py-20 md:py-28 lg:py-36 px-6 md:px-12 lg:px-24 bg-ink-900">
      <div className="mx-auto max-w-[800px]">
        <ScrollReveal>
          <p className="text-brand-400 text-sm md:text-base tracking-[0.3em] uppercase mb-4 text-center font-medium">
            Reserve Your Experience
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white text-center mb-4">
            Book Your{' '}
            <span className="bg-gradient-to-r from-brand-300 to-amber-200 bg-clip-text text-transparent">
              Table
            </span>
          </h2>
          <p className="text-white/50 text-center max-w-xl mx-auto mb-12">
            We look forward to hosting you. Please fill out the form below and we&apos;ll
            confirm your reservation within 2 hours.
          </p>
        </ScrollReveal>

        <motion.form
          onSubmit={handleSubmit}
          className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-10 space-y-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Step indicators */}
          <div className="flex items-center justify-center gap-4 mb-2">
            {[1, 2].map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setStep(s)}
                className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300 ${
                  step === s
                    ? 'bg-brand-500 text-white'
                    : 'bg-white/5 text-white/40 hover:bg-white/10'
                }`}
              >
                {s}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label className={labelClass}>
                      <CalendarDays size={14} className="inline mr-1.5 -mt-0.5" />
                      Date
                    </label>
                    <input
                      type="date"
                      value={form.date}
                      onChange={(e) => update('date', e.target.value)}
                      required
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>
                      <Clock size={14} className="inline mr-1.5 -mt-0.5" />
                      Time
                    </label>
                    <input
                      type="time"
                      value={form.time}
                      onChange={(e) => update('time', e.target.value)}
                      required
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>
                      <Users size={14} className="inline mr-1.5 -mt-0.5" />
                      Party Size
                    </label>
                    <select
                      value={form.partySize}
                      onChange={(e) => update('partySize', e.target.value)}
                      className={inputClass}
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                        <option key={n} value={n} className="bg-ink-900">
                          {n} {n === 1 ? 'Guest' : 'Guests'}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="flex justify-end">
                  <Button
                    type="button"
                    variant="primary"
                    onClick={() => setStep(2)}
                    icon={<ArrowRight size={16} />}
                  >
                    Next
                  </Button>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}>Full Name</label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => update('name', e.target.value)}
                      required
                      placeholder="Your full name"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Email</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => update('email', e.target.value)}
                      required
                      placeholder="your@email.com"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className={labelClass}>Phone</label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => update('phone', e.target.value)}
                    required
                    placeholder="+1 (212) 555-0189"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className={labelClass}>Special Requests</label>
                  <textarea
                    value={form.specialRequests}
                    onChange={(e) => update('specialRequests', e.target.value)}
                    rows={3}
                    placeholder="Dietary restrictions, allergies, celebration notes..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <div className="flex items-center justify-between pt-2">
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={() => setStep(1)}
                  >
                    Back
                  </Button>
                  <Button type="submit" variant="primary" size="lg">
                    Confirm Reservation
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.form>

        {/* Policy note */}
        <p className="text-white/30 text-xs text-center mt-6">
          By submitting, you agree to our dining policies. We respect your privacy and will never
          share your information.
        </p>
      </div>
    </section>
  )
}

