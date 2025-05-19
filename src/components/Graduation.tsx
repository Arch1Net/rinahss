import React, { useEffect } from 'react';
import { Star, GraduationCap, Award, BookOpen, Heart } from 'lucide-react';

const Graduation: React.FC = () => {
  useEffect(() => {
    // Create floating particles effect
    const createParticle = () => {
      const particle = document.createElement('div');
      particle.className = 'absolute w-4 h-4 opacity-60 pointer-events-none';
      
      // Randomly choose particle type
      const particles = ['🎓', '✨', '🌟'];
      particle.innerHTML = particles[Math.floor(Math.random() * particles.length)];
      
      // Random starting position
      particle.style.left = `${Math.random() * 100}vw`;
      particle.style.top = `${Math.random() * 100}vh`;
      
      // Random size
      const size = Math.random() * 20 + 10;
      particle.style.fontSize = `${size}px`;
      
      // Apply floating animation
      particle.style.animation = `float ${Math.random() * 10 + 10}s linear infinite`;
      
      document.getElementById('grad-particle-container')?.appendChild(particle);
      
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
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      <div id="grad-particle-container" className="absolute inset-0 z-0 overflow-hidden"></div>
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 text-center z-10">
        <div className="container mx-auto px-4">
          <div className="inline-block mb-6 animate-bounce">
            <GraduationCap className="h-16 w-16 text-pink-400" />
          </div>
          
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-semibold text-gray-800 mb-6">
            Congratulations, Graduate!
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Celebrating the remarkable achievement of completing your Bachelor's Degree in Computer Science
          </p>
          
          <div className="flex justify-center gap-4 mb-12">
            <span className="px-4 py-2 bg-pink-100 text-pink-600 rounded-full">Class of 2025</span>
            <span className="px-4 py-2 bg-pink-100 text-pink-600 rounded-full">Computer Science</span>
          </div>
        </div>
      </section>

      {/* Academic Journey */}
      <section className="py-20 bg-white relative z-10">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-4xl text-center mb-12">Academic Journey</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative pl-8 pb-12 border-l-2 border-pink-200">
              {/* Timeline items */}
              <TimelineItem
                year="2025"
                title="Graduation"
                description="Successfully completed Bachelor's Degree in Computer Science"
                icon={<GraduationCap className="w-6 h-6" />}
              />
              
              <TimelineItem
                year="2024"
                title="Final Year Project"
                description="Developed an innovative solution for real-world problems"
                icon={<Star className="w-6 h-6" />}
              />
              
              <TimelineItem
                year="2023"
                title="Internship"
                description="Gained valuable industry experience"
                icon={<BookOpen className="w-6 h-6" />}
              />
              
              <TimelineItem
                year="2022"
                title="Academic Excellence"
                description="Consistently maintained high academic performance"
                icon={<Award className="w-6 h-6" />}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-gradient-to-b from-white to-pink-50 relative z-10">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-4xl text-center mb-12">Achievements</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <AchievementCard
              icon={<Award className="w-12 h-12 text-pink-400" />}
              title="Dean's List"
              description="Consistently achieved academic excellence throughout the program"
            />
            
            <AchievementCard
              icon={<Star className="w-12 h-12 text-pink-400" />}
              title="Research Publication"
              description="Published research paper in international conference"
            />
            
            <AchievementCard
              icon={<Heart className="w-12 h-12 text-pink-400" />}
              title="Community Service"
              description="Contributed to various community service projects"
            />
          </div>
        </div>
      </section>

      {/* Messages */}
      <section className="py-20 bg-pink-50 relative z-10">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-4xl text-center mb-12">Messages from Loved Ones</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Message
              text="We are so proud of your achievements and the person you've become. Your dedication and hard work have paid off!"
              author="Family"
            />
            
            <Message
              text="Congratulations on this milestone! Your journey has been inspiring, and we know you'll achieve great things."
              author="Friends"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

const TimelineItem: React.FC<{
  year: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}> = ({ year, title, description, icon }) => (
  <div className="mb-8 relative">
    <div className="absolute -left-11 bg-pink-100 rounded-full p-2">
      {icon}
    </div>
    <div className="bg-white rounded-lg shadow-sm p-6 ml-4">
      <span className="text-pink-400 font-semibold">{year}</span>
      <h3 className="font-serif text-xl font-semibold mt-2">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  </div>
);

const AchievementCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
}> = ({ icon, title, description }) => (
  <div className="bg-white rounded-xl shadow-sm p-6 text-center hover:shadow-md transition-shadow">
    <div className="flex justify-center mb-4">
      {icon}
    </div>
    <h3 className="font-serif text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Message: React.FC<{
  text: string;
  author: string;
}> = ({ text, author }) => (
  <div className="bg-white rounded-xl shadow-sm p-6">
    <p className="text-gray-600 italic mb-4">"{text}"</p>
    <p className="text-right font-semibold text-pink-400">- {author}</p>
  </div>
);

export default Graduation;