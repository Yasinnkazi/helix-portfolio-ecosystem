import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Expand } from 'lucide-react'
import ScrollReveal from '../components/ui/ScrollReveal'

const categories = [
  { id: 'all', label: 'All' },
  { id: 'interior', label: 'Interior' },
  { id: 'plates', label: 'Plates' },
  { id: 'events', label: 'Events' },
]

const galleryItems = [
  { id: 1, category: 'interior', title: 'Main Dining Room', description: 'Warm ambient lighting and intimate seating' },
  { id: 2, category: 'plates', title: 'Truffle & Sage Agnolotti', description: 'Our signature pasta dish' },
  { id: 3, category: 'events', title: 'Private Wine Cellar', description: 'Exclusive dining for intimate gatherings' },
  { id: 4, category: 'interior', title: 'The Bar', description: 'Artisanal cocktails and vintage spirits' },
  { id: 5, category: 'plates', title: 'Wagyu Strip Loin', description: 'A5 Japanese wagyu preparation' },
  { id: 6, category: 'interior', title: 'Chef\'s Table', description: 'Front-row view of the kitchen' },
  { id: 7, category: 'plates', title: 'Dark Chocolate Tart', description: 'Valrhona chocolate artistry' },
  { id: 8, category: 'events', title: 'Culinary Workshop', description: 'Hands-on cooking masterclasses' },
]

function GalleryGrid({ items }: { items: typeof galleryItems }) {
  const [expanded, setExpanded] = useState<number | null>(null)

  return (
    <>
      <motion.div
        layout
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
      >
        {items.map((item, i) => (
          <motion.div
            key={item.id}
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, delay: i * 0.05, ease: [0.25, 0.1, 0.25, 1] }}
            className={`relative rounded-2xl overflow-hidden group cursor-pointer ${
              i === 0 || i === 5 ? 'row-span-2 col-span-2' : ''
            }`}
            onClick={() => setExpanded(item.id)}
          >
            <div className="aspect-square bg-gradient-to-br from-white/5 to-ink-800 border border-white/5 rounded-2xl">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <Expand size={24} className="text-white/20 group-hover:text-white/60 transition-colors" />
                </div>
              </div>
            </div>
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
              <div>
                <p className="text-white font-medium text-sm">{item.title}</p>
                <p className="text-white/50 text-xs mt-0.5">{item.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setExpanded(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-2xl w-full aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-brand-500/10 to-ink-800 border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-white/40 text-sm">Gallery Image</p>
              </div>
              <button
                onClick={() => setExpanded(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white/80 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default function Gallery() {
  const [active, setActive] = useState('all')

  const filtered = active === 'all'
    ? galleryItems
    : galleryItems.filter((item) => item.category === active)

  return (
    <section id="gallery" className="py-20 md:py-28 lg:py-36 px-6 md:px-12 lg:px-24 bg-ink-900">
      <div className="mx-auto max-w-[1400px]">
        <ScrollReveal>
          <p className="text-brand-400 text-sm md:text-base tracking-[0.3em] uppercase mb-4 text-center font-medium">
            The Experience
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white text-center mb-4">
            A Visual{' '}
            <span className="bg-gradient-to-r from-brand-300 to-amber-200 bg-clip-text text-transparent">
              Journey
            </span>
          </h2>
          <p className="text-white/50 text-center max-w-2xl mx-auto mb-12 text-lg">
            Step into our world — every corner tells a story, every plate is a canvas.
          </p>
        </ScrollReveal>

        {/* Filter tabs */}
        <div className="flex justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                active === cat.id
                  ? 'bg-brand-500 text-white'
                  : 'text-white/50 hover:text-white bg-white/5 hover:bg-white/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <GalleryGrid key={active} items={filtered} />
        </AnimatePresence>
      </div>
    </section>
  )
}
