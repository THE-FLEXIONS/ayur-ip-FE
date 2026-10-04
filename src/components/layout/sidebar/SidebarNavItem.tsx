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
      className={`group flex h-11 w-full items-center gap-3.5 rounded-[12px] px-3.5 text-left text-[15px] leading-none tracking-[-0.005em] text-[#16302b] transition-[background-color,color] duration-200 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ayur-green [@media(max-height:760px)]:h-10 ${
        active ? "bg-[#dce8d8] font-medium" : "hover:bg-[#ebf0e5]"
      } ${className}`}
      {...rest}
    >
      <Icon
        size={20}
        strokeWidth={active ? 2 : 1.75}
        className={`shrink-0 transition-[color,transform] duration-200 group-hover:scale-110 motion-reduce:group-hover:scale-100 ${
          active ? "text-[#155231]" : "text-[#3d5547] group-hover:text-[#1a4a2f]"
        }`}
      />
      <span className="min-w-0 flex-1 truncate py-1">{label}</span>
      {trailing}
    </button>
  );
}
