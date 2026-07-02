const S = { fill: 'none', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round', viewBox: '0 0 24 24' }
const I = ({ children, ...p }) => <svg {...S} stroke="currentColor" aria-hidden="true" {...p}>{children}</svg>

export const IcMonitor = p => <I {...p}><rect x="2" y="4" width="20" height="13" rx="2"/><path d="M8 21h8M12 17v4"/></I>
export const IcMegaphone = p => <I {...p}><path d="M3 11v3l14 5V6L3 11z"/><path d="M17 8a4 4 0 0 1 0 8"/><path d="M7 14v4a2 2 0 0 0 4 0v-2"/></I>
export const IcBrain = p => <I {...p}><path d="M12 4a3 3 0 0 0-3 3v10a3 3 0 0 0 6 0V7a3 3 0 0 0-3-3z"/><path d="M9 8H7a3 3 0 0 0 0 6h2M15 8h2a3 3 0 0 1 0 6h-2"/></I>
export const IcSearch = p => <I {...p}><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></I>
export const IcUsers = p => <I {...p}><circle cx="9" cy="8" r="3"/><path d="M3 20a6 6 0 0 1 12 0"/><circle cx="17" cy="9" r="2.5"/><path d="M15.5 20a5 5 0 0 1 6.5-4.7"/></I>
export const IcCamera = p => <I {...p}><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7l1.5-3h5L16 7"/><circle cx="12" cy="13" r="3.5"/></I>
export const IcDrone = p => <I {...p}><circle cx="5" cy="5" r="2.5"/><circle cx="19" cy="5" r="2.5"/><circle cx="5" cy="19" r="2.5"/><circle cx="19" cy="19" r="2.5"/><rect x="9.5" y="9.5" width="5" height="5" rx="1"/><path d="M7 7l2.5 2.5M17 7l-2.5 2.5M7 17l2.5-2.5M17 17l-2.5-2.5"/></I>
export const IcGlobe = p => <I {...p}><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></I>
export const IcHandshake = p => <I {...p}><path d="M4 10l4-4 4 3 4-3 4 4-4 8H8l-4-8z"/><path d="M12 9l-3 3 2 2 3-3"/></I>
export const IcBulb = p => <I {...p}><path d="M9 18h6M10 21h4"/><path d="M12 3a6 6 0 0 0-4 10.5c.7.6 1 1.5 1 2.5h6c0-1 .3-1.9 1-2.5A6 6 0 0 0 12 3z"/></I>
export const IcStar = p => <I {...p}><path d="m12 3 2.7 5.6 6.3.9-4.5 4.4 1 6.1-5.5-2.9-5.5 2.9 1-6.1L3 9.5l6.3-.9L12 3z"/></I>
export const IcTarget = p => <I {...p}><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5"/></I>
export const IcRocket = p => <I {...p}><path d="M12 15c4-3 6-7 6-11-4 0-8 2-11 6l-3 1 4 4 1-3z"/><path d="M9 15l-2 5 5-2M7 12l5 5"/></I>
export const IcChart = p => <I {...p}><path d="M4 20V6M4 20h16"/><path d="M8 16v-4M12 16V8M16 16v-6"/></I>
export const IcMail = p => <I {...p}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></I>
export const IcWhatsapp = p => <I {...p}><path d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.6-1.2A9 9 0 1 0 12 3z"/><path d="M9 9.5c0 3 2.5 5.5 5.5 5.5l1.5-1.5-2-1.5-1 .8a4 4 0 0 1-2.3-2.3l.8-1-1.5-2L9 9.5z"/></I>
export const IcArrow = p => <I {...p}><path d="M5 12h14M13 6l6 6-6 6"/></I>
export const IcLinkedin = p => <I {...p}><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 11v5M8 8v.01M12 16v-3a2 2 0 0 1 4 0v3"/></I>
export const IcFacebook = p => <I {...p}><path d="M15 4h-2a4 4 0 0 0-4 4v3H7v3h2v6h3v-6h2.5l.5-3h-3V8a1 1 0 0 1 1-1h2V4z"/></I>
export const IcInstagram = p => <I {...p}><rect x="4" y="4" width="16" height="16" rx="4"/><circle cx="12" cy="12" r="3.5"/><path d="M16.8 7.2v.01"/></I>

export const Logo = p => (
  <svg viewBox="0 0 40 40" aria-hidden="true" {...p}>
    <path d="M8 6h12a14 14 0 0 1 0 28H8V6z" fill="#3b8fff"/>
    <path d="M13 12h6a8 8 0 0 1 0 16h-6V12z" fill="#020b18"/>
    <path d="M13 12v16" stroke="#fff" strokeWidth="2"/>
  </svg>
)

export const WorldMap = p => (
  <svg className="worldmap" viewBox="0 0 640 340" role="img" aria-label="Mapa świata z połączeniami zespołu" {...p}>
    <defs>
      <pattern id="dots" width="9" height="9" patternUnits="userSpaceOnUse">
        <circle cx="2" cy="2" r="1.6" fill="#c9d4e4"/>
      </pattern>
    </defs>
    <g fill="url(#dots)">
      <path d="M60 60q40-25 90-18 30 4 40 25 5 25-15 40-30 25-70 20-40-6-55-30-8-22 10-37z"/>
      <path d="M150 160q25-10 40 5 15 20 5 45-10 30-35 40-20 6-30-10-10-25 0-50 8-20 20-30z"/>
      <path d="M280 55q45-18 90-8 25 6 30 25 3 20-15 30-15 8-15 25 0 20-20 28-25 8-45-5-25-15-30-45-5-35 5-50z"/>
      <path d="M300 160q30-5 45 15 12 20 5 45-8 25-30 30-22 4-32-15-10-25-3-50 5-18 15-25z"/>
      <path d="M420 70q60-25 120-10 35 10 40 35 4 28-20 40-20 10-45 8-15 15-35 12-30-5-50-28-18-25-10-57z"/>
      <path d="M500 210q25-8 40 8 12 15 5 35-8 20-28 22-20 2-28-15-8-20 0-38 5-9 11-12z"/>
    </g>
    <g fill="none" stroke="#3b8fff" strokeWidth="1.4" opacity=".8">
      <path d="M120 90 Q 240 20 340 80"/>
      <path d="M340 80 Q 430 40 500 95"/>
      <path d="M340 80 Q 300 140 320 195"/>
      <path d="M340 80 Q 220 160 180 200"/>
      <path d="M340 80 Q 460 150 520 230"/>
      <path d="M120 90 Q 130 150 170 195"/>
    </g>
    <g fill="#3b8fff">
      <circle cx="120" cy="90" r="4"/><circle cx="340" cy="80" r="5"/><circle cx="500" cy="95" r="4"/>
      <circle cx="320" cy="195" r="4"/><circle cx="180" cy="200" r="4"/><circle cx="520" cy="230" r="4"/>
      <circle cx="360" cy="70" r="3"/><circle cx="310" cy="90" r="3"/>
    </g>
  </svg>
)
