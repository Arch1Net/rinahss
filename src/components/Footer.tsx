import React from 'react';
import { Star, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-gradient-to-b from-pink-50 to-white">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-lg mx-auto">
          <div className="flex justify-center items-center mb-6">
            <Star className="h-6 w-6 text-pink-400 mr-2" />
            <span className="font-serif text-xl font-semibold text-gray-800">Rinahs</span>
          </div>
          
          <div className="flex justify-center space-x-8 mb-8">
            <a href="/" className="text-gray-600 hover:text-pink-500 transition-colors">Home</a>
            <a href="#countdown" className="text-gray-600 hover:text-pink-500 transition-colors">Countdown</a>
            <a href="#playlist" className="text-gray-600 hover:text-pink-500 transition-colors">Playlist</a>
            <a href="#gallery" className="text-gray-600 hover:text-pink-500 transition-colors">Gallery</a>
            <a href="#facts" className="text-gray-600 hover:text-pink-500 transition-colors">Fun Facts</a>
            <a href="/" className="text-gray-600 hover:text-pink-500 transition-colors">Coming Soon</a>
          </div>
          
          <div className="text-gray-500 text-sm flex items-center justify-center">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-pink-400 mx-1" />
            <span>for Rinahs'</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;