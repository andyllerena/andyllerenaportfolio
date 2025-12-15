'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const TypewriterText = () => {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  const fullText =
    'Hey, I’m Andy. I’m a full stack engineer who likes working through problems end to end. I’ve worked with React Native, Next.js, TypeScript, SQL, and Python on projects like VirusWatcher, CircleUp, and DevDeck. I learn best by building, breaking things, and fixing them until they make sense. I’m comfortable learning as I go, asking questions, and iterating quickly when something doesn’t land the first time.';
  useEffect(() => {
    if (isComplete) return;

    let index = 0;
    const speed = 18; // Fast typewriter speed

    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1));
        index++;
      } else {
        setIsComplete(true);
        clearInterval(timer);
      }
    }, speed);

    return () => clearInterval(timer);
  }, [isComplete]);

  return (
    <p className="text-textPrimary/90 dark:text-textPrimary-dark/90 text-sm sm:text-base text-center leading-relaxed">
      {displayText}
      {!isComplete && (
        <span className="inline-block w-0.5 h-4 bg-[#67a0ec] ml-1 animate-pulse" />
      )}
    </p>
  );
};

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="relative w-full min-h-screen mx-auto px-4 sm:px-6 lg:px-8 pt-20 flex items-center justify-center"
    >
      <div className="max-w-5xl w-full">
        {/* Terminal-style window */}
        <div
          className={`bg-card dark:bg-card-dark rounded-2xl shadow-xl overflow-hidden cursor-default select-none transform transition-all duration-700 hover:scale-[1.02] hover:shadow-2xl ${
            isVisible
              ? 'translate-y-0 opacity-100'
              : '-translate-y-12 opacity-0'
          }`}
        >
          {/* Window header with dots */}
          <div className="bg-gray dark:bg-gray-dark px-4 py-3 flex items-center gap-2 border-b border-gray-200 dark:border-gray-700">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="ml-4 text-textPrimary/70 dark:text-textPrimary-dark/70 text-sm font-medium">
              Andy Llerena — Portfolio
            </span>
          </div>

          {/* Content area */}
          <div className="p-6 sm:p-8 md:p-12">
            {/* Terminal path */}
            <div className="font-mono text-xs sm:text-sm mb-6 sm:mb-8">
              <span className="text-[#67a0ec] font-semibold">
                andy@portfolio
              </span>
              <span className="text-textPrimary/60 dark:text-textPrimary-dark/60">
                {' '}
                ~/Developer/Portfolio
              </span>
            </div>

            {/* Main name */}
            <h1
              className={`text-4xl sm:text-5xl md:text-7xl font-bold text-[#67a0ec] mb-4 transform transition-all duration-500 delay-200 ${
                isVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
              }`}
            >
              Andy Llerena
            </h1>

            {/* Title */}
            <h2
              className={`text-lg sm:text-xl md:text-2xl font-semibold text-textPrimary dark:text-textPrimary-dark mb-4 transform transition-all duration-500 delay-300 ${
                isVisible
                  ? 'translate-x-0 opacity-100'
                  : '-translate-x-5 opacity-0'
              }`}
            >
              Full-Stack Engineer
            </h2>

            {/* Terminal command tagline */}
            <div
              className={`font-mono text-sm sm:text-base text-textPrimary/70 dark:text-textPrimary-dark/70 mb-6 sm:mb-8 transition-opacity duration-500 delay-400 ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}
            >
              $ echo "Building products that are simple, fast, and useful"
            </div>

            {/* Social media links */}
            <div
              className={`flex items-center gap-4 sm:gap-5 mb-6 sm:mb-8 transform transition-all duration-500 delay-500 ${
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-5 opacity-0'
              }`}
            >
              <a
                href="https://github.com/andyllerena"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
              >
                <Image
                  src="/assets/github.png"
                  alt="GitHub"
                  width={40}
                  height={40}
                  className="w-8 md:w-10 h-8 md:h-10 object-contain"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/andy-llerena-93044129a/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform cursor-pointer"
              >
                <Image
                  src="/assets/LinkedIn.png"
                  alt="LinkedIn"
                  width={40}
                  height={40}
                  className="w-8 md:w-10 h-8 md:h-10 object-contain"
                />
              </a>

              <a
                href="mailto:andyllerena28@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform cursor-pointer"
              >
                <Image
                  src="/assets/gmail.png"
                  alt="Gmail"
                  width={40}
                  height={40}
                  className="w-8 md:w-10 h-8 md:h-10 object-contain"
                />
              </a>
            </div>

            {/* Bio card with typewriter effect */}
            <div
              className={`bg-gray dark:bg-gray-dark border border-gray-200 dark:border-gray-700 rounded-lg p-4 sm:p-6 transform transition-all duration-500 delay-600 ${
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-8 opacity-0'
              }`}
            >
              <TypewriterText />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
