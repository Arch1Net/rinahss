import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FallingPetals from './components/FallingPetals';
import Countdown from './components/Countdown';
import Playlist from './components/Playlist';
import Gallery from './components/Gallery';
import Facts from './components/Facts';
import Footer from './components/Footer';
import Graduation from './components/Graduation';
import './styles/index.css';

function App() {
  useEffect(() => {
    // Update page title
    document.title = "Rinahs Birthday Celebration";
    
    // Add custom styles for scrolling behavior
    const style = document.createElement('style');
    style.innerHTML = `
      html {
        scroll-behavior: smooth;
      }
      
      .scroll-top-btn {
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: white;
        color: #4a5568;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.3s, transform 0.3s;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        z-index: 40;
      }
      
      .scroll-top-btn.visible {
        opacity: 1;
        transform: translateY(0);
      }
    `;
    document.head.appendChild(style);
    
    // Add scroll to top button
    const scrollTopBtn = document.createElement('div');
    scrollTopBtn.className = 'scroll-top-btn';
    scrollTopBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6"/></svg>';
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    document.body.appendChild(scrollTopBtn);
    
    // Show/hide scroll to top button based on scroll position
    const toggleScrollBtn = () => {
      if (window.scrollY > 500) {
        scrollTopBtn.classList.add('visible');
      } else {
        scrollTopBtn.classList.remove('visible');
      }
    };
    
    window.addEventListener('scroll', toggleScrollBtn);
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', toggleScrollBtn);
      if (scrollTopBtn.parentNode) {
        scrollTopBtn.parentNode.removeChild(scrollTopBtn);
      }
    };
  }, []);

  // Get current path
  const path = window.location.pathname;

  // Render graduation page or main content based on path
  if (path === '/graduation') {
    return (
             
      <>
     
        <Header />
        <Graduation />
        <Footer />
      </>
    );
  }


  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
       <FallingPetals />
      <Countdown />
      <Playlist />
      <Gallery />
      <Facts />
      <Footer />
    </div>
  );

  
 
}
export default App;
