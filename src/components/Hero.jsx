import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { FaSteam } from "react-icons/fa";
import { FiPlay, FiChevronDown } from "react-icons/fi";
import Button from "./Button";
import { LINKS } from "../constants";

// Layered parallax hero. Desktop: oni mask floats over the bamboo with the
// wordmark overlaid (key-art style). Mobile: mask centered on top, text stacked
// cleanly below.
const Hero = ({ onWatchTrailer }) => {
  const [loaded, setLoaded] = useState(false);
  const maskRef = useRef(null);
  const bambooRef = useRef(null);

  useGSAP(
    () => {
      if (!loaded) return;
      gsap.from(maskRef.current, {
        scale: 1.18,
        opacity: 0,
        duration: 1.2,
        ease: "power2.out",
      });
      gsap.from(".hero-rise", {
        y: 44,
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
        delay: 0.15,
      });
    },
    { dependencies: [loaded] }
  );

  const handleMove = (e) => {
    // Desktop-only parallax (mask is in normal flow on mobile).
    if (window.innerWidth < 768) return;
    const x = e.clientX / window.innerWidth - 0.5;
    const y = e.clientY / window.innerHeight - 0.5;
    gsap.to(maskRef.current, {
      xPercent: x * 16,
      yPercent: y * 14,
      rotateY: x * 10,
      rotateX: -y * 10,
      duration: 0.7,
      ease: "power2.out",
    });
    gsap.to(bambooRef.current, {
      xPercent: x * -6,
      yPercent: y * -5,
      duration: 0.9,
      ease: "power2.out",
    });
  };

  return (
    <section
      id="hero"
      onMouseMove={handleMove}
      className="relative h-dvh w-screen overflow-hidden bg-ink"
    >
      {!loaded && (
        <div className="flex-center absolute inset-0 z-50 bg-ink">
          <div className="three-body">
            <div className="three-body__dot" />
            <div className="three-body__dot" />
            <div className="three-body__dot" />
          </div>
        </div>
      )}

      {/* Far layer: bamboo forest */}
      <img
        ref={bambooRef}
        src="/img/hero-bamboo.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 size-full scale-110 object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-transparent to-ink" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 40%, transparent 24%, rgba(11,11,13,0.88) 76%)",
        }}
      />

      {/* Giant kanji watermark */}
      <span className="kanji-watermark absolute left-1/2 top-[34%] -translate-x-1/2 -translate-y-1/2 text-[30vh] leading-none opacity-[0.07] sm:text-[40vh] md:top-[40%] md:text-[44vh]">
        影
      </span>

      {/* Content: stacked & centered on mobile, free-positioned on desktop */}
      <div className="relative z-20 flex h-full flex-col items-center justify-center gap-5 px-6 md:block md:gap-0 md:px-0">
        {/* Oni mask */}
        <img
          ref={maskRef}
          onLoad={() => setLoaded(true)}
          src="/img/hero-mask.png"
          alt="KAGE oni mask"
          className="w-[75vw] max-w-[400px] object-contain drop-shadow-[0_0_70px_rgba(200,20,31,0.45)] md:absolute md:left-1/2 md:top-[25%] md:h-[58vh] md:w-auto md:max-w-none md:-translate-x-1/2 md:-translate-y-1/2"
          style={{ animation: "kage-float 6s ease-in-out infinite" }}
        />

        {/* Text block */}
        <div className="flex flex-col items-center text-center md:absolute md:inset-x-0 md:top-1/2 md:-translate-y-1/2 md:px-6">
          <p className="hero-rise eyebrow mb-3 sm:mb-5">
            Polnoch · Releasing 2026
          </p>

          <img
            src="/logo.png"
            alt="KAGE"
            className="hero-rise mb-4 w-[85vw] max-w-[400px] drop-shadow-[0_6px_34px_rgba(0,0,0,0.65)] sm:mb-6 sm:w-[72vw] md:max-w-[520px]"
          />

          <p className="hero-rise mb-6 max-w-md text-sm text-bonedim sm:mb-8 sm:text-base md:text-lg">
            Anime co-op action for up to four players.{" "}
            <span className="text-bone">Shout your technique</span> to unleash
            its true power — fight hordes, hunt massive bosses, and{" "}
            <span className="text-bone">become a legend.</span>
          </p>

          <div className="hero-rise flex w-full max-w-xs flex-col items-stretch gap-3 sm:w-auto sm:max-w-none sm:flex-row sm:items-center sm:gap-4">
            <Button
              title="Wishlist on Steam"
              leftIcon={<FaSteam />}
              href={LINKS.steam}
              containerClass="!w-full justify-center sm:!w-auto"
            />
            <Button
              title="Watch Trailer"
              leftIcon={<FiPlay />}
              onClick={onWatchTrailer}
              containerClass="!bg-transparent border border-bone/30 !w-full justify-center sm:!w-auto"
            />
          </div>
        </div>
      </div>

      {/* Scroll cue (desktop only) */}
      <a
        href="#pitch"
        className="absolute bottom-3 left-1/2 z-20 hidden -translate-x-1/2 text-bone/50 transition-colors hover:text-bone md:block"
        style={{ animation: "kage-float 2.4s ease-in-out infinite" }}
        aria-label="Scroll down"
      >
        <FiChevronDown className="text-2xl" />
      </a>
    </section>
  );
};

export default Hero;
