import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv, type Plugin} from 'vite';

/**
 * Neutralizes Vite's browser-side `/@vite/client` WebSocket/HMR transport in
 * Google AI Studio preview environments while preserving dev-mode CSS injection
 * (`updateStyle` / `removeStyle`) and `import.meta.hot` module boundaries.
 *
 * Local development:
 * - Only activates when AI Studio / `DISABLE_HMR=true` / `AI_STUDIO_NO_AUTORELOAD=true`
 *   is detected (and `AI_STUDIO_NO_AUTORELOAD=false` is not set).
 * - Normal local `npm run dev` keeps native Vite HMR untouched.
 */
function neutralizeViteClient(): Plugin {
  const fakeViteClient = `
const noop = () => {};
const sheetsMap = new Map();

if (typeof document !== 'undefined') {
  document.querySelectorAll('style[data-vite-dev-id]').forEach((el) => {
    sheetsMap.set(el.getAttribute('data-vite-dev-id'), el);
  });
}

const cspNonce =
  typeof document !== 'undefined'
    ? document.querySelector('meta[property=csp-nonce]')?.nonce
    : undefined;

let lastInsertedStyle;

export function updateStyle(id, content) {
  if (typeof document === 'undefined') return;
  let style = sheetsMap.get(id);
  if (!style) {
    style = document.createElement('style');
    style.setAttribute('type', 'text/css');
    style.setAttribute('data-vite-dev-id', id);
    style.textContent = content;
    if (cspNonce) {
      style.setAttribute('nonce', cspNonce);
    }
    if (!lastInsertedStyle) {
      document.head.appendChild(style);
      setTimeout(() => {
        lastInsertedStyle = undefined;
      }, 0);
    } else {
      lastInsertedStyle.insertAdjacentElement('afterend', style);
    }
    lastInsertedStyle = style;
  } else {
    style.textContent = content;
  }
  sheetsMap.set(id, style);
}

export function removeStyle(id) {
  if (typeof document === 'undefined') return;
  const style = sheetsMap.get(id);
  if (style) {
    style.remove();
    sheetsMap.delete(id);
  }
}

function createNoopHotContext() {
  return {
    data: {},
    accept: noop,
    acceptExports: noop,
    decline: noop,
    dispose: noop,
    prune: noop,
    invalidate: noop,
    on: noop,
    off: noop,
    send: noop,
  };
}

export function createHotContext() {
  return createNoopHotContext();
}

export function injectQuery(url, queryToInject) {
  if (!queryToInject) return url;
  if (url[0] !== '.' && url[0] !== '/') return url;
  const pathname = url.replace(/[?#].*$/, '');
  const { search, hash } = new URL(url, 'http://vite.dev');
  return \`\${pathname}?\${queryToInject}\${search ? '&' + search.slice(1) : ''}\${hash || ''}\`;
}

export class ErrorOverlay {
  constructor() {}
  close() {}
}

export default {};
`;

  return {
    name: 'neutralize-vite-client-but-keep-css',
    apply: 'serve',
    enforce: 'pre',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url && (req.url === '/@vite/client' || req.url.startsWith('/@vite/client?'))) {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/javascript; charset=utf-8');
          res.setHeader('Cache-Control', 'no-store');
          res.end(fakeViteClient);
          return;
        }
        next();
      });
    },
  };
}

function isTrue(value: unknown): boolean {
  return value === 'true' || value === '1';
}

function isFalse(value: unknown): boolean {
  return value === 'false' || value === '0';
}

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, process.cwd(), '');

  const aiStudioEnvironmentDetected =
    isTrue(env.DISABLE_HMR) ||
    isTrue(process.env.DISABLE_HMR) ||
    isTrue(env.AI_STUDIO_NO_AUTORELOAD) ||
    isTrue(process.env.AI_STUDIO_NO_AUTORELOAD) ||
    Boolean(process.env.APPLET_ID);

  const patchExplicitlyDisabled =
    isFalse(env.AI_STUDIO_NO_AUTORELOAD) ||
    isFalse(process.env.AI_STUDIO_NO_AUTORELOAD);

  const enableAiStudioNoAutoreloadPatch =
    aiStudioEnvironmentDetected && !patchExplicitlyDisabled;

  return {
    plugins: [
      ...(enableAiStudioNoAutoreloadPatch ? [neutralizeViteClient()] : []),
      react(),
      tailwindcss(),
    ],
    build: {
      target: 'es2015',
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      host: '0.0.0.0',
      port: 3000,
      strictPort: true,
      allowedHosts: true as const,
      ...(enableAiStudioNoAutoreloadPatch
        ? {
            hmr: false,
            ws: false as const,
            watch: {
              ignored: [
                '**/.git/**',
                '**/node_modules/**',
                '**/dist/**',
                '**/.vite/**',
                '**/.cache/**',
                '**/*.log',
                '**/.aistudio/**',
                '**/.gemini/**',
              ],
            },
          }
        : {}),
    },
  };
});
