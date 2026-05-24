import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, Quote, ChevronLeft, ChevronRight, Users } from 'lucide-react'
import Section from '@/components/ui/Section'

const testimonials = [
  {
    quote: 'Apex completely transformed my approach to fitness. The trainers are world-class and the community keeps me accountable every single day.',
    name: 'Emily Torres',
    achievement: 'Lost 60 lbs | 8 Months',
    rating: 5,
    duration: 'Member since 2023',
  },
  {
    quote: 'I have tried every gym in the city. Nothing compares to the energy, equipment, and expertise at Apex. It is not a gym — it is a lifestyle.',
    name: 'James Kim',
    achievement: '35 lbs Muscle Gain | 1 Year',
    rating: 5,
    duration: 'Member since 2022',
  },
  {
    quote: 'The women\'s strength program gave me confidence I never knew I had. The coaches meet you where you are and push you to be better.',
    name: 'Alicia Foster',
    achievement: 'First Powerlifting Meet | 6 Months',
    rating: 5,
    duration: 'Member since 2024',
  },
  {
    quote: 'After recovering from a knee injury, I thought my athletic days were over. Apex\'s recovery suite and trainers proved me wrong.',
    name: 'Marcus Webb',
    achievement: 'Marathon Finish | 14 Months',
    rating: 5,
    duration: 'Member since 2023',
  },
  {
    quote: 'The HIIT classes are unmatched. Every session feels like a personal training session with the attention the coaches give.',
    name: 'Priya Sharma',
    achievement: '25 lbs Lost | 4 Months',
    rating: 5,
    duration: 'Member since 2024',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)

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

  const goNext = () => {
    setDirection(1)
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }

  const goPrev = () => {
    setDirection(-1)
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <Section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-500/5 via-transparent to-brand-500/5 pointer-events-none" />

      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-sm mb-6">
            <Users size={16} />
            <span className="font-semibold">Join 5,000+ Members</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mt-4 leading-tight">
            Member <span className="text-brand-500">Stories</span>
          </h2>
          <p className="text-white/50 text-lg mt-4 max-w-2xl mx-auto">
            Real experiences from the Apex community.
          </p>
        </motion.div>
      </div>

      <div className="relative max-w-3xl mx-auto">
        <div className="min-h-[320px] flex items-center justify-center">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={{
                enter: (dir: number) => ({ x: dir > 0 ? 200 : -200, opacity: 0 }),
                center: { x: 0, opacity: 1 },
                exit: (dir: number) => ({ x: dir > 0 ? -200 : 200, opacity: 0 }),
              }}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-center px-4"
            >
              <Quote className="mx-auto text-brand-500/30 mb-6" size={48} />
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed italic mb-8">
                "{testimonials[current].quote}"
              </p>
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <Star key={i} size={18} className="text-brand-500 fill-brand-500" />
                ))}
              </div>
              <h4 className="text-white font-bold text-lg">{testimonials[current].name}</h4>
              <p className="text-brand-400 text-sm mt-1">{testimonials[current].achievement}</p>
              <p className="text-white/30 text-xs mt-1">{testimonials[current].duration}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={goPrev}
            className="p-2.5 rounded-full bg-white/5 text-white/50 hover:text-white hover:bg-white/10 transition-all border border-white/10"
          >
            <ChevronLeft size={18} />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === current ? 'bg-brand-500 w-6' : 'bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>
          <button
            onClick={goNext}
            className="p-2.5 rounded-full bg-white/5 text-white/50 hover:text-white hover:bg-white/10 transition-all border border-white/10"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </Section>
  )
}
