import { useState } from "react";
import { FiMail, FiMapPin } from "react-icons/fi";
import Reveal from "./Reveal";

const field =
  "w-full bg-transparent border-b border-bone/20 py-3 text-bone placeholder-transparent focus:border-amber focus:outline-none transition-colors peer";
const label =
  "absolute left-0 -top-3.5 text-xs font-mono uppercase tracking-widest text-bone/50 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:tracking-normal peer-placeholder-shown:normal-case peer-placeholder-shown:text-bone/40 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:uppercase peer-focus:tracking-widest peer-focus:text-amber";

const Contact = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section className="bg-ink py-24 sm:py-32">
      <div className="max-w-editorial mx-auto grid gap-16 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
        {/* Studio info rail */}
        <Reveal>
          <p className="eyebrow mb-4">Say hello</p>
          <h2 className="font-display text-4xl font-light leading-[1.05] sm:text-5xl">
            Let&apos;s make
            <br />
            something that
            <br />
            <span className="italic text-amber">lasts.</span>
          </h2>
          <p className="mt-6 max-w-sm text-bone/60">
            Weddings, editorial commissions, fine-art prints, or just a long
            walk with a camera — tell me what you have in mind.
          </p>

          <div className="mt-10 space-y-5">
            <a
              href="mailto:hello@capture.studio"
              className="group flex items-center gap-4 text-bone/80 transition-colors hover:text-amber"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-bone/15 transition-colors group-hover:border-amber">
                <FiMail />
              </span>
              hello@capture.studio
            </a>
            <div className="flex items-center gap-4 text-bone/80">
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-bone/15">
                <FiMapPin />
              </span>
              Based in Scotland · shooting worldwide
            </div>
          </div>

          <p className="mt-10 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-bone/50">
            <span className="h-2 w-2 animate-pulse rounded-full bg-amber" />
            Currently booking 2026 commissions
          </p>
        </Reveal>

        {/* Form */}
        <Reveal delay={120}>
          {sent ? (
            <div className="flex h-full min-h-[320px] flex-col items-start justify-center rounded-sm border border-amber/30 bg-amber/5 p-10">
              <p className="eyebrow mb-3">Message received</p>
              <h3 className="font-display text-3xl">
                Thank you — I&apos;ll be in touch soon.
              </h3>
              <p className="mt-3 text-bone/60">
                Expect a reply within two working days.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-9">
              <div className="grid gap-9 sm:grid-cols-2">
                <div className="relative">
                  <input
                    id="name"
                    type="text"
                    placeholder="Name"
                    required
                    className={field}
                  />
                  <label htmlFor="name" className={label}>
                    Name
                  </label>
                </div>
                <div className="relative">
                  <input
                    id="email"
                    type="email"
                    placeholder="Email"
                    required
                    className={field}
                  />
                  <label htmlFor="email" className={label}>
                    Email
                  </label>
                </div>
              </div>
              <div className="relative">
                <input
                  id="subject"
                  type="text"
                  placeholder="Subject"
                  className={field}
                />
                <label htmlFor="subject" className={label}>
                  Subject
                </label>
              </div>
              <div className="relative">
                <textarea
                  id="message"
                  rows="5"
                  placeholder="Message"
                  required
                  className={`${field} resize-none`}
                />
                <label htmlFor="message" className={label}>
                  Tell me about the project
                </label>
              </div>
              <button
                type="submit"
                className="group relative w-full overflow-hidden rounded-full bg-amber px-8 py-4 font-semibold text-ink transition-transform duration-300 hover:-translate-y-0.5 sm:w-auto sm:px-12"
              >
                <span className="relative z-10">Send message →</span>
                <span className="absolute inset-0 origin-left scale-x-0 bg-amber-glow transition-transform duration-300 group-hover:scale-x-100" />
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
