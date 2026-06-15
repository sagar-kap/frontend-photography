import Image from "next/image";
import { useState, useEffect } from "react";
import something from "./SliderData";
import Reveal from "./Reveal";

// Local fallbacks shown before (or instead of) the Unsplash fetch resolving.
const fallbacks = [
  { src: "/slider1.jpg", title: "Ridgeline", place: "Dolomites" },
  { src: "/slider2.jpg", title: "Shoreline", place: "Jæren" },
  { src: "/slider3.jpg", title: "Canopy", place: "Cairngorms" },
  { src: "/slider4.jpg", title: "Stillwater", place: "Lofoten" },
  { src: "/slider5.jpg", title: "Afterglow", place: "Faroe Islands" },
];

// Editorial spans — first plate is the large feature, the rest are mosaic.
const spans = [
  "lg:col-span-2 lg:row-span-2",
  "lg:col-span-2",
  "lg:col-span-1",
  "lg:col-span-1",
  "lg:col-span-2",
];

const Portfolio = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await something();
        if (data?.results?.length) setImages(data.results);
      } catch (err) {
        // Offline / missing API key — fall back to the bundled plates.
        console.warn("Unsplash fetch failed, using local plates", err);
      }
    };
    fetchData();
  }, []);

  const plates = fallbacks.map((fb, i) => {
    const remote = images[i];
    return {
      src: remote?.urls?.regular || fb.src,
      title: remote?.alt_description
        ? remote.alt_description.split(" ").slice(0, 3).join(" ")
        : fb.title,
      place: remote ? "Unsplash" : fb.place,
      credit: remote?.user?.name,
    };
  });

  return (
    <section className="bg-ink py-24 sm:py-32">
      <div className="max-w-editorial mx-auto px-5 sm:px-8">
        <Reveal className="mb-14 max-w-2xl">
          <p className="eyebrow mb-3">Field work</p>
          <h2 className="font-display text-4xl font-light leading-[1.05] sm:text-6xl">
            Travels, on assignment & off.
          </h2>
          <p className="mt-5 text-bone/60">
            A living set, refreshed from the field each visit. Pulled at random
            so no two looks are quite the same.
          </p>
        </Reveal>

        <div className="grid auto-rows-[260px] grid-cols-2 gap-4 lg:grid-cols-4">
          {plates.map((plate, i) => (
            <Reveal
              key={i}
              delay={i * 80}
              className={`group relative overflow-hidden rounded-sm ${spans[i]}`}
            >
              <Image
                src={plate.src}
                alt={plate.title}
                fill
                sizes="(max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute bottom-0 left-0 p-5">
                <p className="font-display text-xl capitalize text-bone">
                  {plate.title}
                </p>
                <p className="font-mono text-[0.65rem] uppercase tracking-widest text-amber/90">
                  {plate.place}
                  {plate.credit ? ` · © ${plate.credit}` : ""}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
