// A video-backed feature tile used in the combat grid.
const BentoCard = ({ src, title, description, label }) => {
  return (
    <div className="relative size-full">
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
    </div>
  );
};

export default BentoCard;
