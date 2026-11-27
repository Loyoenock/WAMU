import React from 'react';
import { ArrowRight, HeartHandshake, Landmark, Users, Zap } from 'lucide-react';
import { FOCUS_RING_LIGHT } from '../lib/siteConfig';
import { NwscBadge, UedclBadge } from './PaymentBrandBadges';

export function ServiceCategoriesSection() {
  return (
    <section
      id="solutions"
      aria-labelledby="solutions-heading"
      className="bg-[#FFFFFF] px-4 py-14 min-[375px]:px-6 sm:py-18 md:px-10 md:py-22 lg:px-16 lg:py-26 2xl:py-28"
    >
      <div className="mx-auto max-w-[1200px] 2xl:max-w-[1340px]">
        <div className="mx-auto max-w-[640px] text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0F6E56] sm:text-[11.5px]">
            WHAT YOU CAN DO WITH WAMU
          </p>
          <h2
            id="solutions-heading"
            className="mt-3 font-editorial text-[28px]/[35px] font-bold tracking-[-0.015em] text-[#0D1A12] min-[375px]:text-[32px]/[40px] md:text-[40px]/[48px] xl:text-[44px]/[52px]"
            style={{ textWrap: 'balance' }}
          >
            Financial services for your everyday needs.
          </h2>
          <p className="mt-3 text-[15px]/[24px] text-[#2D4A38] md:text-[16.5px]/[26px]">
            Discover connected financial services designed for individuals, groups and organisations.
          </p>
        </div>

        {/* 2x2 Responsive Grid with distinct internal product previews */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 md:grid-cols-2 md:gap-6 lg:mt-14 2xl:gap-7">
          {/* Card 1: Payments and Everyday Services */}
          <article className="group flex flex-col justify-between rounded-[22px] border border-[#C3E8D6]/85 bg-gradient-to-br from-[#F7FAF8] to-[#EBF6F0] p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#1D9E75]/50 hover:shadow-[0_18px_40px_-16px_rgba(15,110,86,0.14)] min-[375px]:p-6 sm:p-7 md:p-8">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2.5">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-[14px] bg-[#0F6E56] text-white shadow-sm sm:h-12 sm:w-12">
                  <Zap className="h-5 w-5" aria-hidden="true" />
                </span>
                <div className="flex items-center gap-2">
                  <UedclBadge size="sm" />
                  <NwscBadge size="sm" />
                  <span className="text-[11.5px] font-medium text-[#5A7A68] sm:text-[12px]">
                    Electricity · Water · Airtime
                  </span>
                </div>
              </div>
              <h3 className="mt-5 font-editorial text-[20px]/[26px] font-bold text-[#0D1A12] sm:text-[22px]/[28px]">
                Payments and Everyday Services
              </h3>
              <p className="mt-2 text-[14.5px]/[23px] text-[#2D4A38]">
                Electricity, water, airtime, school fees and other payment activities handled directly inside WhatsApp.
              </p>
            </div>

            <div className="mt-6 rounded-[14px] border border-[#C3E8D6] bg-white p-3.5 sm:p-4">
              <div className="flex flex-wrap items-center justify-between gap-2 text-[12px]">
                <span className="inline-flex items-center gap-2 font-semibold text-[#0D1A12]">
                  <UedclBadge size="sm" />
                  <span>UEDCL Electricity &amp; NWSC Water</span>
                </span>
                <span className="font-medium text-[#0F6E56]">Launching 2nd week of Dec</span>
              </div>
              <div className="mt-2.5 flex flex-wrap items-center justify-between gap-x-3 gap-y-1.5 border-t border-[#EBF6F0] pt-2.5 text-[12.5px] text-[#2D4A38]">
                <span>Utilities go live the second week of December</span>
                <a
                  href="#ecosystem"
                  className={`inline-flex items-center gap-1 font-semibold text-[#0F6E56] hover:text-[#1D9E75] ${FOCUS_RING_LIGHT}`}
                >
                  <span>Explore</span>
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </article>

          {/* Card 2: Savings and Financial Management */}
          <article className="group flex flex-col justify-between rounded-[22px] border border-[#C3E8D6]/85 bg-white p-5 shadow-[0_10px_30px_-14px_rgba(13,26,18,0.07)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#1D9E75]/50 hover:shadow-[0_18px_40px_-16px_rgba(15,110,86,0.14)] min-[375px]:p-6 sm:p-7 md:p-8">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2.5">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-[14px] border border-[#C3E8D6] bg-[#EBF6F0] text-[#0F6E56] sm:h-12 sm:w-12">
                  <Landmark className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="text-[11.5px] font-medium text-[#5A7A68] sm:text-[12px]">
                  Personal · Group Goals
                </span>
              </div>
              <h3 className="mt-5 font-editorial text-[20px]/[26px] font-bold text-[#0D1A12] sm:text-[22px]/[28px]">
                Savings and Financial Management
              </h3>
              <p className="mt-2 text-[14.5px]/[23px] text-[#2D4A38]">
                Personal savings, group savings and financial planning tools organised around clear goals and timelines.
              </p>
            </div>

            <div className="mt-6 rounded-[14px] border border-[#C3E8D6]/80 bg-[#F7FAF8] p-3.5 sm:p-4">
              <div className="flex flex-wrap items-center justify-between gap-2 text-[12px]">
                <span className="font-semibold text-[#0D1A12]">Savings Goal · School Fees Drive</span>
                <span className="font-medium text-[#0F6E56]">Polishing for rollout</span>
              </div>
              <div className="mt-2.5 h-2 w-full overflow-hidden rounded-full bg-[#C3E8D6]/60">
                <div className="h-full w-2/3 rounded-full bg-[#1D9E75]" />
              </div>
              <div className="mt-2 flex flex-wrap items-center justify-between gap-x-3 gap-y-1.5 text-[11.5px] text-[#5A7A68]">
                <span>Savings tools being polished · Early access open</span>
                <a
                  href="#ecosystem"
                  className={`inline-flex items-center gap-1 font-semibold text-[#0F6E56] hover:text-[#1D9E75] ${FOCUS_RING_LIGHT}`}
                >
                  <span>Explore</span>
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </article>

          {/* Card 3: Groups and SACCOs */}
          <article
            className="group flex flex-col justify-between rounded-[22px] border border-[#5DCAA5]/25 bg-[#0D1A12] p-5 text-white shadow-[0_18px_40px_-16px_rgba(13,26,18,0.38)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#5DCAA5]/55 min-[375px]:p-6 sm:p-7 md:p-8"
          >
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2.5">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-[14px] border border-[#5DCAA5]/30 bg-[#1A4029] text-[#5DCAA5] sm:h-12 sm:w-12">
                  <Users className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="text-[11.5px] font-medium text-[#9FBEAA] sm:text-[12px]">
                  VSLAs · SACCOs · Cooperatives
                </span>
              </div>
              <h3 className="mt-5 font-editorial text-[20px]/[26px] font-bold text-white sm:text-[22px]/[28px]">
                Groups and SACCOs
              </h3>
              <p className="mt-2 text-[14.5px]/[23px] text-[#C3E8D6]">
                Group contributions, SACCO management and cooperative financial activities with transparent shared records.
              </p>
            </div>

            <div className="mt-6 rounded-[14px] border border-white/10 bg-[#13261B] p-3.5 sm:p-4">
              <div className="flex flex-wrap items-center justify-between gap-2 text-[12px]">
                <span className="font-semibold text-white">Shared Ledger · Member Contributions</span>
                <span className="text-[#5DCAA5]">Polishing for rollout</span>
              </div>
              <div className="mt-2.5 flex flex-wrap items-center justify-between gap-x-3 gap-y-1.5 border-t border-white/10 pt-2.5 text-[12px] text-[#9FBEAA]">
                <span>VSLA &amp; SACCO ledgers being polished · Collections</span>
                <a
                  href="/collections"
                  className="inline-flex items-center gap-1 font-semibold text-[#5DCAA5] hover:text-white"
                >
                  <span>Collections</span>
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </article>

          {/* Card 4: Event & Community Collections */}
          <article className="group flex flex-col justify-between rounded-[22px] border border-[#C3E8D6]/85 bg-gradient-to-br from-[#F7FAF8] to-[#FFFFFF] p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#1D9E75]/50 hover:shadow-[0_18px_40px_-16px_rgba(15,110,86,0.14)] min-[375px]:p-6 sm:p-7 md:p-8">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2.5">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-[14px] border border-[#C3E8D6] bg-[#EBF6F0] text-[#0F6E56] sm:h-12 sm:w-12">
                  <HeartHandshake className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="text-[11.5px] font-medium text-[#5A7A68] sm:text-[12px]">
                  Weddings · Funerals · Drives
                </span>
              </div>
              <h3 className="mt-5 font-editorial text-[20px]/[26px] font-bold text-[#0D1A12] sm:text-[22px]/[28px]">
                Event &amp; Community Collections
              </h3>
              <p className="mt-2 text-[14.5px]/[23px] text-[#2D4A38]">
                Organise wedding, funeral and fundraising collections with pledge tracking, reminders and multi-approver payouts.
              </p>
            </div>

            <div className="mt-6 rounded-[14px] border border-[#C3E8D6]/80 bg-[#F7FAF8] p-3.5 sm:p-4">
              <div className="flex flex-wrap items-center justify-between gap-2 text-[12px]">
                <span className="font-semibold text-[#0D1A12]">Savings Goals · Transparent Totals</span>
                <span className="font-medium text-[#0F6E56]">MoMo &amp; Airtel Money</span>
              </div>
              <div className="mt-2.5 flex flex-wrap items-center justify-between gap-x-3 gap-y-1.5 border-t border-[#C3E8D6]/60 pt-2.5 text-[12px] text-[#2D4A38]">
                <span>Pledges, automated reminders &amp; receipts</span>
                <a
                  href="/collections"
                  className={`inline-flex items-center gap-1 font-semibold text-[#0F6E56] hover:text-[#1D9E75] ${FOCUS_RING_LIGHT}`}
                >
                  <span>Explore</span>
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
