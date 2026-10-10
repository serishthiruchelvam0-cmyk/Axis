import { ShieldCheck, Award, Users, Sparkles } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const values: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: ShieldCheck,
    title: 'Certified In-House',
    description: 'Every therapist is trained and certified in-house with additional manual therapy skills.',
  },
  {
    icon: Award,
    title: 'Exceeding Industry Norms',
    description: 'Our process blends technical expertise with a personal connection that goes beyond.',
  },
  {
    icon: Users,
    title: 'Fully Invested Team',
    description: 'You get a team fully invested in your health and success through exceptional care.',
  },
  {
    icon: Sparkles,
    title: 'Personalized Attention',
    description: 'Expert physical therapy and personalized attention tailored to your unique journey.',
  },
];

const teamImages = [
  'https://images.pexels.com/photos/5888088/pexels-photo-5888088.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/4599396/pexels-photo-4599396.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/6628611/pexels-photo-6628611.jpeg?auto=compress&cs=tinysrgb&w=800',
];

export default function Team() {
  return (
    <section id="team" className="relative py-28 lg:py-36 overflow-hidden">
      {/* Background accent */}
      <div className="absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-gold-500/5 blur-[120px]" data-parallax="0.1" />

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <div className="reveal mx-auto mb-16 max-w-2xl text-center" data-animation="blur-in">
          <span className="text-xs uppercase tracking-[0.3em] text-gold-400/80">Our Team</span>
          <h2 className="mt-4 font-display text-4xl font-light text-ink-50 sm:text-5xl lg:text-6xl">
            Experts Behind <span className="text-gradient-gold italic">the Care</span>
          </h2>
          <div className="gold-divider mx-auto mt-6 w-24" />
          <p className="mt-6 text-lg font-light text-ink-300">
            People You Can Trust, Connections That Last
          </p>
        </div>

        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Image collage */}
          <div className="reveal relative grid grid-cols-2 gap-4" data-animation="scale-in">
            {teamImages.map((img, i) => (
              <div
                key={i}
                className={`img-zoom tilt-card relative overflow-hidden rounded-2xl border border-ink-700/40 ${
                  i === 0 ? 'col-span-2 h-64' : 'h-80'
                }`}
              >
                <img
                  src={img}
                  alt={`Axis therapist ${i + 1}`}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/40 to-transparent" />
              </div>
            ))}
            {/* Corner accent */}
            <div className="absolute -bottom-4 -right-4 h-28 w-28 border-r-2 border-b-2 border-gold-400/30 rounded-br-2xl" />
          </div>

          {/* Values */}
          <div className="reveal" data-animation="slide-left" data-delay="150">
            <p className="text-lg font-light leading-relaxed text-ink-200">
              Every therapist at Axis is an expert physical therapist, trained and certified in-house
              with additional manual therapy skills, ensuring our brand's commitment to high-quality
              care. As a trusted physical therapy clinic, our process exceeds industry norms, blending
              technical expertise with a personal connection.
            </p>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {values.map((val, i) => {
                const Icon = val.icon;
                return (
                  <div
                    key={val.title}
                    className="reveal group rounded-xl border border-ink-700/40 bg-ink-850 p-5 transition-all duration-400 hover:border-gold-400/30 hover:bg-ink-800"
                    data-animation="scale-in"
                    data-delay={`${i * 100}`}
                  >
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-gold-400/10 border border-gold-400/20 transition-all duration-400 group-hover:shadow-glow-gold group-hover:scale-110">
                      <Icon size={18} className="text-gold-300" />
                    </div>
                    <h3 className="font-display text-lg font-medium text-ink-50">{val.title}</h3>
                    <p className="mt-2 text-sm font-light leading-relaxed text-ink-300">
                      {val.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
