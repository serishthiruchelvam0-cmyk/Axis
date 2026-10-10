import { HeartPulse, Shield, Infinity, Waypoints } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Difference {
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
}

const differences: Difference[] = [
  {
    icon: HeartPulse,
    title: 'Reduce Pain',
    description:
      'Say goodbye to chronic pain with our hands-on treatments that go beyond just masking symptoms. We get to the root of the issue, offering real relief through expert physical therapy so you can get back to enjoying life.',
    image: 'https://images.pexels.com/photos/20860603/pexels-photo-20860603.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    icon: Shield,
    title: 'Reduce Re-injury',
    description:
      'Don\'t let old injuries slow you down. Our physical therapy experts work with you to prevent re-injuries by addressing the underlying causes, so you can keep doing what you love without the worry of setbacks.',
    image: 'https://images.pexels.com/photos/20860622/pexels-photo-20860622.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    icon: Infinity,
    title: 'Ensure Longevity',
    description:
      'We\'re in it for the long haul with you. Our team of physical therapists is dedicated to helping you move well now and in the future, so you can stay active, strong, and pain-free for years to come.',
    image: 'https://images.pexels.com/photos/5794059/pexels-photo-5794059.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    icon: Waypoints,
    title: 'Live Without Restrictions',
    description:
      'Life\'s too short for physical limitations. Through our expert physical therapy, we tailor care to your needs, helping you break free from restrictions and live life on your own terms, without pain holding you back.',
    image: 'https://images.pexels.com/photos/8219160/pexels-photo-8219160.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
];

export default function Difference() {
  return (
    <section id="difference" className="relative py-28 lg:py-36 overflow-hidden">
      {/* Background accent */}
      <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-sage-500/5 blur-[150px]" data-parallax="0.12" />

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <div className="reveal mx-auto mb-20 max-w-2xl text-center" data-animation="blur-in">
          <span className="text-xs uppercase tracking-[0.3em] text-gold-400/80">Why Axis</span>
          <h2 className="mt-4 font-display text-4xl font-light text-ink-50 sm:text-5xl lg:text-6xl">
            More Than Treatment—<br />
            <span className="text-gradient-gold italic">A Transformation</span>
          </h2>
          <div className="gold-divider mx-auto mt-6 w-24" />
        </div>

        {/* Alternating rows */}
        <div className="flex flex-col gap-24">
          {differences.map((diff, i) => {
            const Icon = diff.icon;
            const reversed = i % 2 === 1;
            return (
              <div
                key={diff.title}
                className="grid items-center gap-12 lg:grid-cols-2"
              >
                {/* Image */}
                <div
                  className={`reveal relative ${reversed ? 'lg:order-2' : ''}`}
                  data-animation={reversed ? 'slide-right' : 'slide-left'}
                  data-delay={`${i * 80}`}
                >
                  <div className="img-zoom relative overflow-hidden rounded-2xl border border-ink-700/40">
                    <img
                      src={diff.image}
                      alt={diff.title}
                      className="h-[400px] w-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-950/50 to-transparent" />
                  </div>
                  {/* Number accent */}
                  <div className={`absolute ${reversed ? '-left-4' : '-right-4'} -top-4 font-display text-7xl font-light text-gold-400/10`}>
                    0{i + 1}
                  </div>
                </div>

                {/* Text */}
                <div
                  className={`reveal ${reversed ? 'lg:order-1 lg:pr-8' : 'lg:pl-8'}`}
                  data-animation={reversed ? 'slide-left' : 'slide-right'}
                  data-delay={`${i * 80 + 100}`}
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-gold-400/20 bg-gold-400/5 transition-all duration-500 hover:shadow-glow-gold hover:scale-110">
                    <Icon size={26} className="text-gold-300" />
                  </div>
                  <h3 className="font-display text-3xl font-medium text-ink-50 sm:text-4xl">
                    {diff.title}
                  </h3>
                  <div className="gold-divider mt-5 w-20" />
                  <p className="mt-5 text-lg font-light leading-relaxed text-ink-300">
                    {diff.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
