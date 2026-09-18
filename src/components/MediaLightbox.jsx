import { useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight, FiX } from "react-icons/fi";

// Fullscreen media viewer with prev/next navigation, shared by Gallery and Features.
const MediaLightbox = ({ items, startIndex = 0, onClose }) => {
  const [activeIndex, setActiveIndex] = useState(startIndex);
  const active = items[activeIndex];

  const showPrev = () =>
    setActiveIndex((current) => (current === 0 ? items.length - 1 : current - 1));
  const showNext = () =>
    setActiveIndex((current) => (current === items.length - 1 ? 0 : current + 1));

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };

    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/95 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-ink shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close media viewer"
          className="absolute right-5 top-5 z-20 text-bone transition-colors hover:text-crimson"
        >
          <FiX className="text-3xl" />
        </button>

        <div className="relative flex items-center justify-center bg-black">
          {active.type === "video" ? (
            <video
              key={active.src}
              src={active.src}
              controls
              autoPlay
              playsInline
              className="size-full max-h-[75vh] w-full object-contain"
            />
          ) : (
            <img
              src={active.src}
              alt={active.alt}
              className="size-full max-h-[75vh] w-full object-contain"
            />
          )}

          {items.length > 1 && (
            <>
              <button
                type="button"
                onClick={showPrev}
                aria-label="Previous"
                className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-ink/70 p-3 text-bone transition-colors hover:bg-ink/90 hover:text-crimson"
              >
                <FiChevronLeft className="h-6 w-6" />
              </button>
              <button
                type="button"
                onClick={showNext}
                aria-label="Next"
                className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-ink/70 p-3 text-bone transition-colors hover:bg-ink/90 hover:text-crimson"
              >
                <FiChevronRight className="h-6 w-6" />
              </button>
            </>
          )}
        </div>

        <div className="flex flex-col gap-3 px-6 py-5 text-bone md:px-8">
          <div className="flex items-center justify-between text-sm uppercase tracking-[0.28em] text-bone/70">
            <span>{active.title}</span>
            {items.length > 1 && (
              <span>{`${activeIndex + 1} / ${items.length}`}</span>
            )}
          </div>

          {items.length > 1 && (
            <div className="grid grid-cols-4 gap-3 overflow-x-auto py-2 md:grid-cols-8">
              {items.map((item, idx) => (
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
                  {item.preview ? (
                    <img
                      src={item.preview}
                      alt={item.alt}
                      className="h-20 w-full object-cover"
                    />
                  ) : (
                    <video
                      src={item.src}
                      muted
                      playsInline
                      preload="metadata"
                      className="h-20 w-full object-cover"
                    />
                  )}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MediaLightbox;
