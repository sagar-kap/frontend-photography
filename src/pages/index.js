import Head from "next/head";
import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import Slider from "@/components/Slider";
import { SliderData } from "@/components/SliderData";
import Flickr from "@/components/Flickr";

export default function Home() {
  return (
    <>
      <Head>
        <title>Capture — Light, held still.</title>
        <meta
          name="description"
          content="Capture is a fine-art nature photography studio. Golden-hour landscapes, quiet wilderness, and the light in between."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Capture — Light, held still." />
        <meta
          property="og:image"
          content="https://frontend-photography-wheat.vercel.app/_next/image?url=%2Fslider3.jpg&w=1080&q=75"
        />
        <meta
          property="og:description"
          content="A fine-art nature photography studio chasing golden-hour light."
        />
      </Head>
      <span id="top" />
      <Hero
        heading="Light held still"
        message="A fine-art nature studio chasing golden-hour landscapes and the quiet wilderness in between. Moments, kept alive in cotton-rag print."
      />
      <Manifesto />
      <Slider data={SliderData} />
      <Flickr />
    </>
  );
}
