import React from 'react';
import { CheckCheck, ShieldCheck } from 'lucide-react';

export function WhatsAppChatShell({
  title = 'WAMU Pay',
  subtitle = 'WhatsApp Business Account',
  dark = false,
  children,
}: {
  title?: string;
  subtitle?: string;
  dark?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`overflow-hidden rounded-[20px] border ${
        dark
          ? 'border-[#5DCAA5]/20 bg-[#0B1710] text-white shadow-[0_24px_48px_-16px_rgba(0,0,0,0.65)]'
          : 'border-[#C3E8D6] bg-[#FFFFFF] text-[#0D1A12] shadow-[0_18px_40px_-14px_rgba(13,26,18,0.12)]'
      }`}
    >
      {/* WhatsApp header bar */}
      <div
        className={`flex items-center justify-between border-b px-4 py-3 ${
          dark ? 'border-white/10 bg-[#0F2418]' : 'border-[#C3E8D6]/80 bg-[#0F6E56] text-white'
        }`}
      >
        <div className="flex items-center gap-2.5">
          <img
            src="/wamu-mark.webp"
            alt=""
            width={28}
            height={28}
            className="h-7 w-7 rounded-full border border-white/25 bg-[#0D1A12]"
          />
          <div className="leading-tight">
            <div className="flex items-center gap-1.5 text-[13px] font-semibold text-white">
              <span>{title}</span>
              <ShieldCheck className="h-3.5 w-3.5 text-[#5DCAA5]" aria-hidden="true" />
            </div>
            <p className="text-[11px] text-[#C3E8D6]">{subtitle}</p>
          </div>
        </div>
        <span className="text-[10.5px] font-medium text-[#C3E8D6]/80">Illustrative UI</span>
      </div>

      <div
        className={`space-y-2.5 p-4 ${
          dark
            ? 'bg-[radial-gradient(circle_at_top_right,rgba(29,158,117,0.08),transparent_65%)]'
            : 'bg-[#F3F8F5]'
        }`}
      >
        {children}
      </div>
    </div>
  );
}

export function OutgoingBubble({
  text,
  time = '9:32 AM',
  dark = false,
}: {
  text: string;
  time?: string;
  dark?: boolean;
}) {
  return (
    <div className="flex justify-end">
      <div
        className={`max-w-[85%] rounded-[14px] rounded-tr-[4px] px-3.5 py-2 text-[12.5px]/[18px] shadow-xs ${
          dark
            ? 'border border-[#5DCAA5]/20 bg-[#1A4029] text-[#F7FAF8]'
            : 'bg-[#D7F5E5] text-[#0D1A12]'
        }`}
      >
        <p>{text}</p>
        <div
          className={`mt-1 flex items-center justify-end gap-1 text-[10px] ${
            dark ? 'text-[#9FBEAA]' : 'text-[#2D4A38]'
          }`}
        >
          <span>{time}</span>
          <CheckCheck className="h-3 w-3 text-[#1D9E75]" aria-hidden="true" />
        </div>
      </div>
    </div>
  );
}

export function IncomingBubble({
  children,
  time = '9:32 AM',
  dark = false,
}: {
  children: React.ReactNode;
  time?: string;
  dark?: boolean;
}) {
  return (
    <div className="flex justify-start">
      <div
        className={`max-w-[88%] rounded-[14px] rounded-tl-[4px] border px-3.5 py-2.5 text-[12.5px]/[18px] shadow-xs ${
          dark
            ? 'border-white/10 bg-[#13261B] text-[#EBF6F0]'
            : 'border-[#C3E8D6]/70 bg-white text-[#0D1A12]'
        }`}
      >
        {children}
        <p className={`mt-1 text-right text-[10px] ${dark ? 'text-[#9FBEAA]' : 'text-[#5A7A68]'}`}>
          {time}
        </p>
      </div>
    </div>
  );
}
