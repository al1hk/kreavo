import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import React from 'react';

export default function Hero() {
  return (
    <section className="relative h-screen w-full bg-black overflow-hidden flex flex-col justify-end items-center">
      
      {/* Background / Watch Image */}
      <div className="absolute inset-0 z-0">
        <motion.img
          src="https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?q=80&w=2000&auto=format&fit=crop"
          alt="Timezone Luxury Watch"
          className="absolute inset-0 w-full h-full object-cover z-0"
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          referrerPolicy="no-referrer"
        />
        {/* Radial gradient to darken edges and create an abstract, focused feel */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.7)_100%)] z-10 pointer-events-none" />
      </div>

      {/* Black gradient overlay at bottom for readability */}
      <div className="absolute inset-x-0 bottom-0 h-4/5 bg-gradient-to-t from-black via-black/95 to-transparent z-10 pointer-events-none" />

      {/* Content */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        className="relative z-20 flex flex-col items-center text-center px-6 pb-24 w-full max-w-4xl"
      >
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-light tracking-wide text-white leading-[1.1] mb-6 drop-shadow-2xl">
          Discover Timeless Elegance with Timezone
        </h1>
        
        <p className="text-gray-200 text-base md:text-lg font-sans font-light tracking-wide leading-relaxed max-w-2xl mb-10 drop-shadow-lg">
          Experience the pinnacle of horology. Every Timezone timepiece is a masterpiece of precision engineering, unparalleled craftsmanship, and enduring style.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-6">
          <Link
            to="/shop"
            className="px-8 py-4 bg-white text-black uppercase tracking-widest text-sm font-semibold hover:bg-gray-200 transition-colors duration-300"
          >
            Shop now
          </Link>
          
          <Link
            to="/collections"
            className="px-8 py-4 bg-transparent border border-white text-white uppercase tracking-widest text-sm font-semibold hover:bg-white/10 transition-colors duration-300"
          >
            New collections
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
