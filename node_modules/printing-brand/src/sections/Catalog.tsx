import { Shirt, Layers, ShirtIcon, Medal, HardHat, BaggageClaim, Sparkles, Baby, Wind } from 'lucide-react'
import Section from '@/components/ui/Section'
import ScrollReveal from '@/components/ui/ScrollReveal'
import AnimatedText from '@/components/ui/AnimatedText'
import GlassCard from '@/components/ui/GlassCard'

const products = [
  { icon: Shirt, title: 'Custom T-Shirts', desc: 'Premium ringspun cotton, crew & v-necks, full-color printing.', from: '$8.50/unit', badge: 'Best Seller' },
  { icon: Layers, title: 'Hoodies & Sweatshirts', desc: 'Heavyweight fleece, zip-ups, pullovers with front or back prints.', from: '$18.00/unit', badge: 'Trending' },
  { icon: ShirtIcon, title: 'Polo Shirts', desc: 'Pique, jersey, and performance mesh with embroidery options.', from: '$14.00/unit', badge: '' },
  { icon: Medal, title: 'Sports Jerseys', desc: 'Full sublimation, screen-printed, team sets with numbering.', from: '$22.00/unit', badge: 'Popular' },
  { icon: HardHat, title: 'Workwear', desc: 'Hi-vis vests, safety shirts, industrial-grade uniforms.', from: '$16.50/unit', badge: '' },
  { icon: BaggageClaim, title: 'Bags & Accessories', desc: 'Tote bags, drawstrings, caps, and custom labels.', from: '$4.50/unit', badge: 'New' },
  { icon: Baby, title: 'Kids Apparel', desc: 'Youth sizing, soft fabrics, fun prints for schools & events.', from: '$7.00/unit', badge: '' },
  { icon: Wind, title: 'Outerwear', desc: 'Windbreakers, bomber jackets, varsity jackets with embroidery.', from: '$32.00/unit', badge: 'Premium' },
  { icon: Sparkles, title: 'Custom Patches', desc: 'Chenille, embroidered, PVC, and woven patches for any use.', from: '$2.00/unit', badge: '' },
]

export default function Catalog() {
  return (
    <Section id="catalog" dark>
      <div className="text-center mb-16 md:mb-20">
        <AnimatedText
          text="Product Catalog"
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white"
        />
        <ScrollReveal delay={0.2}>
          <p className="text-white/50 text-lg mt-4 max-w-2xl mx-auto">
            Explore our full range of customizable apparel and accessories. Minimum order quantities as low as 50 units.
          </p>
        </ScrollReveal>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, i) => {
          const Icon = product.icon
          return (
            <ScrollReveal key={product.title} delay={i * 0.05}>
              <GlassCard className="relative overflow-hidden group">
                {product.badge && (
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-xs font-medium text-brand-400 z-10">
                    {product.badge}
                  </div>
                )}
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:bg-brand-500/10 group-hover:border-brand-500/20 transition-all duration-300">
                  <Icon size={22} className="text-white/60 group-hover:text-brand-400 transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{product.title}</h3>
                <p className="text-white/50 text-sm mb-4 leading-relaxed">{product.desc}</p>
                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <span className="text-sm text-white/30">Starting at</span>
                  <span className="text-lg font-semibold text-brand-400">{product.from}</span>
                </div>
              </GlassCard>
            </ScrollReveal>
          )
        })}
      </div>
    </Section>
  )
}
