'use client';

import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const navItems = ['home', 'work', 'skills', 'viruswatcher', 'contact'];

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 dark:bg-card-dark/95 backdrop-blur-sm border-b border-gray dark:border-gray-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Name */}
          <button
            onClick={() => scrollToSection('home')}
            className="text-2xl font-bold text-textPrimary dark:text-textPrimary-dark tracking-tight hover:text-buttonPrimary transition-colors cursor-pointer"
          >
            Andy Llerena<span className="text-buttonPrimary">.</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map(item => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="px-4 py-2 text-base font-medium text-textPrimary/80 dark:text-textPrimary-dark/80 hover:text-buttonPrimary hover:font-bold hover:bg-gray dark:hover:bg-gray-dark rounded-lg transition-all duration-200 capitalize cursor-pointer"
              >
                {item === 'viruswatcher' ? 'VirusWatcher' : item}
              </button>
            ))}
          </div>

          {/* Theme Toggle & Mobile Menu Button */}
          <div className="flex items-center space-x-3">
            {/* Theme Toggle - Pill Style */}
            <button
              onClick={toggleTheme}
              className="relative w-14 h-7 bg-gray dark:bg-gray-dark rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-buttonPrimary focus:ring-offset-2 dark:focus:ring-offset-primary-dark cursor-pointer"
              aria-label="Toggle theme"
            >
              <div
                className={`absolute top-0.5 left-0.5 w-6 h-6 bg-card dark:bg-card-dark rounded-full shadow-md transform transition-transform duration-300 flex items-center justify-center ${
                  isDark ? 'translate-x-7' : 'translate-x-0'
                }`}
              >
                {isDark ? (
                  <svg
                    className="w-4 h-4 text-textPrimary-dark"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-4 h-4 text-amber-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                )}
              </div>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-textPrimary dark:text-textPrimary-dark hover:text-buttonPrimary focus:outline-none cursor-pointer"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <span
                  className={`w-full h-0.5 bg-current transform transition-all duration-300 ${
                    isOpen ? 'rotate-45 translate-y-2' : ''
                  }`}
                />
                <span
                  className={`w-full h-0.5 bg-current transition-all duration-300 ${
                    isOpen ? 'opacity-0' : ''
                  }`}
                />
                <span
                  className={`w-full h-0.5 bg-current transform transition-all duration-300 ${
                    isOpen ? '-rotate-45 -translate-y-2' : ''
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-80 pb-4' : 'max-h-0'
          }`}
        >
          <div className="flex flex-col space-y-1 pt-2">
            {navItems.map(item => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="px-4 py-3 text-left text-lg font-medium text-textPrimary/80 dark:text-textPrimary-dark/80 hover:text-buttonPrimary hover:font-bold hover:bg-gray dark:hover:bg-gray-dark rounded-lg transition-all duration-200 capitalize cursor-pointer"
              >
                {item === 'viruswatcher' ? 'VirusWatcher' : item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
