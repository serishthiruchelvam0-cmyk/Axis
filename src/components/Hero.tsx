import { useEffect, useState } from 'react';
import { ChevronDown, Sparkles, ArrowRight } from 'lucide-react';
import Logo from '@/components/Logo';

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  const [textVisible, setTextVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setTextVisible(true), 400);
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      clearTimeout(t);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const scrollToNext = () => {
    document.querySelector('#trusted')?.scrollIntoView({ behavior: 'smooth' });
  };

  const show = (delay: number) =>
    textVisible
      ? 'opacity-100 translate-y-0 blur-none'
      : 'opacity-0 translate-y-8 blur-sm';

  return (
    <section id="home" className="relative h-screen min-h-[700px] w-full overflow-hidden">
      {/* Video background with parallax */}
      <div
        className="absolute inset-0 z-0"
        style={{ transform: `translateY(${scrollY * 0.35}px) scale(${1 + scrollY * 0.0002})` }}
      >
        <img
          src="https://images.pexels.com/photos/4608524/pexels-photo-4608524.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <video
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1500ms] ${loaded ? 'opacity-100' : 'opacity-0'}`}
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.pexels.com/photos/4608524/pexels-photo-4608524.jpeg?auto=compress&cs=tinysrgb&w=1920"
          onCanPlay={() => setLoaded(true)}
        >
          <source src="https://videos.pexels.com/video-files/4608524/4608524-hd_1920_1080_25fps.mp4" type="video/mp4" />
          <source src="https://videos.pexels.com/video-files/3780127/3780127-hd_1920_1080_25fps.mp4" type="video/mp4" />
        </video>

        {/* Cinematic overlay — layered for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/70 via-ink-950/40 to-ink-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950/80 via-transparent to-ink-950/40" />
        <div className="absolute inset-0 bg-grid opacity-20" />

        {/* Gold glow accents that drift */}
        <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-gold-500/10 blur-[100px]" />
        <div className="absolute right-1/4 bottom-1/4 h-72 w-72 rounded-full bg-gold-400/8 blur-[120px]" />
      </div>

      {/* Content */}
      <div
        className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center"
        style={{ transform: `translateY(${scrollY * 0.2}px)`, opacity: Math.max(0, 1 - scrollY / 550) }}
      >
        {/* Logo — centered, glowing */}
        <div
          className={`mb-10 transition-all duration-[1200ms] ${show(0)} drop-shadow-[0_0_30px_rgba(245,179,36,0.3)]`}
        >
          <Logo size={72} showText={false} />
        </div>

        {/* Animated gold accent line — top */}
        <div
          className={`mb-6 flex items-center gap-4 transition-all duration-1000 delay-100 ${textVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          <span className="h-px w-12 bg-gradient-to-r from-transparent to-gold-400/60" />
          <span className="text-[10px] uppercase tracking-[0.35em] text-gold-300/90">
            Toronto's Premier Physiotherapy Clinic
          </span>
          <span className="h-px w-12 bg-gradient-to-l from-transparent to-gold-400/60" />
        </div>

        {/* Main heading — line by line reveal */}
        <h1
          className={`font-display text-[2.75rem] font-light leading-[1.08] text-ink-50 sm:text-6xl md:text-7xl lg:text-[5.5rem] transition-all duration-[1100ms] delay-150 ${show(1)}`}
        >
          Expert Physical Therapy
        </h1>
        <h2
          className={`mt-2 font-display text-2xl font-light italic leading-tight text-gradient-gold sm:text-4xl md:text-5xl lg:text-6xl transition-all duration-[1100ms] delay-300 ${show(2)}`}
        >
          Powered by the Human Connection
        </h2>

        {/* Sub with decorative dot */}
        <div
          className={`mt-8 flex items-center gap-3 transition-all duration-1000 delay-500 ${show(3)}`}
        >
          <span className="h-1 w-1 rounded-full bg-gold-400" />
          <p className="text-lg font-light tracking-wide text-ink-200 sm:text-xl">
            Refine the way you move
          </p>
          <span className="h-1 w-1 rounded-full bg-gold-400" />
        </div>

        {/* CTAs */}
        <div
          className={`mt-10 flex flex-col items-center gap-4 sm:flex-row transition-all duration-1000 delay-700 ${show(4)}`}
        >
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-gold-400 to-gold-600 px-9 py-4 text-sm font-semibold text-ink-950 transition-all duration-300 hover:shadow-glow-gold-lg hover:scale-[1.04] active:scale-95"
          >
            {/* Shimmer sweep */}
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            <span className="relative">Book Your Session</span>
            <ArrowRight size={16} className="relative transition-transform duration-300 group-hover:translate-x-1" />
          </button>
          <button
            onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 rounded-full border border-ink-200/20 bg-white/5 px-9 py-4 text-sm font-semibold text-ink-100 backdrop-blur-md transition-all duration-300 hover:border-gold-400/50 hover:bg-white/10 hover:text-gold-300 active:scale-95"
          >
            <Sparkles size={15} className="text-gold-400" />
            Explore Services
          </button>
        </div>
      </div>

      {/* Bottom glass feature strip */}
      <div
        className="absolute bottom-0 left-0 right-0 z-10 border-t border-white/8 bg-ink-950/60 backdrop-blur-xl"
        style={{ opacity: Math.max(0, 1 - scrollY / 350), transform: `translateY(${Math.min(0, -scrollY * 0.15)}px)` }}
      >
        <div className="mx-auto flex max-w-5xl items-center justify-around gap-4 px-6 py-5 text-center">
          {[
            { num: '10+', label: 'Years' },
            { num: '15K+', label: 'Sessions' },
            { num: '6', label: 'Services' },
            { num: '100%', label: 'Personalized' },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className="flex flex-col items-center transition-all duration-500"
              style={{
                opacity: textVisible ? 1 : 0,
                transform: textVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: `all 0.6s cubic-bezier(0.16,1,0.3,1) ${0.9 + i * 0.1}s`,
              }}
            >
              <span className="font-display text-2xl font-semibold text-gradient-gold sm:text-3xl">{stat.num}</span>
              <span className="mt-0.5 text-[10px] uppercase tracking-[0.2em] text-ink-300/70">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator — floating above the strip */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-24 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-1.5 text-ink-300 transition-colors duration-300 hover:text-gold-300"
        style={{ opacity: Math.max(0, 1 - scrollY / 300) }}
      >
        <span className="text-[9px] uppercase tracking-[0.25em]">Scroll</span>
        <div className="relative h-9 w-5 rounded-full border border-ink-300/30">
          <span className="absolute left-1/2 top-1.5 h-2 w-0.5 -translate-x-1/2 rounded-full bg-gold-400 animate-scroll-down" />
        </div>
      </button>

      {/* Vertical side label */}
      <div
        className="absolute right-6 top-1/2 z-10 hidden -translate-y-1/2 rotate-90 lg:block"
        style={{ opacity: Math.max(0, 1 - scrollY / 400) }}
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-ink-300/40">
          Est. Toronto — Refine the Way You Move
        </span>
      </div>

      {/* Left vertical gold accent line */}
      <div
        className="absolute left-6 top-1/2 z-10 hidden -translate-y-1/2 lg:block"
        style={{ opacity: Math.max(0, 1 - scrollY / 400) }}
      >
        <div className="h-32 w-px bg-gradient-to-b from-transparent via-gold-400/40 to-transparent" />
      </div>
    </section>
  );
}
