import React, { useState, useEffect } from 'react';
import { Menu, X, Star } from 'lucide-react';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center">
            <Star className="h-6 w-6 text-pink-400 mr-2" />
            <span className="font-serif text-xl font-semibold text-gray-800">Rinahs</span>
          </a>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="nav-link">Home</a>
            <a href="#countdown" className="nav-link">Countdown</a>
            <a href="#playlist" className="nav-link">Playlist</a>
            <a href="#gallery" className="nav-link">Gallery</a>
            <a href="#facts" className="nav-link">Fun Facts</a>
            <a href="/" className="nav-link">Coming Soon</a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg mt-2 py-4 px-4 absolute w-full">
          <div className="flex flex-col space-y-4">
            <a href="/" className="nav-link" onClick={() => setMenuOpen(false)}>Home</a>
            <a href="#countdown" className="nav-link" onClick={() => setMenuOpen(false)}>Countdown</a>
            <a href="#playlist" className="nav-link" onClick={() => setMenuOpen(false)}>Playlist</a>
            <a href="#gallery" className="nav-link" onClick={() => setMenuOpen(false)}>Gallery</a>
            <a href="#facts" className="nav-link" onClick={() => setMenuOpen(false)}>Fun Facts</a>
            <a href="/graduation" className="nav-link" onClick={() => setMenuOpen(false)}>Graduation</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;