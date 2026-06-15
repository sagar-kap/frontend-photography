import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import "@/styles/globals.css";
import { Fraunces, Manrope, JetBrains_Mono } from "next/font/google";
import Head from "next/head";

// Display: an optical serif with real character for the editorial headlines.
const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
});

// Body / UI: a clean, slightly humanist grotesque.
const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
});

// Mono: EXIF data, frame counters, focal-length labels.
const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

export default function App({ Component, pageProps }) {
  return (
    <main
      className={`${fraunces.variable} ${manrope.variable} ${mono.variable} font-sans bg-ink text-bone selection:bg-amber`}
    >
      <Head>
        <title>Capture — Light, held still.</title>
        <meta
          name="description"
          content="Capture is a fine-art nature photography studio. Golden-hour landscapes, quiet wilderness, and the light in between — printed and held still."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0c0b09" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
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
      <div className="grain" aria-hidden="true" />
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </main>
  );
}
