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
    <section className="relative overflow-hidden bg-[#D9F0E3]">
      <WaMark tone="light" className="right-[40px] top-[40px] h-[150px] w-[150px] -z-0" />
      <WaMark tone="light" className="left-[24px] bottom-[56px] h-[112px] w-[112px] -z-0" />

      <div className="relative mx-auto flex max-w-[1280px] flex-col items-center gap-[52px] px-6 py-16 md:px-12 md:py-[88px] lg:px-20">
        <div className="flex max-w-[680px] flex-col items-center gap-[14px]">
          <p className="text-[11px] font-bold tracking-[2px] text-[#0F6E56]">THE PROBLEM</p>
          <h2 className="text-center font-[Fraunces,ui-serif,Georgia,serif] font-bold text-[30px]/[36px] md:text-[38px]/[44px] lg:text-[42px]/[48px] text-[#0D2016]">
            Savings groups run on trust. Not systems.
          </h2>
          <p className="max-w-[560px] text-center text-[16px]/[26px] text-[#1B4332]">
            When the treasurer&apos;s notebook is the only record, the group is one missed meeting
            away from a dispute. WAMU fixes the system, not the people.
          </p>
        </div>

        <div className="flex w-full flex-col gap-[24px] lg:h-[380px] lg:flex-row lg:items-center">
          <div className="relative h-[240px] w-full overflow-hidden rounded-[20px] border border-white/70 shadow-[0_14px_32px_-12px_rgba(27,67,50,0.12)] lg:h-[380px] lg:flex-1">
            <img
              src="/images/problem.webp"
              alt="A treasurer writing savings group contributions into a paper notebook"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div className="flex w-full flex-col justify-center gap-[20px] rounded-[20px] border border-[#5DCAA5]/25 bg-[#1A4029] px-[44px] py-[48px] shadow-[0_18px_38px_-14px_rgba(13,32,22,0.38)] lg:h-[380px] lg:w-[420px] lg:shrink-0">
            <p className="text-[10px] font-bold tracking-[1.8px] text-[#5DCAA5]">
              THE SCALE OF THE PROBLEM
            </p>
            <p className="font-[Fraunces,ui-serif,Georgia,serif] text-[56px] md:text-[72px] font-bold leading-none text-[#F4FBF7]">
              4M+
            </p>
            <p className="text-[15px]/[25px] text-[#C3E8D6]">
              savings groups across Uganda and East Africa. Most are still running on handwritten
              notebooks and word of mouth.
            </p>
            <div className="h-px w-full bg-[#2D5A3D]" aria-hidden="true" />
            <p className="text-[13px]/[21px] text-[#9FBEAA]">
              Every missed meeting, every disputed ledger, every stolen float is a group that stops
              trusting itself.
            </p>
          </div>
        </div>

        <div className="grid w-full grid-cols-1 gap-[20px] md:grid-cols-3">
          {cards.map((c) => (
            <div
              key={c.title}
              className="group flex flex-col items-start gap-[16px] rounded-[20px] border border-white/80 bg-[#F4FBF7]/90 p-[28px] shadow-[0_12px_28px_-10px_rgba(27,67,50,0.09),0_2px_8px_-2px_rgba(27,67,50,0.04),inset_0_1px_0_0_rgba(255,255,255,0.9)] backdrop-blur-md transition-all duration-200 ease-out hover:-translate-y-1 hover:border-[#5DCAA5]/75 hover:bg-white/95 hover:shadow-[0_18px_36px_-12px_rgba(27,67,50,0.14)]"
            >
              <span className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-[14px] border border-[#C3E8D6] bg-[#E3F5EB] shadow-[inset_0_1px_0_rgba(255,255,255,0.85)] transition-colors duration-200 group-hover:bg-[#0B6B45]">
                <c.Icon
                  className="h-[24px] w-[24px] text-[#0B6B45] transition-colors duration-200 group-hover:text-white"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
              </span>
              <h3 className="font-[Fraunces,ui-serif,Georgia,serif] text-[18px] font-bold text-[#0D2016]">
                {c.title}
              </h3>
              <p className="text-[14px]/[23px] text-[#284E3A]">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
