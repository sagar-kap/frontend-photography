import { useEffect, useRef } from "react";

/**
 * Zero-dependency animated particle canvas — drifting golden-hour dust motes.
 *
 * A React port of the concept behind @weburz/particle-canvas (which is a
 * Nuxt 4 / Vue module and can't run here). Density scales with viewport area;
 * honours prefers-reduced-motion by rendering a single static frame.
 */
const ParticleCanvas = ({ className = "", density = 0.00008 }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let particles = [];
    let raf;
    let width = 0;
    let height = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const seed = () => {
      const count = Math.round(width * height * density);
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.8 + 0.4,
        vy: -(Math.random() * 0.25 + 0.05),
        vx: (Math.random() - 0.5) * 0.18,
        a: Math.random() * 0.5 + 0.1,
        tw: Math.random() * 0.02 + 0.004, // twinkle speed
        phase: Math.random() * Math.PI * 2,
      }));
    };

    const resize = () => {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      for (const p of particles) {
        p.y += p.vy;
        p.x += p.vx;
        p.phase += p.tw;
        if (p.y < -5) {
          p.y = height + 5;
          p.x = Math.random() * width;
        }
        if (p.x < -5) p.x = width + 5;
        if (p.x > width + 5) p.x = -5;

        const flicker = p.a * (0.6 + 0.4 * Math.sin(p.phase));
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(244, 200, 122, ${flicker})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = "rgba(224, 160, 74, 0.6)";
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };

    resize();
    if (reduceMotion) {
      // single static frame
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(244, 200, 122, ${p.a})`;
        ctx.fill();
      }
    } else {
      draw();
    }

    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [density]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`pointer-events-none ${className}`}
    />
  );
};

export default ParticleCanvas;
