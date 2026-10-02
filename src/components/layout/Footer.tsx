import type { MouseEvent, ReactNode } from "react";
import { IconChat, IconMail, IconPhone, IconPrivacy, IconQuestionCircle } from "../icons";
import NewsletterForm from "./NewsletterForm";
import FooterBotanicals from "./footer/FooterBotanicals";
import { InstagramGlyph, LeafFanMark, LinkedInGlyph, SproutIcon, XGlyph, YouTubeGlyph } from "./footer/FooterIcons";
import FooterPartners from "./footer/FooterPartners";
import { ABOUT_LINKS, PRODUCT_LINKS, RESOURCE_LINKS, SOCIAL_LINKS, SUPPORT_PHONE, type FooterLink } from "./footer/links";

// ─── Footer ────────────────────────────────────────────────────────────────
// Site footer: brand column, four link columns, the "Stay Updated" card and
// the government / partner strip. Link data lives in ./footer/links.ts.

type FooterProps = {
  /** Opens an app page; without it, page links fall back to plain anchors. */
  onNavigate?: (page: string) => void;
};

const LINK_CLASS =
  "rounded-sm text-[16px] leading-5 text-[#45555e] transition-colors hover:text-[#1d6a3f] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1d6a3f]";

function FooterNavLink({ link, onNavigate }: { link: FooterLink; onNavigate?: (page: string) => void }) {
  if (link.comingSoon) {
    return (
      <span className="text-[16px] leading-5 text-[#45555e]/75" aria-disabled="true">
        {link.label} <span className="text-[#45555e]/75">(Coming Soon)</span>
      </span>
    );
  }
  const { page } = link;
  const handleClick =
    page && onNavigate
      ? (e: MouseEvent<HTMLAnchorElement>) => {
          e.preventDefault();
          onNavigate(page);
        }
      : undefined;
  return (
    <a href={link.href ?? "#"} onClick={handleClick} className={LINK_CLASS}>
      {link.label}
    </a>
  );
}

function LinkColumn({ title, links, onNavigate }: { title: string; links: FooterLink[]; onNavigate?: (page: string) => void }) {
  return (
    <nav aria-label={title}>
      <h2 className="font-editorial text-[20px] font-bold leading-6 text-[#133d24]">{title}</h2>
      <ul className="mt-5 space-y-3 leading-5 lg:mt-[22px]">
        {links.map((link) => (
          <li key={link.label}>
            <FooterNavLink link={link} onNavigate={onNavigate} />
          </li>
        ))}
      </ul>
    </nav>
  );
}

function SupportRow({ icon, href, children }: { icon: ReactNode; href: string; children: ReactNode }) {
  return (
    <li>
      <a href={href} className={`group flex items-start gap-[18px] ${LINK_CLASS}`}>
        <span className="-mt-0.5 flex size-[26px] shrink-0 items-center justify-center [&>svg]:size-[26px]">{icon}</span>
        <span className="flex flex-col">{children}</span>
      </a>
    </li>
  );
}

