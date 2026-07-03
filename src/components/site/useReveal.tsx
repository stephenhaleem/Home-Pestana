import { useEffect } from "react";

export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal-on-scroll");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

export function useParallax() {
  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>("[data-parallax]");
    let raf = 0;
    const update = () => {
      const y = window.scrollY;
      nodes.forEach((n) => {
        const speed = parseFloat(n.dataset.parallax || "0.3");
        const rect = n.getBoundingClientRect();
        const offset = (rect.top + y - window.innerHeight) * -speed;
        n.style.setProperty("--parallax-y", `${offset * 0.15}px`);
        n.style.transform = `translate3d(0, ${offset * 0.15}px, 0)`;
      });
      raf = 0;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
}
