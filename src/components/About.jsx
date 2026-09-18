import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

// "The pitch" — intro copy + a scroll-pinned gameplay frame that expands to fullscreen.
const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to("#clip-frame", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  }, []);

  return (
    <div id="pitch" className="min-h-screen w-screen bg-ink">
      <div className="relative mb-10 mt-28 flex flex-col items-center gap-5 px-6">
        <p className="eyebrow">
          Play solo or co-op
        </p>

        <AnimatedTitle
          title="unleash true <br /> sh<b>o</b>nen chaos"
          containerClass="text-center"
        />

        <div className="mt-2 max-w-2xl text-center">
          <p className="text-lg text-bone">
            Team up with up to four players, combine your techniques, and tear
            through hordes of enemies.
          </p>
          <p className="mt-3 text-bonedim">
            KAGE is not just a roguelite — your progress persists, your village
            grows, and your character keeps getting stronger. Lightning-fast
            combos, air juggles, counters, and ultimate techniques activated by
            voice.
          </p>
        </div>
      </div>

      <div className="h-dvh w-screen" id="clip">
        <div
          id="clip-frame"
          className="absolute left-1/2 top-0 z-20 h-[60vh] w-[88vw] -translate-x-1/2 overflow-hidden rounded-2xl border border-white/10 md:w-[32vw]"
        >
          <img
            src="/img/shot-1.jpg"
            alt="KAGE gameplay"
            className="absolute left-0 top-0 size-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
          <p className="eyebrow absolute bottom-5 left-5 text-bone">
            PS1 aesthetic · modern co-op action
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
