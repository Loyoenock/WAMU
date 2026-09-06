import React, { useCallback, useEffect, useState } from 'react';

/**
 * Tiny client-side router. Three routes ("/", "/faq", "/pricing") served by the
 * SPA fallback in server.ts. No dependency: reads location.pathname, listens for
 * popstate, and intercepts clicks on internal <a href="/..."> links.
 *
 * Left alone: hash links (#section), *.html files (privacy/terms), and any
 * absolute URL (wa.me, mailto, etc.). Those do a real navigation.
 */
export function navigate(to: string) {
  if (to === window.location.pathname + window.location.hash) return;
  window.history.pushState({}, '', to);
  window.dispatchEvent(new PopStateEvent('popstate'));
  window.scrollTo({ top: 0, behavior: 'auto' });
}

export function useRoute(): string {
  const [pathname, setPathname] = useState(() => window.location.pathname);

  const sync = useCallback(() => setPathname(window.location.pathname), []);

  useEffect(() => {
    window.addEventListener('popstate', sync);

    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const anchor = (e.target as HTMLElement | null)?.closest('a');
      if (!anchor) return;
      const href = anchor.getAttribute('href');
      const target = anchor.getAttribute('target');
      if (!href || target === '_blank' || anchor.hasAttribute('download')) return;
      if (!href.startsWith('/') || href.startsWith('//')) return; // external / protocol-relative
      if (href.endsWith('.html')) return; // static legal pages
      if (href.startsWith('/#')) return; // home + anchor: let the browser handle it

      e.preventDefault();
      const [path, hash] = href.split('#');
      window.history.pushState({}, '', href);
      sync();
      if (hash) {
        requestAnimationFrame(() => document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' }));
      } else {
        window.scrollTo({ top: 0, behavior: 'auto' });
      }
      void path;
    };

    document.addEventListener('click', onClick);
    return () => {
      window.removeEventListener('popstate', sync);
      document.removeEventListener('click', onClick);
    };
  }, [sync]);

  return pathname;
}

const DEFAULT_TITLE = 'WAMU: Digitize Your Savings Group on WhatsApp | Uganda';
const DEFAULT_DESC =
  'WAMU digitizes VSLAs, SACCOs, investment clubs and merry-go-round groups in Uganda. Members contribute by MTN MoMo or Airtel Money inside WhatsApp, and every contribution and payout is recorded automatically. No app to download.';

/** Set <title> and meta description for a client route; restores the defaults on unmount. */
export function usePageMeta(meta?: { title?: string; description?: string }) {
  useEffect(() => {
    if (!meta) return;
    if (meta.title) document.title = meta.title;
    const el = document.querySelector('meta[name="description"]');
    if (meta.description && el) el.setAttribute('content', meta.description);
    return () => {
      document.title = DEFAULT_TITLE;
      if (el) el.setAttribute('content', DEFAULT_DESC);
    };
  }, [meta?.title, meta?.description]);
}

/** JSON-LD helper: render structured data anywhere in the tree (Google reads it in body too). */
export function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
