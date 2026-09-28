// ============================================================
// Punto de entrada de la app (el "enchufe" en el HTML)
// ============================================================
// 1. createRoot(...) monta React dentro del <div id="root"> de index.html
// 2. render(...) dibuja el componente <App /> en pantalla
// ============================================================

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// El `!` le dice a TypeScript: "confiá, el elemento #root existe"
// (está declarado en index.html).
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
