const trustedBy = [
  'Olympic Athletes',
  'IFBB Pro Bodybuilders',
  'Muay Thai Fighters',
  'Pro Runners',
  'Weekend Warriors',
  'Toronto Communities',
];

export default function TrustedBy() {
  return (
    <section id="trusted" className="relative border-y border-ink-700/50 bg-ink-900 py-12 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <p className="reveal mb-8 text-center text-xs uppercase tracking-[0.3em] text-ink-300/70" data-animation="fade-up">
          Trusted By & Featured In
        </p>
        <div className="relative overflow-hidden">
          <div className="flex w-max animate-marquee items-center gap-16">
            {[...trustedBy, ...trustedBy].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 whitespace-nowrap text-lg font-display font-light text-ink-300/60 transition-colors duration-300 hover:text-gold-300"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-gold-400/40" />
                {item}
              </div>
            ))}
          </div>
          {/* Fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-ink-900 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-ink-900 to-transparent" />
        </div>
      </div>
    </section>
  );
}
