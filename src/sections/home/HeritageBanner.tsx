import { LeafBranch } from "../../components/ui/Botanicals";

export default function HeritageBanner() {
  return (
    <figure className="relative flex min-h-[132px] items-center overflow-hidden rounded-[20px] border border-[#e7e4d6] bg-[linear-gradient(100deg,#f8f7f0_0%,#f4f2e8_55%,#eeede0_100%)] shadow-[0_12px_32px_-28px_rgba(40,50,30,0.5)] sm:min-h-[180px] lg:min-h-[220px] lg:rounded-[26px]">
      <blockquote className="relative z-10 w-[60%] py-6 pl-5 pr-2 sm:w-[56%] sm:py-8 sm:pl-10 lg:pl-14">
        <p className="font-editorial text-[17px] leading-[1.25] tracking-[-0.01em] text-ayur-ink sm:text-[26px] lg:text-[34px] xl:text-[38px]">
          &ldquo;Protecting traditional knowledge for a healthier, fairer world.&rdquo;
        </p>
        <span aria-hidden="true" className="mt-4 block h-[3px] w-12 rounded-full bg-ayur-leaf sm:mt-6 sm:w-20" />
      </blockquote>

      {/* Botanical sprig and manuscript */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 w-[40%] sm:w-[44%]">
        <LeafBranch flowers className="absolute bottom-[-12%] right-[42%] h-[92%] w-auto rotate-[-40deg] sm:right-[36%] sm:h-[115%]" />
        <div className="absolute inset-y-[-6%] right-[-2%] flex w-[60%] max-w-[250px] sm:w-[50%] rotate-[3deg] flex-col items-center justify-center bg-[radial-gradient(ellipse_at_40%_35%,#f5e9cc_0%,#ecdcb5_55%,#dcc592_100%)] px-2 text-center shadow-[inset_0_0_22px_rgba(120,80,20,0.28),-6px_0_18px_-8px_rgba(80,60,20,0.35)] [clip-path:polygon(2%_0,98%_1%,100%_12%,98%_30%,100%_52%,97%_74%,100%_92%,97%_100%,3%_99%,0_86%,2%_64%,0_40%,3%_22%,0_6%)] sm:right-[2%]">
          <div className="absolute inset-[9%_8%] rounded-sm border border-[#b99a5c]/50" />
          <p lang="sa" className="font-deva text-[17px] leading-[1.25] text-[#3d2c12] sm:text-[26px] lg:text-[32px]">
            सर्वे सन्तु
            <br />
            निरामयाः
          </p>
          <p className="mt-1.5 font-editorial text-[8.5px] leading-[1.3] text-[#4a3818] sm:mt-3 sm:text-[12px] lg:text-[14px]">
            Ancient Wisdom
            <br />
            Modern Solutions
          </p>
        </div>
      </div>
      <figcaption className="sr-only">
        Sanskrit: Sarve santu niramayah — may all be free from illness. Ancient wisdom, modern solutions.
      </figcaption>
    </figure>
  );
}
