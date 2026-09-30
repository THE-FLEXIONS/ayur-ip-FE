import heroMortar from "../../imports/hero-mortar.jpg";
import { LeafIcon, ShieldCheckIcon, UsersIcon } from "../../components/ui/LineIcons";

const TRUST_ITEMS = [
  { icon: LeafIcon, label: "Trusted Laws" },
  { icon: ShieldCheckIcon, label: "Authoritative Sources" },
  { icon: UsersIcon, label: "For Innovators, Researchers & More" },
];

export default function HeroIntro() {
  return (
    <div className="relative mt-6 grid grid-cols-[minmax(0,1fr)_40%] grid-rows-[auto_auto_auto_1fr_auto] gap-x-3 sm:mt-10 sm:grid-cols-[minmax(0,1fr)_38%] sm:gap-x-6 lg:mt-12 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:gap-x-10">
      <p className="col-span-2 row-start-1 animate-rise justify-self-start rounded-full bg-[#e9eae1]/85 px-3.5 py-2 text-[9.5px] font-medium uppercase tracking-[0.18em] min-[400px]:tracking-[0.24em] text-[#646b63] sm:px-5 sm:text-[11.5px] sm:tracking-[0.3em] lg:col-span-1 lg:self-start">
        Ancient Wisdom <span aria-hidden="true" className="mx-1.5 inline-block translate-y-[-0.5px] tracking-normal">→</span>
        <span className="sr-only">to</span> Modern Protection
      </p>

      <h1 className="relative z-10 col-span-2 row-start-2 mt-4 animate-rise font-editorial text-[28px] font-semibold leading-[1.1] tracking-[-0.015em] text-ayur-ink [animation-delay:80ms] min-[400px]:text-[30px] sm:mt-6 sm:text-[40px] md:text-[46px] lg:col-span-1 lg:text-[48px] xl:text-[58px] 2xl:text-[62px]">
        Your Guide to
        <br />
        Ayurveda, IPR and Beyond
      </h1>

      <p className="col-start-1 row-start-3 mt-2.5 animate-rise text-[17px] font-light leading-snug tracking-[-0.005em] text-[#3a4441] [animation-delay:160ms] sm:mt-4 sm:text-[22px] lg:text-[24px] xl:text-[27px]">
        Ask. Explore. Get Cited Answers.
      </p>

      <figure className="relative col-start-2 row-span-2 row-start-3 -mt-3 animate-fade self-start justify-self-end [animation-delay:200ms] sm:-mt-12 sm:row-span-3 lg:row-span-4 lg:row-start-1 lg:-mt-6 lg:w-full lg:max-w-[460px]">
        <img
          src={heroMortar}
          alt="Wooden mortar and pestle surrounded by fresh Ayurvedic herbs"
          width={640}
          height={720}
          className="h-auto w-full mix-blend-multiply [mask-image:radial-gradient(ellipse_50%_52%_at_52%_50%,#000_45%,transparent_98%)]"
        />
      </figure>

      <p className="col-start-1 row-start-4 mt-3 animate-rise self-start font-hand text-[19px] leading-[1.15] text-ayur-leaf [animation-delay:260ms] -rotate-3 sm:text-[24px] lg:col-start-2 lg:row-start-5 lg:-mt-10 lg:justify-self-end lg:self-start lg:pr-6 lg:text-[27px] xl:text-[30px]">
        India&rsquo;s heritage.
        <br />
        <span className="ml-3">A healthier tomorrow.</span>
      </p>

      <ul
        aria-label="Why AyurIP"
        className="col-span-2 row-start-5 mt-6 grid animate-rise grid-cols-3 gap-2 [animation-delay:300ms] sm:col-span-1 sm:col-start-1 sm:mt-8 sm:max-w-[560px] sm:self-end lg:col-start-1 lg:row-span-2 lg:row-start-4 lg:mt-12 lg:self-start"
      >
        {TRUST_ITEMS.map(({ icon: Icon, label }) => (
          <li key={label} className="flex flex-col items-center gap-2 text-center">
            <Icon size={34} strokeWidth={1.4} className="text-ayur-leaf sm:size-10" />
            <span className="max-w-[11rem] text-[12px] leading-[1.35] text-[#2d3733] sm:text-[14px] lg:text-[15px]">{label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
