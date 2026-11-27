import React from 'react';
import { WaMark } from './WaMark';

const MTN_PATH =
  'M410 553c-75.6 0-146.9-14.1-200.7-39.8C153 486.3 122 449.7 122 410s31-76.3 87.3-103.2C263.1 281.1 334.4 267 410 267s146.9 14.1 200.7 39.8C667 333.7 698 370.3 698 410s-31 76.3-87.3 103.2C556.9 538.9 485.6 553 410 553zm0-264.9c-72.6 0-140.6 13.4-191.6 37.8-48.5 23.2-75.3 53.1-75.3 84.2s26.7 61 75.3 84.1c51 24.4 119.1 37.8 191.6 37.8s140.6-13.4 191.6-37.8c48.5-23.1 75.3-53.1 75.3-84.1s-26.7-61-75.3-84.1c-51-24.5-119-37.9-191.6-37.9z M364.5 361.6v93.6h-25.6v-52.5L321.8 428h-13.4l-18.8-25.3v52.5h-23.4v-93.6h23.6l27 36.7 24.2-36.7zM371.9 382.8v-21.2h87.4v21.2h-30.6v72.4h-26.1v-72.4zM555.6 361.6v93.6h-21.5l-44-53.5v53.5h-23.4v-93.6H490l42.1 51.6v-51.6z';

const AIRTEL_PATH =
  'M68.09.1a6.16,6.16,0,0,1-1.24.15,41.48,41.48,0,0,0-9.53,2.4l-1.19.49a43.68,43.68,0,0,0-5,2.41,3.57,3.57,0,0,1-.89.41c-.25.06-.45.18-.45.25s-.14.17-.29.24a4.26,4.26,0,0,0-.82.44,7.92,7.92,0,0,1-.9.51,4.68,4.68,0,0,0-.95.59,2.88,2.88,0,0,1-.66.43,60.55,60.55,0,0,0-7.39,5.36,30.85,30.85,0,0,0-3.58,3.81,1.82,1.82,0,0,1-.36.51A30.7,30.7,0,0,0,32.34,22c-.18.42-.56,1.17-.8,1.68a11.49,11.49,0,0,0-1.08,5.7,6.08,6.08,0,0,0,2,4.68,7.81,7.81,0,0,0,5.66,2.31,13.61,13.61,0,0,0,4.76-.54c.55-.16,1.3-.34,1.66-.45a4.11,4.11,0,0,0,.93-.32c.39-.2,2.58-1.19,2.68-1.19a65,65,0,0,0,7.2-4.39c2.18-1.46,4.1-2.73,4.27-2.82s1.19-.71,2.29-1.37,2.46-1.43,3-1.71l1.78-.94c.43-.2,1.22-.57,1.78-.78s1.26-.51,1.53-.63.7-.3.93-.4a14.41,14.41,0,0,1,3.62-.65,6,6,0,0,1,6.5,4.11,8.52,8.52,0,0,1,.32,3.31A12.77,12.77,0,0,1,80.53,33l-.43,1a38.38,38.38,0,0,1-4.6,7.6,65.43,65.43,0,0,1-8.68,9l-2.29,1.9c-.72.59-1.55,1.18-2.46,1.8-.38.23-1,.64-1.36.91a45.69,45.69,0,0,1-5.43,2.89l-1.39.61A2.68,2.68,0,0,1,53,59a3.67,3.67,0,0,0-.86.19,1.62,1.62,0,0,1-2.22-1.49c0-1.39.66-2.28,4.83-6.42,4.51-4.47,5-5.14,5-6.83s-.83-2.94-2.7-3.89a4.28,4.28,0,0,0-2.55-.47,6.48,6.48,0,0,0-3.83,1c-.27.17-.7.39-.93.51a2.87,2.87,0,0,0-.51.31s-.39.3-.77.59a22.74,22.74,0,0,0-3.37,3.46A23.84,23.84,0,0,0,43,49.47,17.39,17.39,0,0,0,41.28,56c0,3.65,1.9,6.57,4.84,7.4a22.7,22.7,0,0,0,5.72,0A32.26,32.26,0,0,0,56.45,62a.73.73,0,0,1,.41-.15,52,52,0,0,0,7.21-3.68c.39-.26.83-.55,1-.65s1-.57,1.78-1.08,1.53-1,1.58-1a14.7,14.7,0,0,1,1.27-.93l1.7-1.17c.29-.21,1.08-.82,1.78-1.38A68,68,0,0,0,83.77,41.75c.37-.45.71-.88.76-.93a35.5,35.5,0,0,0,2.09-3,22.9,22.9,0,0,0,1.2-2.07c.32-.61.77-1.44,1-1.87s.69-1.52,1.06-2.46.72-1.85.78-2a38.46,38.46,0,0,0,1.53-6.53,25,25,0,0,0-.61-8.91,15.54,15.54,0,0,0-1-2.46,18.56,18.56,0,0,0-6-7.3,9.1,9.1,0,0,1-1-.74A23.19,23.19,0,0,0,78.08,1a27.86,27.86,0,0,0-3.2-.72C73.79.11,71.82,0,70.27,0h-.79a6.8,6.8,0,0,0-1.39.1Z';

