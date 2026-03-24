import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import WatchCard from '../components/WatchCard';
import Hero from '../components/Hero';

const featuredWatches = [
  {
    id: '1',
    name: 'Oyster Perpetual',
    price: 8500,
    image: 'https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?q=80&w=1200&auto=format&fit=crop',
    category: 'Classic'
  },
  {
    id: '2',
    name: 'Nautilus Chronograph',
    price: 12400,
    image: 'https://images.unsplash.com/photo-1547996160-81dfa63595aa?q=80&w=1200&auto=format&fit=crop',
    category: 'Sport'
  },
  {
    id: '3',
    name: 'Royal Oak Offshore',
    price: 15200,
    image: 'https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?q=80&w=1200&auto=format&fit=crop',
    category: 'Limited Edition'
  },
  {
    id: '4',
    name: 'Seamaster Diver',
    price: 6800,
    image: 'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?q=80&w=1200&auto=format&fit=crop',
    category: 'Sport'
  }
];

export default function Home() {
  return (
    <div className="bg-ink-900">
      <Hero />

      {/* Featured Collections */}
      <section className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <span className="text-gold-500 tracking-widest uppercase text-xs font-medium mb-4 block">
              Curated Selection
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-white">Featured Timepieces</h2>
          </div>
          <Link
            to="/shop"
            className="text-sm text-gray-400 hover:text-gold-400 transition-colors uppercase tracking-widest border-b border-gray-700 hover:border-gold-400 pb-1 mt-6 md:mt-0"
          >
            View All
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredWatches.map((watch) => (
            <WatchCard 
              key={watch.id} 
              id={watch.id}
              name={watch.name}
              price={watch.price}
              image={watch.image}
              category={watch.category}
            />
          ))}
        </div>
      </section>

      {/* Brand Story / Craftsmanship */}
      <section className="py-24 md:py-32 bg-ink-800">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative aspect-video md:aspect-[4/5] lg:aspect-square w-full"
            >
              <img
                src="https://images.unsplash.com/photo-1639006570490-79c0c53f1080?q=80&w=1200&auto=format&fit=crop"
                alt="Watch Craftsmanship"
                className="w-full h-full object-cover rounded-sm"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -right-6 md:-bottom-8 md:-right-8 w-2/3 aspect-square border border-gold-500/30 -z-10 hidden sm:block" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="lg:pl-12"
            >
              <span className="text-gold-500 tracking-widest uppercase text-xs font-medium mb-4 block">
                Our Heritage
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-white mb-8 leading-tight">
                Crafted for Perfection
              </h2>
              <p className="text-gray-400 text-lg font-light leading-relaxed mb-8">
                For over a century, Korvea has been synonymous with uncompromising quality and visionary design. Each timepiece is assembled by hand in our Swiss atelier, requiring hundreds of hours of meticulous labor.
              </p>
              <p className="text-gray-400 text-lg font-light leading-relaxed mb-10">
                We blend traditional watchmaking techniques with cutting-edge materials to create instruments that are not just tools for measuring time, but heirlooms meant to be passed down through generations.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center text-gold-500 hover:text-gold-400 uppercase tracking-widest text-sm font-medium transition-colors group"
              >
                Discover Our Story
                <span className="ml-4 w-12 h-[1px] bg-gold-500 group-hover:w-16 transition-all duration-300" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">Explore by Category</h2>
          <p className="text-gray-400 text-lg font-light max-w-2xl mx-auto">Find the perfect timepiece to match your lifestyle and aesthetic.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: 'Classic', image: 'https://images.unsplash.com/photo-1587836374828-cb4387df3eb7?q=80&w=1200&auto=format&fit=crop' },
            { name: 'Sport', image: 'https://images.unsplash.com/photo-1547996160-81dfa63595aa?q=80&w=1200&auto=format&fit=crop' },
            { name: 'Complications', image: 'https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?q=80&w=1200&auto=format&fit=crop' }
          ].map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative aspect-[3/4] overflow-hidden cursor-pointer"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900/90 via-ink-900/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-center">
                <h3 className="text-2xl font-serif text-white mb-2">{category.name}</h3>
                <Link
                  to={`/shop?category=${category.name.toLowerCase()}`}
                  className="inline-block text-xs text-gold-500 uppercase tracking-widest opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500"
                >
                  Shop Now
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
