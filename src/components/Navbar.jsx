import { useEffect, useRef, useState } from "react";
import { FaSteam } from "react-icons/fa";
import { FiMenu, FiX, FiMusic } from "react-icons/fi";
import { useWindowScroll } from "react-use";
import gsap from "gsap";
import Button from "./Button";
import { LINKS } from "../constants";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "Combat", href: "#combat" },
  { label: "Roster", href: "#roster" },
  { label: "Village", href: "#village" },
  { label: "Media", href: "#media" },
];

const Navbar = () => {
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isIndicatorActive, setIsIndicatorActive] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const navContainerRef = useRef(null);
  const audioRef = useRef(null);

  const { y: currentScrollY } = useWindowScroll();

  useEffect(() => {
    if (currentScrollY === 0) {
      setIsNavVisible(true);
      navContainerRef.current.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      setIsNavVisible(false);
      setMenuOpen(false);
      navContainerRef.current.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollY) {
      setIsNavVisible(true);
      navContainerRef.current.classList.add("floating-nav");
    }
    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.25,
    });
  }, [isNavVisible]);

  const toggleAudio = () => {
    setIsAudioPlaying((p) => !p);
    setIsIndicatorActive((p) => !p);
  };

  useEffect(() => {
    if (isAudioPlaying && audioRef.current) {
      audioRef.current.play().catch(() => {});
    } else if (audioRef.current) {
      audioRef.current.pause();
    }
  }, [isAudioPlaying]);

  return (
    <div
      ref={navContainerRef}
      className="fixed inset-x-2 top-3 z-50 transition-all duration-700 sm:inset-x-6"
    >
      <header className="relative">
        <nav className="flex items-center justify-between px-4 py-3">
          {/* Brand */}
          <a href="#hero" className="flex items-center gap-3">
            <img src="/logo.png" alt="KAGE" className="h-7 w-auto md:h-9" />
            <span className="kanji-watermark hidden text-2xl opacity-70 md:inline">
              影
            </span>
          </a>

          {/* Right */}
          <div className="flex h-full items-center gap-4 md:gap-6">
            <div className="hidden items-center gap-7 md:flex">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="nav-link">
                  {item.label}
                </a>
              ))}
            </div>

            <Button
              title="Wishlist"
              leftIcon={<FaSteam />}
              href={LINKS.steam}
              containerClass="hidden sm:inline-flex !px-5 !py-2"
            />

            {/* Audio toggle */}
            <button
              onClick={toggleAudio}
              className="flex items-center gap-1.5 rounded-md px-2.5 py-2 transition-colors hover:bg-white/10"
              aria-label="Toggle music"
              title={isAudioPlaying ? "Mute music" : "Play music"}
            >
              <audio ref={audioRef} src="/audio/loop.mp3" loop className="hidden" />
              <FiMusic className="h-4 w-4" />
              <div className="flex items-center gap-0.5">
                {[1, 2, 3, 4].map((bar) => (
                  <div
                    key={bar}
                    style={{ "--animation-order": bar }}
                    className={`indicator-line ${isAudioPlaying ? "active" : ""}`}
                  />
                ))}
              </div>
            </button>

            {/* Hamburger (mobile only) */}
            <button
              onClick={() => setMenuOpen((p) => !p)}
              className="text-2xl text-bone md:hidden"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="floating-nav absolute inset-x-0 top-[calc(100%+0.5rem)] flex flex-col gap-1 p-4 md:hidden">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-md px-3 py-2.5 font-cond text-sm uppercase tracking-[0.18em] text-bone/80 transition-colors hover:bg-white/5 hover:text-bone"
              >
                {item.label}
              </a>
            ))}
            <Button
              title="Wishlist on Steam"
              leftIcon={<FaSteam />}
              href={LINKS.steam}
              containerClass="mt-2 !w-full justify-center"
            />
          </div>
        )}
      </header>
    </div>
  );
};

export default Navbar;
