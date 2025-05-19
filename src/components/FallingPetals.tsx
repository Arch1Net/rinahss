import React, { useEffect, useRef } from 'react';
import '../styles/fallingPetals.css';

const FallingPetals: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const createPetal = () => {
      const petal = document.createElement('div');
      petal.className = 'petal';
      
      // Random starting position
      const startX = Math.random() * window.innerWidth;
      petal.style.left = `${startX}px`;
      
      // Random animation duration between 4 and 8 seconds
      const duration = 4 + Math.random() * 4;
      petal.style.animation = `fall ${duration}s linear infinite`;
      
      // Random size between 15px and 30px
      const size = 15 + Math.random() * 15;
      petal.style.width = `${size}px`;
      petal.style.height = `${size}px`;
      
      // Random rotation
      const rotation = Math.random() * 360;
      petal.style.transform = `rotate(${rotation}deg)`;
      
      container.appendChild(petal);
      
      // Remove petal after animation completes
      setTimeout(() => {
        petal.remove();
      }, duration * 1000);
    };

    // Create new petals periodically
    const interval = setInterval(() => {
      createPetal();
    }, 300);

    // Initial petals
    for (let i = 0; i < 10; i++) {
      createPetal();
    }

    return () => {
      clearInterval(interval);
      if (container) {
        container.innerHTML = '';
      }
    };
  }, []);

  return <div ref={containerRef} className="petal-container" />;
};

export default FallingPetals;