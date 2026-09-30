import type { ReactNode, SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function Icon({ size = 24, children, strokeWidth = 1.6, ...rest }: IconProps & { children: ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {children}
    </svg>
  );
}

export function SearchIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="m20 20-4.6-4.6" />
    </Icon>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M4.5 12h15M13.5 6l6 6-6 6" />
    </Icon>
  );
}

export function ChevronRightIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="m9.5 6 6 6-6 6" />
    </Icon>
  );
}

export function ChevronDownIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="m6 9.5 6 6 6-6" />
    </Icon>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="m5 12.5 4.5 4.5L19 7.5" />
    </Icon>
  );
}

export function BellIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M6 16.5V11a6 6 0 0 1 12 0v5.5l1.5 2h-15l1.5-2Z" />
      <path d="M10 20.5a2.2 2.2 0 0 0 4 0" />
    </Icon>
  );
}

/** Leaf with a central vein — used for "Trusted Laws", ABS and heritage accents. */
export function LeafIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M5 19c0-8 5.5-13.5 14.5-14-.3 9-5.8 14.5-14 14.5" />
      <path d="M5 19 14 10" />
      <path d="M9.2 14.8H13M11.6 12.4l.2-3.2" />
    </Icon>
  );
}

export function ShieldCheckIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M12 3 4.5 6v5.5c0 4.6 3.2 8.3 7.5 9.5 4.3-1.2 7.5-4.9 7.5-9.5V6L12 3Z" />
      <path d="m8.8 12.2 2.3 2.3 4.3-4.6" />
    </Icon>
  );
}

export function UsersIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx="12" cy="7" r="2.8" />
      <circle cx="5.5" cy="9" r="2.2" />
      <circle cx="18.5" cy="9" r="2.2" />
      <path d="M7.2 19.5v-1a4.8 4.8 0 0 1 9.6 0v1" />
      <path d="M2 18.5v-.5a3.5 3.5 0 0 1 4.6-3.3M22 18.5v-.5a3.5 3.5 0 0 0-4.6-3.3" />
    </Icon>
  );
}

/** Four linked nodes — reads as "deep research" / multi-source reasoning. */
export function ResearchIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx="7" cy="7" r="3" />
      <circle cx="17" cy="7" r="3" />
      <circle cx="7" cy="17" r="3" />
      <rect x="14" y="14" width="6" height="6" rx="1.6" />
    </Icon>
  );
}

export function DocumentIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z" />
      <path d="M14 3v5h5M8.5 12.5h7M8.5 16h7M8.5 9h3" />
    </Icon>
  );
}

export function BulbIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M9 17.5h6M9.8 21h4.4" />
      <path d="M12 3a6 6 0 0 0-3.6 10.8c.6.5 1 1.2 1 2V17.5h5.2v-1.7c0-.8.4-1.5 1-2A6 6 0 0 0 12 3Z" />
    </Icon>
  );
}

export function DatabaseIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <ellipse cx="12" cy="5.5" rx="7" ry="2.8" />
      <path d="M5 5.5v13c0 1.5 3.1 2.8 7 2.8s7-1.3 7-2.8v-13" />
      <path d="M5 12c0 1.5 3.1 2.8 7 2.8s7-1.3 7-2.8" />
    </Icon>
  );
}

export function GlobeIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.6 3.7 5.6 3.7 9s-1.2 6.4-3.7 9c-2.5-2.6-3.7-5.6-3.7-9S9.5 5.6 12 3Z" />
    </Icon>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </Icon>
  );
}

/** Solid house used for the active "Home" item. */
export function HomeFilledIcon({ size = 24, ...rest }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" focusable="false" {...rest}>
      <path
        fill="currentColor"
        d="M11.3 2.6a1.1 1.1 0 0 1 1.4 0l8.4 7.1c.8.7.3 2-.7 2H19v7.6c0 .9-.7 1.7-1.6 1.7h-3.2v-5.3c0-.6-.5-1.1-1.1-1.1h-2.2c-.6 0-1.1.5-1.1 1.1V21H6.6c-.9 0-1.6-.8-1.6-1.7v-7.6H3.6c-1 0-1.5-1.3-.7-2l8.4-7.1Z"
      />
    </svg>
  );
}

