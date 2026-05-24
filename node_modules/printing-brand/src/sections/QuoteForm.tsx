import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Loader2, MessageCircle, Upload } from 'lucide-react'
import Section from '@/components/ui/Section'
import ScrollReveal from '@/components/ui/ScrollReveal'
import AnimatedText from '@/components/ui/AnimatedText'
import Button from '@/components/ui/Button'

const productTypes = [
  'T-Shirts',
  'Hoodies / Sweatshirts',
  'Polo Shirts',
  'Sports Jerseys',
  'Workwear',
  'Bags & Accessories',
  'Hats / Headwear',
  'Outerwear',
  'Custom Patches',
  'Other',
]

export default function QuoteForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    productType: '',
    quantity: '',
    description: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsSubmitting(false)
  }

  const inputClass =
    'w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-brand-500/50 focus:ring-1 focus:ring-brand-500/30 transition-all duration-300 text-sm'

  const labelClass = 'block text-sm font-medium text-white/60 mb-1.5'

  return (
    <Section id="quote" dark>
      <div className="text-center mb-16 md:mb-20">
        <AnimatedText
          text="Start Your Project"
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white"
        />
        <ScrollReveal delay={0.2}>
          <p className="text-white/50 text-lg mt-4 max-w-2xl mx-auto">
            Tell us about your project and we&apos;ll send a detailed quote within 24 hours. Or reach us instantly on WhatsApp.
          </p>
        </ScrollReveal>
      </div>

      <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
        <ScrollReveal direction="left" className="lg:col-span-3">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className={labelClass}>Full Name</label>
                <input id="name" name="name" type="text" required value={formData.name} onChange={handleChange} placeholder="John Doe" className={inputClass} />
              </div>
              <div>
                <label htmlFor="email" className={labelClass}>Email Address</label>
                <input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} placeholder="john@company.com" className={inputClass} />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="company" className={labelClass}>Company Name</label>
                <input id="company" name="company" type="text" value={formData.company} onChange={handleChange} placeholder="Your Brand Ltd." className={inputClass} />
              </div>
              <div>
                <label htmlFor="phone" className={labelClass}>Phone Number</label>
                <input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="+1 (555) 000-0000" className={inputClass} />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="productType" className={labelClass}>Product Type</label>
                <select id="productType" name="productType" required value={formData.productType} onChange={handleChange} className={inputClass}>
                  <option value="" disabled>Select a product type</option>
                  {productTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="quantity" className={labelClass}>Estimated Quantity</label>
                <input id="quantity" name="quantity" type="number" required value={formData.quantity} onChange={handleChange} placeholder="e.g. 500" className={inputClass} />
              </div>
            </div>

            <div>
              <label htmlFor="description" className={labelClass}>Project Description</label>
              <textarea id="description" name="description" rows={4} required value={formData.description} onChange={handleChange} placeholder="Describe your project — garment type, colors, print technique, timeline, etc." className={`${inputClass} resize-none`} />
            </div>

            <div>
              <label className={labelClass}>Upload Artwork</label>
              <div className="border-2 border-dashed border-white/10 rounded-xl p-6 text-center hover:border-brand-500/30 transition-colors duration-300 cursor-pointer">
                <Upload size={24} className="text-white/20 mx-auto mb-2" />
                <p className="text-sm text-white/30">Drop your files here or click to browse</p>
                <p className="text-xs text-white/10 mt-1">AI, EPS, PDF, PNG, PSD — Max 50MB</p>
              </div>
            </div>

            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-full"
              icon={isSubmitting ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Quote Request'}
            </Button>
          </form>
        </ScrollReveal>

        <ScrollReveal direction="right" className="lg:col-span-2">
          <div className="rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-6 md:p-8 h-full">
            <h3 className="text-xl font-semibold text-white mb-4">Prefer instant chat?</h3>
            <p className="text-white/50 text-sm mb-8 leading-relaxed">
              Our team is available on WhatsApp for quick questions, quotes, and consultations. Response time is typically under 30 minutes during business hours.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center flex-shrink-0">
                  <MessageCircle size={18} className="text-green-400" />
                </div>
                <div>
                  <div className="text-sm text-white/80">WhatsApp Business</div>
                  <div className="text-xs text-white/30">+1 (555) 000-WORK</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-500/10 border border-brand-500/20 flex items-center justify-center flex-shrink-0">
                  <Send size={18} className="text-brand-400" />
                </div>
                <div>
                  <div className="text-sm text-white/80">Email</div>
                  <div className="text-xs text-white/30">orders@threadforge.com</div>
                </div>
              </div>
            </div>

            <Button variant="secondary" size="lg" className="w-full" icon={<MessageCircle size={18} />}>
              WhatsApp Us
            </Button>

            <p className="text-xs text-white/20 mt-4 text-center">
              Typically replies within 30 minutes
            </p>
          </div>
        </ScrollReveal>
      </div>
    </Section>
  )
}
