import type { ButtonHTMLAttributes, ComponentType, ReactNode, SVGProps } from "react";

type SidebarNavItemProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon: ComponentType<SVGProps<SVGSVGElement> & { size?: number }>;
  label: string;
  active?: boolean;
  /** Optional element on the right, e.g. a chevron. */
  trailing?: ReactNode;
};

/** One sidebar row: icon, label and an optional trailing indicator. */
export default function SidebarNavItem({ icon: Icon, label, active = false, trailing, className = "", ...rest }: SidebarNavItemProps) {
  return (
    <button
      type="button"
      aria-current={active ? "page" : undefined}
      className={`group flex h-12 w-full items-center gap-[22px] rounded-[14px] px-4 text-left text-[16.5px] leading-none tracking-[-0.005em] text-[#16302b] transition-colors duration-200 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ayur-green sm:text-[17px] [@media(max-height:860px)]:h-11 [@media(min-height:900px)]:h-[52px] ${
        active ? "bg-[#dce8d8]" : "hover:bg-[#ebf0e5]"
      } ${className}`}
      {...rest}
    >
      <Icon size={26} strokeWidth={1.6} className="shrink-0 text-[#1a4a2f]" />
      <span className="min-w-0 flex-1 truncate py-1">{label}</span>
      {trailing}
    </button>
  );
}
