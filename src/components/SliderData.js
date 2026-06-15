import axios from "axios";

// Pulls a fresh random page of nature photos from Unsplash for the Work grid.
const something = async () => {
  const clientId = process.env.NEXT_PUBLIC_KEY;

  // No Unsplash key configured — skip the request entirely so we don't spam
  // the console with 401s. Callers fall back to the bundled local plates.
  if (!clientId) {
    return { results: [] };
  }

  const response = await axios.get("https://api.unsplash.com/search/photos", {
    params: {
      query: "nature",
      per_page: 5,
      page: Math.floor(Math.random() * 100) + 1,
      client_id: clientId,
    },
  });
  return response.data;
};

// Editorial gallery plates. Each carries EXIF-style metadata for captions.
export const SliderData = [
  {
    image: "/slider1.jpg",
    title: "First Light",
    location: "Dolomites, Italy",
    meta: "ƒ/8 · 1/60s · 35mm",
  },
  {
    image: "/slider2.jpg",
    title: "Low Tide",
    location: "Jæren, Norway",
    meta: "ƒ/11 · 1/8s · 24mm",
  },
  {
    image: "/slider3.jpg",
    title: "Treeline",
    location: "Cairngorms, Scotland",
    meta: "ƒ/4 · 1/500s · 85mm",
  },
  {
    image: "/slider4.jpg",
    title: "Quiet Water",
    location: "Lofoten, Norway",
    meta: "ƒ/16 · 2s · 16mm",
  },
  {
    image: "/slider5.jpg",
    title: "Last Glow",
    location: "Faroe Islands",
    meta: "ƒ/5.6 · 1/125s · 50mm",
  },
  {
    image: "/hero.png",
    title: "The Long Valley",
    location: "Glencoe, Scotland",
    meta: "ƒ/9 · 1/200s · 28mm",
  },
];

export default something;
