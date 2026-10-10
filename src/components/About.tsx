export default function About() {
  return (
    <section id="about" className="relative py-28 lg:py-36 overflow-hidden">
      {/* Background accents with parallax */}
      <div className="absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-gold-500/5 blur-[120px]" data-parallax="0.15" />
      <div className="absolute -right-40 bottom-1/4 h-96 w-96 rounded-full bg-sage-500/5 blur-[120px]" data-parallax="0.1" />

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Images */}
          <div className="reveal" data-animation="scale-in">
            <div className="img-zoom relative overflow-hidden rounded-2xl">
              <img
                src="https://images.pexels.com/photos/6560303/pexels-photo-6560303.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Professional massage therapy session"
                className="h-[520px] w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 via-transparent to-transparent" />
            </div>

            {/* Floating stat card */}
            <div className="absolute -bottom-8 -right-4 lg:-right-8 glass-dark rounded-2xl p-6 shadow-glow-gold float-element">
              <p className="font-display text-4xl font-semibold text-gradient-gold" data-counter="10" data-suffix="+">10+</p>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-ink-300">Years of Care</p>
            </div>

            {/* Floating accent line */}
            <div className="absolute -top-4 -left-4 h-24 w-24 border-l-2 border-t-2 border-gold-400/30 rounded-tl-2xl" />
          </div>

          {/* Text */}
          <div className="reveal" data-animation="slide-right" data-delay="150">
            <span className="text-xs uppercase tracking-[0.3em] text-gold-400/80">What is Axis?</span>
            <h2 className="mt-4 font-display text-4xl font-light leading-tight text-ink-50 sm:text-5xl">
              Ensuring the longevity of your movement—<span className="text-gradient-gold italic">pain-free.</span>
            </h2>
            <div className="gold-divider my-8 w-32" />
            <p className="text-lg font-light leading-relaxed text-ink-200">
              Experience hands-on, high-quality care at our physical therapy clinic, where every
              physical therapy specialist is committed to keeping you living life on your terms.
            </p>
            <p className="mt-6 text-base font-light leading-relaxed text-ink-300">
              With personalized physical therapy services, we focus on results that help you move
              better and feel stronger every day. Our team blends technical expertise with a genuine
              personal connection—because your recovery is our mission.
            </p>

            {/* Feature pills with stagger */}
            <div className="mt-10 flex flex-wrap gap-3">
              {['Hands-On Care', 'Personalized Plans', 'Expert Therapists', 'Results-Driven'].map((pill, i) => (
                <span
                  key={pill}
                  className="reveal rounded-full border border-gold-400/20 bg-gold-400/5 px-5 py-2 text-sm font-medium text-gold-200"
                  data-animation="scale-in"
                  data-delay={`${300 + i * 80}`}
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