const SACCO_ROWS = [
  'Member share ledgers',
  'Savings vs. share capital, separated',
  'Dividend calculations per member',
  'Board-ready reporting',
];

const F1_PILLS = ['Rotation tracking', 'Auto payouts', 'Mobile money in'];

const SHOT =
  'w-[300px] max-w-full shrink-0 overflow-hidden rounded-[24px] shadow-[0_30px_60px_-22px_rgba(12,30,18,0.5)]';

export function Features() {
  return (
    <section id="products" className="relative overflow-hidden bg-[#F4FBF7]">
      <h2 className="sr-only">
        WAMU savings group software for VSLAs, SACCOs, investment clubs and merry-go-rounds in Uganda
      </h2>

      {/* Band 1 - F2 SACCO */}
      <div className="relative overflow-hidden border-t border-[#C3E8D6]/75 bg-[#F4FBF7]">
        <WaMark tone="light" className="right-[48px] bottom-[40px] h-[128px] w-[128px]" />
        <div className="relative mx-auto flex max-w-[1280px] flex-col items-center gap-12 px-6 py-16 md:px-12 md:py-24 lg:min-h-[560px] lg:flex-row lg:gap-16 lg:px-20">
          {/* Sculpted Frosted Mint Pedestal with Ambient Canopy Glow */}
          <div className="relative flex w-full shrink-0 items-center justify-center overflow-hidden rounded-[24px] border border-[#C3E8D6]/90 bg-gradient-to-br from-[#E3F5EB] via-[#D9F0E3] to-[#C3E8D6]/75 px-6 py-10 shadow-[0_18px_40px_-14px_rgba(13,32,22,0.12),inset_0_1px_0_rgba(255,255,255,0.92)] lg:w-[500px] lg:py-12">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.85)_0%,rgba(29,158,117,0.22)_55%,transparent_75%)] blur-2xl"
            />
            <img
              src="/images/wamu-feature-sacco.webp"
              alt="WAMU on WhatsApp showing the main menu with SACCO Shares, Merry-Go-Round and wallet balance"
              width={300}
              height={450}
              className={`relative z-[1] ${SHOT}`}
            />
          </div>

          <div className="flex flex-1 flex-col items-start justify-center gap-[24px]">
            <span className="text-[11px]/[16px] font-bold uppercase tracking-[2px] text-[#0F6E56]">
              SACCO SHARES
            </span>
            <h3 className="font-[Fraunces,ui-serif,Georgia,serif] text-[26px]/[32px] font-bold tracking-[-0.01em] text-[#0D2016] md:text-[32px]/[38px]">
              Share ledgers built for how cooperatives actually work.
            </h3>
            <p className="max-w-[58ch] text-[15px]/[24px] text-[#2D4A38] md:text-[16px]/[26px]">
              SACCOs need share capital tracked separately from savings. WAMU's shares ledger
              records each member's purchases, dividends, and standing in a structure a board or
              auditor can actually review.
            </p>
            <div className="flex flex-col items-start gap-[12px]">
              {SACCO_ROWS.map((row) => (
                <div key={row} className="flex flex-row items-center gap-[12px]">
                  <span
                    className="h-[8px] w-[8px] shrink-0 rounded-full bg-[#1D9E75]"
                    aria-hidden="true"
                  />
                  <span className="text-[14px]/[22px] text-[#0D2016]">{row}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Band 2 - F1 WhatsApp */}
      <div className="relative overflow-hidden border-t border-[#C3E8D6]/75 bg-[#FFFFFF]">
        <WaMark tone="dark" className="left-[24px] bottom-[36px] h-[120px] w-[120px]" />
        <div className="relative mx-auto flex max-w-[1280px] flex-col items-center gap-12 px-6 py-16 md:px-12 md:py-24 lg:min-h-[560px] lg:flex-row lg:gap-16 lg:px-20">
          {/* Sculpted Deep Forest Pedestal with Radial Canopy Illumination */}
          <div className="relative flex w-full shrink-0 items-center justify-center overflow-hidden rounded-[24px] border border-[#5DCAA5]/30 bg-gradient-to-br from-[#1A4029] via-[#133120] to-[#0D2016] px-6 py-10 shadow-[0_24px_52px_-16px_rgba(12,30,18,0.42),inset_0_1px_0_rgba(255,255,255,0.16)] lg:w-[500px] lg:py-12">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(93,202,165,0.34)_0%,rgba(29,158,117,0.16)_52%,transparent_75%)] blur-2xl"
            />
            <img
              src="/images/wamu-feature-savings.webp"
              alt="WAMU on WhatsApp showing the savings-goals menu with payout accounts"
              width={300}
              height={450}
              className={`relative z-[1] ${SHOT}`}
            />
            <span
              className="absolute bottom-[20px] left-[24px] hidden text-[11px] font-semibold tracking-[2px] text-[#5DCAA5]/50 lg:block"
              aria-hidden="true"
            >
              WhatsApp
            </span>
          </div>

          <div className="flex flex-1 flex-col items-start justify-center gap-[24px]">
            <span className="text-[11px]/[16px] font-bold uppercase tracking-[2px] text-[#0F6E56]">
              WHATSAPP SAVINGS &amp; MERRY-GO-ROUND
            </span>
            <h3 className="font-[Fraunces,ui-serif,Georgia,serif] text-[26px]/[32px] font-bold tracking-[-0.01em] text-[#0D2016] md:text-[32px]/[38px]">
              Your group's contributions, collected and tracked automatically.
            </h3>
            <p className="max-w-[58ch] text-[15px]/[24px] text-[#2D4A38] md:text-[16px]/[26px]">
              Members contribute via MTN or Airtel directly in WhatsApp. The merry-go-round rotation
              is calculated automatically. Payout order, dates, and amounts fixed so no one argues
              over a notebook.
            </p>
            <div className="flex flex-row flex-wrap gap-[10px]">
              {F1_PILLS.map((pill) => (
                <span
                  key={pill}
                  className="rounded-full border border-[#C3E8D6] bg-[#F4FBF7] px-[14px] py-[7px] text-[11.5px]/[16px] font-medium tracking-[-0.01em] text-[#0F6E56] shadow-[0_2px_6px_rgba(13,32,22,0.05),inset_0_1px_0_rgba(255,255,255,0.9)] md:text-[12px]/[16px]"
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Band 3 - F3 Mobile Money */}
      <div className="relative overflow-hidden bg-[#1D9E75]">
        <WaMark tone="gold" className="right-[80px] top-[48px] h-[150px] w-[150px]" />
        <WaMark tone="gold" className="left-[32px] bottom-[36px] h-[128px] w-[128px]" />
        <div className="relative z-[1] mx-auto flex max-w-[1280px] flex-col gap-12 px-6 py-16 md:px-12 md:py-24 lg:min-h-[380px] lg:flex-row lg:items-center lg:justify-between lg:gap-16 lg:px-20">
          <div className="flex w-full max-w-[580px] flex-col items-start justify-center gap-[20px]">
            <span className="text-[11px]/[16px] font-bold uppercase tracking-[2px] text-[#C3E8D6]">
              MOBILE MONEY &amp; PAYMENTS
            </span>
            <h3 className="font-[Fraunces,ui-serif,Georgia,serif] text-[30px]/[36px] font-bold tracking-[-0.015em] text-[#C3E8D6] md:text-[42px]/[48px]">
              Stop moving cash by hand.
            </h3>
            <p className="max-w-[58ch] text-[15px]/[24px] text-[#C3E8D6] md:text-[16px]/[26px]">
              Contributions and payouts all move through MTN MoMo or Airtel Money. Each payment
              triggers automatically and generates its own WhatsApp confirmation. No manual entries,
              no disputed figures.
            </p>
          </div>
          <div className="flex flex-1 flex-col items-start justify-center gap-5 lg:items-end">
            <div className="flex w-full max-w-[340px] flex-row items-center gap-[16px] rounded-[20px] border border-[#C3E8D6]/25 bg-[#0F6E56]/70 p-[18px_22px] shadow-[0_14px_30px_-12px_rgba(13,32,22,0.28)] backdrop-blur-sm transition-all duration-200 ease-out hover:-translate-y-1 hover:border-[#C3E8D6]/65">
              <div className="flex h-[56px] w-[56px] shrink-0 items-center justify-center rounded-[12px] bg-[#ffc403]">
                <svg viewBox="0 0 820 820" className="h-[40px] w-[40px] shrink-0" aria-hidden="true">
                  <path d={MTN_PATH} fill="#0C1E12" />
                </svg>
              </div>
              <div className="flex flex-col items-start gap-[2px]">
                <span className="text-[15px] font-bold text-[#C3E8D6]">MTN Mobile Money</span>
                <span className="text-[12px] text-[#C3E8D6]">Uganda's largest network</span>
              </div>
            </div>
            <div className="flex w-full max-w-[340px] flex-row items-center gap-[16px] rounded-[20px] border border-[#C3E8D6]/25 bg-[#0F6E56]/70 p-[18px_22px] shadow-[0_14px_30px_-12px_rgba(13,32,22,0.28)] backdrop-blur-sm transition-all duration-200 ease-out hover:-translate-y-1 hover:border-[#C3E8D6]/65">
              <div className="flex h-[56px] w-[56px] shrink-0 items-center justify-center rounded-[12px] bg-[#FFFFFF]">
                <svg viewBox="0 0 122.88 123.79" className="h-[32px] w-[32px] shrink-0" aria-hidden="true">
                  <path d={AIRTEL_PATH} fill="#ed1d24" />
                </svg>
              </div>
              <div className="flex flex-col items-start gap-[2px]">
                <span className="text-[15px] font-bold text-[#C3E8D6]">Airtel Money</span>
                <span className="text-[12px] text-[#C3E8D6]">Full coverage nationwide</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
