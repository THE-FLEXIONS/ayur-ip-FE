import { LeafBranch, MistRidges } from "../../components/ui/Botanicals";

/**
 * Decorative atmosphere for the home hero: ivory base, misty ridges and
 * botanical branches bleeding off the page edges. Clipped to itself so the
 * branches never cause horizontal scrolling.
 */
export default function HeroBackdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* soft sage and warm light washes */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_40%_at_70%_8%,rgba(214,226,210,0.65),transparent_70%),radial-gradient(ellipse_60%_30%_at_10%_30%,rgba(226,233,219,0.6),transparent_70%),radial-gradient(ellipse_80%_40%_at_50%_100%,rgba(236,238,226,0.9),transparent_70%)]" />

      {/* misty ridges behind the headline */}
      <MistRidges className="absolute left-1/2 top-[40px] h-[300px] w-[1500px] -translate-x-1/2 animate-fade opacity-70 sm:top-[70px] sm:h-[380px] lg:top-[50px] lg:h-[460px] lg:w-[max(1800px,110vw)] [mask-image:linear-gradient(180deg,#000_45%,transparent_100%)]" />

      {/* top-right branch hanging behind the account controls */}
      <LeafBranch className="absolute right-[-52px] top-[-24px] w-[92px] -scale-y-100 rotate-[12deg] opacity-90 sm:right-[-48px] sm:top-[-10px] sm:w-[140px] lg:right-[-30px] lg:top-[70px] lg:w-[220px]" />
      {/* left-edge branch beside the ask box */}
      <LeafBranch className="absolute left-[-58px] top-[500px] w-[110px] -scale-x-100 rotate-[8deg] opacity-90 sm:top-[560px] sm:w-[150px] lg:left-[-40px] lg:top-[600px] lg:w-[200px]" />
    </div>
  );
}
