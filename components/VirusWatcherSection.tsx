'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const VirusWatcherSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    const section = document.getElementById('viruswatcher');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="viruswatcher" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#67a0ec] mb-4">
            VirusWatcher
          </h2>
          <p className="text-lg sm:text-xl text-textPrimary/80 dark:text-textPrimary-dark/80 max-w-3xl mx-auto">
            Getting to know my latest endeavor with a group of engineers
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Feature Card - Spans 2 columns on large screens */}
          <div
            className={`lg:col-span-2 bg-card dark:bg-card-dark border border-gray-200 dark:border-gray-700 rounded-2xl p-8 transform transition-all duration-700 ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-10 opacity-0'
            }`}
          >
            {/* Logo in Circle */}
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white border border-gray-200 dark:border-gray-600 overflow-hidden mb-6 shadow-md flex items-center justify-center p-3">
              <Image
                src="/images/projects/viruswatcher-logo.png"
                alt="VirusWatcher Logo"
                width={96}
                height={96}
                className="w-full h-full object-contain"
              />
            </div>

            <h3 className="text-2xl font-bold text-textPrimary dark:text-textPrimary-dark mb-4">
              Your Early Warning System
            </h3>
            <p className="text-textPrimary/80 dark:text-textPrimary-dark/80 leading-relaxed mb-6">
              Virus Watcher transforms how we detect and respond to global
              health threats. Our AI-powered platform empowers you with
              real-time surveillance, predictive outbreak modeling, and
              personalized health insights, putting you weeks ahead of
              traditional alerts and potentially saving countless lives.
            </p>
            <p className="text-[#67a0ec] font-medium">2025 - Present</p>
          </div>

          {/* Right Column - Stacked Cards */}
          <div className="flex flex-col gap-6">
            {/* Real-Time Tracking Card */}
            <div
              className={`bg-card dark:bg-card-dark border border-gray-200 dark:border-gray-700 rounded-2xl p-6 transform transition-all duration-700 delay-100 ${
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-10 opacity-0'
              }`}
            >
              <div className="text-3xl mb-3">🌍</div>
              <h3 className="text-lg font-bold text-textPrimary dark:text-textPrimary-dark mb-2">
                Real-Time Tracking
              </h3>
              <p className="text-textPrimary/70 dark:text-textPrimary-dark/70 text-sm leading-relaxed">
                Monitor disease outbreaks globally with interactive maps and
                live data feeds. Stay informed about health threats in your area
                and travel destinations.
              </p>
            </div>

            {/* Travel Advisory Card */}
            <div
              className={`bg-card dark:bg-card-dark border border-gray-200 dark:border-gray-700 rounded-2xl p-6 transform transition-all duration-700 delay-200 ${
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-10 opacity-0'
              }`}
            >
              <div className="text-3xl mb-3">✈️</div>
              <h3 className="text-lg font-bold text-textPrimary dark:text-textPrimary-dark mb-2">
                Smart Travel Advisories
              </h3>
              <p className="text-textPrimary/70 dark:text-textPrimary-dark/70 text-sm leading-relaxed">
                Get personalized health recommendations before you travel. Our
                system analyzes outbreak patterns to keep you safe wherever you
                go.
              </p>
            </div>
          </div>
        </div>

        {/* Download Section */}
        <div
          className={`mt-8 text-center transform transition-all duration-700 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h3 className="text-xl font-bold text-textPrimary dark:text-textPrimary-dark mb-4">
            Download VirusWatcher Today
          </h3>
          <p className="text-textPrimary/70 dark:text-textPrimary-dark/70 mb-6">
            Available on iOS and Android
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* App Store Button */}
            <a
              href="https://apps.apple.com/us/app/virus-watcher/id6749778825"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-black hover:bg-gray-900 text-white px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <div className="text-left">
                <div className="text-xs">Download on the</div>
                <div className="text-lg font-semibold">App Store</div>
              </div>
            </a>

            {/* Google Play Button */}
            <a
              href="https://play.google.com/store/apps/details?id=com.viruswatcherapp.viruswatcher"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-black hover:bg-gray-900 text-white px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
              </svg>
              <div className="text-left">
                <div className="text-xs">GET IT ON</div>
                <div className="text-lg font-semibold">Google Play</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VirusWatcherSection;
