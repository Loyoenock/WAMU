import React, { useState } from 'react';
import { CheckCircle2, Clock, Globe, Phone } from 'lucide-react';
import {
  FOCUS_RING_LIGHT,
  WAMU_PHONE_LINK,
  WAMU_PHONE_NUMBER,
  WAMU_WHATSAPP_NUMBER,
  waLink,
} from '../lib/siteConfig';

type FormStatus = 'idle' | 'sending' | 'ok' | 'error';

const ENQUIRY_TYPES = [
  'General Enquiry',
  'Everyday Payments',
  'Savings & Financial Management',
  'Groups & SACCOs',
  'Collections (Weddings, Funerals & Events)',
  'Insurance, Loans & Investments',
  'Pricing & Early Access',
];

const inputCls =
  'w-full rounded-[12px] border border-[#C3E8D6] bg-white px-4 py-3 text-[14.5px] text-[#0D1A12] placeholder:text-[#5A7A68]/70 transition-colors focus:border-[#0F6E56] focus:outline-none focus:ring-2 focus:ring-[#5DCAA5]/50';
const labelCls = 'mb-1.5 block text-[12px] font-semibold uppercase tracking-[0.06em] text-[#0D1A12]';

export function ContactSection() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    interest: ENQUIRY_TYPES[0],
    message: '',
  });
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const update =
    (field: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedName = form.name.trim();
    const trimmedEmail = form.email.trim();
    const trimmedPhone = form.phone.trim();

    if (!trimmedName || !trimmedEmail || !trimmedPhone) {
      setStatus('error');
      setErrorMsg('Please enter your full name, email address, and WhatsApp or phone number.');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      setStatus('error');
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    setStatus('sending');
    setErrorMsg('');

    try {
      const res = await fetch('/api/wishlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: trimmedName,
          email: trimmedEmail,
          phone: trimmedPhone,
          organization: '',
          country: 'Uganda',
          interest: form.interest,
          message: form.message.trim(),
        }),
      });
      const body = await res.json().catch(() => ({}));
      if (res.ok) {
        setStatus('ok');
        setForm({
          name: '',
          email: '',
          phone: '',
          interest: ENQUIRY_TYPES[0],
          message: '',
        });
      } else {
        setStatus('error');
        setErrorMsg(
          body?.error ||
            `Could not send your message right now. You can also message us on WhatsApp at ${WAMU_WHATSAPP_NUMBER}.`
        );
      }
    } catch {
      setStatus('error');
      setErrorMsg(
        `Could not reach the server. Please try again, or message us directly on WhatsApp at ${WAMU_WHATSAPP_NUMBER}.`
      );
    }
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="bg-[#FFFFFF] px-4 py-14 min-[375px]:px-6 sm:py-18 md:px-10 md:py-22 lg:px-16 lg:py-28"
    >
      <div className="mx-auto max-w-[780px] xl:max-w-[840px]">
        <div className="text-center md:text-left">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0F6E56] sm:text-[11.5px]">
            LET&apos;S TALK
          </p>
          <h2
            id="contact-heading"
            className="mt-3 font-editorial text-[28px]/[35px] font-bold tracking-[-0.015em] text-[#0D1A12] min-[375px]:text-[32px]/[40px] md:text-[40px]/[48px] xl:text-[44px]/[52px]"
          >
            Let&apos;s start talking. Contact us today.
          </h2>
          <p className="mt-3 max-w-[60ch] text-[15px]/[24px] text-[#2D4A38] md:text-[15.5px]/[25px]">
            Have questions about WAMU, its services or how it can support your organisation? Get in
            touch with our team.
          </p>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2.5 text-[13px] font-medium text-[#2D4A38] md:justify-start">
            <a
              href={WAMU_PHONE_LINK}
              className={`inline-flex items-center gap-2 text-[#0F6E56] underline-offset-2 hover:text-[#1D9E75] hover:underline ${FOCUS_RING_LIGHT} rounded-sm`}
            >
              <Phone className="h-4 w-4 text-[#0F6E56]" aria-hidden="true" />
              <span>{WAMU_PHONE_NUMBER}</span>
            </a>
            <span className="inline-flex items-center gap-2">
              <Clock className="h-4 w-4 text-[#0F6E56]" aria-hidden="true" />
              WhatsApp-first onboarding support
            </span>
            <span className="inline-flex items-center gap-2">
              <Globe className="h-4 w-4 text-[#0F6E56]" aria-hidden="true" />
              Serving Uganda &amp; East African communities
            </span>
          </div>
        </div>

        {/* Centered Contact Form Card */}
        <div className="mt-8 rounded-[22px] border border-[#C3E8D6] bg-gradient-to-b from-[#F7FAF8] to-[#EBF6F0]/65 p-4 shadow-[0_16px_40px_-16px_rgba(13,26,18,0.08)] min-[375px]:p-6 sm:mt-10 sm:rounded-[24px] sm:p-9">
          {status === 'ok' && (
            <div
              role="status"
              className="mb-6 flex items-start gap-3 rounded-[14px] border border-[#1D9E75]/35 bg-[#EBF6F0] p-4 text-[14px] text-[#0D1A12]"
            >
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#0F6E56]" aria-hidden="true" />
              <div>
                <p className="font-semibold">Message received.</p>
                <p className="mt-0.5 text-[#2D4A38]">
                  Thank you for contacting WAMU. Our team has received your enquiry and will follow up
                  shortly.
                </p>
              </div>
            </div>
          )}

          {status === 'error' && (
            <p
              role="alert"
              className="mb-6 rounded-[14px] border border-[#E5A9A2] bg-[#FDF2F0] px-4 py-3 text-[14px] text-[#8A2C1E]"
            >
              {errorMsg}
            </p>
          )}

          <form onSubmit={handleSubmit} noValidate className="grid gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="contact-name" className={labelCls}>
                  Full name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  autoComplete="name"
                  placeholder="Enter your full name"
                  value={form.name}
                  onChange={update('name')}
                  className={inputCls}
                  required
                />
              </div>
              <div>
                <label htmlFor="contact-phone" className={labelCls}>
                  Phone number
                </label>
                <input
                  id="contact-phone"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  placeholder="+256 7XX XXX XXX"
                  value={form.phone}
                  onChange={update('phone')}
                  className={inputCls}
                  required
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="contact-email" className={labelCls}>
                  Email address
                </label>
                <input
                  id="contact-email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={update('email')}
                  className={inputCls}
                  required
                />
              </div>
              <div>
                <label htmlFor="contact-interest" className={labelCls}>
                  Subject or enquiry type
                </label>
                <select
                  id="contact-interest"
                  value={form.interest}
                  onChange={update('interest')}
                  className={inputCls}
                >
                  {ENQUIRY_TYPES.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="contact-message" className={labelCls}>
                Message
              </label>
              <textarea
                id="contact-message"
                placeholder="Tell us about your needs, savings group or organisation..."
                value={form.message}
                onChange={update('message')}
                className={`${inputCls} min-h-[112px] resize-y`}
              />
            </div>

            <div className="mt-1 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <button
                type="submit"
                disabled={status === 'sending'}
                className={`wamu-btn-forest inline-flex w-full items-center justify-center px-8 py-3.5 text-[14.5px] font-semibold disabled:opacity-60 sm:w-auto ${FOCUS_RING_LIGHT}`}
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
              <p className="text-[12px] text-[#5A7A68]">
                Direct line:{' '}
                <a
                  href={WAMU_PHONE_LINK}
                  className={`font-semibold text-[#0F6E56] underline underline-offset-2 hover:text-[#1D9E75] ${FOCUS_RING_LIGHT}`}
                >
                  Call {WAMU_PHONE_NUMBER}
                </a>
                {' · '}
                <a
                  href={waLink('Hello WAMU team, I have an enquiry.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`font-semibold text-[#0F6E56] underline underline-offset-2 hover:text-[#1D9E75] ${FOCUS_RING_LIGHT}`}
                >
                  WhatsApp {WAMU_WHATSAPP_NUMBER}
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
