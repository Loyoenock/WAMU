import React from 'react';
import { ArrowRight, Check, CreditCard, Landmark, PiggyBank, Shield } from 'lucide-react';
import { FOCUS_RING_DARK, FOCUS_RING_LIGHT, waLink } from '../lib/siteConfig';
import { NwscBadge, UedclBadge } from './PaymentBrandBadges';

interface EcosystemCard {
  id: string;
  label: string;
  title: string;
  description: string;
  items: string[];
  previewTitle: string;
  previewDetail: string;
  ctaLabel: string;
  ctaHref: string;
  featured?: boolean;
  Icon: typeof CreditCard;
}

const ECOSYSTEM_CARDS: EcosystemCard[] = [
  {
    id: 'everyday-payments',
    label: 'Everyday Payments',
    title: 'Everyday Payments',
    description:
      'Settle essential household and recurring bills directly from a WhatsApp conversation.',
    items: [
      'Electricity payments (UEDCL)',
      'Water payments (NWSC)',
      'Airtime purchases (MTN & Airtel)',
      'School fees',
      'Utility payments',
    ],
    previewTitle: 'Launching 2nd Week of December',
    previewDetail:
      'Electricity (UEDCL), water (NWSC) and airtime launch inside WhatsApp by the second week of December.',
    ctaLabel: 'Ask about payments',
    ctaHref: waLink('Hello WAMU, I would like to learn about everyday payments.'),
    Icon: CreditCard,
  },
  {
    id: 'savings',
    label: 'Savings',
    title: 'Savings',
    description:
      'Build consistent saving habits individually or alongside family, friends and community members.',
    items: [
      'Personal savings',
      'Group savings',
      'Financial management',
    ],
    previewTitle: 'Polishing Savings Experience',
    previewDetail:
      'Refining personal and group savings goals, targets and automated reminders ahead of rollout.',
    ctaLabel: 'Join early access',
    ctaHref: '/pricing',
    Icon: PiggyBank,
  },
  {
    id: 'group-finance',
    label: 'Group Finance',
    title: 'Group Finance',
    description:
      'Structured coordination and shared transparent records for Uganda’s savings groups and cooperatives.',
    items: [
      'Group contributions',
      'SACCO management',
      'Cooperative activities',
      'Wedding, funeral & event collections',
    ],
    previewTitle: 'Polishing VSLA & SACCO Workflows',
    previewDetail:
      'Finalizing shared group ledgers, rotation schedules and multi-approver governance for VSLAs & SACCOs.',
    ctaLabel: 'Explore Collections',
    ctaHref: '/collections',
    featured: true,
    Icon: Landmark,
  },
  {
    id: 'financial-services',
    label: 'Financial Services',
    title: 'Financial Services',
    description:
      'Broader financial services connected into WAMU’s WhatsApp ecosystem for growing needs.',
    items: [
      'Insurance inquiries & guidance',
      'Loans coordination',
      'Investments & pooled clubs',
    ],
    previewTitle: 'Guided Service Discovery',
    previewDetail: 'Explore connected financial options from the same familiar WAMU thread.',
    ctaLabel: 'Contact our team',
    ctaHref: '#contact',
    Icon: Shield,
  },
];

const AUDIENCES = [
  'Individuals',
  'Savings groups',
  'SACCOs',
  'SMEs & businesses',
  'Cooperatives',
  'NGOs',
  'Community organisations',
  'Insurance clients',
];

