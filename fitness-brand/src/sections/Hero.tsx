import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'
import Button from '@/components/ui/Button'

function PulsingRing({ delay = 0, size = 300 }) {
  return (
    <motion.div
      className="absolute rounded-full border border-brand-500/20"
      style={{ width: size, height: size }}
      initial={{ scale: 0.8, opacity: 0.5 }}
      animate={{
        scale: [0.8, 1.5, 0.8],
        opacity: [0.5, 0, 0.5],
      }}
      transition={{
        duration: 4,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  )
}

function SlashEffect({ className }: { className?: string }) {
  return (
    <motion.div
      className={`absolute w-1 h-40 bg-gradient-to-b from-brand-500/60 to-transparent ${className}`}
      initial={{ rotate: -45, scaleY: 0, opacity: 0 }}
      animate={{ scaleY: [0, 1, 0], opacity: [0, 0.8, 0] }}
      transition={{ duration: 2.5, repeat: Infinity, delay: 1, ease: 'easeInOut' }}
    />
  )
}

function GeometricShape({ className, delay = 0 }: { className?: string; delay?: number }) {
  return (
    <motion.div
      className={`absolute ${className}`}
      initial={{ opacity: 0, scale: 0, rotate: 0 }}
      animate={{
        opacity: [0, 0.4, 0],
        scale: [0, 1.2, 0],
        rotate: [0, 180, 360],
      }}
      transition={{ duration: 8, delay, repeat: Infinity, ease: 'linear' }}
    >
      <div className="w-16 h-16 border border-brand-500/30 rounded-sm" />
    </motion.div>
  )
}

function AthleteSilhouette() {
  return (
    <motion.div
      className="relative w-72 h-96 mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, delay: 0.5 }}
    >
      <svg viewBox="0 0 200 300" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.g
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 1, ease: 'easeInOut' }}
        >
          <path
            d="M100 30 C115 30 125 40 125 55 C125 70 115 80 100 80 C85 80 75 70 75 55 C75 40 85 30 100 30Z"
            fill="url(#gradient)"
            opacity="0.8"
          />
          <path
            d="M140 110 C140 90 120 85 100 85 C80 85 60 90 60 110 L55 170 C55 175 60 180 65 180 L70 180 L75 250 C75 260 85 265 95 265 L105 265 C115 265 125 260 125 250 L130 180 L135 180 C140 180 145 175 145 170 Z"
            fill="url(#gradient)"
            opacity="0.6"
          />
          <path
            d="M55 130 L30 160 C25 165 25 170 30 175 L35 178 C40 180 45 178 48 173 L70 145"
            fill="url(#gradient)"
            opacity="0.5"
          />
          <path
            d="M145 130 L170 160 C175 165 175 170 170 175 L165 178 C160 180 155 178 152 173 L130 145"
            fill="url(#gradient)"
            opacity="0.5"
          />
          <path
            d="M80 190 L60 230 C56 238 60 245 68 245 L72 245 C78 245 82 240 85 233 L95 200"
            fill="url(#gradient)"
            opacity="0.5"
          />
          <path
            d="M120 190 L140 230 C144 238 140 245 132 245 L128 245 C122 245 118 240 115 233 L105 200"
            fill="url(#gradient)"
            opacity="0.5"
          />
        </motion.g>
        <defs>
          <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#f83e3e" />
            <stop offset="1" stopColor="#c11414" stopOpacity="0.3" />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  )
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      const { left, top, width, height } = containerRef.current.getBoundingClientRect()
      const x = (e.clientX - left) / width - 0.5
      const y = (e.clientY - top) / height - 0.5
      containerRef.current.style.setProperty('--mouse-x', `${x * 30}px`)
      containerRef.current.style.setProperty('--mouse-y', `${y * 30}px`)
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center overflow-hidden bg-ink-950">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: 'radial-gradient(ellipse at 50% 0%, rgba(248,62,62,0.15) 0%, transparent 60%)',
        }}
      />

      <div
        className="absolute inset-0 transition-transform duration-500 ease-out"
        style={{
          transform: 'translate(var(--mouse-x, 0px), var(--mouse-y, 0px))',
        }}
      >
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <PulsingRing size={400} delay={0} />
          <PulsingRing size={500} delay={1.5} />
          <PulsingRing size={600} delay={3} />
        </div>
        <SlashEffect className="top-1/4 left-[15%]" />
        <SlashEffect className="top-1/3 right-[20%]" />
        <SlashEffect className="bottom-1/3 left-[30%]" />
        <GeometricShape className="top-20 left-[10%]" />
        <GeometricShape className="bottom-20 right-[10%]" delay={3} />
        <GeometricShape className="top-1/3 right-[5%]" delay={6} />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-screen py-32">
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <span className="inline-block text-brand-500 text-sm font-semibold uppercase tracking-[0.2em] mb-6">
                Elite Fitness Collective
              </span>
            </motion.div>

            <motion.h1
              className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black leading-[0.85] tracking-tighter"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <span className="text-white">FORGE</span>
              <br />
              <span className="text-brand-500">YOUR</span>
              <br />
              <span className="text-white relative">
                LEGEND
                <motion.span
                  className="absolute -bottom-2 left-0 h-1.5 bg-brand-500 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 1, delay: 1.2, ease: 'easeInOut' }}
                />
              </span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-white/50 mt-8 max-w-lg mx-auto lg:mx-0 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            >
              Elite training. Premium equipment. Unmatched results.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 mt-10 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <Button variant="primary" size="lg" icon={<ArrowRight size={18} />}>
                Start Free Trial
              </Button>
              <Button variant="outline" size="lg" icon={<Play size={18} />}>
                View Pricing
              </Button>
            </motion.div>

            <motion.div
              className="flex items-center gap-8 mt-12 justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-ink-950 bg-ink-800"
                  />
                ))}
              </div>
              <div>
                <p className="text-white font-bold text-lg">5,000+</p>
                <p className="text-white/40 text-sm">Active Members</p>
              </div>
            </motion.div>
          </div>

          <div className="hidden lg:flex items-center justify-center">
            <AthleteSilhouette />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-ink-950 to-transparent pointer-events-none" />
    </section>
  )
}
