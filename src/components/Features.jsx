import { useState } from "react";
import { TiLocationArrow } from "react-icons/ti";
import BentoCard from "./BentoCard";
import BentoTilt from "./BentoTilt";
import MediaLightbox from "./MediaLightbox";
import { VIDEOS, VIDEO_POSTERS } from "../constants";

const featureVideos = [
  { type: "video", src: VIDEOS.technics, preview: VIDEO_POSTERS.technics, alt: "Techniques", title: "Techniques" },
  { type: "video", src: VIDEOS.katana, preview: VIDEO_POSTERS.katana, alt: "Katana", title: "Katana" },
  { type: "video", src: VIDEOS.scythe, preview: VIDEO_POSTERS.scythe, alt: "Scythe", title: "Scythe" },
  { type: "video", src: VIDEOS.bow, preview: VIDEO_POSTERS.bow, alt: "The Bow", title: "The Bow" },
  { type: "video", src: VIDEOS.motorcycle, preview: VIDEO_POSTERS.motorcycle, alt: "Motorcycle", title: "Motorcycle" },
];

// "Insane shonen-style combat" — gameplay clips mapped to weapons & techniques.
const Features = () => {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  return (
    <section id="combat" className="bg-ink pb-24 md:pb-28">
      <div className="container mx-auto px-4 md:px-10">
        {/* Intro */}
        <div className="px-1 py-20 md:px-5 md:py-28">
          <p className="eyebrow mb-4">Insane shonen-style combat</p>
          <h2 className="section-title max-w-3xl text-bone">
            speed, style &amp; <b>p</b>erfect timing
          </h2>
          <p className="mt-5 max-w-md text-bonedim">
            Dozens of weapons and anime-inspired techniques. Shout your special
            attacks to unleash their true power, chain co-op synergies, and pay
            homage to iconic anime moments.
          </p>
        </div>

        {/* Hero feature: voice techniques */}
        <BentoTilt className="border-hsla relative mb-5 h-80 w-full overflow-hidden rounded-lg md:mb-7 md:h-[65vh]">
          <BentoCard
            src={featureVideos[0].src}
            poster={featureVideos[0].preview}
            onClick={() => setLightboxIndex(0)}
            label="Voice-activated"
            title={
              <>
                techn<b>i</b>ques
              </>
            }
            description="Shout to activate your ultimate techniques. Every fight is about speed, style, and perfect timing."
          />
        </BentoTilt>

        {/* Weapon grid — stacks on mobile, staggered 2-col on desktop */}
        <div className="grid grid-cols-2 gap-5 md:h-[135vh] md:grid-rows-3 md:gap-7">
          <BentoTilt className="bento-tilt_1 h-80 md:h-auto md:col-span-1 md:row-span-2">
            <BentoCard
              src={featureVideos[1].src}
              poster={featureVideos[1].preview}
              onClick={() => setLightboxIndex(1)}
              label="Blade"
              title={
                <>
                  kat<b>a</b>na
                </>
              }
              description="Lightning-fast combos and air juggles. The dancer's weapon."
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_1 h-80 md:h-auto md:col-span-1">
            <BentoCard
              src={featureVideos[2].src}
              poster={featureVideos[2].preview}
              onClick={() => setLightboxIndex(2)}
              label="Reaper"
              title={
                <>
                  scy<b>t</b>he
                </>
              }
              description="Sweeping crowd control for thinning out the horde."
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_1 h-80 md:h-auto md:col-span-1">
            <BentoCard
              src={featureVideos[3].src}
              poster={featureVideos[3].preview}
              onClick={() => setLightboxIndex(3)}
              label="Ranged"
              title={
                <>
                  the b<b>o</b>w
                </>
              }
              description="Pick your shots from range and build the glass-cannon assassin."
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_2 h-80 md:h-auto">
            <div className="flex size-full flex-col justify-between bg-crimson p-5">
              <h1 className="bento-title max-w-48 text-ink">
                m<b className="!text-ink">o</b>re techniques s<b className="!text-ink">o</b>on
              </h1>
              <TiLocationArrow className="m-2 scale-[4] self-end text-ink" />
            </div>
          </BentoTilt>

          <BentoTilt className="bento-tilt_2 h-80 md:h-auto">
            <BentoCard
              src={featureVideos[4].src}
              poster={featureVideos[4].preview}
              onClick={() => setLightboxIndex(4)}
              label="Transportation"
              title={
                <>
                  motorcy<b>c</b>le
                </>
              }
              description="Quick getaway and swift repositioning across the battlefield."
            />
          </BentoTilt>
        </div>
      </div>

      {lightboxIndex !== null && (
        <MediaLightbox
          items={featureVideos}
          startIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </section>
  );
};

export default Features;