export function EcosystemShowcaseSection() {
  return (
    <section
      id="ecosystem"
      aria-labelledby="ecosystem-heading"
      className="border-y border-[#C3E8D6]/70 bg-[#F7FAF8] px-4 py-14 min-[375px]:px-6 sm:py-18 md:px-10 md:py-22 lg:px-16 lg:py-28"
    >
      <div className="mx-auto max-w-[1200px] 2xl:max-w-[1340px]">
        <div className="mx-auto max-w-[660px] text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0F6E56] sm:text-[11.5px]">
            EXPLORE THE WAMU ECOSYSTEM
          </p>
          <h2
            id="ecosystem-heading"
            className="mt-3 font-editorial text-[28px]/[35px] font-bold tracking-[-0.015em] text-[#0D1A12] min-[375px]:text-[32px]/[40px] md:text-[40px]/[48px] xl:text-[44px]/[52px]"
            style={{ textWrap: 'balance' }}
          >
            Different financial needs. Connected possibilities.
          </h2>
          <p className="mt-3 text-[15px]/[24px] text-[#2D4A38] md:text-[16.5px]/[26px]">
            WAMU brings together financial activities for individuals, groups and organisations.
          </p>
        </div>

        {/* Multi-Card Ecosystem Grid */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 md:grid-cols-2 md:gap-6 lg:mt-14 2xl:gap-7">
          {ECOSYSTEM_CARDS.map((card) => (
            <article
              key={card.id}
              className={`flex flex-col justify-between rounded-[24px] border p-5 transition-all duration-200 hover:-translate-y-0.5 min-[375px]:p-6 md:p-8 ${
                card.featured
                  ? 'border-[#1D9E75]/55 bg-[#0D1A12] text-white shadow-[0_22px_48px_-18px_rgba(13,26,18,0.42)]'
                  : 'border-[#C3E8D6] bg-white text-[#0D1A12] shadow-[0_12px_32px_-14px_rgba(13,26,18,0.08)] hover:border-[#1D9E75]/50'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-4">
                  <span
                    className={`text-[11.5px] font-semibold uppercase tracking-[0.14em] ${
                      card.featured ? 'text-[#5DCAA5]' : 'text-[#0F6E56]'
                    }`}
                  >
                    {card.label}
                  </span>
                  <span
                    className={`inline-flex h-10 w-10 items-center justify-center rounded-[12px] ${
                      card.featured
                        ? 'border border-[#5DCAA5]/30 bg-[#1A4029] text-[#5DCAA5]'
                        : 'border border-[#C3E8D6] bg-[#EBF6F0] text-[#0F6E56]'
                    }`}
                  >
                    <card.Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                </div>

                <h3
                  className={`mt-4 font-editorial text-[24px]/[30px] font-bold ${
                    card.featured ? 'text-white' : 'text-[#0D1A12]'
                  }`}
                >
                  {card.title}
                </h3>

                <p
                  className={`mt-2.5 text-[14.5px]/[23px] ${
                    card.featured ? 'text-[#C3E8D6]' : 'text-[#2D4A38]'
                  }`}
                >
                  {card.description}
                </p>

                {/* Embedded UI Preview Strip */}
                <div
                  className={`mt-5 rounded-[14px] border p-4 ${
                    card.featured
                      ? 'border-white/10 bg-[#13261B]'
                      : 'border-[#C3E8D6]/80 bg-[#F7FAF8]'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <p
                      className={`text-[12px] font-semibold ${
                        card.featured ? 'text-[#5DCAA5]' : 'text-[#0F6E56]'
                      }`}
                    >
                      {card.previewTitle}
                    </p>
                    {card.id === 'everyday-payments' && (
                      <div className="flex items-center gap-1.5">
                        <UedclBadge size="sm" />
                        <NwscBadge size="sm" />
                      </div>
                    )}
                  </div>
                  <p
                    className={`mt-1 text-[12.5px]/[19px] ${
                      card.featured ? 'text-[#C3E8D6]' : 'text-[#2D4A38]'
                    }`}
                  >
                    {card.previewDetail}
                  </p>
                </div>

                {/* Included Activities List */}
                <ul className="mt-6 space-y-2.5">
                  {card.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-[14px]/[21px]">
                      <Check
                        className={`mt-0.5 h-4 w-4 shrink-0 ${
                          card.featured ? 'text-[#5DCAA5]' : 'text-[#1D9E75]'
                        }`}
                        aria-hidden="true"
                      />
                      <span className={card.featured ? 'text-[#EBF6F0]' : 'text-[#0D1A12]'}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className={`mt-7 border-t pt-5 ${
                  card.featured ? 'border-white/10' : 'border-[#EBF6F0]'
                }`}
              >
                <a
                  href={card.ctaHref}
                  target={card.ctaHref.startsWith('http') ? '_blank' : undefined}
                  rel={card.ctaHref.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`group inline-flex w-full items-center justify-between gap-3 py-1.5 pl-5 pr-1.5 text-[14px] font-semibold hover:scale-[1.01] ${
                    card.featured
                      ? `wamu-magie-btn-dark ${FOCUS_RING_DARK}`
                      : `wamu-magie-btn-light-secondary ${FOCUS_RING_LIGHT}`
                  }`}
                >
                  <span>{card.ctaLabel}</span>
                  <span
                    className={`grid h-9 w-9 shrink-0 place-items-center rounded-full shadow-sm transition-all duration-300 group-hover:scale-105 ${
                      card.featured
                        ? 'bg-white text-[#0D1A12] group-hover:bg-[#5DCAA5]'
                        : 'border border-[#C3E8D6] bg-white text-[#0F6E56] group-hover:border-[#0F6E56] group-hover:bg-[#0F6E56] group-hover:text-white'
                    }`}
                  >
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Unboxed Audience Directory Line + Pricing / Waitlist Clarification */}
        <div
          id="who-we-serve"
          className="mt-10 flex flex-col items-center justify-between gap-4 rounded-[18px] border border-[#C3E8D6] bg-white px-6 py-5 text-center md:flex-row md:text-left"
        >
          <div className="text-[13px]/[20px] text-[#2D4A38]">
            <span className="font-semibold text-[#0D1A12]">Built for: </span>
            {AUDIENCES.map((audience, idx) => (
              <React.Fragment key={audience}>
                <span>{audience}</span>
                {idx < AUDIENCES.length - 1 && (
                  <span aria-hidden="true" className="mx-1.5 text-[#5A7A68]">
                    ·
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>
          <a
            href="/pricing"
            className={`shrink-0 whitespace-nowrap text-[13.5px] font-semibold text-[#0F6E56] underline underline-offset-4 hover:text-[#1D9E75] ${FOCUS_RING_LIGHT}`}
          >
            Pricing &amp; early access
          </a>
        </div>
      </div>
    </section>
  );
}
