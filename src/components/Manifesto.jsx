import Reveal from "./Reveal";

const marquee = [
  "Golden hour",
  "Long exposure",
  "Wild places",
  "Cotton-rag prints",
  "Available light",
  "Quiet mornings",
];

const stats = [
  { value: "12", label: "Years in the field" },
  { value: "40+", label: "Countries shot" },
  { value: "9k", label: "Frames printed" },
  { value: "∞", label: "Cups of coffee" },
];

const Manifesto = () => {
  return (
    <>
      {/* Marquee band */}
      <div className="relative flex overflow-hidden border-y border-bone/10 bg-ink-soft py-5">
        <div className="flex shrink-0 animate-marquee items-center gap-8 whitespace-nowrap pr-8">
          {[...marquee, ...marquee].map((word, i) => (
            <span key={i} className="flex items-center gap-8">
              <span className="font-display text-2xl font-light text-bone/70 sm:text-3xl">
                {word}
              </span>
              <span className="text-amber">✦</span>
            </span>
          ))}
        </div>
        <div
          className="flex shrink-0 animate-marquee items-center gap-8 whitespace-nowrap pr-8"
          aria-hidden="true"
        >
          {[...marquee, ...marquee].map((word, i) => (
            <span key={i} className="flex items-center gap-8">
              <span className="font-display text-2xl font-light text-bone/70 sm:text-3xl">
                {word}
              </span>
              <span className="text-amber">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* Manifesto */}
      <section className="relative overflow-hidden bg-ink py-24 sm:py-32">
        <div className="glow-amber pointer-events-none absolute inset-0" />
        <div className="max-w-editorial relative mx-auto px-5 sm:px-8">
          <Reveal className="max-w-4xl">
            <p className="eyebrow mb-6">The philosophy — 01</p>
            <p className="font-display text-3xl font-light leading-[1.25] sm:text-[2.75rem] sm:leading-[1.2]">
              I chase the light that lasts a minute and the stillness that
              lasts a lifetime. Every frame is a{" "}
              <span className="italic text-amber">held breath</span> — a place,
              a moment, the exact weight of the air before it changed.
            </p>
          </Reveal>

          <div className="mt-16 grid grid-cols-2 gap-8 border-t border-bone/10 pt-12 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 90}>
                <p className="font-display text-5xl font-light text-amber sm:text-6xl">
                  {stat.value}
                </p>
                <p className="mt-2 font-mono text-xs uppercase tracking-widest text-bone/50">
                  {stat.label}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Manifesto;
