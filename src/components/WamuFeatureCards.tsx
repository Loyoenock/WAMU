import React from 'react';
import { PhoneCall, Zap, Droplets, Users } from 'lucide-react';

interface FeatureCardItem {
  id: string;
  title: string;
  description: string;
  status: 'Available' | 'Starting with' | 'In progress';
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  detail: string;
}

const FEATURE_CARDS: FeatureCardItem[] = [
  {
    id: 'airtime-voice',
    title: 'Airtime & Voice',
    description:
      'Top up MTN and Airtel airtime or voice bundles for yourself or anyone in seconds directly via WhatsApp.',
    status: 'Available',
    icon: PhoneCall,
    detail: 'MTN Uganda · Airtel Uganda',
  },
  {
    id: 'electricity',
    title: 'Electricity',
    description:
      'Buy Umeme Yaka tokens immediately with your mobile money PIN and receive your 20-digit meter token in the chat.',
    status: 'Starting with',
    icon: Zap,
    detail: 'Umeme Yaka Prepaid',
  },
  {
    id: 'water',
    title: 'Water',
    description:
      'Settle National Water (NWSC) bills quickly with saved property accounts and instant shareable payment receipts.',
    status: 'In progress',
    icon: Droplets,
    detail: 'NWSC Water Accounts',
  },
  {
    id: 'savings-groups',
    title: 'Savings & Groups',
    description:
      'Run transparent SACCOs, investment clubs, and family funds with automated records and real-time member ledgers.',
    status: 'Available',
    icon: Users,
    detail: 'SACCOs · Chama · Family Funds',
  },
];

function StatusPill({ status }: { status: FeatureCardItem['status'] }) {
  if (status === 'Available') {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full border border-[#0F6E56]/20 bg-[#CEEFDC]/90 px-3 py-1 text-[11.5px]/[16px] font-medium tracking-[-0.01em] text-[#0D2016] md:text-[12px]/[16px]">
        <span className="h-1.5 w-1.5 rounded-full bg-[#1D9E75]" aria-hidden="true" />
        {status}
      </span>
    );
  }

  if (status === 'Starting with') {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full border border-[#1D9E75]/35 bg-[#82E0B2]/65 px-3 py-1 text-[11.5px]/[16px] font-medium tracking-[-0.01em] text-[#0D2016] md:text-[12px]/[16px]">
        <span className="h-1.5 w-1.5 rounded-full bg-[#0F6E56]" aria-hidden="true" />
        {status}
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-[#C3E8D6] bg-[#F4FBF7] px-3 py-1 text-[11.5px]/[16px] font-medium tracking-[-0.01em] text-[#1B4332] md:text-[12px]/[16px]">
      <span className="h-1.5 w-1.5 rounded-full bg-[#5DCAA5]" aria-hidden="true" />
      {status}
    </span>
  );
}

export function WamuFeatureCards() {
  return (
    <section
      aria-labelledby="wamu-feature-cards-heading"
      className="relative overflow-hidden border-t border-[#C3E8D6]/80 bg-[#F4FBF7] px-6 py-16 md:px-12 md:py-24 lg:px-20"
    >
      {/* Subtle top-left diffused light glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 -top-24 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.9)_0%,rgba(224,245,233,0)_70%)] opacity-70 blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-[1280px]">
        {/* Section Header */}
        <div className="mb-12 flex flex-col gap-4 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div className="max-w-[600px]">
            <span className="text-[11px]/[16px] font-bold uppercase tracking-[2px] text-[#0F6E56]">
              CORE CAPABILITIES
            </span>
            <h2
              id="wamu-feature-cards-heading"
              className="mt-2.5 font-[Fraunces,ui-serif,Georgia,serif] text-[30px]/[36px] font-bold tracking-[-0.015em] text-[#0D2016] md:text-[40px]/[46px]"
            >
              Daily utilities and group finance, unified in one place.
            </h2>
          </div>
          <p className="max-w-[420px] text-[15px]/[24px] text-[#2D4A38] md:text-[16px]/[26px]">
            Fast mobile money checkouts for your household bills alongside structured, shared ledgers for your community.
          </p>
        </div>

        {/* 4-Card Magie-Inspired Feature Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {FEATURE_CARDS.map((card) => {
            const IconComponent = card.icon;
            return (
              <article
                key={card.id}
                className="group relative flex flex-col justify-between rounded-[20px] border border-[#C3E8D6]/80 bg-white p-7 shadow-[0_12px_28px_-10px_rgba(13,32,22,0.08),0_2px_8px_-2px_rgba(13,32,22,0.04)] transition-all duration-200 ease-out hover:-translate-y-1 hover:border-[#5DCAA5]/75 hover:shadow-[0_18px_36px_-12px_rgba(13,32,22,0.13)]"
              >
                <div>
                  {/* Top row: Icon badge on left + Status pill on right */}
                  <div className="mb-6 flex items-center justify-between gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-[14px] border border-[#C3E8D6] bg-[#E3F5EB] text-[#0B6B45] shadow-[inset_0_1px_0_rgba(255,255,255,0.85)] transition-colors duration-200 group-hover:border-[#0B6B45] group-hover:bg-[#0B6B45] group-hover:text-white">
                      <IconComponent className="h-5 w-5" strokeWidth={1.9} />
                    </div>

                    <StatusPill status={card.status} />
                  </div>

                  {/* Card Title */}
                  <h3 className="font-[Fraunces,ui-serif,Georgia,serif] text-[19px]/[25px] font-bold tracking-[-0.01em] text-[#0D2016] md:text-[20px]/[26px]">
                    {card.title}
                  </h3>

                  {/* Short Description */}
                  <p className="mt-2.5 text-[14px]/[22px] text-[#2D4A38]">
                    {card.description}
                  </p>
                </div>

                {/* Subtle bottom rail metadata line */}
                <div className="mt-6 flex items-center justify-between border-t border-[#C3E8D6]/75 pt-4 text-[12px] font-medium text-[#0F6E56]">
                  <span>{card.detail}</span>
                  <span
                    aria-hidden="true"
                    className="h-1.5 w-1.5 rounded-full bg-[#1D9E75]/80 transition-transform duration-200 group-hover:scale-125"
                  />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
