export const WAMU_WHATSAPP_NUMBER = '+256 788 003344';
export const WAMU_PHONE_NUMBER = '+256 788 003344';
export const WAMU_PHONE_LINK = 'tel:+256788003344';
export const WAMU_WHATSAPP_BASE = 'https://wa.me/256788003344';
export const WAMU_LEGAL_NAME = 'WAMU PAY (UGANDA) LIMITED';

export function waLink(prefill?: string): string {
  if (!prefill) return WAMU_WHATSAPP_BASE;
  return `${WAMU_WHATSAPP_BASE}?text=${encodeURIComponent(prefill)}`;
}

export const FOCUS_RING_LIGHT =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F6E56] focus-visible:ring-offset-2 focus-visible:ring-offset-white';

export const FOCUS_RING_DARK =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5DCAA5] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D1A12]';