const SOCIALS = [
  { label: "Ayur IP on X", href: SOCIAL_LINKS.x, icon: <XGlyph className="size-[19px]" /> },
  { label: "Ayur IP on LinkedIn", href: SOCIAL_LINKS.linkedin, icon: <LinkedInGlyph className="size-[19px]" /> },
  { label: "Ayur IP on YouTube", href: SOCIAL_LINKS.youtube, icon: <YouTubeGlyph className="size-[22px]" /> },
  { label: "Ayur IP on Instagram", href: SOCIAL_LINKS.instagram, icon: <InstagramGlyph className="size-[19px]" /> },
];

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="relative overflow-hidden bg-[#f3f6f1] font-sans">
      <FooterBotanicals />

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-[70px]">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 pt-14 sm:grid-cols-4 lg:grid-cols-[401fr_170fr_222fr_193fr_341fr] lg:gap-x-0 lg:gap-y-0 lg:pt-20">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-4 lg:col-span-1 lg:row-span-2 lg:pr-10">
            <a
              href="#top"
              onClick={(e) => {
                if (!onNavigate) return;
                e.preventDefault();
                onNavigate("Home");
              }}
              className="inline-flex items-center gap-[18px] rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1d6a3f]"
            >
              <LeafFanMark className="h-[54px] w-[61px] shrink-0 lg:h-[60px] lg:w-[68px]" />
              <span className="flex flex-col">
                <span className="text-[30px] font-bold leading-none tracking-[-0.01em] text-[#1c4a2c] lg:text-[34px]">IP-SAKTI</span>
                <span className="mt-1.5 text-[17px] leading-none text-[#4b5b63] lg:text-[19px]">AI for Ayurveda IP</span>
              </span>
            </a>

            <p className="mt-6 font-editorial text-[20px] italic leading-[29px] text-[#2d3d35] lg:text-[22px]">
              Preserving Traditional Wisdom.
              <br />
              Powering a Healthier Tomorrow.
            </p>
            <span aria-hidden="true" className="mt-5 block h-[2px] w-12 bg-[#1f4f30]" />

            <p className="mt-[22px] max-w-[345px] text-[16px] leading-[24.5px] text-[#4a5960]">
              An AI-powered platform to discover, protect and advance Ayurveda knowledge through trusted insights, patent guidance and
              research support.
            </p>

            <ul aria-label="Follow Ayur IP" className="mt-7 flex gap-4">
              {SOCIALS.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    aria-label={social.label}
                    className="flex size-12 items-center justify-center rounded-full bg-[#e6ede4] text-[#142a1c] transition-[background-color,color,transform] duration-200 hover:-translate-y-0.5 hover:bg-[#d8e5d4] hover:text-[#1d6a3f] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1d6a3f] motion-reduce:hover:translate-y-0"
                  >
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>

            <span aria-hidden="true" className="mt-7 block h-px w-11 bg-[#b9c6bc]" />
            <p className="mt-[22px] font-editorial text-[18px] italic leading-6 text-[#2d3d35] lg:text-[19px]">
              Ancient Knowledge. Brighter Tomorrows.
            </p>
          </div>

          <LinkColumn title="Product" links={PRODUCT_LINKS} onNavigate={onNavigate} />
          <LinkColumn title="Resources" links={RESOURCE_LINKS} onNavigate={onNavigate} />
          <LinkColumn title="About" links={ABOUT_LINKS} onNavigate={onNavigate} />

          {/* Help & Support — the sidebar's "Help & Support" item scrolls here. */}
          <div className="col-span-2 sm:col-span-1">
            <h2 id="help-support" tabIndex={-1} className="scroll-mt-6 font-editorial text-[20px] font-bold leading-6 text-[#133d24] outline-none">
              Help &amp; Support
            </h2>
            <ul className="mt-5 space-y-4 text-[#1a4028] lg:mt-[24px]">
              <SupportRow href="#" icon={<IconQuestionCircle />}>
                <span className="text-[#2a3a40]">Help Center</span>
              </SupportRow>
              <SupportRow href="#" icon={<IconMail />}>
                <span className="text-[#2a3a40]">Raise a Query</span>
              </SupportRow>
              <SupportRow href={`tel:${SUPPORT_PHONE.tel}`} icon={<IconPhone />}>
                <span className="whitespace-nowrap text-[#14211b]">{SUPPORT_PHONE.display}</span>
                <span className="mt-1.5 text-[13px] leading-4 text-[#55656c]">(Toll Free, Mon–Fri 9AM–6PM)</span>
              </SupportRow>
              <SupportRow href="#" icon={<IconChat />}>
                <span className="text-[#2a3a40]">Live Support</span>
              </SupportRow>
            </ul>
          </div>

          {/* Stay updated */}
          <section
            aria-labelledby="footer-newsletter"
            className="col-span-2 flex flex-col gap-6 rounded-[22px] bg-[#e9efe6] p-6 sm:col-span-4 sm:p-8 lg:col-span-4 lg:col-start-2 lg:mt-[38px] lg:flex-row lg:items-center lg:gap-10 lg:self-start lg:py-[26px] lg:pl-[30px] lg:pr-[30px]"
          >
            <div className="flex items-start gap-5 lg:flex-1 lg:gap-[34px]">
              <SproutIcon className="mt-1 size-10 shrink-0 lg:size-11" />
              <div>
                <h2 id="footer-newsletter" className="font-editorial text-[22px] font-bold leading-7 text-[#133d24]">
                  Stay Updated
                </h2>
                <p className="mt-2 max-w-[290px] text-[16px] leading-6 text-[#3c4a50]">
                  Get the latest updates on Ayurveda IP, policy changes and new features.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-[437px] lg:shrink-0">
              <NewsletterForm source="footer" />
              <p className="mt-3 flex items-center gap-2.5 pl-1 text-[13px] text-[#4a5960] [&>svg]:size-[19px] [&>svg]:shrink-0">
                <IconPrivacy />
                We respect your privacy. No spam, ever.
              </p>
            </div>
          </section>
        </div>

        <div className="mt-12 border-t border-[#cfd8cf] lg:-ml-[30px] lg:mt-9 lg:pl-[30px]">
          <FooterPartners />
        </div>
      </div>
    </footer>
  );
}
