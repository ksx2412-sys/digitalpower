import { IcMonitor, IcMegaphone, IcBrain, IcSearch, IcUsers, IcCamera, IcDrone, IcArrow } from '../components/Icons.jsx'

const stripIcons = [IcMonitor, IcMegaphone, IcBrain, IcSearch, IcUsers, IcCamera, IcDrone]

export default function Hero({ t }) {
  return (
    <>
      <section className="hero">
        <div className="hero-grid" />
        <div className="container">
          <div className="hero-inner">
            <h1>
              {t.hero.title1}<br />
              <span className="line-accent">{t.hero.title2}</span>
            </h1>
            <p>{t.hero.lead}</p>
            <a className="btn" href="#kontakt">{t.hero.cta} <span className="arrow"><IcArrow width="16" height="16" /></span></a>
          </div>
        </div>
      </section>
      <div className="strip">
        <div className="container">
          <ul>
            {t.strip.map((label, i) => {
              const Icon = stripIcons[i]
              return <li key={label}><Icon /> {label}</li>
            })}
          </ul>
        </div>
      </div>
    </>
  )
}
