import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Suppress Vite WebSocket connection errors when HMR is disabled
window.addEventListener('unhandledrejection', (event) => {
  const reason = event.reason;
  const reasonStr = typeof reason === 'string' ? reason : 
                    (reason && typeof reason === 'object' && reason.message) ? String(reason.message) : 
                    String(reason);
  if (reasonStr.toLowerCase().includes('websocket')) {
    event.preventDefault();
  }
});

// Suppress console.error for specific Vite WebSocket error
const originalConsoleError = console.error;
console.error = (...args) => {
  const msg = args[0];
  if (typeof msg === 'string' && msg.toLowerCase().includes('websocket')) {
    return;
  } else if (msg && typeof msg === 'object' && msg.message && typeof msg.message === 'string' && msg.message.toLowerCase().includes('websocket')) {
    return;
  }
  originalConsoleError.apply(console, args);
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
