import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Send,
  Mail,
  MapPin,
  Dribbble,
  Github,
  Linkedin,
} from 'lucide-react'
import Section from '../components/ui/Section'
import ScrollReveal from '../components/ui/ScrollReveal'
import Button from '../components/ui/Button'

const projectTypes = [
  'Brand Identity',
  'UI/UX Design',
  'Web Development',
  'Motion Design',
  'Strategy',
  'Other',
]

const budgetRanges = [
  'Under $10k',
  '$10k - $25k',
  '$25k - $50k',
  '$50k - $100k',
  '$100k+',
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission handled by form service
  }

  return (
    <Section id="contact" className="bg-ink-950">
      <div className="grid lg:grid-cols-5 gap-12 lg:gap-20">
        <ScrollReveal className="lg:col-span-2 lg:sticky lg:top-32 lg:self-start">
          <div>
            <p className="text-brand-400 text-sm font-medium uppercase tracking-[0.2em] mb-4">
              Get in Touch
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
              Let&apos;s Create Together
            </h2>
            <p className="text-white/50 leading-relaxed mb-8 max-w-sm">
              We&apos;re currently accepting new projects and partnerships.
              Let&apos;s discuss how we can bring your vision to life.
            </p>
          </div>

          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-3 text-white/50">
              <Mail size={16} className="text-brand-400" />
              <span className="text-sm">hello@helixdigital.com</span>
            </div>
            <div className="flex items-center gap-3 text-white/50">
              <MapPin size={16} className="text-brand-400" />
              <span className="text-sm">San Francisco, CA</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#"
              className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all duration-300"
              aria-label="Dribbble"
            >
              <Dribbble size={16} />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all duration-300"
              aria-label="GitHub"
            >
              <Github size={16} />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
          </div>

          <div className="mt-12 p-6 rounded-2xl bg-white/[0.02] border border-white/5">
            <p className="text-sm text-white/30 uppercase tracking-wider mb-2">
              Current Availability
            </p>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-sm text-white/50">
                Accepting new projects (Q2 2026)
              </span>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2} className="lg:col-span-3">
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm text-white/60 mb-2"
                >
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/20 focus:outline-none focus:border-brand-500/50 focus:ring-1 focus:ring-brand-500/50 transition-all duration-300"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm text-white/60 mb-2"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/20 focus:outline-none focus:border-brand-500/50 focus:ring-1 focus:ring-brand-500/50 transition-all duration-300"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="company"
                  className="block text-sm text-white/60 mb-2"
                >
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/20 focus:outline-none focus:border-brand-500/50 focus:ring-1 focus:ring-brand-500/50 transition-all duration-300"
                  placeholder="Company name"
                />
              </div>
              <div>
                <label
                  htmlFor="projectType"
                  className="block text-sm text-white/60 mb-2"
                >
                  Project Type
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-brand-500/50 focus:ring-1 focus:ring-brand-500/50 transition-all duration-300 appearance-none"
                >
                  <option value="" className="bg-ink-900">
                    Select type
                  </option>
                  {projectTypes.map((type) => (
                    <option key={type} value={type} className="bg-ink-900">
                      {type}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label
                htmlFor="budget"
                className="block text-sm text-white/60 mb-2"
              >
                Budget Range
              </label>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-brand-500/50 focus:ring-1 focus:ring-brand-500/50 transition-all duration-300 appearance-none"
              >
                <option value="" className="bg-ink-900">
                  Select budget
                </option>
                {budgetRanges.map((range) => (
                  <option key={range} value={range} className="bg-ink-900">
                    {range}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm text-white/60 mb-2"
              >
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/20 focus:outline-none focus:border-brand-500/50 focus:ring-1 focus:ring-brand-500/50 transition-all duration-300 resize-none"
                placeholder="Tell us about your project..."
              />
            </div>

            <Button
              type="submit"
              variant="primary"
              size="lg"
              icon={<Send size={16} />}
              className="w-full sm:w-auto"
            >
              Send Inquiry
            </Button>
          </motion.form>
        </ScrollReveal>
      </div>
    </Section>
  )
}
