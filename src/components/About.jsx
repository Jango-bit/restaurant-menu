import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-amber-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-playfair font-bold text-center text-amber-900 mb-16 relative">
          Our Story
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-amber-600 mt-4"></div>
        </h2>
        
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80" 
                alt="Coffee preparation at Roast & Toast Cafe" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          
          <div className="md:w-1/2">
            <h3 className="text-2xl font-playfair font-semibold text-amber-800 mb-6">A Passion for Perfect Coffee Since 2010</h3>
            <p className="text-amber-700 mb-4">
              Founded in a small neighborhood with big dreams, Roast & Toast Cafe began as a humble coffee shop with a simple mission: 
              to serve exceptional coffee and create a warm, welcoming space for community connection.
            </p>
            <p className="text-amber-700 mb-6">
              Today, we continue to source the finest beans from sustainable farms around the world, 
              roast them to perfection in-house, and serve them with the same passion that started it all. 
              Our menu features artisanal coffee, freshly baked pastries, and delicious breakfast and lunch options.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div className="flex items-center">
                <div className="bg-amber-100 p-3 rounded-full mr-4">
                  <svg className="w-6 h-6 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-amber-900">Local & Cozy</h4>
                  <p className="text-sm text-amber-700">Community-focused cafe</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-amber-100 p-3 rounded-full mr-4">
                  <svg className="w-6 h-6 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-amber-900">Fresh Daily</h4>
                  <p className="text-sm text-amber-700">Locally sourced ingredients</p>
                </div>
              </div>
            </div>
            
            <button className="bg-amber-700 hover:bg-amber-800 text-white px-6 py-3 rounded-full font-semibold transition-colors inline-flex items-center">
              Learn More About Us
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;