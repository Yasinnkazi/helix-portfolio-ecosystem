import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import Section from '@/components/ui/Section'
import ScrollReveal from '@/components/ui/ScrollReveal'
import AnimatedText from '@/components/ui/AnimatedText'
import GlassCard from '@/components/ui/GlassCard'

const testimonials = [
  {
    quote: 'ThreadForge transformed our merch line. The quality of their screen printing is unmatched, and they consistently deliver ahead of schedule. Our community loves the product.',
    author: 'Marcus Chen',
    role: 'Creative Director',
    brand: 'Apex Streetwear',
    rating: 5,
  },
  {
    quote: 'We manufacture for over 50 retail locations and ThreadForge has been our exclusive partner for three years. Their consistency at scale is remarkable.',
    author: 'Sarah Williams',
    role: 'VP of Operations',
    brand: 'Metro Lifestyle Co.',
    rating: 5,
  },
  {
    quote: 'The embroidery work they did on our corporate uniforms was exceptional. Over 5,000 pieces, each one perfect. Their digitizing team is world-class.',
    author: 'James Okonkwo',
    role: 'Procurement Manager',
    brand: 'Unity Energy Group',
    rating: 5,
  },
  {
    quote: "As a startup, finding a manufacturer that takes small batches seriously was a game-changer. They've grown with us from 100 to 5,000 units per order.",
    author: 'Priya Patel',
    role: 'Founder & CEO',
    brand: 'Verdant Basics',
    rating: 5,
  },
  {
    quote: 'International shipping is seamless, customs documentation is handled, and the quality control is better than our local options. Worth every penny.',
    author: 'Liam O\'Brien',
    role: 'Brand Manager',
    brand: 'Celtic Sportswear',
    rating: 5,
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1)
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const goTo = (index: number) => {
    setDirection(index > current ? 1 : -1)
    setCurrent(index)
  }

  const goPrev = () => {
    setDirection(-1)
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goNext = () => {
    setDirection(1)
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 200 : -200, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -200 : 200, opacity: 0 }),
  }

  return (
    <Section id="testimonials" dark={false}>
      <div className="text-center mb-16 md:mb-20">
        <AnimatedText
          text="Trusted by 250+ Brands"
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white"
        />
        <ScrollReveal delay={0.2}>
          <p className="text-white/50 text-lg mt-4 max-w-2xl mx-auto">
            Hear from the brands and businesses that rely on ThreadForge for their apparel manufacturing.
          </p>
        </ScrollReveal>
      </div>

      <div className="max-w-3xl mx-auto relative">
        <div className="overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <GlassCard className="text-center">
                <div className="flex justify-center gap-1 mb-6">
                  {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                    <Star key={i} size={18} className="text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <blockquote className="text-lg md:text-xl text-white/80 leading-relaxed mb-8">
                  &ldquo;{testimonials[current].quote}&rdquo;
                </blockquote>
                <div className="w-14 h-14 rounded-full bg-brand-500/10 border border-brand-500/20 flex items-center justify-center mx-auto mb-3">
                  <span className="text-lg font-bold text-brand-400">{testimonials[current].author.charAt(0)}</span>
                </div>
                <div className="font-semibold text-white">{testimonials[current].author}</div>
                <div className="text-sm text-white/40">{testimonials[current].role}, {testimonials[current].brand}</div>
              </GlassCard>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={goPrev}
            className="p-2 rounded-full bg-white/5 border border-white/10 text-white/50 hover:text-white hover:bg-white/10 transition-all"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === current ? 'bg-brand-500 w-6' : 'bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
          <button
            onClick={goNext}
            className="p-2 rounded-full bg-white/5 border border-white/10 text-white/50 hover:text-white hover:bg-white/10 transition-all"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </Section>
  )
}
