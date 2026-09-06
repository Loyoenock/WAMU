import React from 'react';
import { NotebookPen, Banknote, Brain } from 'lucide-react';
import { WaMark } from './WaMark';

const cards = [
  {
    Icon: NotebookPen,
    title: 'Records in a notebook',
    body: 'Contributions written by hand. One missed entry creates a dispute that takes a full meeting to resolve, if it gets resolved at all.',
  },
  {
    Icon: Banknote,
    title: 'Cash changes hands every cycle',
    body: "Someone collects it, someone holds it, someone transports it. Every step is a risk: theft, loss, or a count that doesn't match.",
  },
  {
    Icon: Brain,
    title: 'One person knows everything',
    body: "Payout order, who has contributed, who still owes. All in the treasurer's head. When they leave, the records leave too.",
  },
];

export function Problem() {
  return (
    <section className="relative overflow-hidden bg-[#FDFAF4]">
      <WaMark tone="light" className="right-[40px] top-[40px] h-[150px] w-[150px] -z-0" />
      <WaMark tone="light" className="left-[24px] bottom-[56px] h-[112px] w-[112px] -z-0" />

      <div className="relative mx-auto flex max-w-[1440px] flex-col items-center gap-[52px] px-6 md:px-12 lg:px-[120px] py-16 md:py-[88px]">
        <div className="flex max-w-[680px] flex-col items-center gap-[14px]">
          <p className="text-[11px] font-bold tracking-[2px] text-[#1A4029]">THE PROBLEM</p>
          <h2 className="text-center font-[Fraunces,ui-serif,Georgia,serif] font-bold text-[30px]/[36px] md:text-[38px]/[44px] lg:text-[42px]/[48px] text-[#0C1E12]">
            Savings groups run on trust. Not systems.
          </h2>
          <p className="max-w-[560px] text-center text-[16px]/[26px] text-[#3C5A48]">
            When the treasurer&apos;s notebook is the only record, the group is one missed meeting
            away from a dispute. WAMU fixes the system, not the people.
          </p>
        </div>

        <div className="flex w-full flex-col gap-[24px] lg:h-[380px] lg:flex-row lg:items-center">
          <div className="relative h-[240px] w-full overflow-hidden rounded-[20px] lg:h-[380px] lg:flex-1">
            <img
              src="/images/problem.webp"
              alt="A treasurer writing savings group contributions into a paper notebook"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div className="flex w-full flex-col justify-center gap-[20px] rounded-[20px] bg-[#1A4029] px-[44px] py-[48px] lg:h-[380px] lg:w-[420px] lg:shrink-0">
            <p className="text-[10px] font-bold tracking-[1.8px] text-[#D4A017]">
              THE SCALE OF THE PROBLEM
            </p>
            <p className="font-[Fraunces,ui-serif,Georgia,serif] text-[56px] md:text-[72px] font-bold leading-none text-[#F7F4EE]">
              4M+
            </p>
            <p className="text-[15px]/[25px] text-[#7AAA8A]">
              savings groups across Uganda and East Africa. Most are still running on handwritten
              notebooks and word of mouth.
            </p>
            <div className="h-px w-full bg-[#2D5A3D]" aria-hidden="true" />
            <p className="text-[13px]/[21px] text-[#4A7A5A]">
              Every missed meeting, every disputed ledger, every stolen float is a group that stops
              trusting itself.
            </p>
          </div>
        </div>

        <div className="grid w-full grid-cols-1 gap-[20px] md:grid-cols-3">
          {cards.map((c) => (
            <div
              key={c.title}
              className="group flex flex-col items-start gap-[16px] rounded-[16px] bg-[#FFFFFF] p-[28px] outline outline-1 -outline-offset-1 outline-[#DED6C4] transition-transform duration-200 ease-out hover:-translate-y-1 hover:shadow-[0_16px_32px_-12px_rgba(26,64,41,0.18)]"
            >
              <span className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-[12px] bg-[#F0EBE0] transition-colors duration-200 group-hover:bg-[#1A4029]">
                <c.Icon
                  className="h-[24px] w-[24px] text-[#0C1E12] transition-colors duration-200 group-hover:text-[#F7F4EE]"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
              </span>
              <h3 className="font-[Fraunces,ui-serif,Georgia,serif] text-[18px] font-bold text-[#0C1E12]">
                {c.title}
              </h3>
              <p className="text-[14px]/[23px] text-[#4B6A58]">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
