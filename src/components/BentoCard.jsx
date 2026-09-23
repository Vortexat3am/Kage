import { useEffect, useRef } from "react";
import { FiPlay } from "react-icons/fi";

// A video-backed feature tile used in the combat grid. Playback is gated by
// visibility so off-screen tiles aren't decoding video in the background —
// with 5 of these on the page at once, that adds up fast.
const BentoCard = ({ src, poster, title, description, label, onClick }) => {
  const videoRef = useRef(null);
  const Wrapper = onClick ? "button" : "div";

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <Wrapper
      {...(onClick ? { type: "button", onClick } : {})}
      className={`group relative block size-full text-left ${
        onClick ? "cursor-pointer" : ""
      }`}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        loop
        muted
        playsInline
        preload="metadata"
        className="pointer-events-none absolute left-0 top-0 size-full object-cover object-center"
      />

      {/* legibility wash */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-ink/40" />

      {onClick && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <span className="flex-center size-14 rounded-full border border-bone/40 bg-ink/50 text-2xl text-bone backdrop-blur-sm transition-transform group-hover:scale-110 group-hover:border-crimson group-hover:text-crimson">
            <FiPlay className="ml-1" />
          </span>
        </div>
      )}

      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-bone md:p-7">
        <div>
          {label && <p className="eyebrow mb-3 text-crimson">{label}</p>}
          <h1 className="bento-title">{title}</h1>
          {description && (
            <p className="mt-3 max-w-xs text-sm text-bone md:text-base">
              {description}
            </p>
          )}
        </div>
      </div>
    </Wrapper>
  );
};

export default BentoCard;
