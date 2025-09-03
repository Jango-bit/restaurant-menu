import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-amber-900 text-amber-100 py-4 fixed w-full top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-2xl font-playfair font-bold">ROAST & TOAST CAFE</div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="hover:text-amber-300 transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-amber-300 after:transition-all hover:after:w-full">Home</a>
          <a href="#menu" className="hover:text-amber-300 transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-amber-300 after:transition-all hover:after:w-full">Menu</a>
          <a href="#about" className="hover:text-amber-300 transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-amber-300 after:transition-all hover:after:w-full">About</a>
          <a href="#gallery" className="hover:text-amber-300 transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-amber-300 after:transition-all hover:after:w-full">Gallery</a>
          <a href="#contact" className="hover:text-amber-300 transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-amber-300 after:transition-all hover:after:w-full">Contact</a>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-amber-100 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden bg-amber-800 transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-64 py-4' : 'max-h-0 py-0'} overflow-hidden`}>
        <div className="container mx-auto px-4 flex flex-col space-y-3">
          <a href="#home" className="hover:text-amber-300 transition-colors">Home</a>
          <a href="#menu" className="hover:text-amber-300 transition-colors">Menu</a>
          <a href="#about" className="hover:text-amber-300 transition-colors">About</a>
          <a href="#gallery" className="hover:text-amber-300 transition-colors">Gallery</a>
          <a href="#contact" className="hover:text-amber-300 transition-colors">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;