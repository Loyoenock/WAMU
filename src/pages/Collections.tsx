import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Collections as CollectionsSection } from '../components/Collections';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import { JsonLd, usePageMeta } from '../lib/router';

const WA_START =
  'https://wa.me/256788003344?text=I%20want%20to%20start%20a%20collection%20on%20WAMU';

const STEPS: { n: string; title: string; body: string }[] = [
  {
    n: '1',
    title: 'Set the goal',
    body:
      'Name the occasion, the target amount and the date. A wedding budget, a burial fund, a graduation party, school fees. WAMU creates the goal and its ledger.',
  },
  {
    n: '2',
    title: 'Invite by WhatsApp',
    body:
      'Share one link. Anyone who opens it can pledge and pay by MTN Mobile Money or Airtel Money, from anywhere in Uganda, without installing anything.',
  },
  {
    n: '3',
    title: 'Reminders go out on their own',
    body:
      'WAMU messages the people who pledged but have not paid, before each meeting and before the deadline. Nobody has to chase in the group chat.',
  },
  {
    n: '4',
    title: 'Pay out with approvals',
    body:
      'Everyone sees the running total against the target. Withdrawals need more than one approver, so no single person can empty the collection.',
  },
];

const FAQS: { q: string; a: string }[] = [
  {
    q: 'Can WAMU run a wedding or introduction committee collection?',
    a: 'Yes. Set the wedding budget as the goal, invite the committee by WhatsApp link, and WAMU tracks what each person pledged against what they actually paid. The running total is visible to every member, and reminders go out before each meeting.',
  },
  {
    q: 'How fast can we open a funeral or burial collection?',
    a: 'In minutes. Create the goal, share the link, and contributions come in by MTN Mobile Money or Airtel Money straight away. Every contribution is receipted, and withdrawals require more than one approver so no one person can take the money alone.',
  },
  {
    q: 'What other events can we collect for?',
    a: 'Any occasion with a target and a deadline: graduations, baby showers, church fundraisers, school fees drives, farewell parties, medical bills. They all run as WAMU savings goals with the same ledger, reminders and approvals.',
  },
  {
    q: 'Do contributors need to download an app?',
    a: 'No. Contributors pay from WhatsApp using MTN Mobile Money or Airtel Money. There is no app to install and no account to create beyond WhatsApp itself.',
  },
  {
    q: 'How do we know the money is safe?',
    a: 'Members are identity-verified before they can send or receive funds, every contribution is recorded in a tamper-resistant ledger with no silent edits, money moves on regulated mobile money rails, and payouts need more than one approver.',
  },
  {
    q: 'Does WAMU send reminders automatically?',
    a: 'Yes. WAMU sends WhatsApp reminders before every meeting, contribution date and deadline, targeted at the people who have not paid yet.',
  },
];

