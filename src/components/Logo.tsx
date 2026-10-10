interface LogoProps {
  size?: number;
  className?: string;
  showText?: boolean;
}

/**
 * Axis Therapy & Performance — premium emblem logo.
 * A geometric "A" formed by two converging gold beams meeting at an axis point,
 * enclosed in a subtle ring with radiating tick marks suggesting motion/rotation.
 */
export default function Logo({ size = 44, className = '', showText = true }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        <defs>
          <linearGradient id="axis-gold-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fef3c7" />
            <stop offset="40%" stopColor="#f5b324" />
            <stop offset="100%" stopColor="#c47d0f" />
          </linearGradient>
          <linearGradient id="axis-gold-beam-l" x1="100%" y1="100%" x2="50%" y2="15%">
            <stop offset="0%" stopColor="#c47d0f" />
            <stop offset="100%" stopColor="#fde58a" />
          </linearGradient>
          <linearGradient id="axis-gold-beam-r" x1="0%" y1="100%" x2="50%" y2="15%">
            <stop offset="0%" stopColor="#c47d0f" />
            <stop offset="100%" stopColor="#fde58a" />
          </linearGradient>
        </defs>

        {/* Outer ring */}
        <circle cx="60" cy="60" r="56" stroke="url(#axis-gold-grad)" strokeWidth="1.5" opacity="0.35" />

        {/* Tick marks around the ring — suggesting motion/rotation */}
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = (i * 30 - 90) * (Math.PI / 180);
          const x1 = 60 + Math.cos(angle) * 52;
          const y1 = 60 + Math.sin(angle) * 52;
          const x2 = 60 + Math.cos(angle) * 48;
          const y2 = 60 + Math.sin(angle) * 48;
          return (
            <line
              key={i}
              x1={x1} y1={y1} x2={x2} y2={y2}
              stroke="url(#axis-gold-grad)"
              strokeWidth="1"
              opacity={i % 3 === 0 ? 0.5 : 0.2}
            />
          );
        })}

        {/* Left beam of the A */}
        <path
          d="M60 18 L34 96 L42 96 L52 68 L60 48 L68 68 L78 96 L86 96 L60 18 Z"
          fill="url(#axis-gold-beam-l)"
          opacity="0"
        />
        {/* Full A shape with separate beam gradients */}
        <path
          d="M60 18 L34 96 L42 96 L50 72 L70 72 L78 96 L86 96 L60 18 Z"
          fill="url(#axis-gold-grad)"
        />

        {/* Crossbar of A */}
        <rect x="48" y="62" width="24" height="5" rx="1" fill="#0a0a0a" opacity="0.85" />

        {/* Axis point — the convergence dot */}
        <circle cx="60" cy="18" r="3" fill="url(#axis-gold-grad)" />
        <circle cx="60" cy="18" r="6" fill="none" stroke="url(#axis-gold-grad)" strokeWidth="0.8" opacity="0.4" />

        {/* Subtle inner glow ring */}
        <circle cx="60" cy="60" r="40" fill="none" stroke="url(#axis-gold-grad)" strokeWidth="0.5" opacity="0.15" />
      </svg>

      {showText && (
        <div className="text-left leading-none">
          <p
            className="font-display font-semibold tracking-wide text-ink-50"
            style={{ fontSize: size * 0.42 }}
          >
            AXIS
          </p>
          <p
            className="uppercase tracking-[0.22em] text-gold-400/80"
            style={{ fontSize: size * 0.2 }}
          >
            Therapy & Performance
          </p>
        </div>
      )}
    </div>
  );
}
