import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, Search, Menu, X, Heart } from 'lucide-react';
import { cn } from '../lib/utils';
import CartDrawer from './CartDrawer';
import WishlistDrawer from './WishlistDrawer';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out',
          isScrolled ? 'bg-ink-900/90 backdrop-blur-md py-4 border-b border-ink-800' : 'bg-transparent py-6'
        )}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:text-gold-400 transition-colors"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>

          {/* Logo */}
          <Link to="/" className="text-2xl md:text-3xl font-serif tracking-[0.2em] uppercase text-white">
            Timezone
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-xs uppercase tracking-widest font-medium text-gray-300 hover:text-gold-400 transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-gold-400 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-6">
            <button className="hidden md:block text-white hover:text-gold-400 transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button 
              className="hidden md:block text-white hover:text-gold-400 transition-colors relative"
              onClick={() => setIsWishlistOpen(true)}
            >
              <Heart className="w-5 h-5" />
            </button>
            <button 
              className="text-white hover:text-gold-400 transition-colors relative"
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-1.5 -right-1.5 bg-gold-500 text-ink-900 text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                0
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-ink-900/95 backdrop-blur-xl flex flex-col"
          >
            <div className="flex justify-end p-6">
              <button
                className="text-white hover:text-gold-400 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X className="w-8 h-8" />
              </button>
            </div>
            <nav className="flex flex-col items-center justify-center flex-grow space-y-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-3xl font-serif tracking-widest uppercase text-white hover:text-gold-400 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <button 
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsWishlistOpen(true);
                }}
                className="text-3xl font-serif tracking-widest uppercase text-white hover:text-gold-400 transition-colors mt-8"
              >
                Wishlist
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <WishlistDrawer isOpen={isWishlistOpen} onClose={() => setIsWishlistOpen(false)} />
    </>
  );
}
