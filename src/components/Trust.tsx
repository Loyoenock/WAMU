import React from 'react';
import {
  IdCard,
  ClipboardCheck,
  Landmark,
  Lock,
  BadgeCheck,
  Smartphone,
  LockKeyhole,
  ScrollText,
  type LucideIcon,
} from 'lucide-react';
import { WaMark } from './WaMark';

const MTN_PATH =
  'M410 553c-75.6 0-146.9-14.1-200.7-39.8C153 486.3 122 449.7 122 410s31-76.3 87.3-103.2C263.1 281.1 334.4 267 410 267s146.9 14.1 200.7 39.8C667 333.7 698 370.3 698 410s-31 76.3-87.3 103.2C556.9 538.9 485.6 553 410 553zm0-264.9c-72.6 0-140.6 13.4-191.6 37.8-48.5 23.2-75.3 53.1-75.3 84.2s26.7 61 75.3 84.1c51 24.4 119.1 37.8 191.6 37.8s140.6-13.4 191.6-37.8c48.5-23.1 75.3-53.1 75.3-84.1s-26.7-61-75.3-84.1c-51-24.5-119-37.9-191.6-37.9z M364.5 361.6v93.6h-25.6v-52.5L321.8 428h-13.4l-18.8-25.3v52.5h-23.4v-93.6h23.6l27 36.7 24.2-36.7zM371.9 382.8v-21.2h87.4v21.2h-30.6v72.4h-26.1v-72.4zM555.6 361.6v93.6h-21.5l-44-53.5v53.5h-23.4v-93.6H490l42.1 51.6v-51.6z';

const AIRTEL_PATH =
  'M68.09.1a6.16,6.16,0,0,1-1.24.15,41.48,41.48,0,0,0-9.53,2.4l-1.19.49a43.68,43.68,0,0,0-5,2.41,3.57,3.57,0,0,1-.89.41c-.25.06-.45.18-.45.25s-.14.17-.29.24a4.26,4.26,0,0,0-.82.44,7.92,7.92,0,0,1-.9.51,4.68,4.68,0,0,0-.95.59,2.88,2.88,0,0,1-.66.43,60.55,60.55,0,0,0-7.39,5.36,30.85,30.85,0,0,0-3.58,3.81,1.82,1.82,0,0,1-.36.51A30.7,30.7,0,0,0,32.34,22c-.18.42-.56,1.17-.8,1.68a11.49,11.49,0,0,0-1.08,5.7,6.08,6.08,0,0,0,2,4.68,7.81,7.81,0,0,0,5.66,2.31,13.61,13.61,0,0,0,4.76-.54c.55-.16,1.3-.34,1.66-.45a4.11,4.11,0,0,0,.93-.32c.39-.2,2.58-1.19,2.68-1.19a65,65,0,0,0,7.2-4.39c2.18-1.46,4.1-2.73,4.27-2.82s1.19-.71,2.29-1.37,2.46-1.43,3-1.71l1.78-.94c.43-.2,1.22-.57,1.78-.78s1.26-.51,1.53-.63.7-.3.93-.4a14.41,14.41,0,0,1,3.62-.65,6,6,0,0,1,6.5,4.11,8.52,8.52,0,0,1,.32,3.31A12.77,12.77,0,0,1,80.53,33l-.43,1a38.38,38.38,0,0,1-4.6,7.6,65.43,65.43,0,0,1-8.68,9l-2.29,1.9c-.72.59-1.55,1.18-2.46,1.8-.38.23-1,.64-1.36.91a45.69,45.69,0,0,1-5.43,2.89l-1.39.61A2.68,2.68,0,0,1,53,59a3.67,3.67,0,0,0-.86.19,1.62,1.62,0,0,1-2.22-1.49c0-1.39.66-2.28,4.83-6.42,4.51-4.47,5-5.14,5-6.83s-.83-2.94-2.7-3.89a4.28,4.28,0,0,0-2.55-.47,6.48,6.48,0,0,0-3.83,1c-.27.17-.7.39-.93.51a2.87,2.87,0,0,0-.51.31s-.39.3-.77.59a22.74,22.74,0,0,0-3.37,3.46A23.84,23.84,0,0,0,43,49.47,17.39,17.39,0,0,0,41.28,56c0,3.65,1.9,6.57,4.84,7.4a22.7,22.7,0,0,0,5.72,0A32.26,32.26,0,0,0,56.45,62a.73.73,0,0,1,.41-.15,52,52,0,0,0,7.21-3.68c.39-.26.83-.55,1-.65s1-.57,1.78-1.08,1.53-1,1.58-1a14.7,14.7,0,0,1,1.27-.93l1.7-1.17c.29-.21,1.08-.82,1.78-1.38A68,68,0,0,0,83.77,41.75c.37-.45.71-.88.76-.93a35.5,35.5,0,0,0,2.09-3,22.9,22.9,0,0,0,1.2-2.07c.32-.61.77-1.44,1-1.87s.69-1.52,1.06-2.46.72-1.85.78-2a38.46,38.46,0,0,0,1.53-6.53,25,25,0,0,0-.61-8.91,15.54,15.54,0,0,0-1-2.46,18.56,18.56,0,0,0-6-7.3,9.1,9.1,0,0,1-1-.74A23.19,23.19,0,0,0,78.08,1a27.86,27.86,0,0,0-3.2-.72C73.79.11,71.82,0,70.27,0h-.79a6.8,6.8,0,0,0-1.39.1Z';