/** Speech bubble with a check — "New Query". */
export function ChatQueryIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M5.5 4h13A2.5 2.5 0 0 1 21 6.5v8a2.5 2.5 0 0 1-2.5 2.5H10l-4.2 3.3c-.4.3-.8 0-.8-.4V17h.5A2.5 2.5 0 0 1 3 14.5v-8A2.5 2.5 0 0 1 5.5 4Z" />
      <path d="m8.8 9.2 3.2 3 3.2-3" />
    </Icon>
  );
}

export function FlaskIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M9 3h6M10 3v5.6L4.6 18.3A1.8 1.8 0 0 0 6.2 21h11.6a1.8 1.8 0 0 0 1.6-2.7L14 8.6V3" />
      <path d="M7.2 14h9.6" />
      <circle cx="10.5" cy="17" r="0.6" fill="currentColor" />
      <circle cx="13.8" cy="16.2" r="0.5" fill="currentColor" />
    </Icon>
  );
}

export function BookmarkIcon({ filled = false, ...props }: IconProps & { filled?: boolean }) {
  return (
    <Icon {...props}>
      <path d="M6.5 3.5h11a1 1 0 0 1 1 1V21l-6.5-4.6L5.5 21V4.5a1 1 0 0 1 1-1Z" fill={filled ? "currentColor" : "none"} />
    </Icon>
  );
}

export function ClockIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5.2l3.4 2.3" />
    </Icon>
  );
}

/** 文 / A translation glyph — "Language". */
export function TranslateIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M3 5.5h9M7.5 3.5v2M10 5.5c-.6 3.6-3 6.6-6.5 8.2M5.6 8.6c1 2 2.6 3.6 4.6 4.6" />
      <path d="m12 21 4.5-10 4.5 10M13.6 17.5h5.8" />
    </Icon>
  );
}

export function GearIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M10.3 3.2a1 1 0 0 1 1-.7h1.4a1 1 0 0 1 1 .7l.4 1.7c.6.2 1.1.5 1.6.9l1.7-.5a1 1 0 0 1 1.1.4l.7 1.2a1 1 0 0 1-.1 1.2l-1.2 1.3a6.6 6.6 0 0 1 0 1.8l1.2 1.3a1 1 0 0 1 .1 1.2l-.7 1.2a1 1 0 0 1-1.1.4l-1.7-.5c-.5.4-1 .7-1.6.9l-.4 1.7a1 1 0 0 1-1 .7h-1.4a1 1 0 0 1-1-.7l-.4-1.7c-.6-.2-1.1-.5-1.6-.9l-1.7.5a1 1 0 0 1-1.1-.4l-.7-1.2a1 1 0 0 1 .1-1.2l1.2-1.3a6.6 6.6 0 0 1 0-1.8L4.5 8.1a1 1 0 0 1-.1-1.2l.7-1.2a1 1 0 0 1 1.1-.4l1.7.5c.5-.4 1-.7 1.6-.9l.4-1.7Z" />
      <circle cx="12" cy="12" r="3" />
    </Icon>
  );
}

export function HelpCircleIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M9.6 9.3a2.5 2.5 0 0 1 4.8 1c0 1.7-2.4 2.2-2.4 3.7" />
      <circle cx="12" cy="17.2" r="0.7" fill="currentColor" stroke="none" />
    </Icon>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M5 5l14 14M19 5 5 19" />
    </Icon>
  );
}

export function TrashIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M4 7h16M9.5 7V4.5h5V7M6.5 7l.8 12.2a1.5 1.5 0 0 0 1.5 1.3h6.4a1.5 1.5 0 0 0 1.5-1.3L17.5 7" />
    </Icon>
  );
}
