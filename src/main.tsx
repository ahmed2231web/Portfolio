import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import App from './App.tsx'
import './index.css'

const container = document.getElementById('root')
const root = createRoot(container!)

// Using StrictMode for better development experience and catching potential issues
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
