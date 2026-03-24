import { motion, AnimatePresence } from 'motion/react';
import { X, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WishlistDrawer({ isOpen, onClose }: WishlistDrawerProps) {
  const wishlistItems = [];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[70] bg-black/60 backdrop-blur-sm"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-md z-[80] bg-ink-900 border-l border-ink-800 flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-ink-800">
              <h2 className="text-xl font-serif tracking-widest uppercase">Your Wishlist</h2>
              <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-grow overflow-y-auto p-6">
              {wishlistItems.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-6">
                  <div className="w-20 h-20 rounded-full bg-ink-800 flex items-center justify-center">
                    <Heart className="w-8 h-8 text-gray-500" />
                  </div>
                  <div>
                    <p className="text-gray-400 mb-2">Your wishlist is currently empty.</p>
                    <p className="text-sm text-gray-500">Save your favorite timepieces for later.</p>
                  </div>
                  <button 
                    onClick={onClose}
                    className="border border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-ink-900 px-8 py-3 uppercase tracking-widest text-xs font-medium transition-colors"
                  >
                    Explore Collection
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  {/* Wishlist items would go here */}
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
