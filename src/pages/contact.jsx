import Head from "next/head";
import Hero from "@/components/Hero";
import Contact from "@/components/Contact";

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>Contact — Capture</title>
        <meta
          name="description"
          content="Commissions, prints, and collaborations. Let's make something that lasts."
        />
      </Head>
      <Hero
        compact
        eyebrow="Get in touch — 04"
        heading="Let's talk"
        message="Weddings, editorial commissions, fine-art prints, or a long walk with a camera. Tell me what you're picturing."
        exif="ƒ/1.8 — 1/125s — ISO 400 — 50mm"
        primaryCta={{ label: "Start a project", href: "#form" }}
        secondaryCta={{ label: "See the work", href: "/work" }}
      />
      <div id="form" />
      <Contact />
    </>
  );
};

export default ContactPage;
