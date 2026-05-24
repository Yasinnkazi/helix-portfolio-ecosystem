import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { ChevronDown, MessageCircle } from 'lucide-react'
import Section from '@/components/ui/Section'
import ScrollReveal from '@/components/ui/ScrollReveal'
import AnimatedText from '@/components/ui/AnimatedText'
import Button from '@/components/ui/Button'

const faqs = [
  {
    q: 'What is the minimum order quantity (MOQ)?',
    a: 'Our standard MOQ is 50 units per design for screen printing and 25 units for embroidery. DTG printing has no MOQ. For large-volume orders (500+ units), we offer discounted per-unit pricing.',
  },
  {
    q: 'What is your typical turnaround time?',
    a: 'Standard production takes 10–14 business days from art approval. Rush orders (3–5 days) are available at a 15% premium. Complex orders with multiple placements or special finishes may require additional time.',
  },
  {
    q: 'Can I get samples before placing a bulk order?',
    a: 'Yes. Sample orders are quoted individually with a turnaround of 5–7 business days. The sample cost is deducted from your first bulk order (minimum 100 units). We provide digital mockups free of charge.',
  },
  {
    q: 'Do you offer custom labeling and packaging?',
    a: 'Absolutely. We provide woven neck labels, garment tags, poly bag branding, and custom packaging. Setup starts at $75 per label design. Ask your account manager for a complete packaging quote.',
  },
  {
    q: 'What file formats do you accept for artwork?',
    a: 'We prefer vector files: AI, EPS, PDF, or SVG (outlined text). For raster files, provide 300 DPI PSD or PNG at actual print size. Our design team can convert and optimize artwork free of charge.',
  },
  {
    q: 'Do you ship internationally?',
    a: 'Yes, we ship to 40+ countries worldwide. International orders typically arrive in 5–10 business days via DHL or FedEx. We handle all customs documentation. Shipping costs are calculated at checkout.',
  },
  {
    q: 'What is your pricing structure for bulk orders?',
    a: 'Pricing depends on garment type, print technique, color count, and quantity. We provide detailed quotes within 24 hours. Volume discounts kick in at 250, 500, and 1,000+ units. Contact us for a custom quote.',
  },
  {
    q: 'Can you match specific Pantone colors?',
    a: 'Yes, we offer full Pantone matching for all print methods. Our ink mixing station allows precise color matching with a tolerance of Delta E ≤ 2. Pantone matching is complementary for orders over 250 units.',
  },
]

interface AccordionItemProps {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}

function AccordionItem({ question, answer, isOpen, onToggle }: AccordionItemProps) {
  return (
    <div className="border-b border-white/5 last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="text-white font-medium pr-4">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0"
        >
          <ChevronDown size={18} className="text-white/30" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden"
          >
            <p className="text-white/50 text-sm pb-5 leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <Section id="faq" dark={false}>
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
        <div>
          <AnimatedText
            text="Frequently Asked Questions"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white"
          />
          <ScrollReveal delay={0.2}>
            <p className="text-white/50 text-lg mt-4 mb-8 leading-relaxed">
              Everything you need to know about working with ThreadForge. Still have questions? Reach out directly.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <Button variant="outline" size="lg" href="#quote" icon={<MessageCircle size={18} />}>
              Still have questions? Contact us
            </Button>
          </ScrollReveal>
        </div>

        <ScrollReveal direction="right">
          <div className="rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-6">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                question={faq.q}
                answer={faq.a}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </Section>
  )
}
