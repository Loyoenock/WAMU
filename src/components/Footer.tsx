import React from 'react';
import { WaMark } from './WaMark';

const FOCUS_RING =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5DCAA5] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0C1E12]';

type FootLink = { label: string; href: string; muted?: boolean };

const COLUMNS: { header: string; links: FootLink[] }[] = [
  {
    header: 'Platform',
    links: [
      { label: 'Utilities', href: '/#utilities' },
      { label: 'Savings & Groups', href: '/#savings-and-groups' },
      { label: 'VSLAs', href: '/#who-we-serve' },
      { label: 'SACCOs', href: '/#who-we-serve' },
      { label: 'Investment Clubs', href: '/#who-we-serve' },
      { label: 'Merry-go-Round', href: '/#who-we-serve' },
      { label: 'Collections', href: '/collections' },
      { label: 'Security', href: '/#security', muted: true },
    ],
  },
  {
    header: 'Company',
    links: [
      { label: 'About WAMU', href: '/' },
      { label: 'Who We Serve', href: '/#who-we-serve' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Contact', href: 'https://wa.me/256788003344' },
    ],
  },
  {
    header: 'Get Started',
    links: [
      { label: 'Register Your Group', href: 'https://wa.me/256788003344' },
      { label: 'Message on WhatsApp', href: 'https://wa.me/256788003344' },
      { label: 'Pricing & Waitlist', href: '/pricing' },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#0C1E12]">
      <WaMark tone="dark" className="right-[40px] top-[24px] h-[104px] w-[104px]" />
      <WaMark tone="dark" className="left-[24px] bottom-[36px] h-[84px] w-[84px]" />

      <div className="relative mx-auto flex max-w-[1280px] flex-col gap-12 px-6 py-[60px] md:px-12 lg:flex-row lg:justify-between lg:px-20 lg:pb-10">
        <div className="flex w-full flex-col gap-[14px] lg:w-[280px]">
          <div className="flex items-center gap-[8px]">
            <img
              src="/wamu-mark.png"
              alt="WAMU"
              width={26}
              height={26}
              className="h-[26px] w-[26px] rounded-[6px]"
            />
            <span className="font-[Fraunces,ui-serif,Georgia,serif] text-[15px] font-bold tracking-[2.5px] text-white">
              WAMU
            </span>
          </div>
          <p className="text-[13px]/[21px] text-[#9FBEAA]">
            Utility payments and savings tools for Uganda's communities.
          </p>
          <p className="text-[11px] font-medium text-[#8AB89E]">WAMU PAY (UGANDA) LIMITED</p>
        </div>

        <div className="grid grid-cols-2 gap-10 md:grid-cols-3 lg:flex lg:gap-[64px]">
          {COLUMNS.map((col) => (
            <div key={col.header} className="flex flex-col gap-[14px] lg:w-[160px]">
              <h3 className="text-[12px] font-bold tracking-[0.5px] text-white">{col.header}</h3>
              {col.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={cnLink(link.muted)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="relative h-px w-full bg-[#1E3A22]" />

      <div className="relative mx-auto flex max-w-[1280px] flex-col gap-4 px-6 py-6 md:px-12 lg:flex-row lg:items-center lg:justify-between lg:px-20">
        <p className="text-[12px] text-[#8AB89E]">
          &copy; 2026 WAMU PAY (UGANDA) LIMITED. All rights reserved.
        </p>
        <div className="flex flex-wrap gap-[28px]">
          <a
            id="footer-privacy-link"
            href="/privacy-policy.html"
            className={`text-[12px] text-[#8AB89E] transition-colors hover:text-[#C3E8D6] ${FOCUS_RING} rounded-sm`}
          >
            Privacy Policy
          </a>
          <a
            id="footer-terms-link"
            href="/terms-and-conditions.html"
            className={`text-[12px] text-[#8AB89E] transition-colors hover:text-[#C3E8D6] ${FOCUS_RING} rounded-sm`}
          >
            Terms of Use
          </a>
          <a
            href="/#security"
            className={`text-[12px] text-[#8AB89E] transition-colors hover:text-[#C3E8D6] ${FOCUS_RING} rounded-sm`}
          >
            Security
          </a>
        </div>
      </div>
    </footer>
  );
}

function cnLink(muted?: boolean) {
  const base = `text-[13px] transition-colors rounded-sm ${FOCUS_RING}`;
  return muted
    ? `${base} text-[#F4FBF7] opacity-[0.85] hover:opacity-100`
    : `${base} text-[#9FBEAA] hover:text-[#C3E8D6]`;
}
