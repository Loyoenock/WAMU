import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { usePageMeta } from '../lib/router';

type Status = 'idle' | 'sending' | 'ok' | 'error';

const GROUP_TYPES = ['VSLA', 'SACCO', 'Investment club', 'Merry-go-round', 'Not sure yet'];

const inputCls =
  'w-full rounded-[12px] border border-[#C3E8D6] bg-[#F4FBF7] px-[14px] py-[12px] text-[14px] text-[#0D2016] focus:border-[#1D9E75] focus:outline focus:outline-2 focus:outline-offset-1 focus:outline-[#5DCAA5]';
const labelCls =
  'mb-[6px] block text-[12px] font-semibold uppercase tracking-[0.06em] text-[#0D2016]';

export function Pricing() {
  usePageMeta({
    title: 'Pricing & Waitlist | WAMU Uganda',
    description:
      'WAMU pricing and early-access waitlist. Join to see pricing first and be among the first VSLAs, SACCOs, investment clubs and merry-go-round groups in Uganda to onboard.',
  });

  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    organization: '',
    interest: GROUP_TYPES[0],
    country: 'Uganda',
    message: '',
  });
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState('');

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone) {
      setStatus('error');
      setError('Please fill in your name, WhatsApp number and email.');
      return;
    }
    setStatus('sending');
    setError('');
    try {
      const res = await fetch('/api/wishlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const body = await res.json().catch(() => ({}));
      if (res.ok) {
        setStatus('ok');
        setForm((f) => ({ ...f, name: '', phone: '', email: '', organization: '', message: '' }));
      } else {
        setStatus('error');
        setError(body?.error || 'Something went wrong. Please try again, or message us on WhatsApp.');
      }
    } catch {
      setStatus('error');
      setError('Could not reach the server. Please try again later, or message us on WhatsApp at +256 788 003344.');
    }
  };

  return (
    <>
      <Navigation />
      <main
        id="main-content"
        className="mx-auto max-w-[720px] px-4 pt-24 pb-16 min-[375px]:px-6 sm:pt-28 sm:pb-20 md:px-8 md:pt-32 lg:pt-[136px] xl:max-w-[780px]"
      >
        <p className="text-[11px] font-bold uppercase tracking-[2px] text-[#0F6E56]">
          Pricing &amp; early access
        </p>
        <h1 className="font-editorial mt-3 text-[28px]/[34px] font-bold text-[#0D1A12] min-[375px]:text-[34px]/[40px] md:text-[42px]/[48px]">
          Simple pricing, priced per group
        </h1>
        <p className="mt-3 text-[15px]/[24px] text-[#2D4A38] sm:text-[16px]/[26px]">
          WAMU is set to launch utilities (UEDCL electricity, NWSC water and airtime) by the second
          week of December, while we polish our SACCO, VSLA and savings features. Pricing for
          groups is charged per savings group rather than per member—join the waitlist to get
          early updates and priority onboarding.
        </p>

        <div className="mt-7 rounded-[20px] border border-[#C3E8D6] bg-white p-5 shadow-[0_14px_34px_-12px_rgba(13,26,18,0.08)] min-[375px]:p-6 sm:mt-8 sm:p-8">
          <h2 className="font-editorial text-[20px] font-semibold text-[#0D1A12] sm:text-[22px]">
            Join the early-access waitlist
          </h2>
          <p className="mt-1 text-[14px] text-[#5A7A68]">
            No payment now. We only contact you about WAMU rollout updates and early access.
          </p>

          <ul className="my-6 flex flex-col gap-[10px]">
            {[
              'Launch notice for utilities in the second week of December',
              'Priority onboarding as SACCO, VSLA and savings finish polishing',
              'Group pricing and setup help shared directly over WhatsApp',
            ].map(
              (p) => (
                <li key={p} className="relative pl-[22px] text-[14px] text-[#2D4A38]">
                  <span className="absolute left-0 top-[8px] h-[8px] w-[8px] rounded-full bg-[#1D9E75]" aria-hidden="true" />
                  {p}
                </li>
              )
            )}
          </ul>

          {status === 'ok' && (
            <p
              role="status"
              className="mb-4 rounded-[10px] border border-[#C3E8D6] bg-[#EBF6F0] px-[14px] py-[12px] text-[14px] text-[#0F6E56]"
            >
              You're on the list. We'll be in touch about WAMU early access.
            </p>
          )}
          {status === 'error' && (
            <p
              role="alert"
              className="mb-4 rounded-[10px] border border-[#F1CFC9] bg-[#FBE9E7] px-[14px] py-[12px] text-[14px] text-[#8A2C1E]"
            >
              {error}
            </p>
          )}

          <form onSubmit={submit} noValidate className="grid gap-[14px]">
            <div className="grid gap-[14px] sm:grid-cols-2">
              <div>
                <label className={labelCls} htmlFor="name">Your name</label>
                <input id="name" className={inputCls} type="text" autoComplete="name" value={form.name} onChange={set('name')} required />
              </div>
              <div>
                <label className={labelCls} htmlFor="phone">WhatsApp number</label>
                <input id="phone" className={inputCls} type="tel" inputMode="tel" placeholder="+256 7XX XXX XXX" autoComplete="tel" value={form.phone} onChange={set('phone')} required />
              </div>
            </div>
            <div>
              <label className={labelCls} htmlFor="email">Email</label>
              <input id="email" className={inputCls} type="email" autoComplete="email" value={form.email} onChange={set('email')} required />
            </div>
            <div className="grid gap-[14px] sm:grid-cols-2">
              <div>
                <label className={labelCls} htmlFor="organization">Group name</label>
                <input id="organization" className={inputCls} type="text" autoComplete="organization" value={form.organization} onChange={set('organization')} />
              </div>
              <div>
                <label className={labelCls} htmlFor="interest">Group type</label>
                <select id="interest" className={inputCls} value={form.interest} onChange={set('interest')}>
                  {GROUP_TYPES.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              <label className={labelCls} htmlFor="message">Anything we should know? (optional)</label>
              <textarea id="message" className={`${inputCls} min-h-[84px] resize-y`} value={form.message} onChange={set('message')} />
            </div>
            <button
              type="submit"
              disabled={status === 'sending'}
              className="wamu-magie-btn-light group inline-flex w-full items-center justify-between gap-3 py-1.5 pl-6 pr-1.5 text-[15px] font-semibold text-white hover:scale-[1.01] disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F6E56] focus-visible:ring-offset-2 sm:w-fit"
            >
              <span>{status === 'sending' ? 'Sending...' : 'Join the waitlist'}</span>
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white text-[#0D1A12] shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:bg-[#5DCAA5] sm:h-10 sm:w-10">
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </span>
            </button>
            <p className="text-[12px] text-[#5A7A68]">
              By joining you agree to our{' '}
              <a className="font-medium text-[#0F6E56] underline" href="/privacy-policy.html">Privacy Policy</a> and{' '}
              <a className="font-medium text-[#0F6E56] underline" href="/terms-and-conditions.html">Terms of Use</a>.
            </p>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}
