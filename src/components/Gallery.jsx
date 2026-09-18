import { useEffect, useState } from "react";
import { FiPlay, FiChevronLeft, FiChevronRight, FiX } from "react-icons/fi";
import AnimatedTitle from "./AnimatedTitle";
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
  const [carouselOpen, setCarouselOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const openCarousel = (index) => {
    setActiveIndex(index);
    setCarouselOpen(true);
  };

  const closeCarousel = () => setCarouselOpen(false);
  const showPrev = () =>
    setActiveIndex((current) =>
      current === 0 ? galleryItems.length - 1 : current - 1
    );
  const showNext = () =>
    setActiveIndex((current) =>
      current === galleryItems.length - 1 ? 0 : current + 1
    );

  useEffect(() => {
    if (!carouselOpen) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") closeCarousel();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };

    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [carouselOpen]);

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
            onClick={() => openCarousel(0)}
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
              onClick={() => openCarousel(idx + 1)}
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

      {carouselOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/95 p-4 backdrop-blur-sm"
          onClick={closeCarousel}
        >
          <div
            className="relative w-full max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-ink shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeCarousel}
              aria-label="Close gallery"
              className="absolute right-5 top-5 z-20 text-bone transition-colors hover:text-crimson"
            >
              <FiX className="text-3xl" />
            </button>

            <div className="relative flex items-center justify-center bg-black">
              {galleryItems[activeIndex].type === "video" ? (
                <video
                  src={galleryItems[activeIndex].src}
                  controls
                  autoPlay
                  playsInline
                  className="size-full max-h-[75vh] w-full object-contain"
                />
              ) : (
                <img
                  src={galleryItems[activeIndex].src}
                  alt={galleryItems[activeIndex].alt}
                  className="size-full max-h-[75vh] w-full object-contain"
                />
              )}

              <button
                type="button"
                onClick={showPrev}
                className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-ink/70 p-3 text-bone transition-colors hover:bg-ink/90 hover:text-crimson"
              >
                <FiChevronLeft className="h-6 w-6" />
              </button>
              <button
                type="button"
                onClick={showNext}
                className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-ink/70 p-3 text-bone transition-colors hover:bg-ink/90 hover:text-crimson"
              >
                <FiChevronRight className="h-6 w-6" />
              </button>
            </div>

            <div className="flex flex-col gap-3 px-6 py-5 text-bone md:px-8">
              <div className="flex items-center justify-between text-sm uppercase tracking-[0.28em] text-bone/70">
                <span>{galleryItems[activeIndex].title}</span>
                <span>{`${activeIndex + 1} / ${galleryItems.length}`}</span>
              </div>
              <div className="grid grid-cols-4 gap-3 overflow-x-auto py-2 md:grid-cols-8">
                {galleryItems.map((item, idx) => (
                  <button
                    key={`${item.alt}-thumb`}
                    type="button"
                    onClick={() => setActiveIndex(idx)}
                    className={`overflow-hidden rounded-xl border transition-all ${
                      idx === activeIndex
                        ? "border-crimson"
                        : "border-white/10 hover:border-white/30"
                    }`}
                  >
                    <img
                      src={item.preview}
                      alt={item.alt}
                      className="h-20 w-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
