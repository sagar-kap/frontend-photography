import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import Reveal from "./Reveal";

const pad = (n) => String(n + 1).padStart(2, "0");

const Slider = ({ data }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });
  const [selected, setSelected] = useState(0);
  const [progress, setProgress] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((i) => emblaApi?.scrollTo(i), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    const onScroll = () =>
      setProgress(Math.max(0, Math.min(1, emblaApi.scrollProgress())));
    onSelect();
    onScroll();
    emblaApi.on("select", onSelect);
    emblaApi.on("scroll", onScroll);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("scroll", onScroll);
    };
  }, [emblaApi]);

  // Arrow-key navigation when the gallery is on screen.
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") scrollPrev();
      if (e.key === "ArrowRight") scrollNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [scrollPrev, scrollNext]);

  if (!Array.isArray(data) || data.length <= 0) return null;
  const active = data[selected];

  return (
    <section
      id="gallery"
      className="relative scroll-mt-24 border-t border-bone/10 bg-ink py-24 sm:py-32"
    >
      <div className="max-w-editorial mx-auto px-5 sm:px-8">
        <Reveal className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow mb-3">Selected frames — 02</p>
            <h2 className="font-display text-4xl font-light leading-none sm:text-6xl">
              The Gallery
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-bone/60">
            A rotating edit of recent work. Drag, swipe, or use the arrow keys —
            each plate is printed on cotton rag.
          </p>
        </Reveal>

        <Reveal>
          {/* Viewport */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex touch-pan-y">
              {data.map((slide, index) => (
                <div
                  key={index}
                  className="relative min-w-0 flex-[0_0_88%] pl-4 sm:flex-[0_0_72%] lg:flex-[0_0_60%]"
                >
                  <div
                    className={`group relative aspect-[16/10] overflow-hidden rounded-sm shadow-frame transition-all duration-700 ${
                      index === selected
                        ? "opacity-100"
                        : "opacity-40 saturate-50"
                    }`}
                  >
                    <Image
                      src={slide.image}
                      alt={slide.title || "Gallery plate"}
                      fill
                      sizes="(max-width: 640px) 88vw, 60vw"
                      className="object-cover transition-transform duration-[1.6s] ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
                    {/* Corner frame ticks */}
                    <span className="absolute left-4 top-4 h-5 w-5 border-l border-t border-bone/40" />
                    <span className="absolute right-4 top-4 h-5 w-5 border-r border-t border-bone/40" />
                    <span className="absolute bottom-4 left-4 h-5 w-5 border-b border-l border-bone/40" />
                    <span className="absolute bottom-4 right-4 h-5 w-5 border-b border-r border-bone/40" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Caption + controls */}
          <div className="mt-8 flex flex-wrap items-center justify-between gap-6">
            <div className="flex items-baseline gap-5">
              <span className="font-mono text-sm text-amber">
                {pad(selected)}
                <span className="text-bone/30"> / {pad(data.length - 1)}</span>
              </span>
              <div>
                <p className="font-display text-2xl">{active.title}</p>
                <p className="font-mono text-xs uppercase tracking-widest text-bone/50">
                  {active.location} · {active.meta}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={scrollPrev}
                aria-label="Previous"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-bone/20 text-bone transition-all hover:border-amber hover:text-amber"
              >
                <FiArrowLeft size={18} />
              </button>
              <button
                onClick={scrollNext}
                aria-label="Next"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-bone/20 text-bone transition-all hover:border-amber hover:text-amber"
              >
                <FiArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* Progress rail + thumbnails */}
          <div className="mt-8 h-px w-full bg-bone/10">
            <div
              className="h-px bg-amber transition-[width] duration-150"
              style={{ width: `${progress * 100}%` }}
            />
          </div>
          <div className="mt-6 flex gap-3">
            {data.map((slide, i) => (
              <button
                key={i}
                onClick={() => scrollTo(i)}
                aria-label={`Go to ${slide.title}`}
                className={`relative h-14 w-20 shrink-0 overflow-hidden rounded-sm transition-all duration-300 ${
                  i === selected
                    ? "ring-1 ring-amber ring-offset-2 ring-offset-ink"
                    : "opacity-50 hover:opacity-90"
                }`}
              >
                <Image
                  src={slide.image}
                  alt=""
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Slider;
