import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-ink-900 border-t border-ink-800 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="text-3xl font-serif tracking-[0.2em] uppercase text-white mb-6 block">
              Korvea
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Crafting timeless elegance and precision since 1924. Every Korvea timepiece is a testament to our dedication to perfection.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-serif tracking-widest uppercase text-sm mb-6">Collections</h4>
            <ul className="space-y-4">
              <li><Link to="/shop?category=classic" className="text-gray-400 hover:text-gold-400 text-sm transition-colors">Classic Series</Link></li>
              <li><Link to="/shop?category=sport" className="text-gray-400 hover:text-gold-400 text-sm transition-colors">Sport Chronographs</Link></li>
              <li><Link to="/shop?category=limited" className="text-gray-400 hover:text-gold-400 text-sm transition-colors">Limited Editions</Link></li>
              <li><Link to="/shop?category=heritage" className="text-gray-400 hover:text-gold-400 text-sm transition-colors">Heritage Collection</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-serif tracking-widest uppercase text-sm mb-6">Customer Care</h4>
            <ul className="space-y-4">
              <li><Link to="/contact" className="text-gray-400 hover:text-gold-400 text-sm transition-colors">Contact Us</Link></li>
              <li><a href="#" className="text-gray-400 hover:text-gold-400 text-sm transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gold-400 text-sm transition-colors">Warranty</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gold-400 text-sm transition-colors">Watch Care</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-serif tracking-widest uppercase text-sm mb-6">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">Subscribe to receive updates, access to exclusive deals, and more.</p>
            <form className="flex flex-col space-y-3">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="bg-ink-800 border border-ink-700 text-white px-4 py-3 text-sm focus:outline-none focus:border-gold-500 transition-colors"
              />
              <button 
                type="submit"
                className="bg-gold-500 hover:bg-gold-400 text-ink-900 font-medium uppercase tracking-widest text-xs py-3 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-ink-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-xs mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} KORVEA. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-white text-xs transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-white text-xs transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
