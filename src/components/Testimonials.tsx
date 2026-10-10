import { Quote } from 'lucide-react';

interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      'Very grateful to have a place like Axis to keep me injury free! I come to Axis regularly and it has been hugely helpful in keeping me healthy & running at my best.',
    name: 'Erin Teshuk',
    role: 'Pro Runner, Canadian Olympic Athlete',
  },
  {
    quote:
      'I\'m almost 36. That\'s hardly an advanced age, but it sort of is when you\'re competing in amateur Muay Thai. Chronic back issues from "normal life" combined with intense acute injuries from aggressive fight camps. I would probably have had to quit at a much younger age if not for the consistent massage and physio treatment I receive from Axis. The team is performance oriented, they\'re highly competent at relieving my pains and optimizing my movement. HIGHLY RECOMMEND!',
    name: 'Divyan P',
    role: 'Muay Thai Fighter',
  },
  {
    quote:
      'Struck gold when I discovered Axis back in 2017! I have seen everyone there from chiropractors to physio, acupuncture, massage, FST. In addition to helping me progress in my career as a bodybuilder, they have provided a place where I always feel welcome. They have built a solid community of good people.',
    name: 'Joseph Lemieux',
    role: 'IFBB Pro Bodybuilder',
  },
  {
    quote:
      'If you are serious about your sport these folks are for you. Top notch, best physio/rehab and massage I have experienced in all the continents I have lived, competed and worked in. Highly recommended.',
    name: 'Emma Rees',
    role: 'Weekend Warrior',
  },
];

const stats = [
  { value: '10', suffix: '+', label: 'Years of Excellence' },
  { value: '15', suffix: 'K+', label: 'Sessions Delivered' },
  { value: '6', suffix: '', label: 'Specialized Services' },
  { value: '100', suffix: '%', label: 'Personalized Care' },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-28 lg:py-36 bg-ink-900 overflow-hidden">
      {/* Top accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/30 to-transparent" />

      {/* Background quote mark */}
      <div className="pointer-events-none absolute -top-10 right-10 font-display text-[300px] font-light leading-none text-gold-400/5 select-none" data-parallax="0.08">
        "
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <div className="reveal mx-auto mb-16 max-w-2xl text-center" data-animation="blur-in">
          <span className="text-xs uppercase tracking-[0.3em] text-gold-400/80">Client Testimonials</span>
          <h2 className="mt-4 font-display text-4xl font-light text-ink-50 sm:text-5xl lg:text-6xl">
            Stories of <span className="text-gradient-gold italic">Transformation</span>
          </h2>
          <div className="gold-divider mx-auto mt-6 w-24" />
        </div>

        {/* Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <article
              key={t.name}
              className="reveal tilt-card group relative flex flex-col rounded-2xl border border-ink-700/50 bg-ink-850 p-8 transition-all duration-500 hover:border-gold-400/30 hover:bg-ink-800"
              data-animation="scale-in"
              data-delay={`${i * 120}`}
            >
              {/* Quote icon */}
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg bg-gold-400/10 border border-gold-400/20 transition-all duration-500 group-hover:scale-110 group-hover:shadow-glow-gold">
                <Quote size={18} className="text-gold-300" />
              </div>

              {/* Quote text */}
              <p className="flex-1 text-base font-light leading-relaxed text-ink-200">
                "{t.quote}"
              </p>

              {/* Author */}
              <div className="mt-6 flex items-center gap-4 border-t border-ink-700/40 pt-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-gold-400/20 to-gold-600/10 border border-gold-400/20 transition-transform duration-500 group-hover:scale-110">
                  <span className="font-display text-lg font-medium text-gold-300">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-display text-lg font-medium text-ink-50">{t.name}</p>
                  <p className="text-xs uppercase tracking-[0.15em] text-ink-300/70">{t.role}</p>
                </div>
              </div>

              {/* Hover glow */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 shadow-glow-gold" />
            </article>
          ))}
        </div>

        {/* Stats bar with animated counters */}
        <div className="reveal mt-16 grid grid-cols-2 gap-6 rounded-2xl border border-ink-700/40 bg-ink-850 p-10 md:grid-cols-4" data-animation="scale-in" data-delay="200">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="reveal text-center"
              data-animation="scale-in"
              data-delay={`${300 + i * 100}`}
            >
              <p className="font-display text-4xl font-semibold text-gradient-gold sm:text-5xl">
                <span data-counter={stat.value} data-suffix={stat.suffix}>{stat.value}{stat.suffix}</span>
              </p>
              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-ink-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/30 to-transparent" />
    </section>
  );
}
