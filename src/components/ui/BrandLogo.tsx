import { LOGO_ASPECT, logoUrl } from "../../config/brand";

type BrandLogoProps = {
  /** Largest height the logo is shown at, in CSS pixels; picks the image size. */
  size: number;
  /** Sizing classes, e.g. "h-10 w-auto sm:h-14". */
  className?: string;
  /** Leave empty when the brand name is written next to the logo. */
  alt?: string;
};

/** The AyurIP logo mark (no wordmark), served from Cloudinary at 1x/2x/3x. */
export default function BrandLogo({ size, className = "", alt = "" }: BrandLogoProps) {
  const height = Math.round(size);
  return (
    <img
      src={logoUrl(height * 2)}
      srcSet={`${logoUrl(height)} 1x, ${logoUrl(height * 2)} 2x, ${logoUrl(height * 3)} 3x`}
      alt={alt}
      width={Math.round(height * LOGO_ASPECT)}
      height={height}
      decoding="async"
      draggable={false}
      className={`shrink-0 select-none object-contain ${className}`}
    />
  );
}
