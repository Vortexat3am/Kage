import { FiPlay } from "react-icons/fi";

// A video-backed feature tile used in the combat grid.
const BentoCard = ({ src, title, description, label, onClick }) => {
  const Wrapper = onClick ? "button" : "div";

  return (
    <Wrapper
      {...(onClick ? { type: "button", onClick } : {})}
      className={`group relative block size-full text-left ${
        onClick ? "cursor-pointer" : ""
      }`}
    >
      <video
        src={src}
        loop
        muted
        autoPlay
        playsInline
        preload="metadata"
        className="absolute left-0 top-0 size-full object-cover object-center"
      />

      {/* legibility wash */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-ink/40" />

      {onClick && (
        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
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
