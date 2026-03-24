import { motion } from 'motion/react';

export default function About() {
  return (
    <div className="bg-ink-900 pt-32 pb-24 min-h-screen">
      {/* Hero */}
      <section className="relative h-[40vh] md:h-[60vh] flex items-center justify-center overflow-hidden mb-16 md:mb-24">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1639006570490-79c0c53f1080?q=80&w=1200&auto=format&fit=crop"
            alt="Watchmaking"
            className="w-full h-full object-cover opacity-30"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-transparent to-transparent" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="block text-gold-500 tracking-[0.3em] uppercase text-xs md:text-sm mb-4 md:mb-6 font-medium"
          >
            Since 1924
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-7xl font-serif text-white leading-tight mb-4 md:mb-8"
          >
            A Legacy of Precision
          </motion.h1>
        </div>
      </section>

      {/* Story */}
      <section className="max-w-4xl mx-auto px-6 md:px-12 mb-32">
        <div className="prose prose-invert prose-lg mx-auto text-gray-400 font-light leading-relaxed">
          <p className="text-2xl text-white font-serif mb-12 text-center leading-snug">
            "We don't just measure time; we craft the instruments that define it. Every Korvea timepiece is a bridge between centuries of tradition and the innovations of tomorrow."
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-16">
            <div>
              <h3 className="text-xl font-serif text-white mb-6">The Beginning</h3>
              <p>
                Founded in Geneva in 1924, Korvea began as a small atelier dedicated to creating the most precise chronometers for aviation pioneers. Our founder, Antoine Korvea, believed that a watch should be as reliable as the instruments navigating the skies.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-serif text-white mb-6">The Philosophy</h3>
              <p>
                Today, that same philosophy drives every decision we make. We source only the finest materials—from 904L steel to 18ct gold—and employ master watchmakers who spend hundreds of hours assembling a single movement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Craftsmanship */}
      <section className="bg-ink-800 py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:pr-12"
            >
              <h2 className="text-4xl md:text-5xl font-serif text-white mb-8">Mastery in Every Detail</h2>
              <p className="text-gray-400 text-lg font-light leading-relaxed mb-8">
                Our movements are designed, developed, and manufactured entirely in-house. This vertical integration allows us to maintain absolute control over the quality and precision of our watches.
              </p>
              <p className="text-gray-400 text-lg font-light leading-relaxed">
                From the initial sketch to the final polish, a Korvea watch undergoes rigorous testing to ensure it meets our exacting standards. It is this dedication to perfection that makes a Korvea not just a watch, but a legacy.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <img
                src="https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?q=80&w=1200&auto=format&fit=crop"
                alt="Craftsmanship 1"
                className="w-full aspect-[3/4] object-cover"
                referrerPolicy="no-referrer"
              />
              <img
                src="https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?q=80&w=1200&auto=format&fit=crop"
                alt="Craftsmanship 2"
                className="w-full aspect-[3/4] object-cover mt-8"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
