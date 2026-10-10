import {
  HandHeart,
  Syringe,
  Leaf,
  StretchHorizontal,
  CircleDot,
  Droplets,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
}

const services: Service[] = [
  {
    icon: HandHeart,
    title: 'Sports Massage Therapy',
    description: 'Targeted deep-tissue techniques designed to release tension, improve circulation, and accelerate recovery for athletes and active individuals.',
    image: 'https://images.pexels.com/photos/5240643/pexels-photo-5240643.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Syringe,
    title: 'Acupuncture',
    description: 'Traditional needle therapy that stimulates specific points to relieve pain, reduce inflammation, and restore your body\'s natural balance.',
    image: 'https://images.pexels.com/photos/5473184/pexels-photo-5473184.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Leaf,
    title: 'Naturopathic Medicine',
    description: 'Holistic, evidence-based natural treatments that address the root cause of your concerns and support your body\'s inherent healing abilities.',
    image: 'https://images.pexels.com/photos/6076147/pexels-photo-6076147.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: StretchHorizontal,
    title: 'Fascial Stretch Therapy',
    description: 'Assisted stretching that targets the fascia and joint capsule to improve mobility, reduce stiffness, and enhance athletic performance.',
    image: 'https://images.pexels.com/photos/3931116/pexels-photo-3931116.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: CircleDot,
    title: 'Cupping Therapy',
    description: 'An ancient healing practice using suction cups to increase blood flow, relieve muscle tension, and promote cell repair across treated areas.',
    image: 'https://images.pexels.com/photos/8313238/pexels-photo-8313238.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Droplets,
    title: 'IV Vitamin Therapy',
    description: 'Direct intravenous delivery of essential vitamins and minerals to boost energy, accelerate recovery, and optimize your overall wellness.',
    image: 'https://images.pexels.com/photos/8313203/pexels-photo-8313203.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-28 lg:py-36 bg-ink-900">
      {/* Top accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <div className="reveal mx-auto mb-16 max-w-2xl text-center" data-animation="blur-in">
          <span className="text-xs uppercase tracking-[0.3em] text-gold-400/80">What We Do</span>
          <h2 className="mt-4 font-display text-4xl font-light text-ink-50 sm:text-5xl lg:text-6xl">
            How We Make a <span className="text-gradient-gold italic">Difference</span>
          </h2>
          <div className="gold-divider mx-auto mt-6 w-24" />
          <p className="mt-6 text-lg font-light text-ink-300">
            A comprehensive suite of therapies tailored to your body's unique needs—because no two
            journeys to better movement are the same.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <article
                key={service.title}
                className="reveal service-card tilt-card group relative overflow-hidden rounded-2xl border border-ink-700/60 bg-ink-850"
                data-animation="scale-in"
                data-delay={`${i * 120}`}
              >
                {/* Image */}
                <div className="img-zoom relative h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-850 via-ink-850/30 to-transparent" />
                  {/* Icon badge */}
                  <div className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-xl glass-dark border border-gold-400/20 transition-all duration-500 group-hover:border-gold-400/60 group-hover:shadow-glow-gold group-hover:scale-110">
                    <Icon size={22} className="text-gold-300" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-display text-2xl font-medium text-ink-50 transition-colors duration-300 group-hover:text-gold-200">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm font-light leading-relaxed text-ink-300">
                    {service.description}
                  </p>
                  <div className="mt-5 flex items-center gap-2 text-sm font-medium text-gold-400/80 transition-all duration-300 group-hover:text-gold-300 group-hover:gap-3">
                    Learn More
                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </div>
                </div>

                {/* Hover border glow */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 border border-gold-400/20" />
              </article>
            );
          })}
        </div>
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/30 to-transparent" />
    </section>
  );
}
