import { useEffect, useRef } from "react";
import gsap from "gsap";

// Per-word 3D ink reveal. <b> letters render crimson (see .special-font b).
// Uses IntersectionObserver (not ScrollTrigger) so the reveal fires reliably the
// moment the title enters view, even when heavy media above shifts the layout.
const AnimatedTitle = ({ title, containerClass = "" }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.to(el.querySelectorAll(".animated-word"), {
              opacity: 1,
              transform: "translate3d(0,0,0) rotateY(0deg) rotateX(0deg)",
              ease: "power2.inOut",
              stagger: 0.02,
              duration: 0.6,
            });
            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.2 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={containerRef} className={`animated-title ${containerClass}`}>
      {title.split("<br />").map((line, i) => (
        <div
          key={i}
          className="flex-center max-w-full flex-wrap gap-2 px-4 md:gap-3"
        >
          {line.split(" ").map((word, idx) => (
            <span
              key={idx}
              className="special-font animated-word"
              dangerouslySetInnerHTML={{ __html: word }}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default AnimatedTitle;
