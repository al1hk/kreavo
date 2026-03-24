import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <div className="bg-ink-900 pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="block text-gold-500 tracking-[0.3em] uppercase text-xs md:text-sm mb-6 font-medium"
          >
            Get in Touch
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-serif text-white mb-6"
          >
            Contact Us
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg font-light max-w-2xl mx-auto"
          >
            Our dedicated team of experts is here to assist you with any inquiries regarding our collections, services, or your personal timepiece.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-12"
          >
            <div>
              <h2 className="text-2xl font-serif text-white mb-8">Boutique Information</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-gold-500 shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-medium mb-1">Geneva Flagship</h4>
                    <p className="text-gray-400 font-light">Rue du RhÃ´ne 42<br />1204 Geneva, Switzerland</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-gold-500 shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-medium mb-1">Phone</h4>
                    <p className="text-gray-400 font-light">+41 22 123 45 67</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-gold-500 shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-medium mb-1">Email</h4>
                    <p className="text-gray-400 font-light">concierge@korvea.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-gold-500 shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-medium mb-1">Opening Hours</h4>
                    <p className="text-gray-400 font-light">Mon - Fri: 10:00 AM - 6:30 PM<br />Sat: 10:00 AM - 5:00 PM<br />Sun: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="w-full h-64 bg-ink-800 border border-ink-700 relative overflow-hidden group">
              <img 
                src="/images/footer.jpeg" 
                alt="Map" 
                className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-500 grayscale"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="bg-ink-900/80 backdrop-blur-sm border border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-ink-900 px-6 py-3 uppercase tracking-widest text-xs font-medium transition-colors">
                  Get Directions
                </button>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-ink-800 p-8 md:p-12 border border-ink-700"
          >
            <h2 className="text-2xl font-serif text-white mb-8">Send a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-xs text-gray-400 uppercase tracking-widest">First Name</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    className="w-full bg-ink-900 border border-ink-700 text-white px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-xs text-gray-400 uppercase tracking-widest">Last Name</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    className="w-full bg-ink-900 border border-ink-700 text-white px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-xs text-gray-400 uppercase tracking-widest">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-ink-900 border border-ink-700 text-white px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-xs text-gray-400 uppercase tracking-widest">Subject</label>
                <select 
                  id="subject" 
                  className="w-full bg-ink-900 border border-ink-700 text-white px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors appearance-none"
                >
                  <option>General Inquiry</option>
                  <option>Product Information</option>
                  <option>Service & Repair</option>
                  <option>Press & Media</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-xs text-gray-400 uppercase tracking-widest">Message</label>
                <textarea 
                  id="message" 
                  rows={5}
                  className="w-full bg-ink-900 border border-ink-700 text-white px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-gold-500 hover:bg-gold-400 text-ink-900 py-4 uppercase tracking-widest text-sm font-semibold transition-colors mt-4"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
