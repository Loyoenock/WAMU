import React from 'react';
import { CreditCard, Layers, MessageCircle, PiggyBank, Shield, Users } from 'lucide-react';
import { IncomingBubble, OutgoingBubble, WhatsAppChatShell } from './WhatsAppMockups';

const VALUE_PANELS = [
  {
    title: 'WhatsApp-first access',
    body: 'Interact with WAMU inside WhatsApp using the phone and messaging habit you already rely on every day.',
    Icon: MessageCircle,
  },
  {
    title: 'Connected financial services',
    body: 'Bring everyday bill payments, savings, group coordination and financial inquiries together in one thread.',
    Icon: Layers,
  },
  {
    title: 'Support for individuals and groups',
    body: 'Designed equally for personal utility bills, savings circles, SACCOs, SMEs, NGOs and community drives.',
    Icon: Users,
  },
  {
    title: 'A familiar way to interact',
    body: 'Guided menus, review summaries and clear chat confirmations replace complex dashboards and paperwork.',
    Icon: Shield,
  },
];

const HUB_NODES = [
  { label: 'Payments', detail: 'UEDCL · NWSC · Airtime · School fees', Icon: CreditCard },
  { label: 'Savings', detail: 'Personal & group savings goals', Icon: PiggyBank },
  { label: 'Group Contributions', detail: 'VSLAs · SACCOs · Collections', Icon: Users },
  { label: 'Financial Services', detail: 'Insurance · Loans · Investments', Icon: Shield },
];

export function WamuDifferenceSection() {
  return (
    <section
      id="difference"
      aria-labelledby="difference-heading"
      className="relative overflow-hidden bg-[#0D1A12] px-4 py-14 text-white min-[375px]:px-6 sm:py-18 md:px-10 md:py-22 lg:px-16 lg:py-28"
    >
      {/* Subtle radial glow behind central smartphone illustration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-12 left-1/2 h-[420px] w-[640px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(29,158,117,0.22)_0%,rgba(15,110,86,0.08)_55%,transparent_75%)] blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-[1140px] 2xl:max-w-[1280px]">
        <div className="mx-auto max-w-[640px] text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#5DCAA5] sm:text-[11.5px]">
            THE WAMU DIFFERENCE
          </p>
          <h2
            id="difference-heading"
            className="mt-3 font-editorial text-[28px]/[35px] font-bold tracking-[-0.015em] text-white min-[375px]:text-[32px]/[40px] md:text-[40px]/[48px] xl:text-[44px]/[52px]"
            style={{ textWrap: 'balance' }}
          >
            Bringing financial services closer to people.
          </h2>
          <p className="mt-3 text-[15px]/[24px] text-[#C3E8D6] md:text-[16.5px]/[26px]">
            A more connected approach to accessing everyday financial activities through a familiar
            communication channel.
          </p>
        </div>

        {/* 2x2 Concise Value Proposition Panels */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 sm:grid-cols-2 lg:gap-6">
          {VALUE_PANELS.map((panel) => (
            <article
              key={panel.title}
              className="rounded-[20px] border border-[#5DCAA5]/20 bg-[#12261B]/85 p-5 transition-colors hover:border-[#5DCAA5]/45 min-[375px]:p-6 sm:p-7"
            >
              <div className="flex items-center gap-3.5">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-[12px] border border-[#5DCAA5]/25 bg-[#1A4029] text-[#5DCAA5]">
                  <panel.Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="font-editorial text-[20px]/[26px] font-bold text-white">
                  {panel.title}
                </h3>
              </div>
              <p className="mt-3 text-[14.5px]/[23px] text-[#C3E8D6]">{panel.body}</p>
            </article>
          ))}
        </div>

        {/* Large Central Ecosystem Composition (Phone + Connected Activities) */}
        <div className="mt-12 rounded-[24px] border border-[#5DCAA5]/20 bg-gradient-to-b from-[#13291C] to-[#0B1710] p-4 min-[375px]:p-6 sm:mt-14 sm:rounded-[28px] lg:p-8 xl:p-10">
          <div className="grid items-center gap-6 md:gap-7 lg:grid-cols-[0.9fr_1.2fr_0.9fr] xl:gap-8">
            {/* Left Connected Nodes */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {HUB_NODES.slice(0, 2).map((node) => (
                <div
                  key={node.label}
                  className="rounded-[18px] border border-white/10 bg-[#0D1A12]/80 p-5"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-[10px] bg-[#1A4029] text-[#5DCAA5]">
                      <node.Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <p className="font-editorial text-[16px] font-bold text-white">{node.label}</p>
                  </div>
                  <p className="mt-2 text-[13px]/[20px] text-[#9FBEAA]">{node.detail}</p>
                </div>
              ))}
            </div>

            {/* Central Smartphone Hub */}
            <div className="mx-auto w-full max-w-[360px]">
              <WhatsAppChatShell title="WAMU Pay" subtitle="Connected Hub" dark>
                <OutgoingBubble text="Menu" time="11:02 AM" dark />
                <IncomingBubble time="11:02 AM" dark>
                  <p className="font-semibold text-white">WAMU — Together in one</p>
                  <ul className="mt-2 space-y-1 text-[#C3E8D6]">
                    <li>1. Pay Utilities &amp; Airtime</li>
                    <li>2. Savings Goals</li>
                    <li>3. Groups &amp; SACCOs</li>
                    <li>4. Insurance &amp; Financial Services</li>
                  </ul>
                </IncomingBubble>
              </WhatsAppChatShell>
            </div>

            {/* Right Connected Nodes */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {HUB_NODES.slice(2, 4).map((node) => (
                <div
                  key={node.label}
                  className="rounded-[18px] border border-white/10 bg-[#0D1A12]/80 p-5"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-[10px] bg-[#1A4029] text-[#5DCAA5]">
                      <node.Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <p className="font-editorial text-[16px] font-bold text-white">{node.label}</p>
                  </div>
                  <p className="mt-2 text-[13px]/[20px] text-[#9FBEAA]">{node.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
