import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import { JsonLd, usePageMeta } from '../lib/router';

const FAQS: { q: string; a: React.ReactNode; plain: string }[] = [
  {
    q: 'What is WAMU?',
    a: (
      <>
        WAMU is a WhatsApp-based platform for running savings groups in Uganda: VSLAs (Village
        Savings and Loan Associations), SACCOs (Savings and Credit Cooperatives) and
        merry-go-rounds. It replaces the treasurer's paper notebook with an automatic shared
        ledger every member can verify.
      </>
    ),
    plain:
      "WAMU is a WhatsApp-based platform for running savings groups in Uganda: VSLAs, SACCOs and merry-go-rounds. It replaces the treasurer's paper notebook with an automatic shared ledger every member can verify.",
  },
  {
    q: 'Do members need to download an app?',
    a: (
      <>
        No. Everything happens inside WhatsApp. If a member can send a WhatsApp message, they can
        use WAMU. There is no separate app to install.
      </>
    ),
    plain:
      'No. Everything happens inside WhatsApp. If a member can send a WhatsApp message, they can use WAMU; there is no separate app to install.',
  },
  {
    q: 'How do members contribute?',
    a: (
      <>
        Members pay by MTN Mobile Money (MTN MoMo) or Airtel Money, directly from the WhatsApp chat
        on contribution day. Each payment updates the shared ledger instantly and generates its own
        confirmation.
      </>
    ),
    plain:
      'Members pay by MTN Mobile Money or Airtel Money directly from the WhatsApp chat on contribution day. Each payment updates the shared ledger instantly.',
  },
  {
    q: 'Which mobile money networks does WAMU support?',
    a: <>MTN Mobile Money and Airtel Money, through regulated payment channels rather than informal transfers.</>,
    plain:
      'MTN Mobile Money and Airtel Money, through regulated payment channels rather than informal transfers.',
  },
  {
    q: 'How does the merry-go-round rotation work?',
    a: (
      <>
        Turn order, dates and amounts are fixed up front. WAMU calculates the rotation
        automatically, sends WhatsApp reminders before each round, and sends the payout straight to
        the recipient's mobile wallet. Every contribution is logged in a permanent audit trail.
      </>
    ),
    plain:
      "Turn order, dates and amounts are fixed up front. WAMU calculates the rotation automatically, sends WhatsApp reminders before each round, and sends the payout straight to the recipient's mobile wallet. Every contribution is logged in a permanent audit trail.",
  },
  {
    q: 'Can a SACCO track share capital separately from savings?',
    a: (
      <>
        Yes. WAMU's shares ledger records each member's purchases, dividends and standing separately
        from ordinary savings, with per-member dividend calculations and board-ready reporting.
      </>
    ),
    plain:
      "Yes. WAMU's shares ledger records each member's purchases, dividends and standing separately from ordinary savings, with per-member dividend calculations and board-ready reporting.",
  },
  {
    q: 'Can we use WAMU for a wedding, funeral or other event collection?',
    a: (
      <>
        Yes. Each one is a WAMU savings goal. Open a goal for a kwanjula or wedding committee, a burial or bereavement
        contribution, or any event: graduations, church fundraisers, school fees drives. Members
        contribute by MTN MoMo or Airtel Money inside WhatsApp, pledges are tracked against what is
        actually paid, and the running total is visible to everyone.
      </>
    ),
    plain:
      'Yes. Each one is a WAMU savings goal with a target and deadline. WAMU handles wedding and kwanjula committee collections, funeral and burial contributions, and event collections such as graduations, church fundraisers and school fees drives. Members contribute by MTN MoMo or Airtel Money inside WhatsApp, pledges are tracked against what is paid, and the running total is visible to everyone.',
  },
  {
    q: 'Does WAMU send reminders?',
    a: (
      <>
        Yes. WAMU sends automatic WhatsApp reminders before every meeting, contribution date,
        rotation round and collection deadline, and it targets the members who have not paid yet.
        No admin has to chase anyone by hand.
      </>
    ),
    plain:
      'Yes. WAMU sends automatic WhatsApp reminders before every meeting, contribution date, rotation round and collection deadline, targeted at members who have not paid yet.',
  },
  {
    q: "Is our group's money and data safe?",
    a: (
      <>
        Every member is identity-verified before they can send or receive funds. The ledger is
        tamper-resistant with no silent edits. Money moves through regulated mobile money channels,
        and member information is handled in line with Uganda's data protection principles.
      </>
    ),
    plain:
      "Every member is identity-verified before they can send or receive funds. The ledger is tamper-resistant with no silent edits. Money moves through regulated mobile money channels, and member information is handled in line with Uganda's data protection principles.",
  },
  {
    q: 'Who operates WAMU?',
    a: (
      <>
        WAMU is operated by WAMU PAY (UGANDA) LIMITED, a Uganda-registered company, aligned with
        Uganda's payment systems and cooperative law.
      </>
    ),
    plain:
      "WAMU is operated by WAMU PAY (UGANDA) LIMITED, a Uganda-registered company, aligned with Uganda's payment systems and cooperative law.",
  },
  {
    q: 'When does WAMU launch?',
    a: (
      <>
        WAMU Utilities (UEDCL electricity, NWSC water and airtime) are set to launch by the second
        week of December while we polish SACCO, VSLA and savings features. Reach out anytime on
        WhatsApp or through the{' '}
        <a className="font-semibold text-[#1A4029] underline" href="/#contact">
          contact form
        </a>{' '}
        for rollout updates.
      </>
    ),
    plain:
      'WAMU Utilities (UEDCL electricity, NWSC water and airtime) are set to launch by the second week of December while we polish SACCO, VSLA and savings features.',
  },
  {
    q: 'How do we get started?',
    a: (
      <>
        Message WAMU on WhatsApp at{' '}
        <a
          className="font-semibold text-[#1A4029] underline"
          href="https://wa.me/256788003344"
          target="_blank"
          rel="noopener noreferrer"
        >
          +256&nbsp;788&nbsp;003344
        </a>
        , choose your group type, and set your contribution rules.
      </>
    ),
    plain:
      'Message WAMU on WhatsApp at +256 788 003344, choose your group type, and set your contribution rules.',
  },
];

