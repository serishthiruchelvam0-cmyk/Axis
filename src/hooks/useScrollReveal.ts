import { useEffect } from 'react';

type AnimationType = 'fade-up' | 'scale-in' | 'slide-left' | 'slide-right' | 'clip-reveal' | 'blur-in';

/**
 * Enhanced scroll reveal with multiple animation types.
 * Uses `data-animation` to pick the variant and `data-delay` for stagger.
 * Also handles parallax elements via `data-parallax` (speed multiplier).
 */
export function useScrollReveal() {
  useEffect(() => {
    // ---- Reveal observer ----
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = el.dataset.delay ? parseInt(el.dataset.delay, 10) : 0;
            setTimeout(() => el.classList.add('reveal-visible'), delay);
            revealObserver.unobserve(el);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -80px 0px' }
    );

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => {
      const type = (el as HTMLElement).dataset.animation as AnimationType | undefined;
      if (type) el.classList.add(`reveal-${type}`);
      else el.classList.add('reveal-fade-up');
      revealObserver.observe(el);
    });

    // ---- Parallax scroll ----
    const parallaxElements = document.querySelectorAll<HTMLElement>('[data-parallax]');
    let ticking = false;

    const updateParallax = () => {
      parallaxElements.forEach((el) => {
        const speed = parseFloat(el.dataset.parallax || '0.3');
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (rect.bottom > 0 && rect.top < windowHeight) {
          const offset = (rect.top - windowHeight * 0.5) * speed * -1;
          el.style.transform = `translateY(${offset}px)`;
        }
      });
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateParallax);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    updateParallax();

    // ---- Counter animation ----
    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const target = el.dataset.counter || '0';
            const suffix = el.dataset.suffix || '';
            const prefix = el.dataset.prefix || '';
            const duration = 1800;
            const startTime = performance.now();
            const isFloat = target.includes('.');
            const targetNum = parseFloat(target);

            const animate = (now: number) => {
              const progress = Math.min((now - startTime) / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              const current = targetNum * eased;
              el.textContent = prefix + (isFloat ? current.toFixed(1) : Math.floor(current).toString()) + suffix;
              if (progress < 1) requestAnimationFrame(animate);
              else el.textContent = prefix + target + suffix;
            };
            requestAnimationFrame(animate);
            counterObserver.unobserve(el);
          }
        });
      },
      { threshold: 0.3 }
    );

    const counters = document.querySelectorAll<HTMLElement>('[data-counter]');
    counters.forEach((el) => counterObserver.observe(el));

    return () => {
      revealObserver.disconnect();
      counterObserver.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, []);
}
