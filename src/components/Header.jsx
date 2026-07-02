import { useState } from 'react'
import { Logo } from './Icons.jsx'

export default function Header({ t, lang }) {
  const [open, setOpen] = useState(false)
  const langs = [
    { code: 'pl', href: '/' },
    { code: 'de', href: '/de' },
    { code: 'en', href: '/en' }
  ]
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="logo" href={lang === 'pl' ? '/' : `/${lang}`} aria-label="Digital.Power — strona główna">
          <Logo className="mark" />
          <span>DIGITAL<span className="accent">.POWER</span></span>
        </a>
        <nav className={`main-nav${open ? ' open' : ''}`} aria-label="Menu główne">
          <a href="#o-nas" onClick={() => setOpen(false)}>{t.nav.about}</a>
          <a href="#uslugi" onClick={() => setOpen(false)}>{t.nav.services}</a>
          <a href="#jak-pracujemy" onClick={() => setOpen(false)}>{t.nav.process}</a>
          <a href="#realizacje" onClick={() => setOpen(false)}>{t.nav.work}</a>
          <a href="#kontakt" onClick={() => setOpen(false)}>{t.nav.contact}</a>
        </nav>
        <div className="lang-switch" aria-label="Język">
          {langs.map((l, i) => (
            <span key={l.code}>
              {i > 0 && <span className="sep"> | </span>}
              <a href={l.href} aria-current={lang === l.code ? 'true' : undefined} hrefLang={l.code}>{l.code.toUpperCase()}</a>
            </span>
          ))}
        </div>
        <button className="nav-toggle" aria-expanded={open} aria-label="Menu" onClick={() => setOpen(!open)}>☰</button>
      </div>
    </header>
  )
}
