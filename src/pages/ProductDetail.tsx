import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronRight, Heart, Share2, ShieldCheck, Truck, RotateCcw } from 'lucide-react';

// Mock data
const productData = {
  id: '1',
  name: 'Oyster Perpetual',
  price: 8500,
  description: 'The Oyster Perpetual is the purest expression of the Oyster concept, providing a clear and accurate time display. This model features a sophisticated black dial and a robust Oyster bracelet, combining timeless elegance with everyday functionality.',
  specs: [
    { label: 'Reference', value: '124300' },
    { label: 'Case Size', value: '41 mm' },
    { label: 'Material', value: 'Oystersteel' },
    { label: 'Dial', value: 'Black' },
    { label: 'Movement', value: 'Calibre 3230, Manufacture' },
    { label: 'Power Reserve', value: 'Approximately 70 hours' },
    { label: 'Water Resistance', value: '100 meters / 330 feet' },
  ],
  images: [
    'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?q=80&w=1200&auto=format&fit=crop',
  ]
};

export default function ProductDetail() {
  const { id } = useParams();
  const [activeImage, setActiveImage] = useState(0);

  return (
    <div className="bg-ink-900 pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Breadcrumbs */}
        <nav className="flex items-center space-x-2 text-xs text-gray-500 uppercase tracking-widest mb-12">
          <Link to="/" className="hover:text-gold-400 transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/shop" className="hover:text-gold-400 transition-colors">Watches</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-white">{productData.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Image Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-6">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-y-auto no-scrollbar md:w-24 shrink-0">
              {productData.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`relative aspect-square bg-ink-800 border-2 transition-colors ${
                    activeImage === idx ? 'border-gold-500' : 'border-transparent hover:border-gray-600'
                  }`}
                >
                  <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </button>
              ))}
            </div>
            
            {/* Main Image */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              key={activeImage}
              className="flex-grow aspect-[4/5] bg-ink-800 relative"
            >
              <img 
                src={productData.images[activeImage]} 
                alt={productData.name} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <span className="text-gold-500 tracking-widest uppercase text-xs font-medium mb-4 block">
              Classic Collection
            </span>
            <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">{productData.name}</h1>
            <p className="text-2xl text-gray-300 mb-8">${productData.price.toLocaleString()}</p>
            
            <p className="text-gray-400 text-sm leading-relaxed mb-10 font-light">
              {productData.description}
            </p>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="flex-grow bg-gold-500 hover:bg-gold-400 text-ink-900 py-4 uppercase tracking-widest text-sm font-semibold transition-colors">
                Add to Cart
              </button>
              <button className="flex items-center justify-center aspect-square w-14 border border-gray-700 text-white hover:border-gold-500 hover:text-gold-500 transition-colors">
                <Heart className="w-5 h-5" />
              </button>
              <button className="flex items-center justify-center aspect-square w-14 border border-gray-700 text-white hover:border-gold-500 hover:text-gold-500 transition-colors">
                <Share2 className="w-5 h-5" />
              </button>
            </div>

            {/* Value Props */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-8 border-y border-ink-800 mb-12">
              <div className="flex flex-col items-center text-center">
                <ShieldCheck className="w-6 h-6 text-gold-500 mb-3" />
                <span className="text-xs text-white uppercase tracking-widest mb-1">5 Year Warranty</span>
                <span className="text-[10px] text-gray-500">Official Guarantee</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <Truck className="w-6 h-6 text-gold-500 mb-3" />
                <span className="text-xs text-white uppercase tracking-widest mb-1">Free Shipping</span>
                <span className="text-[10px] text-gray-500">Insured Delivery</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <RotateCcw className="w-6 h-6 text-gold-500 mb-3" />
                <span className="text-xs text-white uppercase tracking-widest mb-1">Free Returns</span>
                <span className="text-[10px] text-gray-500">Within 14 Days</span>
              </div>
            </div>

            {/* Specifications */}
            <div>
              <h3 className="text-lg font-serif text-white mb-6">Technical Specifications</h3>
              <div className="space-y-4">
                {productData.specs.map((spec, idx) => (
                  <div key={idx} className="flex justify-between border-b border-ink-800 pb-4">
                    <span className="text-sm text-gray-400">{spec.label}</span>
                    <span className="text-sm text-white text-right">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
