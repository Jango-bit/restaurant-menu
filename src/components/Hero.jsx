import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center bg-gradient-to-r from-amber-900 to-amber-700 text-white">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>
      
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1445116572660-236099ec97a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80')" }}
      ></div>
      
      <div className="container mx-auto px-4 text-center z-10">
        <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6">ROAST & TOAST CAFE</h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">Where every cup tells a story and every bite delights the senses</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-full font-semibold transition-colors shadow-lg">
            View Our Menu
          </button>
          <button className="border-2 border-amber-300 text-amber-100 hover:bg-amber-300 hover:text-amber-900 px-8 py-3 rounded-full font-semibold transition-colors">
            Book a Table
          </button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-amber-200 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-amber-200 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
