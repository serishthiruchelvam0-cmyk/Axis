import { Instagram, Facebook, Twitter } from 'lucide-react';
import Logo from '@/components/Logo';

const footerLinks = {
  Services: ['Sports Massage', 'Acupuncture', 'Naturopathic Medicine', 'Fascial Stretch Therapy', 'Cupping Therapy', 'IV Vitamin Therapy'],
  Company: ['About Us', 'Our Team', 'Testimonials', 'Locations', 'Careers', 'Blog'],
  Support: ['Book Now', 'Contact', 'FAQ', 'Privacy Policy', 'Terms of Service'],
};

export default function Footer() {
  return (
    <footer className="relative border-t border-ink-700/50 bg-ink-950 pt-20 pb-10 overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid opacity-20" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        {/* Top section */}
        <div className="grid gap-12 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Logo size={44} />
            <p className="mt-6 max-w-sm text-sm font-light leading-relaxed text-ink-300">
              Expert physical therapy powered by the human connection. We're ensuring the longevity
              of your movement—pain-free.
            </p>
            <p className="mt-4 font-display text-lg italic text-gold-300/80">
              Refine the way you move.
            </p>

            {/* Socials */}
            <div className="mt-8 flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-ink-700 bg-ink-850 text-ink-300 transition-all duration-300 hover:border-gold-400/40 hover:text-gold-300 hover:shadow-glow-gold"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="mb-5 text-xs uppercase tracking-[0.25em] text-gold-400/80">{heading}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="group relative text-sm font-light text-ink-300 transition-colors duration-300 hover:text-ink-100"
                    >
                      {link}
                      <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-gold-400/60 transition-all duration-300 group-hover:w-full" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-gradient-to-r from-transparent via-ink-700 to-transparent" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-ink-400">
            &copy; 2026 Axis Therapy & Performance. All rights reserved.
          </p>
          <p className="text-xs text-ink-400">
            Designed with care in Toronto.
          </p>
        </div>
      </div>
    </footer>
  );
}
