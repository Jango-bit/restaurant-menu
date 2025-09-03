// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-amber-950 text-amber-200 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-playfair font-bold text-amber-100 mb-4">ROAST & TOAST CAFE</h3>
            <p className="mb-4">Where every cup tells a story and every bite delights the senses.</p>
            <p>© 2023 Roast & Toast Cafe. All rights reserved.</p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-amber-100 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-amber-50 transition-colors">Home</a></li>
              <li><a href="#menu" className="hover:text-amber-50 transition-colors">Menu</a></li>
              <li><a href="#about" className="hover:text-amber-50 transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-amber-50 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-amber-100 mb-4">Contact Info</h4>
            <address className="not-italic">
              <p className="mb-2">123 Coffee Street</p>
              <p className="mb-2">Brewville, BC 12345</p>
              <p className="mb-2">Phone: (555) 123-4567</p>
              <p>Email: info@roastandtoast.com</p>
            </address>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-amber-100 mb-4">Newsletter</h4>
            <p className="mb-4">Subscribe to our newsletter for updates and special offers.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-amber-900 border border-amber-800 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500 w-full"
              />
              <button 
                type="submit" 
                className="bg-amber-700 hover:bg-amber-600 text-white px-4 py-2 rounded-r-lg transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-amber-800 pt-8 text-center">
          <p>Designed with ❤️ for coffee lovers everywhere</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;