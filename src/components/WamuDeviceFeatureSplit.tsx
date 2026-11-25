import React from 'react';
import { Check, CheckCircle2, MessageCircle, ShieldCheck, Sparkles, Wallet, Zap } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

const HIGHLIGHTS = [
  'Instant UEDCL token & NWSC water receipts in chat',
  'Automated VSLA, SACCO & merry-go-round ledgers',
  'Direct MTN MoMo & Airtel Money mobile prompts',
];

export function WamuDeviceFeatureSplit() {
  return (
    <section
      aria-labelledby="wamu-device-split-heading"
      className="relative overflow-hidden bg-[#D9F0E3] px-6 py-20 md:px-12 md:py-24 lg:px-20"
    >
      {/* Very subtle dotted pattern on soft mint background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.14] [background-image:radial-gradient(#0F6E56_1.15px,transparent_1.15px)] [background-size:22px_22px]"
      />

      {/* Subtle ambient light diffusion behind the split layout */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-1/2 h-[480px] w-[480px] -translate-y-1/2 rounded-full bg-[#5DCAA5]/25 blur-[95px]"
      />

      <div className="relative z-[1] mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
        {/* Left Side: Clean Text Content (Headline + Short Description + Highlights + CTA) */}
        <div className="flex flex-col items-start lg:col-span-5">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/75 bg-[#F4FBF7]/85 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[1.8px] text-[#0F6E56] shadow-[0_4px_12px_-4px_rgba(27,67,50,0.08)] backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5 text-[#1D9E75]" aria-hidden="true" />
            WHATSAPP-FIRST FINTECH
          </span>

          <h2
            id="wamu-device-split-heading"
            className="mt-5 font-[Fraunces,ui-serif,Georgia,serif] text-[32px]/[38px] font-bold text-[#0D2016] md:text-[42px]/[48px] lg:text-[44px]/[50px]"
          >
            Pay utilities and run your savings group from one chat.
          </h2>

          <p className="mt-4 max-w-[500px] text-[16px]/[26px] text-[#1B4332]">
            No new app to download and no paper ledger to reconcile. Whether you are clearing an
            electricity bill in seconds or collecting monthly SACCO contributions, WAMU handles the
            math, reminders, and receipts right inside WhatsApp.
          </p>

          <ul className="mt-6 flex flex-col gap-3">
            {HIGHLIGHTS.map((item) => (
              <li key={item} className="flex items-center gap-3 text-[14.5px] font-medium text-[#0D2016]">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0B6B45]/12 text-[#0B6B45]">
                  <CheckCircle2 className="h-4 w-4" strokeWidth={2.2} aria-hidden="true" />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="https://wa.me/256788003344"
              className="wamu-nav-cta-btn inline-flex items-center gap-2.5 rounded-full bg-[#0B6B45] px-7 py-4 text-[15px] font-semibold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D9E75] focus-visible:ring-offset-2"
            >
              <WhatsAppIcon className="h-[18px] w-[18px] text-white" />
              Start on WhatsApp
            </a>
            <a
              href="#how-it-works"
              className="wamu-liquid-btn-light inline-flex items-center rounded-full px-6 py-4 text-[14.5px] font-semibold text-[#0D2016] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D9E75] focus-visible:ring-offset-2"
            >
              See how it works
            </a>
          </div>
        </div>

        {/* Right Side: Premium Angled iPhone Mockup + 4 Floating Frosted-Glass Status Bubbles */}
        <div className="relative flex items-center justify-center lg:col-span-7">
          <div className="relative flex w-full max-w-[660px] flex-col items-center justify-center py-6 sm:py-10">
            {/* Ambient studio light halo behind the angled phone */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.75)_0%,rgba(29,158,117,0.18)_52%,transparent_75%)] blur-2xl"
            />

            {/* Floating Bubble 1 (Top-Left, high elevation): "Payment Successful – UGX 50,000" */}
            <div className="wamu-status-bubble relative z-[3] mb-3 flex items-center gap-2.5 self-start px-4 py-2.5 shadow-[0_20px_38px_-12px_rgba(13,32,22,0.18),0_6px_14px_-4px_rgba(13,32,22,0.08)] sm:absolute sm:left-0 sm:top-14 sm:mb-0">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#1D9E75] text-white shadow-sm">
                <Check className="h-3.5 w-3.5" strokeWidth={2.75} aria-hidden="true" />
              </span>
              <span className="text-[13px] font-semibold tracking-[-0.01em] text-[#0D2016] sm:text-[13.5px]">
                Payment Successful – UGX 50,000
              </span>
            </div>

            {/* Floating Bubble 4 (Upper-Right, chat reply bubble with tail): "Yes, confirm payment" */}
            <div className="wamu-status-bubble relative z-[3] mb-4 hidden items-center gap-2 rounded-[20px] rounded-bl-[5px] px-4 py-2.5 shadow-[0_18px_34px_-10px_rgba(13,32,22,0.16)] sm:absolute sm:right-2 sm:top-20 sm:mb-0 sm:flex">
              <MessageCircle className="h-4 w-4 shrink-0 text-[#0F6E56]" strokeWidth={2.2} aria-hidden="true" />
              <span className="text-[13px] font-medium tracking-[-0.01em] text-[#1B4332]">
                “Yes, confirm payment”
              </span>
            </div>

            {/* Modern iPhone-style Smartphone shown at a slight angle with studio lighting */}
            <div className="relative z-[2] -rotate-[3.5deg] transition-transform duration-500 ease-out hover:rotate-0">
              {/* Outer metallic titanium-mint bezel with top-left studio rim light */}
              <div className="relative w-[286px] rounded-[46px] border border-white/65 bg-gradient-to-b from-[#234534] via-[#132A1E] to-[#0A1810] p-[10px] shadow-[24px_38px_72px_-18px_rgba(13,32,22,0.42),-8px_-8px_24px_rgba(255,255,255,0.55),0_14px_28px_-8px_rgba(13,32,22,0.25),inset_0_1.5px_2px_rgba(255,255,255,0.45)] sm:w-[308px]">
                {/* Inner glass screen */}
                <div className="relative overflow-hidden rounded-[37px] bg-[#ECE5DD]">
                  {/* Glossy diagonal screen light reflection */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -left-1/3 -top-1/4 z-[4] h-[75%] w-[90%] rotate-12 bg-gradient-to-br from-white/25 via-white/5 to-transparent"
                  />

                  {/* iOS Status Bar + Dynamic Island */}
                  <div className="relative z-[2] flex items-center justify-between bg-[#075E54] px-5 pt-2.5 pb-1.5 text-[11px] font-semibold text-white">
                    <span>9:41</span>
                    <div className="h-[15px] w-[66px] rounded-full bg-[#06100B]" />
                    <div className="flex items-center gap-1">
                      <span className="inline-block h-2 w-2 rounded-full bg-[#5DCAA5]" />
                      <span className="text-[10px]">5G</span>
                    </div>
                  </div>

                  {/* WhatsApp Header */}
                  <div className="relative z-[2] flex items-center justify-between bg-[#075E54] px-3.5 pb-3 pt-1 text-white shadow-sm">
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1D9E75] text-[12px] font-extrabold tracking-tight text-white shadow-inner">
                        W
                      </div>
                      <div className="flex flex-col">
                        <div className="flex items-center gap-1">
                          <span className="text-[13px] font-bold leading-tight">WAMU Official</span>
                          <span className="inline-flex h-3.5 w-3.5 items-center justify-center rounded-full bg-[#25D366] text-[#062417]">
                            <Check className="h-2.5 w-2.5" strokeWidth={3.2} />
                          </span>
                        </div>
                        <span className="text-[10px] text-[#C3E8D6]">Verified Utility &amp; Group Desk</span>
                      </div>
                    </div>
                    <Zap className="h-4 w-4 text-[#C3E8D6]" aria-hidden="true" />
                  </div>

                  {/* WhatsApp Chat Conversation Area */}
                  <div className="relative z-[1] flex flex-col gap-2.5 bg-[#EAE3DA] px-3 py-3.5 text-[12px] leading-[1.38] text-[#0D2016]">
                    {/* Outgoing User Utility Request */}
                    <div className=" max-w-[85%] self-end rounded-[14px] rounded-tr-[3px] bg-[#DCF8C6] px-3 py-2 shadow-[0_1px_2px_rgba(0,0,0,0.08)]">
                      <p className="font-medium text-[#0D2016]">
                        Buy Yaka electricity UGX 50,000 for meter 0421908442
                      </p>
                      <span className="mt-0.5 block text-right text-[9.5px] text-[#284E3A]/80">
                        14:28 ✓✓
                      </span>
                    </div>

                    {/* Incoming WAMU Quote Card */}
                    <div className="max-w-[88%] self-start rounded-[14px] rounded-tl-[3px] bg-white px-3 py-2.5 shadow-[0_1px_3px_rgba(0,0,0,0.08)]">
                      <p className="text-[10.5px] font-bold uppercase tracking-[0.06em] text-[#0F6E56]">
                        UEDCL Yaka Token Summary
                      </p>
                      <div className="mt-1 space-y-0.5 text-[11.5px] text-[#1B4332]">
                        <p>• Meter: <span className="font-semibold text-[#0D2016]">0421908442</span></p>
                        <p>• Customer: <span className="font-semibold text-[#0D2016]">K. Namusoke</span></p>
                        <p>• Amount: <span className="font-bold text-[#0B6B45]">UGX 50,000</span></p>
                      </div>
                      <span className="mt-1 block text-right text-[9.5px] text-neutral-400">
                        14:28
                      </span>
                    </div>

                    {/* Outgoing User Confirmation */}
                    <div className="max-w-[78%] self-end rounded-[14px] rounded-tr-[3px] bg-[#DCF8C6] px-3 py-1.5 shadow-[0_1px_2px_rgba(0,0,0,0.08)]">
                      <p className="font-semibold text-[#0D2016]">Yes, confirm payment</p>
                      <span className="block text-right text-[9.5px] text-[#284E3A]/80">
                        14:29 ✓✓
                      </span>
                    </div>

                    {/* Incoming WAMU Instant Receipt */}
                    <div className="max-w-[92%] self-start overflow-hidden rounded-[14px] rounded-tl-[3px] border border-[#1D9E75]/25 bg-white shadow-[0_4px_12px_rgba(13,32,22,0.08)]">
                      <div className="flex items-center gap-1.5 bg-[#0B6B45] px-3 py-1.5 text-white">
                        <CheckCircle2 className="h-3.5 w-3.5 text-[#C3E8D6]" strokeWidth={2.4} />
                        <span className="text-[11px] font-bold tracking-wide">
                          WAMU Receipt · Paid
                        </span>
                      </div>
                      <div className="space-y-1 px-3 py-2 text-[11.5px]">
                        <p className="font-bold text-[#0D2016]">
                          Token: <span className="font-mono text-[#0B6B45]">4829-1049-3821-0942</span>
                        </p>
                        <p className="text-[11px] text-[#1B4332]">
                          Units: 68.4 kWh · Paid via MTN MoMo
                        </p>
                        <span className="block text-right text-[9.5px] text-neutral-400">
                          14:29
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* WhatsApp Input Footer */}
                  <div className="flex items-center justify-between bg-[#F0F0F0] px-3 py-2">
                    <div className="flex h-7 flex-1 items-center rounded-full bg-white px-3 text-[11px] text-neutral-400">
                      Message WAMU...
                    </div>
                    <div className="ml-2 flex h-7 w-7 items-center justify-center rounded-full bg-[#075E54] text-white">
                      <Check className="h-3.5 w-3.5" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Realistic Floor Shadow & Subtle Glossy Reflection under the Angled Phone */}
              <div
                aria-hidden="true"
                className="pointer-events-none mx-auto mt-2 h-5 w-[78%] rounded-full bg-[#0D2016]/30 blur-md"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none mx-auto -mt-1 h-10 w-[82%] rounded-t-[36px] bg-gradient-to-b from-[#0D2016]/14 via-[#1D9E75]/8 to-transparent opacity-75 blur-[3px] [transform:scaleY(-0.65)_skewX(6deg)]"
              />
            </div>

            {/* Floating Bubble 2 (Mid-Right, medium depth): "No app needed" */}
            <div className="wamu-status-bubble relative z-[3] mt-3 flex items-center gap-2.5 self-end px-4 py-2.5 shadow-[0_16px_32px_-10px_rgba(13,32,22,0.16)] sm:absolute sm:bottom-28 sm:right-0 sm:mt-0">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#1B4332]/12 text-[#0B6B45]">
                <ShieldCheck className="h-3.5 w-3.5" strokeWidth={2.2} aria-hidden="true" />
              </span>
              <span className="text-[13px] font-medium tracking-[-0.01em] text-[#1B4332] sm:text-[13.5px]">
                No app needed
              </span>
            </div>

            {/* Floating Bubble 3 (Bottom-Left, foreground depth): "MTN MoMo · Airtel Money" */}
            <div className="wamu-status-bubble relative z-[3] mt-2.5 flex items-center gap-2.5 self-start px-4 py-2.5 shadow-[0_22px_42px_-12px_rgba(13,32,22,0.2)] sm:absolute sm:bottom-12 sm:left-2 sm:mt-0">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#1B4332]/12 text-[#0B6B45]">
                <Wallet className="h-3.5 w-3.5" strokeWidth={2.1} aria-hidden="true" />
              </span>
              <span className="text-[13px] font-medium tracking-[-0.01em] text-[#1B4332] sm:text-[13.5px]">
                MTN MoMo <span className="mx-1 opacity-55">·</span> Airtel Money
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

