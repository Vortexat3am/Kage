// Sharp, aggressive KAGE button with an ember sweep on hover.
// Renders as <a> when `href` is provided, otherwise a <button>.
const Button = ({
  id,
  title,
  leftIcon,
  rightIcon,
  containerClass = "",
  onClick,
  href,
}) => {
  const Tag = href ? "a" : "button";
  const extra = href
    ? { href, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Tag
      id={id}
      onClick={onClick}
      {...extra}
      className={`group relative inline-flex w-fit cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-sm bg-crimson px-7 py-3 font-cond text-sm font-semibold uppercase tracking-[0.18em] text-bone transition-colors duration-300 hover:text-white ${containerClass}`}
    >
      <span className="absolute inset-0 origin-left scale-x-0 bg-ember transition-transform duration-300 ease-out group-hover:scale-x-100" />
      {leftIcon && <span className="relative z-10 text-base">{leftIcon}</span>}
      <span className="relative z-10">{title}</span>
      {rightIcon && <span className="relative z-10 text-base">{rightIcon}</span>}
    </Tag>
  );
};

export default Button;
