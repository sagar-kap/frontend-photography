import { SliderData } from "./SliderData";
import FlickrImage from "./FlickrImage";
import Reveal from "./Reveal";
import { FaFlickr } from "react-icons/fa";

const Flickr = () => {
  return (
    <section className="border-t border-bone/10 bg-ink py-24 sm:py-28">
      <div className="max-w-editorial mx-auto px-5 sm:px-8">
        <Reveal className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow mb-3">The feed — 04</p>
            <h2 className="font-display text-4xl font-light leading-none sm:text-6xl">
              Between the frames
            </h2>
          </div>
          <a
            href="https://www.flickr.com"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-3 font-mono text-sm uppercase tracking-widest text-bone/70 transition-colors hover:text-amber"
          >
            <FaFlickr className="text-amber" />
            @Capture
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </Reveal>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
          {SliderData.map((slide, index) => (
            <Reveal key={index} delay={index * 60}>
              <FlickrImage image={slide.image} index={index} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Flickr;
