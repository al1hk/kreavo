import { motion, AnimatePresence } from 'motion/react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  // Mock cart items for now
  const cartItems = [
    // {
    //   id: 1,
    //   name: 'Oyster Perpetual',
    //   price: 8500,
    //   image: 'https://picsum.photos/seed/watch1/200/200',
    //   quantity: 1
    // }
  ];

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
              <h2 className="text-xl font-serif tracking-widest uppercase">Your Cart</h2>
              <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-grow overflow-y-auto p-6">
              {cartItems.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-6">
                  <div className="w-20 h-20 rounded-full bg-ink-800 flex items-center justify-center">
                    <ShoppingBag className="w-8 h-8 text-gray-500" />
                  </div>
                  <div>
                    <p className="text-gray-400 mb-2">Your cart is currently empty.</p>
                    <p className="text-sm text-gray-500">Discover our collection of luxury timepieces.</p>
                  </div>
                  <button 
                    onClick={onClose}
                    className="border border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-ink-900 px-8 py-3 uppercase tracking-widest text-xs font-medium transition-colors"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  {/* Cart items would go here */}
                </div>
              )}
            </div>

            {/* Footer */}
            {cartItems.length > 0 && (
              <div className="p-6 border-t border-ink-800 bg-ink-900">
                <div className="flex justify-between mb-6">
                  <span className="text-gray-400">Subtotal</span>
                  <span className="font-medium">$0.00</span>
                </div>
                <p className="text-xs text-gray-500 mb-6">Shipping and taxes calculated at checkout.</p>
                <button className="w-full bg-gold-500 hover:bg-gold-400 text-ink-900 py-4 uppercase tracking-widest text-sm font-semibold transition-colors">
                  Checkout
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
