import React from 'react';
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
        Savings and Loan Associations), SACCOs (Savings and Credit Cooperatives), investment clubs
        and merry-go-rounds. It replaces the treasurer's paper notebook with an automatic shared
        ledger every member can verify.
      </>
    ),
    plain:
      "WAMU is a WhatsApp-based platform for running savings groups in Uganda: VSLAs, SACCOs, investment clubs and merry-go-rounds. It replaces the treasurer's paper notebook with an automatic shared ledger every member can verify.",
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
    q: 'How much does WAMU cost?',
    a: (
      <>
        WAMU is preparing to launch. Pricing will be announced at launch and kept simple. Join the
        waitlist on the <a className="font-semibold text-[#1A4029] underline" href="/pricing">Pricing &amp; Waitlist</a>{' '}
        page to see pricing first and lock in early-access terms.
      </>
    ),
    plain:
      'WAMU is preparing to launch. Pricing will be announced at launch and kept simple. Join the waitlist on the Pricing and Waitlist page to see pricing first and lock in early-access terms.',
  },
  {
    q: 'How do we get started?',
    a: (
      <>
        Message WAMU on WhatsApp at{' '}
        <a className="font-semibold text-[#1A4029] underline" href="https://wa.me/256788003344">
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
      'Answers about WAMU: running a VSLA, SACCO, investment club or merry-go-round on WhatsApp in Uganda, contributing by MTN MoMo or Airtel Money, and how member records stay safe.',
  });

  return (
    <>
      <Navigation />
      <main
        id="main-content"
        className="mx-auto max-w-[780px] px-6 pt-28 pb-24 md:px-8 md:pt-32 lg:pt-[136px]"
      >
        <p className="text-[11px] font-bold uppercase tracking-[2px] text-[#1A4029]">
          Frequently asked questions
        </p>
        <h1 className="mt-3 font-[Fraunces,ui-serif,Georgia,serif] text-[34px]/[40px] font-bold text-[#0C1E12] md:text-[42px]/[48px]">
          Running your savings group on WhatsApp
        </h1>
        <p className="mt-3 text-[16px]/[26px] text-[#3C5A48]">
          Short answers about WAMU for VSLAs, SACCOs, investment clubs and merry-go-round groups in
          Uganda.
        </p>

        <div className="mt-10 border-t border-[#E4DED2]">
          {FAQS.map((item) => (
            <div key={item.q} className="border-b border-[#E4DED2] py-6">
              <h2 className="font-[Fraunces,ui-serif,Georgia,serif] text-[20px] font-semibold text-[#0C1E12]">
                {item.q}
              </h2>
              <p className="mt-2 text-[15px]/[24px] text-[#3C5A48]">{item.a}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href="https://wa.me/256788003344"
            className="inline-flex items-center gap-[10px] rounded-[10px] bg-[#1A4029] px-7 py-[15px] text-[15px] font-bold text-[#FDFAF4] transition-colors hover:bg-[#0D2016] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8A020] focus-visible:ring-offset-2"
          >
            <WhatsAppIcon className="h-[18px] w-[18px] text-[#25D366]" />
            Message WAMU on WhatsApp
          </a>
          <a
            href="/pricing"
            className="inline-flex items-center rounded-[10px] bg-[#E8A020] px-7 py-[15px] text-[15px] font-bold text-[#0C1E12] transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8A020] focus-visible:ring-offset-2"
          >
            Join the waitlist
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
