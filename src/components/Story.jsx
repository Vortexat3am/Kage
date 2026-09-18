import { useRef } from "react";
import gsap from "gsap";
import { FiArrowUpRight } from "react-icons/fi";
import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";

const features = [
  "Multi-phase boss fights",
  "Rare loot drops",
  "Hidden enemies & secrets",
  "Replayable missions",
];

// "Upgrade your village" + boss hunts — clean two-column layout with a 3D-tilt frame.
const Story = () => {
  const frameRef = useRef(null);

  const handleMouseLeave = () => {
    gsap.to(frameRef.current, {
      duration: 0.4,
      rotateX: 0,
      rotateY: 0,
      ease: "power1.inOut",
    });
  };

  const handleMouseMove = (e) => {
    const element = frameRef.current;
    if (!element) return;
    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = ((y - rect.height / 2) / (rect.height / 2)) * -8;
    const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 8;
    gsap.to(element, {
      duration: 0.4,
      rotateX,
      rotateY,
      ease: "power1.inOut",
    });
  };

  return (
    <section id="village" className="w-screen bg-ink py-24 text-bone md:py-32">
      <div className="container mx-auto px-6 md:px-10">
        {/* Heading */}
        <div className="flex flex-col items-center text-center">
          <p className="eyebrow">Upgrade your village · hunt the bosses</p>
          <AnimatedTitle
            title="forge your legend <br /> bey<b>o</b>nd the fight"
            containerClass="mt-4 text-center"
          />
        </div>

        {/* Content */}
        <div className="mt-16 grid items-center gap-12 md:grid-cols-2 md:gap-16">
          {/* Tilt frame */}
          <div className="[perspective:1200px]">
            <div
              ref={frameRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl will-change-transform"
            >
              <img
                src="/img/shot-7.jpg"
                alt="KAGE village and boss hunts"
                className="aspect-video w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
              <span className="kanji-watermark pointer-events-none absolute right-4 top-3 text-4xl opacity-30">
                影
              </span>
            </div>
          </div>

          {/* Copy */}
          <div className="max-w-xl">
            <p className="text-lg text-bonedim">
              You don&apos;t just fight — you return home. Complete missions from
              the village elder, unlock new NPCs, and upgrade facilities to gain
              access to new techniques and gear.
            </p>
            <p className="mt-4 text-bonedim">
              Then explore massive locations and take down multi-phase bosses for
              rare loot. The deeper you go, the more chaotic it becomes.
            </p>

            <ul className="mt-8 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
              {features.map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm text-bone">
                  <span className="size-2 rotate-45 bg-crimson" />
                  {f}
                </li>
              ))}
            </ul>

            <Button
              title="Discover the village"
              rightIcon={<FiArrowUpRight />}
              containerClass="mt-10"
              href="#media"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