type TrustItem = { Icon: LucideIcon; title: string; desc: string };

const TRUST_ITEMS: TrustItem[] = [
  {
    Icon: IdCard,
    title: 'Identity verification',
    desc: 'Every member is verified before they can send or receive funds.',
  },
  {
    Icon: ClipboardCheck,
    title: 'Tamper-resistant ledger',
    desc: 'Every transaction is logged permanently. No silent edits.',
  },
  {
    Icon: Landmark,
    title: 'Regulated payment rails',
    desc: 'MTN MoMo and Airtel run through licensed channels, not informal transfers.',
  },
  {
    Icon: Lock,
    title: 'Data protection',
    desc: "Member information is collected only where needed, handled in line with Uganda's data protection principles.",
  },
];

type Credential = { Icon: LucideIcon; title: string; sub: string; logos?: boolean };

const CREDENTIALS: Credential[] = [
  { Icon: BadgeCheck, title: 'Uganda-registered', sub: 'WAMU PAY (UGANDA) LIMITED' },
  { Icon: Smartphone, title: 'Mobile Money Integrated', sub: 'MTN MoMo and Airtel Money', logos: true },
  { Icon: LockKeyhole, title: '256-bit encryption', sub: 'Industry-standard in transit and at rest' },
  { Icon: ScrollText, title: 'Regulatory alignment', sub: 'Payment systems and cooperative law' },
];

export function Trust() {
  return (
    <section id="security" className="relative overflow-hidden bg-[#0C1E12]">
      <WaMark tone="dark" className="right-[48px] top-[56px] h-[132px] w-[132px]" />
      <WaMark tone="dark" className="left-[36px] bottom-[56px] h-[104px] w-[104px]" />

      <div className="relative mx-auto flex max-w-[1440px] flex-col gap-16 px-6 py-20 md:px-12 md:py-24 lg:flex-row lg:items-center lg:gap-20 lg:px-[80px] lg:py-[104px]">
        {/* Left: heading + trust points */}
        <div className="flex w-full flex-col items-start gap-[28px] lg:w-[540px] lg:shrink-0">
          <span className="text-[11px] font-bold uppercase tracking-[2px] text-[#E8A020]">
            Security &amp; Trust
          </span>
          <h2 className="w-full font-[Fraunces,ui-serif,Georgia,serif] text-[30px]/[38px] font-bold text-white md:text-[38px]/[46px]">
            Your group's money and records, protected properly.
          </h2>
          <p className="w-full text-[15px]/[26px] text-[#B4CDBE]">
            Trust is the foundation every savings group runs on. WAMU makes that trust harder to
            break: it verifies who members are, keeps records that cannot be quietly edited, and
            routes money through regulated payment channels.
          </p>

          <ul className="mt-1 w-full divide-y divide-[#22402D] border-y border-[#22402D]">
            {TRUST_ITEMS.map((item) => (
              <li key={item.title} className="flex w-full items-start gap-[16px] py-[18px]">
                <span className="flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-[10px] bg-[#ECEFE8]">
                  <item.Icon className="h-[18px] w-[18px] text-[#B07E12]" strokeWidth={1.75} aria-hidden="true" />
                </span>
                <span className="flex flex-1 flex-col gap-[3px]">
                  <span className="text-[14px] font-bold text-white">{item.title}</span>
                  <span className="text-[13px]/[20px] text-[#9FBEAA]">{item.desc}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: credential grid - clean solid off-white cards */}
        <div className="grid w-full flex-1 grid-cols-1 gap-[16px] sm:grid-cols-2">
          {CREDENTIALS.map((c) => (
            <div
              key={c.title}
              className="flex flex-col gap-[10px] rounded-[16px] border border-[#DBE0D4] bg-[#ECEFE8] p-[22px] shadow-[0_16px_36px_-18px_rgba(0,0,0,0.55)] transition duration-200 ease-out hover:-translate-y-1 hover:border-[#D4A017]"
            >
              <c.Icon className="h-[22px] w-[22px] text-[#B07E12]" strokeWidth={1.5} aria-hidden="true" />
              <span className="text-[14px] font-bold text-[#0C1E12]">{c.title}</span>
              <span className="text-[12px]/[18px] text-[#5C6B60]">{c.sub}</span>
              {c.logos && (
                <div className="mt-1 flex items-center gap-[6px]">
                  <span className="flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-[6px] bg-[#ffc403]">
                    <svg viewBox="0 0 820 820" className="h-[20px] w-[20px] shrink-0" aria-hidden="true">
                      <path d={MTN_PATH} fill="#0C1E12" />
                    </svg>
                  </span>
                  <span className="flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-[6px] border border-[#DBE0D4] bg-white">
                    <svg viewBox="0 0 122.88 123.79" className="h-[17px] w-[17px] shrink-0" aria-hidden="true">
                      <path d={AIRTEL_PATH} fill="#ed1d24" />
                    </svg>
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
