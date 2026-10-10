import { useState } from 'react';
import { MapPin, Mail, Phone, Send, Check } from 'lucide-react';

const locations = [
  'Toronto Downtown',
  'Toronto East',
  'Toronto West',
];

const services = [
  'Sports Massage Therapy',
  'Acupuncture',
  'Naturopathic Medicine',
  'Fascial Stretch Therapy',
  'Cupping Therapy',
  'IV Vitamin Therapy',
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: '', email: '', phone: '', service: '', message: '' });
    }, 3500);
  };

  const update = (field: string, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  return (
    <section id="contact" className="relative py-28 lg:py-36 bg-ink-900 overflow-hidden">
      {/* Top accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/30 to-transparent" />

      {/* Background glow */}
      <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-500/5 blur-[160px]" data-parallax="0.08" />

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Left — info */}
          <div className="reveal" data-animation="slide-right">
            <span className="text-xs uppercase tracking-[0.3em] text-gold-400/80">Get In Touch</span>
            <h2 className="mt-4 font-display text-4xl font-light text-ink-50 sm:text-5xl lg:text-6xl">
              Start Your <span className="text-gradient-gold italic">Journey</span>
            </h2>
            <div className="gold-divider mt-6 w-24" />
            <p className="mt-6 text-lg font-light leading-relaxed text-ink-300">
              Ready to refine the way you move? Book your session today and experience the Axis
              difference—expert care powered by genuine human connection.
            </p>

            {/* Contact details with stagger */}
            <div className="mt-10 space-y-5">
              {[
                { icon: MapPin, label: 'Visit Us', value: 'Multiple locations across Toronto' },
                { icon: Mail, label: 'Email Us', value: 'info@axistherapy.com' },
                { icon: Phone, label: 'Call Us', value: '(416) 555-AXIS' },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="reveal flex items-center gap-4"
                    data-animation="slide-left"
                    data-delay={`${i * 100}`}
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-gold-400/20 bg-gold-400/5 transition-all duration-400 hover:shadow-glow-gold hover:scale-110">
                      <Icon size={20} className="text-gold-300" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-ink-100">{item.label}</p>
                      <p className="text-sm font-light text-ink-300">{item.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Locations */}
            <div className="reveal mt-10" data-animation="fade-up" data-delay="300">
              <p className="mb-3 text-xs uppercase tracking-[0.25em] text-ink-300/70">Select Your Location</p>
              <div className="flex flex-wrap gap-3">
                {locations.map((loc, i) => (
                  <button
                    key={loc}
                    className="reveal rounded-full border border-ink-600 bg-ink-850 px-5 py-2 text-sm font-medium text-ink-200 transition-all duration-300 hover:border-gold-400/50 hover:text-gold-300 hover:scale-105 active:scale-95"
                    data-animation="scale-in"
                    data-delay={`${400 + i * 80}`}
                  >
                    {loc}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="reveal" data-animation="scale-in" data-delay="150">
            <div className="tilt-card rounded-2xl border border-ink-700/50 bg-ink-850 p-8 lg:p-10">
              {submitted ? (
                <div className="flex h-full min-h-[400px] flex-col items-center justify-center text-center">
                  <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-gold-400/15 border border-gold-400/30 animate-pulse-glow">
                    <Check size={28} className="text-gold-300" />
                  </div>
                  <h3 className="font-display text-3xl font-medium text-ink-50">Thank You!</h3>
                  <p className="mt-3 text-sm font-light text-ink-300">
                    Your request has been received. We'll be in touch shortly to confirm your appointment.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="font-display text-2xl font-medium text-ink-50">Book Your Session</h3>

                  <div>
                    <label className="mb-2 block text-xs uppercase tracking-[0.15em] text-ink-300">Full Name</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => update('name', e.target.value)}
                      className="w-full rounded-lg border border-ink-600 bg-ink-900 px-4 py-3 text-sm text-ink-100 outline-none transition-all duration-300 focus:border-gold-400/50 focus:ring-2 focus:ring-gold-400/20"
                      placeholder="Jane Doe"
                    />
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-xs uppercase tracking-[0.15em] text-ink-300">Email</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => update('email', e.target.value)}
                        className="w-full rounded-lg border border-ink-600 bg-ink-900 px-4 py-3 text-sm text-ink-100 outline-none transition-all duration-300 focus:border-gold-400/50 focus:ring-2 focus:ring-gold-400/20"
                        placeholder="jane@email.com"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-xs uppercase tracking-[0.15em] text-ink-300">Phone</label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => update('phone', e.target.value)}
                        className="w-full rounded-lg border border-ink-600 bg-ink-900 px-4 py-3 text-sm text-ink-100 outline-none transition-all duration-300 focus:border-gold-400/50 focus:ring-2 focus:ring-gold-400/20"
                        placeholder="(416) 555-0000"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-xs uppercase tracking-[0.15em] text-ink-300">Service</label>
                    <select
                      value={form.service}
                      onChange={(e) => update('service', e.target.value)}
                      className="w-full rounded-lg border border-ink-600 bg-ink-900 px-4 py-3 text-sm text-ink-100 outline-none transition-all duration-300 focus:border-gold-400/50 focus:ring-2 focus:ring-gold-400/20"
                    >
                      <option value="">Select a service</option>
                      {services.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="mb-2 block text-xs uppercase tracking-[0.15em] text-ink-300">Message</label>
                    <textarea
                      rows={3}
                      value={form.message}
                      onChange={(e) => update('message', e.target.value)}
                      className="w-full rounded-lg border border-ink-600 bg-ink-900 px-4 py-3 text-sm text-ink-100 outline-none transition-all duration-300 focus:border-gold-400/50 focus:ring-2 focus:ring-gold-400/20 resize-none"
                      placeholder="Tell us about your goals..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="group flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-gold-400 to-gold-600 px-6 py-3.5 text-sm font-semibold text-ink-950 transition-all duration-300 hover:shadow-glow-gold-lg hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Send Request
                    <Send size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
