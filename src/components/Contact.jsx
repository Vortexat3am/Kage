import { FaSteam, FaDiscord } from "react-icons/fa";
import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";
import { LINKS } from "../constants";

// Final wishlist call-to-action.
const Contact = () => {
  return (
    <section id="join" className="my-20 w-screen px-4 md:my-24 md:px-10">
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-coal py-20 text-bone md:py-24">
        {/* faint banner backdrop */}
        <img
          src="/img/banner.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 size-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/40" />

        {/* side fighter art */}
        <div className="absolute -left-16 top-1/2 hidden w-72 -translate-y-1/2 lg:block lg:left-10 lg:w-80">
          <img
            src="/img/bust-2.jpg"
            alt=""
            aria-hidden="true"
            className="kage-clip-2 w-full opacity-90"
          />
        </div>
        <div className="absolute -right-16 top-1/2 hidden w-72 -translate-y-1/2 lg:block lg:right-10 lg:w-80">
          <img
            src="/img/bust-5.jpg"
            alt=""
            aria-hidden="true"
            className="kage-clip-1 w-full opacity-90"
          />
        </div>

        <div className="relative z-10 flex flex-col items-center px-6 text-center">
          <p className="eyebrow mb-6">Releasing 2026 · Wishlist now</p>

          <AnimatedTitle
            title="become <br /> a leg<b>e</b>nd"
            containerClass="text-center"
          />

          <p className="mt-6 max-w-md text-bonedim">
            Add KAGE to your Steam wishlist and join the community to follow
            development from Polnoch.
          </p>

          <div className="mt-10 flex w-full max-w-xs flex-col items-stretch gap-3 sm:w-auto sm:max-w-none sm:flex-row sm:items-center sm:gap-4">
            <Button
              title="Wishlist on Steam"
              leftIcon={<FaSteam />}
              href={LINKS.steam}
              containerClass="!w-full justify-center sm:!w-auto"
            />
            <Button
              title="Join the Discord"
              leftIcon={<FaDiscord />}
              href={LINKS.discord}
              containerClass="!bg-transparent border border-bone/30 !w-full justify-center sm:!w-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
