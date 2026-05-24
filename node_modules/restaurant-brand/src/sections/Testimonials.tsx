import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import GlassCard from '../components/ui/GlassCard'
import ScrollReveal from '../components/ui/ScrollReveal'

const testimonials = [
  {
    id: 1,
    name: 'Eleanor Vance',
    date: 'March 2025',
    rating: 5,
    text: 'Exceptional in every way. The tasting menu was a masterclass in balance and creativity. Each course surprised and delighted — the wine pairings were impeccable. A truly unforgettable evening.',
  },
  {
    id: 2,
    name: 'David Chen',
    date: 'January 2025',
    rating: 5,
    text: 'Aura has redefined what fine dining means in New York. The ambiance is sophisticated yet warm, the service impeccable without being stuffy. The dry-aged duck is life-changing.',
  },
  {
    id: 3,
    name: 'Sophie Laurent',
    date: 'December 2024',
    rating: 5,
    text: 'As someone who grew up in Lyon, I am particular about French cuisine. Chef Bellamy delivers an experience that honors tradition while pushing boundaries. The agnolotti transported me home.',
  },
  {
    id: 4,
    name: 'James Whitfield',
    date: 'November 2024',
    rating: 4,
    text: 'A remarkable dining experience. The attention to detail — from the hand-painted plates to the perfectly paced service — shows a level of care that is rare. Already planning my return.',
  },
  {
    id: 5,
    name: 'Amara Okafor',
    date: 'October 2024',
    rating: 5,
    text: 'Celebrated our anniversary at Aura and it was perfection. The staff anticipated our every need, the chef sent out a beautiful amuse-bouche, and the chocolate tart was heavenly.',
  },
]

const pressLogos = [
  'Michelin Guide',
  'The New York Times',
  'Food & Wine',
  'Travel + Leisure',
  'Bon Appétit',
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)

  const next = useCallback(() => {
    setDirection(1)
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }, [])

  const prev = useCallback(() => {
    setDirection(-1)
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [next])

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 200 : -200, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -200 : 200, opacity: 0 }),
  }

  const t = testimonials[current]

  return (
    <section id="testimonials" className="py-20 md:py-28 lg:py-36 px-6 md:px-12 lg:px-24 bg-ink-950">
      <div className="mx-auto max-w-[1400px]">
        <ScrollReveal>
          <p className="text-brand-400 text-sm md:text-base tracking-[0.3em] uppercase mb-4 text-center font-medium">
            Guest Reflections
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white text-center mb-16">
            What Our{' '}
            <span className="bg-gradient-to-r from-brand-300 to-amber-200 bg-clip-text text-transparent">
              Guests Say
            </span>
          </h2>
        </ScrollReveal>

        {/* Carousel */}
        <div className="max-w-3xl mx-auto relative">
          <div className="overflow-hidden min-h-[280px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                className="text-center"
              >
                <Quote size={40} className="text-brand-500/30 mx-auto mb-6" />
                <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-8 italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex justify-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={i < t.rating ? 'text-brand-400 fill-brand-400' : 'text-white/20'}
                    />
                  ))}
                </div>
                <p className="text-white font-medium">{t.name}</p>
                <p className="text-white/40 text-sm">{t.date}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Nav buttons */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-12 p-2 text-white/40 hover:text-white transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={28} />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-12 p-2 text-white/40 hover:text-white transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight size={28} />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i) }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === current ? 'bg-brand-500 w-6' : 'bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Featured in */}
        <ScrollReveal delay={0.3}>
          <div className="mt-20 pt-12 border-t border-white/5">
            <p className="text-white/30 text-xs tracking-[0.3em] uppercase text-center mb-8 font-medium">
              Featured In
            </p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-12">
              {pressLogos.map((logo) => (
                <span
                  key={logo}
                  className="text-white/20 text-sm font-medium tracking-wider uppercase hover:text-white/40 transition-colors"
                >
                  {logo}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
