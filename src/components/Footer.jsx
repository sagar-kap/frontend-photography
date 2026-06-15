import Link from "next/link";
import { FaLinkedin, FaGithub, FaGlobe, FaArrowUp } from "react-icons/fa";

const socials = [
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/sagarkapr/", label: "LinkedIn" },
  { icon: FaGithub, href: "https://github.com/sagar-Kap/", label: "GitHub" },
  { icon: FaGlobe, href: "https://sagarkapoor.eu/", label: "Website" },
];

const nav = [
  { href: "/", label: "Home" },
  { href: "/#gallery", label: "Gallery" },
  { href: "/work", label: "Work" },
  { href: "/contact", label: "Contact" },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-bone/10 bg-ink text-bone">
      <div className="glow-amber pointer-events-none absolute inset-x-0 bottom-0 h-1/2" />
      <div className="max-w-editorial relative mx-auto px-5 py-16 sm:px-8">
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
          <div className="max-w-md">
            <h2 className="font-display text-5xl font-light sm:text-6xl">
              Capture
            </h2>
            <p className="mt-4 text-bone/60">
              Light, held still. Fine-art nature photography from the field —
              prints, commissions, and the occasional long walk.
            </p>
          </div>

          <div className="flex gap-16">
            <nav className="flex flex-col gap-3">
              <p className="eyebrow mb-1">Menu</p>
              {nav.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-bone/70 transition-colors hover:text-amber"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="flex flex-col gap-3">
              <p className="eyebrow mb-1">Elsewhere</p>
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-bone/70 transition-colors hover:text-amber"
                >
                  <Icon size={15} />
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-bone/10 pt-8 sm:flex-row">
          <p className="font-mono text-xs uppercase tracking-widest text-bone/40">
            © 2020–{year} Capture Studio · All rights reserved
          </p>
          <a
            href="#top"
            className="group flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-bone/60 transition-colors hover:text-amber"
          >
            Back to top
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-bone/20 transition-all group-hover:-translate-y-0.5 group-hover:border-amber">
              <FaArrowUp size={11} />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
