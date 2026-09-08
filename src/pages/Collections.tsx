import React from 'react';
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
        <section className="bg-[#FDFAF4] px-6 pt-28 pb-14 md:px-12 md:pt-32 lg:px-[120px] lg:pt-[136px]">
          <div className="mx-auto max-w-[1280px]">
            <p className="text-[11px] font-bold uppercase tracking-[2px] text-[#1A4029]">
              COLLECTIONS &amp; CONTRIBUTIONS
            </p>
            <h1 className="mt-3 max-w-[820px] font-[Fraunces,ui-serif,Georgia,serif] text-[34px]/[40px] font-bold text-[#0C1E12] md:text-[46px]/[52px]">
              Wedding, funeral and event collections, counted correctly.
            </h1>
            <p className="mt-4 max-w-[620px] text-[16px]/[26px] text-[#3C5A48]">
              Every contribution for a wedding, a burial or an event runs as a WAMU savings goal: a
              target, a deadline, mobile money in, automatic reminders, and a ledger every
              contributor can check for themselves.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={WA_START}
                className="inline-flex items-center gap-[10px] rounded-[10px] bg-[#1A4029] px-7 py-[15px] text-[15px] font-bold text-[#FDFAF4] transition-colors hover:bg-[#0D2016] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8A020] focus-visible:ring-offset-2"
              >
                <WhatsAppIcon className="h-[18px] w-[18px] text-[#25D366]" />
                Start a collection
              </a>
              <a
                href="/pricing"
                className="inline-flex items-center rounded-[10px] bg-[#E8A020] px-7 py-[15px] text-[15px] font-bold text-[#0C1E12] transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8A020] focus-visible:ring-offset-2"
              >
                Join the waitlist
              </a>
            </div>
          </div>
        </section>

        <CollectionsSection />

        {/* How a collection runs */}
        <section className="bg-[#FFFFFF] px-6 py-16 md:px-12 md:py-[88px] lg:px-[120px]">
          <div className="mx-auto max-w-[1280px]">
            <h2 className="max-w-[600px] font-[Fraunces,ui-serif,Georgia,serif] text-[32px]/[38px] font-bold text-[#0C1E12] md:text-[42px]/[48px]">
              How a collection runs, start to payout.
            </h2>
            <div className="mt-10 grid grid-cols-1 gap-[20px] md:grid-cols-2 lg:grid-cols-4">
              {STEPS.map((s) => (
                <div key={s.n} className="flex flex-col items-start gap-[14px] rounded-[16px] bg-[#F7F4EE] p-[28px]">
                  <span className="flex h-[36px] w-[36px] items-center justify-center rounded-full bg-[#1A4029] text-[15px] font-bold text-[#FDFAF4]">
                    {s.n}
                  </span>
                  <h3 className="font-[Fraunces,ui-serif,Georgia,serif] text-[20px] font-bold text-[#0C1E12]">
                    {s.title}
                  </h3>
                  <p className="text-[13px]/[21px] text-[#4B6A58]">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-[#FDFAF4] px-6 py-16 md:px-12 md:py-[88px] lg:px-[120px]">
          <div className="mx-auto max-w-[780px]">
            <h2 className="font-[Fraunces,ui-serif,Georgia,serif] text-[32px]/[38px] font-bold text-[#0C1E12] md:text-[42px]/[48px]">
              Questions about collections
            </h2>
            <div className="mt-8 border-t border-[#E4DED2]">
              {FAQS.map((f) => (
                <div key={f.q} className="border-b border-[#E4DED2] py-6">
                  <h3 className="font-[Fraunces,ui-serif,Georgia,serif] text-[20px] font-semibold text-[#0C1E12]">
                    {f.q}
                  </h3>
                  <p className="mt-2 text-[15px]/[24px] text-[#3C5A48]">{f.a}</p>
                </div>
              ))}
            </div>
            <a
              href={WA_START}
              className="mt-10 inline-flex items-center gap-[10px] rounded-[10px] bg-[#1A4029] px-7 py-[15px] text-[15px] font-bold text-[#FDFAF4] transition-colors hover:bg-[#0D2016] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8A020] focus-visible:ring-offset-2"
            >
              <WhatsAppIcon className="h-[18px] w-[18px] text-[#25D366]" />
              Start a collection
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
