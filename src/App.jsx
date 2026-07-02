import { useEffect } from 'react'
import pl from './locales/pl.json'
import de from './locales/de.json'
import en from './locales/en.json'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Hero from './sections/Hero.jsx'
import About from './sections/About.jsx'
import Services from './sections/Services.jsx'
import Process from './sections/Process.jsx'
import Contact from './sections/Contact.jsx'

const locales = { pl, de, en }

const meta = {
  pl: {
    title: 'Digital.Power — Strony WWW, Marketing, AI, Foto i Dron | Agencja cyfrowa',
    desc: 'Digital.Power — międzynarodowy zespół specjalistów. Strony internetowe, marketing i social media, AI, foto, wideo i dron. Bezpłatna konsultacja.'
  },
  de: {
    title: 'Digital.Power — Webseiten, Marketing, KI, Foto & Drohne | Digitalagentur',
    desc: 'Digital.Power — internationales Spezialistenteam. Webseiten, Marketing & Social Media, KI, Foto, Video und Drohne. Kostenlose Beratung.'
  },
  en: {
    title: 'Digital.Power — Websites, Marketing, AI, Photo & Drone | Digital Agency',
    desc: 'Digital.Power — an international team of specialists. Websites, marketing & social media, AI, photo, video and drone. Free consultation.'
  }
}

function detectLang() {
  const p = window.location.pathname.replace(/\/+$/, '')
  if (p === '/de' || p.startsWith('/de/')) return 'de'
  if (p === '/en' || p.startsWith('/en/')) return 'en'
  return 'pl'
}

export default function App() {
  const lang = detectLang()
  const t = locales[lang]

  useEffect(() => {
    document.documentElement.lang = lang
    document.title = meta[lang].title
    const d = document.querySelector('meta[name="description"]')
    if (d) d.setAttribute('content', meta[lang].desc)
    const c = document.querySelector('link[rel="canonical"]')
    if (c) c.setAttribute('href', `https://digitalpower.art${lang === 'pl' ? '/' : '/' + lang}`)
  }, [lang])

  return (
    <>
      <Header t={t} lang={lang} />
      <main>
        <Hero t={t} />
        <About t={t} />
        <Services t={t} />
        <Process t={t} />
        <Contact t={t} />
      </main>
      <Footer t={t} />
    </>
  )
}
