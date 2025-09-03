import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-amber-900 text-amber-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-playfair font-bold text-center mb-16">Visit Us</h2>
        
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-playfair font-semibold mb-6">Hours</h3>
            <div className="mb-8">
              <div className="flex justify-between py-3 border-b border-amber-700">
                <span>Monday - Friday</span>
                <span>7:00 AM - 8:00 PM</span>
              </div>
              <div className="flex justify-between py-3 border-b border-amber-700">
                <span>Saturday</span>
                <span>8:00 AM - 9:00 PM</span>
              </div>
              <div className="flex justify-between py-3 border-b border-amber-700">
                <span>Sunday</span>
                <span>8:00 AM - 6:00 PM</span>
              </div>
            </div>
            
            <h3 className="text-2xl font-playfair font-semibold mb-6">Location</h3>
            <p className="mb-4">123 Coffee Street</p>
            <p className="mb-8">Brewville, BC 12345</p>
            
            <h3 className="text-2xl font-playfair font-semibold mb-6">Contact</h3>
            <p className="mb-2">Phone: (555) 123-4567</p>
            <p className="mb-8">Email: info@roastandtoast.com</p>
            
            <div className="flex space-x-4">
              <a href="#" className="bg-amber-700 hover:bg-amber-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12z"/>
                </svg>
              </a>
              <a href="#" className="bg-amber-700 hover:bg-amber-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"/>
                </svg>
              </a>
              <a href="#" className="bg-amber-700 hover:bg-amber-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-playfair font-semibold mb-6">Send us a message</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full bg-amber-800 border border-amber-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500" 
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2">Your Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-amber-800 border border-amber-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500" 
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2">Your Message</label>
                <textarea 
                  id="message" 
                  rows="5" 
                  className="w-full bg-amber-800 border border-amber-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500" 
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="bg-amber-600 hover:bg-amber-500 text-white px-6 py-3 rounded-lg font-semibold transition-colors w-full"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;