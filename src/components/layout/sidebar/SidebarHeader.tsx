import type { Ref } from "react";
import { AyurLeafMark } from "../../ui/Botanicals";
import { CloseIcon } from "../../ui/LineIcons";

type SidebarHeaderProps = {
  titleId: string;
  onClose: () => void;
  closeRef?: Ref<HTMLButtonElement>;
};

/** Dark green brand band at the top of the sidebar. */
export default function SidebarHeader({ titleId, onClose, closeRef }: SidebarHeaderProps) {
  return (
    <div className="relative z-10 flex shrink-0 items-start gap-3 px-5 pb-5 pt-6 sm:gap-4 sm:px-6 sm:pb-6 sm:pt-7 [@media(max-height:860px)]:pb-4 [@media(max-height:860px)]:pt-4">
      <AyurLeafMark tone="light" className="size-[62px] shrink-0 drop-shadow-[0_4px_10px_rgba(0,0,0,0.25)] sm:size-[70px]" />
      <div className="min-w-0 pt-1">
        <p id={titleId} className="font-editorial text-[30px] font-semibold leading-none tracking-[-0.01em] text-white sm:text-[34px]">
          AyurIP
        </p>
        <p className="mt-2 text-[13.5px] leading-[1.3] text-white/90 sm:text-[14.5px]">
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
        className="-mr-2 ml-auto flex size-11 shrink-0 items-center justify-center rounded-full text-white/95 transition-[background-color,transform] duration-200 hover:bg-white/10 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-white"
      >
        <CloseIcon size={28} strokeWidth={1.5} />
      </button>
    </div>
  );
}
