'use client';

import Image from 'next/image';

interface ServiceCard {
  title: string;
  description: string;
  image: string;
}

const services: ServiceCard[] = [
  {
    title: 'Elite Equipment',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: '/assets/gabin-vallet-J154nEkpzlQ-unsplash.jpg',
  },
  {
    title: 'Personal Trainer',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: '/assets/victor-freitas-nlZTjUZX2qo-unsplash.jpg',
  },
  {
    title: 'Group Classes',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: '/assets/humphrey-m-LOA2mTj1vhc-unsplash.jpg',
  },
];

export default function ServicesSection() {
  return (
    <section className="w-full bg-gray-900 py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white" style={{ fontFamily: 'var(--font-archivo-black)' }}>
            OUR SERVICES
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group">
              {/* Image Container */}
              <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden mb-4">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* Badge */}
                <div className="absolute top-4 left-4 bg-amber-400 px-4 py-2 rounded-full">
                  <p className="text-black font-bold text-sm">{service.title}</p>
                </div>
              </div>

              {/* Text Content */}
              <p className="text-white/80 text-sm md:text-base leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
