import React from 'react';
import { Zap, Users, HeartHandshake, ShieldCheck, ArrowUpRight, type LucideIcon } from 'lucide-react';

interface AudienceCardItem {
  id: string;
  title: string;
  description: string;
  href: string;
  Icon: LucideIcon;
  badge: string;
}

const AUDIENCE_CARDS: readonly AudienceCardItem[] = [
  {
    id: 'utilities',
    title: 'Utilities',
    description:
      'Pay UEDCL electricity, NWSC water, airtime, data bundles, Pay TV and taxes directly from your WhatsApp chat.',
    href: '#utilities',
    Icon: Zap,
    badge: 'Everyday bills',
  },
  {
    id: 'savings-groups',
    title: 'Savings Groups',
    description:
      'Run your VSLA, SACCO, investment club or merry-go-round with automated mobile money contributions and shared ledgers.',
    href: '#savings-and-groups',
    Icon: Users,
    badge: 'VSLAs & SACCOs',
  },
  {
    id: 'collections',
    title: 'Collections (Weddings & Funerals)',
    description:
      'Set a clear target for kwanjula, weddings, burials or community fundraisers with pledge tracking and multi-approver payouts.',
    href: '#collections',
    Icon: HeartHandshake,
    badge: 'Community goals',
  },
  {
    id: 'security-records',
    title: 'Security & Records',
    description:
      'Every member is identity-verified, payments move on licensed MTN MoMo and Airtel Money rails, and ledgers are tamper-resistant.',
    href: '#security',
    Icon: ShieldCheck,
    badge: 'Verified & audited',
  },
];

export function WamuAudienceCards() {
  return (
    <section
      aria-labelledby="wamu-pillars-heading"
      className="relative overflow-hidden bg-[#D9F0E3] px-6 py-16 md:px-12 md:py-20 lg:px-20"
    >
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-10 flex flex-col items-start justify-between gap-4 md:mb-12 md:flex-row md:items-end">
          <div className="max-w-[560px]">
            <span className="text-[11px] font-bold uppercase tracking-[2px] text-[#0F6E56]">
              BUILT FOR EVERYDAY UGANDA
            </span>
            <h2
              id="wamu-pillars-heading"
              className="mt-2.5 font-[Fraunces,ui-serif,Georgia,serif] text-[28px]/[34px] font-bold text-[#0D2016] md:text-[36px]/[42px]"
            >
              One WhatsApp conversation for bills, groups and community goals.
            </h2>
          </div>
          <p className="max-w-[420px] text-[14.5px]/[23px] text-[#1B4332]">
            Designed with the clarity of modern digital banking, right inside the app everyone already uses.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {AUDIENCE_CARDS.map((card) => (
            <a
              key={card.id}
              href={card.href}
              className="group relative flex flex-col justify-between rounded-[18px] border border-white/80 bg-[#F4FBF7]/90 p-6 shadow-[0_12px_28px_-10px_rgba(27,67,50,0.10),0_2px_8px_-2px_rgba(27,67,50,0.05),inset_0_1px_0_0_rgba(255,255,255,0.9)] backdrop-blur-md transition-all duration-200 ease-out hover:-translate-y-1 hover:border-[#5DCAA5]/70 hover:bg-white/95 hover:shadow-[0_18px_36px_-12px_rgba(27,67,50,0.15),0_4px_12px_-2px_rgba(27,67,50,0.07)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D9E75] focus-visible:ring-offset-2"
            >
              <div>
                {/* Top Row: Icon Badge + Subtle Category Tag */}
                <div className="flex items-center justify-between gap-2">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-[14px] border border-[#C3E8D6] bg-[#E3F5EB] text-[#0B6B45] shadow-[inset_0_1px_0_rgba(255,255,255,0.85)] transition-colors duration-200 group-hover:bg-[#0B6B45] group-hover:text-white">
                    <card.Icon className="h-5 w-5" strokeWidth={1.9} aria-hidden="true" />
                  </span>
                  <span className="rounded-full bg-[#E3F5EB]/90 px-2.5 py-1 text-[11px] font-medium text-[#1B4332]">
                    {card.badge}
                  </span>
                </div>

                {/* Card Title */}
                <h3 className="mt-5 font-[Fraunces,ui-serif,Georgia,serif] text-[19px]/[24px] font-bold text-[#0D2016]">
                  {card.title}
                </h3>

                {/* Card Description */}
                <p className="mt-2.5 text-[13.5px]/[21px] text-[#284E3A]">
                  {card.description}
                </p>
              </div>

              {/* Subtle bottom explore cue */}
              <div className="mt-6 flex items-center gap-1.5 border-t border-[#C3E8D6]/60 pt-3.5 text-[12.5px] font-semibold text-[#0B6B45]">
                <span>Explore</span>
                <ArrowUpRight
                  className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
