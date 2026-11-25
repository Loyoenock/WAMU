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
      <span
        className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[12px] font-medium tracking-[-0.01em] text-[#0D2016]"
        style={{
          background: 'rgba(206, 239, 220, 0.85)',
          border: '1px solid rgba(15, 110, 86, 0.16)',
        }}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-[#1D9E75]" />
        {status}
      </span>
    );
  }

  if (status === 'Starting with') {
    return (
      <span
        className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[12px] font-medium tracking-[-0.01em] text-[#0D2016]"
        style={{
          background: 'rgba(130, 224, 178, 0.65)',
          border: '1px solid rgba(29, 158, 117, 0.28)',
        }}
      >
        {status}
      </span>
    );
  }

  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[12px] font-medium tracking-[-0.01em] text-[#1B4332]/80"
      style={{
        background: 'rgba(218, 235, 225, 0.72)',
        border: '1px solid rgba(13, 32, 22, 0.1)',
      }}
    >
      {status}
    </span>
  );
}

export function WamuFeatureCards() {
  return (
    <section
      aria-labelledby="wamu-feature-cards-heading"
      className="relative overflow-hidden bg-[#E0F3E8] py-16 md:py-24 px-4 sm:px-6 md:px-12 lg:px-16 border-t border-[#0F6E56]/10"
    >
      {/* Subtle top-left diffused light glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -left-24 h-[420px] w-[420px] rounded-full opacity-55 blur-3xl"
        style={{
          background:
            'radial-gradient(circle, rgba(255, 255, 255, 0.78) 0%, rgba(224, 245, 233, 0) 70%)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1280px]">
        {/* Section Header */}
        <div className="mb-10 md:mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div className="max-w-[600px]">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#CEEFDC]/80 border border-white/70 px-3.5 py-1.5 text-[11px] font-mono uppercase tracking-[0.14em] text-[#0F6E56] shadow-[0_2px_8px_rgba(13,32,22,0.04)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#1D9E75]" />
              CORE CAPABILITIES
            </div>
            <h2
              id="wamu-feature-cards-heading"
              className="font-serif text-[28px] sm:text-[34px] md:text-[40px] font-semibold leading-[1.12] tracking-[-0.02em] text-[#0D2016]"
            >
              Daily utilities and group finance, unified in one place.
            </h2>
          </div>
          <p className="max-w-[420px] text-[15px] md:text-[16px] leading-[1.6] text-[#1B4332]/85">
            Fast mobile money checkouts for your household bills alongside structured, shared ledgers for your community.
          </p>
        </div>

        {/* 4-Card Magie-Inspired Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {FEATURE_CARDS.map((card) => {
            const IconComponent = card.icon;
            return (
              <article
                key={card.id}
                className="group relative flex flex-col justify-between rounded-[20px] p-7 sm:p-8 transition-all duration-300 hover:-translate-y-1"
                style={{
                  background:
                    'linear-gradient(155deg, rgba(250, 254, 251, 0.94) 0%, rgba(238, 250, 243, 0.86) 100%)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  border: '1px solid rgba(255, 255, 255, 0.86)',
                  boxShadow:
                    '0 14px 34px -10px rgba(13, 32, 22, 0.07), 0 4px 12px -2px rgba(13, 32, 22, 0.04), inset 0 1px 0 0 rgba(255, 255, 255, 0.92)',
                }}
              >
                <div>
                  {/* Top row: Icon badge on left + Status pill on right */}
                  <div className="mb-7 flex items-center justify-between gap-3">
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-[14px] text-[#0D2016] transition-transform duration-300 group-hover:scale-105"
                      style={{
                        background:
                          'linear-gradient(145deg, rgba(212, 242, 224, 0.92) 0%, rgba(195, 232, 214, 0.72) 100%)',
                        border: '1px solid rgba(255, 255, 255, 0.85)',
                        boxShadow:
                          '0 4px 10px -2px rgba(15, 110, 86, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.85)',
                      }}
                    >
                      <IconComponent className="h-5 w-5 text-[#0D2016]" strokeWidth={2} />
                    </div>

                    <StatusPill status={card.status} />
                  </div>

                  {/* Card Title */}
                  <h3 className="mb-2.5 font-sans text-[20px] font-semibold leading-[1.25] tracking-[-0.015em] text-[#0D2016]">
                    {card.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-[14.5px] leading-[1.62] text-[#1B4332]/85">
                    {card.description}
                  </p>
                </div>

                {/* Subtle bottom metadata line */}
                <div className="mt-7 pt-4 border-t border-[#0F6E56]/10 flex items-center justify-between text-[12px] font-medium text-[#0F6E56]">
                  <span>{card.detail}</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-[#1D9E75]/70 transition-transform duration-300 group-hover:scale-125" />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
