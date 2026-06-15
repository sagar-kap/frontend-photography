import Image from "next/image";
import { FaFlickr } from "react-icons/fa";

const FlickrImage = ({ image, index = 0 }) => {
  return (
    <div className="group relative aspect-square overflow-hidden rounded-sm">
      <Image
        src={image}
        fill
        sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16vw"
        alt="Capture feed photograph"
        className="object-cover grayscale transition-all duration-700 ease-out group-hover:scale-110 group-hover:grayscale-0"
      />
      <div className="absolute inset-0 flex flex-col justify-between bg-ink/0 p-3 opacity-0 transition-all duration-500 group-hover:bg-ink/55 group-hover:opacity-100">
        <span className="font-mono text-[0.6rem] uppercase tracking-widest text-bone/80">
          {String(index + 1).padStart(2, "0")}
        </span>
        <FaFlickr size={22} className="self-end text-amber" />
      </div>
    </div>
  );
};

export default FlickrImage;
