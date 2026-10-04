import type { Ref } from "react";
import BrandLogo from "../../ui/BrandLogo";
import { CloseIcon } from "../../ui/LineIcons";

type SidebarHeaderProps = {
  titleId: string;
  onClose: () => void;
  closeRef?: Ref<HTMLButtonElement>;
};

/** Dark green brand band at the top of the sidebar. */
export default function SidebarHeader({ titleId, onClose, closeRef }: SidebarHeaderProps) {
  return (
    <div className="relative z-10 flex shrink-0 items-center gap-3 px-4 pb-4 pt-5 [@media(max-height:760px)]:pb-3 [@media(max-height:760px)]:pt-4">
      {/* Light tile so the dark green of the logo reads on the green band. */}
      <span className="flex size-12 shrink-0 items-center justify-center rounded-[14px] bg-[#f6f5ee] shadow-[0_6px_16px_-6px_rgba(0,0,0,0.4)]">
        <BrandLogo size={38} className="h-[38px] w-auto" />
      </span>
      <div className="min-w-0">
        <p id={titleId} className="font-editorial text-[23px] font-semibold leading-none tracking-[-0.01em] text-white">
          AyurIP
        </p>
        <p className="mt-1.5 text-[12px] leading-[1.3] text-white/85">
          Tradition Protected
          <br />
          Innovation Empowered
        </p>
      </div>
      <button
        ref={closeRef}
        type="button"
        onClick={onClose}
        aria-label="Close menu"
        className="-mr-1.5 ml-auto flex size-10 shrink-0 self-start items-center justify-center rounded-full text-white/95 transition-[background-color,transform] duration-200 hover:bg-white/10 group active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-white"
      >
        <CloseIcon size={22} strokeWidth={1.7} className="transition-transform duration-300 group-hover:rotate-90" />
      </button>
    </div>
  );
}
