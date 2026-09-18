import { useEffect } from "react";
import { FiX } from "react-icons/fi";
import { VIDEOS } from "../constants";

// Lightweight trailer player. The <video> only mounts (and loads) while open.
const TrailerModal = ({ open, onClose }) => {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/92 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        aria-label="Close trailer"
        className="absolute right-5 top-5 text-bone transition-colors hover:text-crimson"
      >
        <FiX className="text-3xl" />
      </button>

      <div
        className="relative aspect-video w-full max-w-5xl overflow-hidden rounded-lg border border-white/10 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <video
          src={VIDEOS.trailer}
          controls
          autoPlay
          playsInline
          preload="none"
          className="size-full bg-black object-contain"
        />
      </div>
    </div>
  );
};

export default TrailerModal;
