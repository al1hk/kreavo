import { useState } from 'react';
import { motion } from 'motion/react';
import { Filter, ChevronDown } from 'lucide-react';
import WatchCard from '../components/WatchCard';

const allWatches = [
  { id: '1', name: 'Oyster Perpetual', price: 8500, image: 'https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?q=80&w=1200&auto=format&fit=crop', category: 'Classic' },
  { id: '2', name: 'Nautilus Chronograph', price: 12400, image: 'https://images.unsplash.com/photo-1547996160-81dfa63595aa?q=80&w=1200&auto=format&fit=crop', category: 'Sport' },
  { id: '3', name: 'Royal Oak Offshore', price: 15200, image: 'https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?q=80&w=1200&auto=format&fit=crop', category: 'Limited Edition' },
  { id: '4', name: 'Seamaster Diver', price: 6800, image: 'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?q=80&w=1200&auto=format&fit=crop', category: 'Sport' },
  { id: '5', name: 'Submariner Date', price: 10200, image: 'https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?q=80&w=1200&auto=format&fit=crop', category: 'Sport' },
  { id: '6', name: 'Day-Date 40', price: 35000, image: 'https://images.unsplash.com/photo-1547996160-81dfa63595aa?q=80&w=1200&auto=format&fit=crop', category: 'Classic' },
  { id: '7', name: 'Speedmaster Moonwatch', price: 7200, image: 'https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?q=80&w=1200&auto=format&fit=crop', category: 'Classic' },
  { id: '8', name: 'Luminor Marina', price: 8400, image: 'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?q=80&w=1200&auto=format&fit=crop', category: 'Sport' },
];

export default function Shop() {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Classic', 'Sport', 'Limited Edition'];

  const filteredWatches = activeCategory === 'All' 
    ? allWatches 
    : allWatches.filter(watch => watch.category === activeCategory);

  return (
    <div className="bg-ink-900 pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif text-white mb-6"
          >
            The Collection
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg font-light max-w-2xl mx-auto"
          >
            Explore our complete range of exceptional timepieces, crafted for those who appreciate the finer things in life.
          </motion.p>
        </div>

        {/* Filters & Sorting */}
        <div className="flex flex-col md:flex-row justify-between items-center border-y border-ink-800 py-6 mb-12">
          {/* Categories */}
          <div className="flex space-x-8 mb-6 md:mb-0 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`text-sm uppercase tracking-widest whitespace-nowrap transition-colors ${
                  activeCategory === category 
                    ? 'text-gold-500 font-medium' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Sort & Filter Buttons */}
          <div className="flex items-center space-x-6 w-full md:w-auto justify-between md:justify-end">
            <button className="flex items-center space-x-2 text-sm text-gray-400 hover:text-white transition-colors uppercase tracking-widest">
              <Filter className="w-4 h-4" />
              <span>Filter</span>
            </button>
            <button className="flex items-center space-x-2 text-sm text-gray-400 hover:text-white transition-colors uppercase tracking-widest">
              <span>Sort By</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16">
          {filteredWatches.map((watch, index) => (
            <motion.div
              key={watch.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <WatchCard {...watch} />
            </motion.div>
          ))}
        </div>

        {/* Load More */}
        <div className="mt-20 text-center">
          <button className="border border-gray-700 text-white hover:border-gold-500 hover:text-gold-500 px-10 py-4 uppercase tracking-widest text-sm font-medium transition-colors">
            Load More
          </button>
        </div>
      </div>
    </div>
  );
}
