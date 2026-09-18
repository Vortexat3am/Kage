import BentoTilt from "./BentoTilt";
import AnimatedTitle from "./AnimatedTitle";

// "Dozens of playable characters" — roster of fighter cards.
const roster = [
  { img: "/img/char-1.jpg", tag: "Glass Cannon" },
  { img: "/img/char-2.jpg", tag: "Assassin" },
  { img: "/img/char-3.jpg", tag: "Crowd Control" },
  { img: "/img/char-4.jpg", tag: "Frontline" },
  { img: "/img/char-5.jpg", tag: "Duelist" },
  { img: "/img/char-6.jpg", tag: "Berserker" },
  { img: "/img/char-7.jpg", tag: "Tactician" },
];

const Characters = () => {
  return (
    <section
      id="roster"
      className="relative w-screen overflow-hidden bg-coal py-24 md:py-28"
    >
      <div className="container mx-auto px-6 md:px-10">
        <div className="flex flex-col items-center text-center">
          <p className="eyebrow mb-4">Dozens of playable characters</p>
          <AnimatedTitle
            title="choose your <br /> fi<b>g</b>hter"
            containerClass="text-center"
          />
          <p className="mt-5 max-w-xl text-bonedim">
            Every hero has a unique fighting style. Customize builds to match
            your playstyle — go glass cannon, lightning-fast assassin, crowd
            controller, or unstoppable frontline.
          </p>
        </div>
      </div>

      {/* 2-col grid on mobile (see everyone) → swipe carousel on desktop */}
      <div className="container mx-auto mt-12 grid grid-cols-2 gap-4 px-6 md:mt-14 md:flex md:snap-x md:snap-mandatory md:gap-5 md:overflow-x-auto md:px-10 md:[scrollbar-width:none] md:[&::-webkit-scrollbar]:hidden">
        {roster.map((c, i) => (
          <BentoTilt
            key={i}
            className="group relative aspect-[2/3] w-full overflow-hidden rounded-lg border border-white/10 md:w-72 md:shrink-0 md:snap-center"
          >
            <img
              src={c.img}
              alt={`KAGE fighter ${i + 1}`}
              className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full p-4 md:p-5">
              <p className="eyebrow text-crimson">{c.tag}</p>
              <h3 className="brush-title mt-1 text-2xl text-bone md:text-3xl">
                {String(i + 1).padStart(2, "0")}
              </h3>
            </div>
          </BentoTilt>
        ))}
      </div>
    </section>
  );
};

export default Characters;
