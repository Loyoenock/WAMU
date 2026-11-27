import React from 'react';
import {
  FOCUS_RING_DARK,
  WAMU_LEGAL_NAME,
  WAMU_PHONE_LINK,
  WAMU_PHONE_NUMBER,
  WAMU_WHATSAPP_NUMBER,
  waLink,
} from '../lib/siteConfig';

type FooterLink = { label: string; href: string };

const FOOTER_COLUMNS: { title: string; links: FooterLink[] }[] = [
  {
    title: 'Explore',
    links: [
      { label: 'Home', href: '/' },
      { label: 'Solutions', href: '/#solutions' },
      { label: 'How It Works', href: '/#how-it-works' },
      { label: 'Who We Serve', href: '/#who-we-serve' },
      { label: 'About', href: '/#difference' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'Payments', href: '/#solutions' },
      { label: 'Savings', href: '/#ecosystem' },
      { label: 'Group Contributions', href: '/collections' },
      { label: 'SACCO Management', href: '/#ecosystem' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'FAQs', href: '/faq' },
      { label: 'Collections', href: '/collections' },
      { label: 'Contact', href: '/#contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy-policy.html' },
      { label: 'Terms and Conditions', href: '/terms-and-conditions.html' },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-[#0D1A12] text-white">
      <div className="mx-auto max-w-[1200px] px-4 pt-12 pb-[max(3rem,env(safe-area-inset-bottom))] min-[375px]:px-6 sm:pt-16 md:px-10 lg:px-16 2xl:max-w-[1340px]">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.2fr_2fr] lg:gap-14">
          {/* Brand Column */}
          <div className="max-w-[320px]">
            <a href="/" className={`inline-flex items-center gap-2.5 rounded-md ${FOCUS_RING_DARK}`}>
              <img
                src="/wamu-mark.webp"
                alt="WAMU"
                width={28}
                height={28}
                className="h-7 w-7 rounded-[7px]"
              />
              <span className="font-editorial text-[16px] font-bold tracking-[0.18em] text-white">
                WAMU
              </span>
            </a>
            <p className="mt-4 text-[14px]/[22px] text-[#C3E8D6]">
              WAMU brings financial services together through the convenience of WhatsApp.
            </p>
            <div className="mt-5 space-y-1.5 text-[12.5px] text-[#9FBEAA]">
              <p className="font-semibold text-[#EBF6F0]">{WAMU_LEGAL_NAME}</p>
              <p>
                Phone:{' '}
                <a
                  href={WAMU_PHONE_LINK}
                  className={`text-[#5DCAA5] underline-offset-2 hover:underline ${FOCUS_RING_DARK}`}
                >
                  {WAMU_PHONE_NUMBER}
                </a>
              </p>
              <p>
                WhatsApp:{' '}
                <a
                  href={waLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-[#5DCAA5] underline-offset-2 hover:underline ${FOCUS_RING_DARK}`}
                >
                  {WAMU_WHATSAPP_NUMBER}
                </a>
              </p>
            </div>
          </div>

          {/* 4 Navigation Columns (Explore, Services, Resources, Legal) */}
          <div className="grid grid-cols-1 gap-7 min-[360px]:grid-cols-2 sm:grid-cols-4 sm:gap-8">
            {FOOTER_COLUMNS.map((col) => (
              <div key={col.title}>
                <h3 className="text-[12.5px] font-semibold uppercase tracking-[0.1em] text-white">
                  {col.title}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className={`text-[13.5px] text-[#9FBEAA] transition-colors hover:text-[#5DCAA5] ${FOCUS_RING_DARK} rounded-sm`}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-[12px] text-[#9FBEAA] sm:flex-row sm:items-center">
          <p>&copy; 2026 {WAMU_LEGAL_NAME}. All rights reserved.</p>
          <p>WhatsApp-first financial services for Uganda.</p>
        </div>
      </div>
    </footer>
  );
}
