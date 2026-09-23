import { useRef } from "react";

// 3D tilt-on-hover for bento tiles. Writes the transform straight to the DOM
// (no React state) and caps updates to one per animation frame, since raw
// mousemove can fire far faster than the display refreshes.
const BentoTilt = ({ children, className = "" }) => {
  const itemRef = useRef(null);
  const rafRef = useRef(null);
  const pointerRef = useRef({ x: 0, y: 0 });

  const scheduleUpdate = () => {
    if (rafRef.current) return;
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = null;
      const el = itemRef.current;
      if (!el) return;

      const { left, top, width, height } = el.getBoundingClientRect();
      const relativeX = (pointerRef.current.x - left) / width;
      const relativeY = (pointerRef.current.y - top) / height;
      const tiltX = (relativeY - 0.5) * 10;
      const tiltY = (relativeX - 0.5) * -10;

      el.style.transform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.95, 0.95, .95)`;
    });
  };

  const handleMouseMove = (e) => {
    pointerRef.current = { x: e.clientX, y: e.clientY };
    scheduleUpdate();
  };

  const handleMouseLeave = () => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    if (itemRef.current) itemRef.current.style.transform = "";
  };

  return (
    <div
      ref={itemRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
    >
      {children}
    </div>
  );
};

export default BentoTilt;
