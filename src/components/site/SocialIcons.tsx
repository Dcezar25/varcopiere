import type { SVGProps } from "react";

export const FacebookIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06C2 17.08 5.66 21.24 10.44 22v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.91h-2.34V22C18.34 21.24 22 17.08 22 12.06Z" />
  </svg>
);

export const InstagramIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

export const TikTokIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M19.6 8.32a6.34 6.34 0 0 1-3.7-1.18 6.32 6.32 0 0 1-2.45-4.14h-3.2v12.07a2.62 2.62 0 1 1-1.86-2.51v-3.27a5.86 5.86 0 1 0 5.06 5.8V9.9a9.5 9.5 0 0 0 6.15 2.16V8.84c-.01 0-.01-.52 0-.52Z" />
  </svg>
);

export type SocialPlatform = "Facebook" | "Instagram" | "TikTok";

export const SOCIAL_LINKS: {
  platform: SocialPlatform;
  label: string;
  href: string;
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
}[] = [
  {
    platform: "Facebook",
    label: "Facebook",
    href: "https://www.facebook.com/DrChirurgORLMarinVOICA/",
    Icon: FacebookIcon,
  },
  {
    platform: "Instagram",
    label: "Instagram",
    href: "https://www.instagram.com/dr.marin_voica?igsh=MWxpdm94eXBmYXl2dw==",
    Icon: InstagramIcon,
  },
  {
    platform: "TikTok",
    label: "TikTok",
    href: "https://www.tiktok.com/@drmarinvoica?_r=1&_t=ZN-95ycR3VUULe",
    Icon: TikTokIcon,
  },
];
