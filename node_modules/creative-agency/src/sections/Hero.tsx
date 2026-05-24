import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import AnimatedText from '../components/ui/AnimatedText'
import Button from '../components/ui/Button'
import { useMousePosition } from '../hooks/useMousePosition'

const floatingShapes = [
  { icon: <Sparkles size={24} />, x: '10%', y: '20%', delay: 0, size: 48 },
  { icon: '◇', x: '85%', y: '30%', delay: 0.3, size: 32 },
  { icon: '○', x: '20%', y: '75%', delay: 0.6, size: 40 },
  { icon: '□', x: '75%', y: '70%', delay: 0.9, size: 36 },
  { icon: '△', x: '90%', y: '15%', delay: 1.2, size: 28 },
  { icon: '✦', x: '8%', y: '55%', delay: 1.5, size: 24 },
  { icon: <Sparkles size={20} />, x: '50%', y: '12%', delay: 0.5, size: 0 },
]

export default function Hero() {
  const { x, y } = useMousePosition()
  const gradientRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!gradientRef.current) return
    const handleMove = (e: MouseEvent) => {
      const rect = gradientRef.current?.getBoundingClientRect()
      if (!rect) return
      const xPct = ((e.clientX - rect.left) / rect.width) * 100
      const yPct = ((e.clientY - rect.top) / rect.height) * 100
      gradientRef.current!.style.setProperty('--mx', `${xPct}%`)
      gradientRef.current!.style.setProperty('--my', `${yPct}%`)
    }
    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-ink-950">
      <div
        ref={gradientRef}
        className="absolute inset-0 opacity-30 transition-all duration-1000"
        style={{
          background:
            'radial-gradient(600px at var(--mx, 50%) var(--my, 50%), rgba(124, 66, 255, 0.15), transparent 80%)',
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(124,66,255,0.08)_0%,transparent_60%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink-950" />

      <div
        className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-1000"
        style={{
          background: `radial-gradient(300px at ${x}px ${y}px, rgba(124, 66, 255, 0.08), transparent 60%)`,
        }}
      />

      {floatingShapes.map((shape, i) => (
        <motion.div
          key={i}
          className="absolute text-white/10"
          style={{ left: shape.x, top: shape.y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0.15, 0.3, 0.15],
            scale: 1,
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 6 + i * 0.5,
            delay: shape.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {typeof shape.icon === 'string' ? (
            <span
              className="block font-display"
              style={{ fontSize: shape.size, opacity: 0.6 }}
            >
              {shape.icon}
            </span>
          ) : (
            <span className="block">{shape.icon}</span>
          )}
        </motion.div>
      ))}

      <div className="relative z-20 max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-sm font-medium mb-8"
        >
          <Sparkles size={14} />
          <span>Premium Digital Studio</span>
        </motion.div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-display font-bold leading-[0.9] tracking-tight text-white mb-6 text-balance">
          <AnimatedText
            text="We Build Digital"
            variant="word"
            className="block"
          />
          <AnimatedText
            text="That Matters"
            variant="word"
            delay={0.6}
            className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-purple-400 to-brand-300"
          />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          A creative studio specializing in premium digital experiences, product
          design, and brand storytelling.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button variant="primary" size="lg" icon={<ArrowRight size={18} />}>
            View Our Work
          </Button>
          <Button variant="outline" size="lg">
            Get in Touch
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center pt-2"
        >
          <motion.div className="w-1.5 h-1.5 rounded-full bg-white/60" />
        </motion.div>
      </motion.div>
    </section>
  )
}
