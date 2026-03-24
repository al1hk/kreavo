import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

interface WatchCardProps {
  key?: React.Key;
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
}

export default function WatchCard({ id, name, price, image, category }: WatchCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative flex flex-col"
    >
      <Link to={`/product/${id}`} className="block relative overflow-hidden aspect-[3/4] bg-ink-800 mb-4">
        <img
          src={image}
          alt={name}
          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </Link>
      
      <div className="flex flex-col items-center text-center">
        <span className="text-xs text-gold-500 tracking-widest uppercase mb-2">{category}</span>
        <Link to={`/product/${id}`} className="text-lg font-serif tracking-wide text-white hover:text-gold-400 transition-colors mb-2">
          {name}
        </Link>
        <span className="text-sm text-gray-400">${price.toLocaleString()}</span>
      </div>
    </motion.div>
  );
}
