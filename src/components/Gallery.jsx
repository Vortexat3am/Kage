import { useState } from "react";
import { FiPlay } from "react-icons/fi";
import AnimatedTitle from "./AnimatedTitle";
import MediaLightbox from "./MediaLightbox";
import { VIDEO_BASE_URL } from "../constants";

const shots = [2, 3, 4, 5, 6, 7, 8, 9];

const galleryItems = [
  {
    type: "video",
    src: `${VIDEO_BASE_URL}/trailer.mp4`,
    preview: "/img/shot-1.jpg",
    alt: "KAGE trailer",
    title: "Watch the trailer",
  },
  ...shots.map((n) => ({
    type: "image",
    src: `/img/shot-${n}.jpg`,
    preview: `/img/shot-${n}.jpg`,
    alt: `KAGE screenshot ${n}`,
    title: `Screenshot ${n}`,
  })),
];

const Gallery = () => {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  return (
    <section id="media" className="w-screen bg-coal py-28">
      <div className="container mx-auto px-6 md:px-10">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow mb-4">Screenshots &amp; trailer</p>
            <AnimatedTitle
              title="see it in <br /> m<b>o</b>tion"
              containerClass="!items-start text-left"
            />
          </div>
          <p className="max-w-sm text-bonedim">
            Low-poly characters, flashy effects, and the nostalgic charm of
            late-90s PlayStation — KAGE looks like a lost PS1 cult classic.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:grid-rows-2">
          <button
            type="button"
            onClick={() => setLightboxIndex(0)}
            className="group relative col-span-2 aspect-video overflow-hidden rounded-lg border border-white/10 md:row-span-2 md:aspect-auto"
          >
            <img
              src={galleryItems[0].preview}
              alt={galleryItems[0].alt}
              className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-ink/40 transition-colors group-hover:bg-ink/20" />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
              <span className="flex-center size-16 rounded-full border border-bone/40 bg-ink/40 text-2xl text-bone backdrop-blur-sm transition-all group-hover:scale-110 group-hover:border-crimson group-hover:text-crimson">
                <FiPlay className="ml-1" />
              </span>
              <span className="font-cond text-sm uppercase tracking-[0.28em] text-bone">
                {galleryItems[0].title}
              </span>
            </div>
          </button>

          {galleryItems.slice(1).map((item, idx) => (
            <button
              key={item.alt}
              type="button"
              onClick={() => setLightboxIndex(idx + 1)}
              className="group relative aspect-video overflow-hidden rounded-lg border border-white/10"
            >
              <img
                src={item.preview}
                alt={item.alt}
                loading="lazy"
                className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-ink/10 transition-colors group-hover:bg-transparent" />
            </button>
          ))}
        </div>
      </div>

      {lightboxIndex !== null && (
        <MediaLightbox
          items={galleryItems}
          startIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </section>
  );
};

export default Gallery;
