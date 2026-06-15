import { useEffect, useRef } from "react";
import Link from "next/link";
import ParticleCanvas from "./ParticleCanvas";

const Hero = ({
  message,
  heading,
  eyebrow = "Fine-art nature photography",
  exif = "ƒ/2.8 — 1/250s — ISO 100 — 24mm",
  primaryCta = { label: "Book a shoot", href: "/contact" },
  secondaryCta = { label: "View the work", href: "/work" },
  compact = false,
}) => {
  const root = useRef(null);

  useEffect(() => {
    let ctx;
    let cancelled = false;

    // GSAP is imported dynamically so it never touches the server render.
    import("gsap").then(({ gsap }) => {
      // Guard against React StrictMode's double-mount: if the effect was
      // already cleaned up before the import resolved, don't build anything.
      if (cancelled || !root.current) return;

      ctx = gsap.context(() => {
        gsap
          .timeline({ defaults: { ease: "power3.out" } })
          .from("[data-hero-line]", {
            yPercent: 120,
            opacity: 0,
            duration: 1.1,
            stagger: 0.12,
          })
          .from(
            "[data-hero-fade]",
            { y: 24, opacity: 0, duration: 0.9, stagger: 0.1 },
            "-=0.6",
          );
      }, root);
    });

    return () => {
      cancelled = true;
      // revert() restores the original (fully visible) inline styles.
      ctx && ctx.revert();
    };
  }, []);

  return (
    <section
      ref={root}
      className={`relative isolate flex w-full items-center overflow-hidden text-bone ${
        compact ? "h-[78vh] min-h-[520px]" : "h-screen min-h-[640px]"
      }`}
    >
      {/* Ken Burns background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 scale-110 animate-kenburns bg-[url('/hero.png')] bg-cover bg-center" />
      </div>

      {/* Cinematic grading + vignette */}
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-ink via-ink/55 to-ink/30" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(120%_90%_at_50%_120%,rgba(224,160,74,0.22),transparent_55%)]" />
      <ParticleCanvas className="absolute inset-0 z-0 h-full w-full" />

      <div className="relative z-10 max-w-editorial mx-auto w-full px-5 sm:px-8">
        <div className="max-w-3xl">
          <div className="mb-6 flex items-center gap-3 overflow-hidden" data-hero-fade>
            <span className="h-px w-10 bg-amber" />
            <span className="eyebrow">{eyebrow}</span>
          </div>

          <h1 className="font-display text-[clamp(2.75rem,9vw,7rem)] font-light leading-[0.95] tracking-[-0.02em]">
            {heading.split(" ").map((word, i) => (
              <span key={i} className="block overflow-hidden">
                <span data-hero-line className="inline-block">
                  {word}
                </span>
              </span>
            ))}
          </h1>

          <p
            data-hero-fade
            className="mt-7 max-w-xl text-lg leading-relaxed text-bone/75 sm:text-xl"
          >
            {message}
          </p>

          <div data-hero-fade className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href={primaryCta.href}
              className="group relative overflow-hidden rounded-full bg-amber px-8 py-3.5 font-semibold text-ink transition-transform duration-300 hover:-translate-y-0.5"
            >
              <span className="relative z-10">{primaryCta.label}</span>
              <span className="absolute inset-0 origin-left scale-x-0 bg-amber-glow transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
            <Link
              href={secondaryCta.href}
              className="group flex items-center gap-2 rounded-full border border-bone/25 px-8 py-3.5 font-medium text-bone transition-colors duration-300 hover:border-bone/60"
            >
              {secondaryCta.label}
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* EXIF readout + scroll cue */}
      <div
        data-hero-fade
        className="absolute bottom-7 left-0 z-10 w-full px-5 sm:px-8"
      >
        <div className="max-w-editorial mx-auto flex items-end justify-between gap-4">
          <p className="font-mono text-[0.7rem] uppercase tracking-widest text-bone/45">
            {exif}
          </p>
          {!compact && (
            <div className="hidden flex-col items-center gap-2 sm:flex">
              <span className="font-mono text-[0.6rem] uppercase tracking-label text-bone/45">
                Scroll
              </span>
              <span className="relative flex h-9 w-5 justify-center rounded-full border border-bone/25">
                <span className="mt-1.5 h-1.5 w-1.5 animate-scroll-dot rounded-full bg-amber" />
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
