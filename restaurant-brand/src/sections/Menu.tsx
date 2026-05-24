import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Star } from 'lucide-react'
import GlassCard from '../components/ui/GlassCard'
import ScrollReveal from '../components/ui/ScrollReveal'

const categories = [
  { id: 'starters', label: 'Starters' },
  { id: 'mains', label: 'Mains' },
  { id: 'desserts', label: 'Desserts' },
  { id: 'wine', label: 'Wine' },
]

const menuItems: Record<string, { name: string; description: string; price: string; special?: boolean }[]> = {
  starters: [
    { name: 'Burrata & Heirloom Tomatoes', description: 'Creamy burrata with basil pesto, aged balsamic, and garden heirloom tomatoes.', price: '$24', special: true },
    { name: 'Foie Gras Terrine', description: 'Served with fig compote, toasted brioche, and Sauternes gelée.', price: '$38' },
    { name: 'Hamachi Crudo', description: 'Yellowtail with yuzu truffle vinaigrette, micro shiso, and fried shallots.', price: '$32' },
    { name: 'Roasted Bone Marrow', description: 'With parsley salad, pickled shallots, and grilled sourdough.', price: '$28' },
    { name: 'Autumn Squash Soup', description: 'Kabocha squash velouté with brown butter crumble and sage oil.', price: '$22' },
  ],
  mains: [
    { name: 'Truffle & Sage Agnolotti', description: 'Hand-rolled pasta, wild mushroom filling, black truffle, brown butter sage.', price: '$46', special: true },
    { name: 'Pan-Seared Branzino', description: 'Mediterranean sea bass with saffron beurre blanc, fennel confit, and caper berries.', price: '$52' },
    { name: 'Dry-Aged Duck Breast', description: 'Hudson Valley duck with cherry gastrique, roasted celeriac, and wilted chicory.', price: '$48' },
    { name: 'Wagyu Strip Loin', description: 'A5 Japanese wagyu with potato purée, grilled asparagus, and red wine jus.', price: '$95' },
    { name: 'Herb-Crusted Lamb Rack', description: 'Colorado lamb with Provençal herbs, ratatouille, and rosemary lamb jus.', price: '$58' },
  ],
  desserts: [
    { name: 'Dark Chocolate Tart', description: 'Valrhona chocolate ganache, caramelized banana, and vanilla bean ice cream.', price: '$22', special: true },
    { name: 'Lemon Olive Oil Cake', description: 'Extra virgin olive oil cake, mascarpone cream, and candied citrus.', price: '$19' },
    { name: 'Crème Brûlée', description: 'Classic Madagascar vanilla with a bronzed caramel crust.', price: '$18' },
    { name: 'Artisan Cheese Board', description: 'Selection of European and domestic artisan cheeses with accompaniments.', price: '$34' },
  ],
  wine: [
    { name: 'Domaine Leflaive Puligny-Montrachet', description: 'Chardonnay, Burgundy, France. Elegant minerality with citrus and white flowers.', price: '$185', special: true },
    { name: 'Château Margaux 2015', description: 'Bordeaux blend, Margaux, France. Silky tannins with cassis and violet notes.', price: '$650' },
    { name: 'Gaja Barbaresco', description: 'Nebbiolo, Piedmont, Italy. Rose petal, cherry, and truffle undertones.', price: '$280' },
    { name: 'Opus One Overture', description: 'Napa Valley blend. Rich dark fruit, cocoa, and polished tannins.', price: '$350' },
    { name: 'Roederer Cristal Brut 2015', description: 'Champagne, France. Chardonnay and Pinot Noir precision.', price: '$420' },
  ],
}

const mobileMenuData = categories.map((cat) => ({
  ...cat,
  items: menuItems[cat.id],
}))

function DesktopMenu() {
  const [active, setActive] = useState('starters')
  const items = menuItems[active]

  return (
    <div className="hidden md:block">
      {/* Tabs */}
      <div className="flex justify-center gap-1 mb-16 p-1.5 bg-white/5 rounded-2xl border border-white/10 w-fit mx-auto">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActive(cat.id)}
            className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
              active === cat.id
                ? 'bg-brand-500 text-white shadow-lg shadow-brand-500/25'
                : 'text-white/50 hover:text-white hover:bg-white/5'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Menu items grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="grid md:grid-cols-2 gap-6"
        >
          {items.map((item, i) => (
            <GlassCard key={item.name} delay={i * 0.08}>
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="text-white font-semibold text-lg">{item.name}</h4>
                    {item.special && (
                      <span className="inline-flex items-center gap-1 text-xs text-brand-300 bg-brand-500/10 px-2 py-0.5 rounded-full">
                        <Star size={10} />
                        Chef&apos;s Special
                      </span>
                    )}
                  </div>
                  <p className="text-white/50 text-sm leading-relaxed">{item.description}</p>
                </div>
                <span className="text-brand-300 font-semibold text-lg whitespace-nowrap">{item.price}</span>
              </div>
            </GlassCard>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

function MobileAccordion() {
  const [open, setOpen] = useState<string | null>('starters')

  return (
    <div className="md:hidden space-y-3">
      {mobileMenuData.map((cat) => (
        <div key={cat.id} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden">
          <button
            onClick={() => setOpen(open === cat.id ? null : cat.id)}
            className="w-full flex items-center justify-between px-5 py-4 text-white font-medium"
          >
            {cat.label}
            <ChevronDown
              size={18}
              className={`transition-transform duration-300 ${open === cat.id ? 'rotate-180' : ''}`}
            />
          </button>
          <AnimatePresence>
            {open === cat.id && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="px-5 pb-5 space-y-4">
                  {cat.items.map((item) => (
                    <div key={item.name} className="flex items-start justify-between gap-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <p className="text-white text-sm font-medium">{item.name}</p>
                          {item.special && <Star size={10} className="text-brand-400" />}
                        </div>
                        <p className="text-white/40 text-xs mt-1">{item.description}</p>
                      </div>
                      <span className="text-brand-300 text-sm font-medium whitespace-nowrap">{item.price}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
}

export default function Menu() {
  return (
    <section id="menu" className="py-20 md:py-28 lg:py-36 px-6 md:px-12 lg:px-24 bg-ink-900">
      <div className="mx-auto max-w-[1400px]">
        <ScrollReveal>
          <p className="text-brand-400 text-sm md:text-base tracking-[0.3em] uppercase mb-4 text-center font-medium">
            Curated Selections
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white text-center mb-4">
            A Taste of{' '}
            <span className="bg-gradient-to-r from-brand-300 to-amber-200 bg-clip-text text-transparent">
              Excellence
            </span>
          </h2>
          <p className="text-white/50 text-center max-w-2xl mx-auto mb-16 text-lg">
            A carefully curated menu that evolves with the seasons, showcasing the finest
            ingredients and most refined techniques.
          </p>
        </ScrollReveal>

        <DesktopMenu />
        <MobileAccordion />
      </div>
    </section>
  )
}
