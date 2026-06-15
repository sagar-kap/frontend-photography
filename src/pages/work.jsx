import Head from "next/head";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";

const Work = () => {
  return (
    <>
      <Head>
        <title>Work — Capture</title>
        <meta
          name="description"
          content="Selected nature and travel photography from the field."
        />
      </Head>
      <Hero
        compact
        eyebrow="Selected work — 03"
        heading="The Work"
        message="Recent frames from the field — landscapes, light studies, and the long way round. Pulled fresh on every visit."
        exif="ƒ/8 — 1/250s — ISO 200 — 35mm"
        primaryCta={{ label: "Commission a shoot", href: "/contact" }}
        secondaryCta={{ label: "Back home", href: "/" }}
      />
      <Portfolio />
    </>
  );
};

export default Work;
