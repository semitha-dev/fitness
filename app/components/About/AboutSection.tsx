'use client';

import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="about-section" className="w-full bg-black py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-amber-400 font-bold text-sm md:text-base mb-2">
            Building Legacy Since 2016
          </p>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8" style={{ fontFamily: 'var(--font-archivo-black)' }}>
            ABOUT OUR GYM
          </h2>
        </div>

        {/* Text Content */}
        <div className="text-center mb-8">
          <p className="text-white/90 text-sm md:text-base leading-relaxed max-w-4xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget quam sapien. Phasellus eget venenatis ex, in cursus mi. Donec semper, est vel fringilla felis, eros lorem accumsan ante. Nulla facilisis mi dolor, in lobortis ex. Nunc habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris tincidunt quis turpis in mollis. Praesent a orci sed nisl, ultricies porttitor nisl. Sed pellentesque dignissim, pellentesque eros sem blandit, ut dapibus nulla maximus. Etiam dapibus volutpat augue sit amet maximus. Quisque libero odio, rhoncus id nulla ac, venenatis feugiat ligula. Proin pulvinar tempus est aliquam elementum. Phasellus ut erat sed odio efficitur scelerisque. Fusce blandit risus eget morbi tempus dictum.
          </p>
        </div>

        {/* Image Container */}
        <div className="relative w-full flex justify-center">
          <div className="relative w-full max-w-2xl h-96 md:h-[500px] rounded-lg overflow-visible">
            <Image
              src="/assets/anastase-maragos-7kEpUPB8vNk-unsplash.jpg"
              alt="Gym trainer with dumbbell"
              fill
              className="object-cover rounded-lg"
            />

            {/* Badge - positioned absolutely to overflow */}
            <div className="absolute -bottom-8 -left-8 sm:-bottom-12 sm:-left-12 w-24 h-24 sm:w-32 sm:h-32 bg-amber-400 rounded-full flex items-center justify-center shadow-lg z-10 border-4 border-black">
              <div className="text-center">
                <p className="text-black font-bold text-lg sm:text-2xl">10</p>
                <p className="text-black font-bold text-xs sm:text-sm">YEARS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
