import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Suppress Vite WebSocket connection errors when HMR is disabled
window.addEventListener('unhandledrejection', (event) => {
  const reason = event.reason;
  if (
    reason && 
    ((reason.message && reason.message.includes('WebSocket')) || 
     (typeof reason === 'string' && reason.includes('WebSocket')))
  ) {
    event.preventDefault();
  }
});

// Suppress console.error for specific Vite WebSocket error
const originalConsoleError = console.error;
console.error = (...args) => {
  const msg = args[0];
  if (typeof msg === 'string') {
    if (msg.includes('failed to connect to websocket') || msg.includes('[vite] failed to connect to websocket')) {
      return;
    }
  } else if (msg instanceof Error) {
    if (msg.message && msg.message.includes('WebSocket closed without opened')) {
      return;
    }
  }
  originalConsoleError.apply(console, args);
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