export function CollectionsPage() {
  usePageMeta({
    title: 'Wedding, Funeral & Event Collections on WhatsApp | WAMU Uganda',
    description:
      'Run wedding, funeral and event contributions on WhatsApp in Uganda. Set a target, invite by link, collect by MTN MoMo or Airtel Money, send automatic reminders, and pay out with more than one approver.',
  });

  return (
    <>
      <Navigation />
      <main id="main-content">
        {/* Page header */}
        <section className="bg-[#EBF6F0] px-4 pt-24 pb-12 min-[375px]:px-6 sm:pt-28 md:px-10 md:pt-32 lg:px-16 lg:pt-[136px]">
          <div className="mx-auto max-w-[1280px] 2xl:max-w-[1340px]">
            <p className="text-[11px] font-bold uppercase tracking-[2px] text-[#0F6E56]">
              COLLECTIONS &amp; CONTRIBUTIONS
            </p>
            <h1 className="font-editorial mt-3 max-w-[820px] text-[28px]/[34px] font-bold text-[#0D1A12] min-[375px]:text-[34px]/[40px] md:text-[44px]/[50px] xl:text-[46px]/[52px]">
              Wedding, funeral and event collections, counted correctly.
            </h1>
            <p className="mt-4 max-w-[620px] text-[15px]/[24px] text-[#2D4A38] sm:text-[16px]/[26px]">
              Every contribution for a wedding, a burial or an event runs as a WAMU savings goal: a
              target, a deadline, mobile money in, automatic reminders, and a ledger every
              contributor can check for themselves.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href={WA_START}
                target="_blank"
                rel="noopener noreferrer"
                className="wamu-magie-btn-light group inline-flex w-fit items-center gap-2.5 py-1.5 pl-5 pr-1.5 text-[14.5px] font-semibold text-white hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F6E56] focus-visible:ring-offset-2 sm:gap-3 sm:py-2 sm:pl-6 sm:pr-2 sm:text-[15px]"
              >
                <WhatsAppIcon className="h-[17px] w-[17px] text-[#5DCAA5]" />
                <span>Start a collection</span>
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white text-[#0D1A12] shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:bg-[#5DCAA5] sm:h-10 sm:w-10">
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </a>
            </div>
          </div>
        </section>

        <CollectionsSection />

        {/* How a collection runs */}
        <section className="bg-[#FFFFFF] px-4 py-14 min-[375px]:px-6 sm:py-16 md:px-10 md:py-[88px] lg:px-16">
          <div className="mx-auto max-w-[1280px] 2xl:max-w-[1340px]">
            <h2 className="font-editorial max-w-[600px] text-[28px]/[34px] font-bold text-[#0D1A12] min-[375px]:text-[32px]/[38px] md:text-[40px]/[46px] xl:text-[42px]/[48px]">
              How a collection runs, start to payout.
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:gap-[20px] md:grid-cols-2 lg:grid-cols-4">
              {STEPS.map((s) => (
                <div key={s.n} className="flex flex-col items-start gap-[14px] rounded-[20px] border border-[#C3E8D6] bg-[#F7FAF8] p-5 shadow-[0_12px_28px_-12px_rgba(13,26,18,0.06)] min-[375px]:p-6 lg:p-[28px]">
                  <span className="flex h-[36px] w-[36px] items-center justify-center rounded-full bg-[#0F6E56] text-[15px] font-bold text-white">
                    {s.n}
                  </span>
                  <h3 className="font-editorial text-[19px] font-bold text-[#0D1A12] sm:text-[20px]">
                    {s.title}
                  </h3>
                  <p className="text-[13.5px]/[21px] text-[#2D4A38]">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-[#F7FAF8] px-4 py-14 min-[375px]:px-6 sm:py-16 md:px-10 md:py-[88px] lg:px-16">
          <div className="mx-auto max-w-[780px] xl:max-w-[840px]">
            <h2 className="font-editorial text-[28px]/[34px] font-bold text-[#0D1A12] min-[375px]:text-[32px]/[38px] md:text-[40px]/[46px] xl:text-[42px]/[48px]">
              Questions about collections
            </h2>
            <div className="mt-8 border-t border-[#C3E8D6]">
              {FAQS.map((f) => (
                <div key={f.q} className="border-b border-[#C3E8D6] py-5 sm:py-6">
                  <h3 className="font-editorial text-[18px] font-semibold text-[#0D1A12] sm:text-[20px]">
                    {f.q}
                  </h3>
                  <p className="mt-2 text-[14.5px]/[23px] text-[#2D4A38] sm:text-[15px]/[24px]">{f.a}</p>
                </div>
              ))}
            </div>
            <a
              href={WA_START}
              target="_blank"
              rel="noopener noreferrer"
              className="wamu-magie-btn-light group mt-8 inline-flex w-fit items-center gap-2.5 py-1.5 pl-5 pr-1.5 text-[14.5px] font-semibold text-white hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F6E56] focus-visible:ring-offset-2 sm:mt-10 sm:gap-3 sm:py-2 sm:pl-6 sm:pr-2 sm:text-[15px]"
            >
              <WhatsAppIcon className="h-[17px] w-[17px] text-[#5DCAA5]" />
              <span>Start a collection</span>
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white text-[#0D1A12] shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:bg-[#5DCAA5] sm:h-10 sm:w-10">
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </span>
            </a>
          </div>
        </section>
      </main>
      <Footer />

      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: FAQS.map((f) => ({
            '@type': 'Question',
            name: f.q,
            acceptedAnswer: { '@type': 'Answer', text: f.a },
          })),
        }}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'WAMU wedding, funeral and event collections',
          serviceType: 'Group contribution and fundraising collections on WhatsApp',
          provider: { '@type': 'Organization', name: 'WAMU PAY (UGANDA) LIMITED' },
          areaServed: { '@type': 'Country', name: 'Uganda' },
          url: 'https://www.wamu.co.ug/collections',
          description:
            'Run wedding, funeral and event contributions on WhatsApp in Uganda: a target and deadline, contributions by MTN Mobile Money or Airtel Money, automatic reminders, and payouts requiring more than one approver.',
        }}
      />
    </>
  );
}
