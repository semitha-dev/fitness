'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="w-full">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-center gap-8 px-8 py-6 text-white">
        <Link href="#" className="hover:text-amber-400 transition-colors">
          Home
        </Link>
        <Link href="#" className="hover:text-amber-400 transition-colors">
          About
        </Link>
        <Link href="#" className="hover:text-amber-400 transition-colors">
          Services
        </Link>
        <Link href="#" className="hover:text-amber-400 transition-colors">
          Contact
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="relative w-full h-screen overflow-hidden">
        {/* Background Image */}
        <Image
          src="/assets/Hero Section.png"
          alt="Hero Section - Work with Professionals"
          fill
          className="object-cover"
          priority
        />

        {/* Overlay for darker effect */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 gap-6">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-wide leading-tight max-w-3xl">
            WORK WITH <br /> PROFESSIONALS
          </h1>

          {/* Subtext */}
          <p className="text-sm md:text-base text-white/90 max-w-2xl leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget quam
            sapien.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <button className="px-8 py-3 bg-amber-400 hover:bg-amber-500 text-black font-bold rounded-full transition-colors">
              Start Now
            </button>
            <Link
              href="#"
              className="px-6 py-3 text-white font-semibold hover:text-amber-400 transition-colors flex items-center gap-2"
            >
              Learn more <span className="text-lg">›</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