export function Faq() {
  usePageMeta({
    title: 'FAQ | WAMU savings groups on WhatsApp, Uganda',
    description:
      'Answers about WAMU: running a VSLA, SACCO or merry-go-round on WhatsApp in Uganda, plus wedding, funeral and event collections, contributions by MTN MoMo or Airtel Money, reminders, and how member records stay safe.',
  });

  return (
    <>
      <Navigation />
      <main
        id="main-content"
        className="mx-auto max-w-[780px] px-4 pt-24 pb-16 min-[375px]:px-6 sm:pt-28 sm:pb-20 md:px-8 md:pt-32 lg:pt-[136px] xl:max-w-[840px]"
      >
        <p className="text-[11px] font-bold uppercase tracking-[2px] text-[#0F6E56]">
          Frequently asked questions
        </p>
        <h1 className="font-editorial mt-3 text-[28px]/[34px] font-bold text-[#0D1A12] min-[375px]:text-[34px]/[40px] md:text-[42px]/[48px]">
          Running your savings group on WhatsApp
        </h1>
        <p className="mt-3 text-[15px]/[24px] text-[#2D4A38] sm:text-[16px]/[26px]">
          Short answers about WAMU for VSLAs, SACCOs and merry-go-round groups in Uganda.
        </p>

        <div className="mt-8 border-t border-[#C3E8D6] sm:mt-10">
          {FAQS.map((item) => (
            <div key={item.q} className="border-b border-[#C3E8D6] py-5 sm:py-6">
              <h2 className="font-editorial text-[18px] font-semibold text-[#0D1A12] sm:text-[20px]">
                {item.q}
              </h2>
              <p className="mt-2 text-[14.5px]/[23px] text-[#2D4A38] sm:text-[15px]/[24px]">{item.a}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-3 sm:mt-10">
          <a
            href="https://wa.me/256788003344"
            target="_blank"
            rel="noopener noreferrer"
            className="wamu-magie-btn-light group inline-flex w-fit items-center gap-2.5 py-1.5 pl-5 pr-1.5 text-[14.5px] font-semibold text-white hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F6E56] focus-visible:ring-offset-2 sm:gap-3 sm:py-2 sm:pl-6 sm:pr-2 sm:text-[15px]"
          >
            <WhatsAppIcon className="h-[17px] w-[17px] text-[#5DCAA5]" />
            <span>Message WAMU on WhatsApp</span>
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white text-[#0D1A12] shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:bg-[#5DCAA5] sm:h-10 sm:w-10">
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </span>
          </a>
        </div>
      </main>
      <Footer />

      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: FAQS.map((f) => ({
            '@type': 'Question',
            name: f.q,
            acceptedAnswer: { '@type': 'Answer', text: f.plain },
          })),
        }}
      />
    </>
  );
}
