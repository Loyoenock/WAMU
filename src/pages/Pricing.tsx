import React, { useState } from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { usePageMeta } from '../lib/router';

type Status = 'idle' | 'sending' | 'ok' | 'error';

const GROUP_TYPES = ['VSLA', 'SACCO', 'Investment club', 'Merry-go-round', 'Not sure yet'];

const inputCls =
  'w-full rounded-[10px] border border-[#DBE0D4] bg-[#FDFAF4] px-[14px] py-[12px] text-[14px] text-[#26332B] focus:border-[#E8A020] focus:outline focus:outline-2 focus:outline-offset-1 focus:outline-[#E8A020]';
const labelCls =
  'mb-[6px] block text-[12px] font-semibold uppercase tracking-[0.06em] text-[#0C1E12]';

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
        className="mx-auto max-w-[720px] px-6 pt-28 pb-24 md:px-8 md:pt-32 lg:pt-[136px]"
      >
        <p className="text-[11px] font-bold uppercase tracking-[2px] text-[#1A4029]">
          Pricing &amp; early access
        </p>
        <h1 className="mt-3 font-[Fraunces,ui-serif,Georgia,serif] text-[34px]/[40px] font-bold text-[#0C1E12] md:text-[42px]/[48px]">
          Simple pricing, priced per group
        </h1>
        <p className="mt-3 text-[16px]/[26px] text-[#3C5A48]">
          WAMU is preparing to launch in Uganda. Pricing will be announced at launch and kept
          simple, charged per savings group, not per member. Join the waitlist to see pricing first
          and lock in early-access terms for your VSLA, SACCO, investment club or merry-go-round.
        </p>

        <div className="mt-8 rounded-[18px] border border-[#E4DED2] bg-white p-7">
          <h2 className="font-[Fraunces,ui-serif,Georgia,serif] text-[22px] font-semibold text-[#0C1E12]">
            Join the early-access waitlist
          </h2>
          <p className="mt-1 text-[14px] text-[#5C6B60]">
            No payment now. We only contact you about WAMU early access.
          </p>

          <ul className="my-6 flex flex-col gap-[10px]">
            {['Pricing shared with you before public launch', 'Priority onboarding for your group', 'Set-up help over WhatsApp'].map(
              (p) => (
                <li key={p} className="relative pl-[22px] text-[14px] text-[#3C5A48]">
                  <span className="absolute left-0 top-[8px] h-[8px] w-[8px] rounded-full bg-[#E8A020]" aria-hidden="true" />
                  {p}
                </li>
              )
            )}
          </ul>

          {status === 'ok' && (
            <p
              role="status"
              className="mb-4 rounded-[10px] border border-[#CFE6D5] bg-[#EAF4EC] px-[14px] py-[12px] text-[14px] text-[#1A4029]"
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
              className="rounded-[10px] bg-[#E8A020] px-6 py-[15px] text-[15px] font-bold text-[#0C1E12] transition-[opacity,transform] duration-200 hover:opacity-90 active:translate-y-[1px] disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8A020] focus-visible:ring-offset-2"
            >
              {status === 'sending' ? 'Sending...' : 'Join the waitlist'}
            </button>
            <p className="text-[12px] text-[#6B7A6D]">
              By joining you agree to our{' '}
              <a className="text-[#1A4029] underline" href="/privacy-policy.html">Privacy Policy</a> and{' '}
              <a className="text-[#1A4029] underline" href="/terms-and-conditions.html">Terms of Use</a>.
            </p>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}
