import { useState, useEffect } from "react";
import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";

const links = [
  { href: "/", label: "Home", index: "01" },
  { href: "/#gallery", label: "Gallery", index: "02" },
  { href: "/work", label: "Work", index: "03" },
  { href: "/contact", label: "Contact", index: "04" },
];

const Aperture = ({ className = "" }) => (
  <svg
    viewBox="0 0 48 48"
    className={`h-7 w-7 animate-aperture ${className}`}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    aria-hidden="true"
  >
    <circle cx="24" cy="24" r="21" />
    <path d="M24 3 L33 19 H15 Z M45 24 L29 33 V15 Z M24 45 L15 29 H33 Z M3 24 L19 15 V33 Z" />
  </svg>
);

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleNav = () => setNav((open) => !open);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY >= 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "bg-ink/80 backdrop-blur-md border-b border-bone/10 py-2"
          : "bg-transparent border-b border-transparent py-4"
      }`}
    >
      <nav className="max-w-editorial mx-auto flex items-center justify-between px-5 sm:px-8">
        <Link
          href="/"
          className="group flex items-center gap-3 text-bone"
          aria-label="Capture — home"
        >
          <Aperture className="text-amber transition-colors duration-300 group-hover:text-amber-glow" />
          <span className="font-display text-2xl font-semibold tracking-tight">
            Capture
          </span>
        </Link>

        {/* Desktop */}
        <ul className="hidden items-center gap-9 sm:flex">
          {links.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="group relative font-sans text-sm font-medium tracking-wide text-bone/80 transition-colors hover:text-bone"
              >
                <span className="mr-1.5 font-mono text-[0.6rem] text-amber/70">
                  {link.index}
                </span>
                {link.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-full origin-left scale-x-0 bg-amber transition-transform duration-300 ease-out group-hover:scale-x-100" />
              </Link>
            </li>
          ))}
          <Link
            href="/contact"
            className="rounded-full border border-amber/40 bg-amber/10 px-5 py-2 text-sm font-semibold text-amber transition-all duration-300 hover:bg-amber hover:text-ink"
          >
            Book a shoot
          </Link>
        </ul>

        {/* Mobile trigger */}
        <button
          onClick={handleNav}
          className="z-50 flex flex-col items-end gap-1.5 sm:hidden"
          aria-label="Toggle menu"
          aria-expanded={nav}
        >
          <span
            className={`h-px bg-bone transition-all duration-300 ${
              nav ? "w-6 translate-y-2 rotate-45" : "w-7"
            }`}
          />
          <span
            className={`h-px bg-bone transition-all duration-300 ${
              nav ? "opacity-0" : "w-5"
            }`}
          />
          <span
            className={`h-px bg-bone transition-all duration-300 ${
              nav ? "w-6 -translate-y-1 -rotate-45" : "w-7"
            }`}
          />
        </button>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-40 flex flex-col justify-center bg-ink px-8 transition-all duration-500 sm:hidden ${
          nav
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none translate-x-8 opacity-0"
        }`}
      >
        <div className="glow-amber absolute inset-0" aria-hidden="true" />
        <button
          onClick={handleNav}
          className="absolute right-7 top-7 text-bone"
          aria-label="Close menu"
        >
          <AiOutlineClose size={22} />
        </button>
        <p className="eyebrow mb-8">Menu</p>
        <ul className="relative flex flex-col gap-2">
          {links.map((link, i) => (
            <li
              key={link.label}
              style={{ transitionDelay: nav ? `${120 + i * 70}ms` : "0ms" }}
              className={`transition-all duration-500 ${
                nav ? "translate-x-0 opacity-100" : "translate-x-6 opacity-0"
              }`}
            >
              <Link
                href={link.href}
                onClick={handleNav}
                className="flex items-baseline gap-4 font-display text-5xl font-light text-bone transition-colors hover:text-amber"
              >
                <span className="font-mono text-sm text-amber/60">
                  {link.index}
                </span>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default NavBar;
