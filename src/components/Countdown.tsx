import React, { useState, useEffect } from "react";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const Countdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [isPulsing, setIsPulsing] = useState(false);

  useEffect(() => {
    // Target date: October 21, 2025 (YYYY, M-1, D)
    const targetDate = new Date(2025, 9, 21);

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    };

    // Initial calculation
    calculateTimeLeft();

    // Update every second
    const timer = setInterval(calculateTimeLeft, 1000);

    // Pulse animation every 10 seconds
    const pulseTimer = setInterval(() => {
      setIsPulsing(true);
      setTimeout(() => setIsPulsing(false), 1000);
    }, 10000);

    return () => {
      clearInterval(timer);
      clearInterval(pulseTimer);
    };
  }, []);

  // Pad numbers with leading zero if needed
  const padWithZero = (num: number) => {
    return num.toString().padStart(2, "0");
  };

  return (
    <section
      id="countdown"
      className="py-20 bg-gradient-to-b from-white to-pink-50"
    >
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-gray-800 mb-4">
            Countdown to the Special Day
          </h2>

          <p className="text-lg text-gray-600 mb-10">
            Mark your calendars for October 21st! The celebration is coming
            soon.
          </p>

          <div
            className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-500 ${
              isPulsing ? "scale-105" : "scale-100"
            }`}
          >
            <div className="countdown-item">
              <div className="countdown-value">
                {padWithZero(timeLeft.days)}
              </div>
              <div className="countdown-label">Days</div>
            </div>

            <div className="countdown-item">
              <div className="countdown-value">
                {padWithZero(timeLeft.hours)}
              </div>
              <div className="countdown-label">Hours</div>
            </div>

            <div className="countdown-item">
              <div className="countdown-value">
                {padWithZero(timeLeft.minutes)}
              </div>
              <div className="countdown-label">Minutes</div>
            </div>

            <div className="countdown-item">
              <div className="countdown-value">
                {padWithZero(timeLeft.seconds)}
              </div>
              <div className="countdown-label">Seconds</div>
            </div>
          </div>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-white px-4 text-sm text-gray-500">
                Until the celebration
              </span>
            </div>
          </div>

          {/* 
          <button 
            className="px-8 py-3 bg-pink-100 text-gray-800 rounded-full border border-pink-200 shadow-sm hover:shadow-md transition-all duration-300 font-medium"
            onClick={() => {
              // Trigger confetti effect
              const confettiScript = document.createElement('script');
              confettiScript.src = 'https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js';
              confettiScript.onload = () => {
                // @ts-ignore: Confetti function might not be defined in TypeScript context
                window.confetti({
                  particleCount: 100,  // Number of confetti particles to be shown
                  spread: 70,  // How far the confetti particles spread across the screen
                  origin: { y: 0.6 }  // The vertical starting point of the confetti effect
                });
              };
              // Append the script to the document body so it loads and runs
              document.body.appendChild(confettiScript);
            }}
          >
            Celebrate Early!
          </button> 
        */}
        </div>
      </div>
    </section>
  );
};

export default Countdown;
