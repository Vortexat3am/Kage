import { FaDiscord, FaSteam } from "react-icons/fa6";
import { LINKS } from "../constants";

const socials = [
  { href: LINKS.discord, icon: <FaDiscord />, label: "Discord" },
  { href: LINKS.steam, icon: <FaSteam />, label: "Steam" },
];

const tags = ["Multiplayer", "Anime", "Looter Shooter", "Bullet Hell", "Co-op"];

const Footer = () => {
  return (
    <footer className="w-screen border-t border-white/10 bg-ink text-bone">
      <div className="container mx-auto px-6 py-16 md:px-10">
        <div className="flex flex-col gap-12 md:flex-row md:justify-between">
          {/* Brand */}
          <div className="max-w-sm">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="KAGE" className="h-8 w-auto" />
              <span className="kanji-watermark text-2xl opacity-70">影</span>
            </div>
            <p className="mt-4 text-sm text-bonedim">
              Anime co-op action. Shout your technique, hunt the bosses, upgrade
              your village, and become a legend.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {tags.map((t) => (
                <span
                  key={t}
                  className="rounded-sm border border-white/10 bg-coal px-2.5 py-1 font-cond text-[11px] uppercase tracking-wider text-bonedim"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Meta */}
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            <div>
              <p className="font-cond text-xs uppercase tracking-[0.28em] text-crimson">
                Developer
              </p>
              <p className="mt-3 text-sm text-bonedim">Polnoch</p>
              <p className="mt-1 text-sm text-bonedim">Publisher: Polnoch</p>
              <p className="mt-1 text-sm text-bonedim">Release: 2026</p>
            </div>
            <div>
              <p className="font-cond text-xs uppercase tracking-[0.28em] text-crimson">
                Explore
              </p>
              <ul className="mt-3 space-y-2 text-sm text-bonedim">
                <li><a href="#combat" className="hover:text-bone">Combat</a></li>
                <li><a href="#roster" className="hover:text-bone">Roster</a></li>
                <li><a href="#village" className="hover:text-bone">Village</a></li>
                <li><a href="#media" className="hover:text-bone">Media</a></li>
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <p className="font-cond text-xs uppercase tracking-[0.28em] text-crimson">
                Follow
              </p>
              <div className="mt-3 flex gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="flex-center size-10 rounded-sm border border-white/10 bg-coal text-lg text-bonedim transition-colors hover:border-crimson hover:text-crimson"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-ash md:flex-row">
          <p>&copy; 2026 Polnoch. All rights reserved.</p>
          <p>
            <a href="#" className="hover:text-bone">Privacy Policy</a>
            <span className="mx-2">·</span>
            <a href="/press-kit.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-bone">Press Kit</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
