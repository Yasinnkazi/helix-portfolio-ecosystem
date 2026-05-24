import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Section from '@/components/ui/Section'
import ScrollReveal from '@/components/ui/ScrollReveal'

const statData = [
  { value: 12, suffix: '+', label: 'Years in Business' },
  { value: 500, suffix: 'K+', label: 'Garments Printed' },
  { value: 250, suffix: '+', label: 'Happy Clients' },
  { value: 40, suffix: '+', label: 'Cities Served' },
]

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const [hasStarted, setHasStarted] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true)
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [hasStarted])

  useEffect(() => {
    if (!hasStarted) return

    let start = 0
    const duration = 2000
    const step = Math.max(1, Math.floor(target / 60))
    const increment = target / (duration / 16)

    const timer = setInterval(() => {
      start += increment
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [hasStarted, target])

  return (
    <div ref={ref}>
      <div className="text-4xl md:text-5xl font-bold text-white">
        {count}{suffix}
      </div>
    </div>
  )
}

export default function Stats() {
  return (
    <Section id="stats" dark={false} className="py-16 md:py-20">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
        {statData.map((stat, i) => (
          <ScrollReveal key={stat.label} delay={i * 0.1} className="text-center">
            <AnimatedCounter target={stat.value} suffix={stat.suffix} />
            <div className="text-sm text-white/40 mt-2">{stat.label}</div>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  )
}
