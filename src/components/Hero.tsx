import React, { useEffect } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

import { Star } from 'lucide-react';

const Hero: React.FC = () => {
  useEffect(() => {
    // Create floating particles
    const createParticle = () => {
      const particle = document.createElement('div');
      particle.className = 'absolute w-4 h-4 opacity-60 pointer-events-none';
      
      // Randomly choose particle type (star or flower)
      const isFlower = Math.random() > 0.5;
      particle.innerHTML = isFlower ? '🌸' : '✨';
      
      // Random starting position
      particle.style.left = `${Math.random() * 100}vw`;
      particle.style.top = `${Math.random() * 100}vh`;
      
      // Random size
      const size = Math.random() * 20 + 10;
      particle.style.fontSize = `${size}px`;
      
      // Apply floating animation
      particle.style.animation = `float ${Math.random() * 10 + 10}s linear infinite`;
      
      document.getElementById('particle-container')?.appendChild(particle);
      
      // Remove particle after animation
      setTimeout(() => particle.remove(), 20000);
    };
    
    // Create initial particles
    for (let i = 0; i < 12; i++) {
      setTimeout(createParticle, i * 300);
    }
    
    // Add new particles periodically
    const interval = setInterval(createParticle, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-pink-50 to-white overflow-hidden">
      <div id="particle-container" className="absolute inset-0 z-0"></div>
      
      <div className="container mx-auto px-4 text-center z-10">
        <div className="max-w-3xl mx-auto">
          <div className="inline-block mb-6 animate-bounce">
            <Star className="h-12 w-12 text-pink-400" />
          </div>
          
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-semibold text-gray-800 mb-6">
            Welcome to <span className="text-pink-500">Rinahs</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
           Like peony petals dancing on a gentle breeze, may your wishes take flight and your dreams bloom bright.
          </p>
          
          {/*<button 
            className="px-8 py-3 bg-white text-gray-800 rounded-full border-2 border-gray-300 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 font-medium"
            onClick={() => {
              document.getElementById('countdown')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            See the Countdown
          </button> */}
        </div>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 text-center">
        <div className="animate-bounce">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6 mx-auto text-gray-400" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;