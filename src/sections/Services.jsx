import { IcMonitor, IcMegaphone, IcBrain, IcCamera } from '../components/Icons.jsx'

const cardIcons = [IcMonitor, IcMegaphone, IcBrain, IcCamera]
const cardImgs = ['/media/card-www.jpg', '/media/card-social.jpg', '/media/card-ai.jpg', '/media/card-dron.jpg']

export default function Services({ t }) {
  return (
    <section className="services" id="uslugi">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">{t.services.eyebrow}</p>
          <h2>{t.services.title}</h2>
        </div>
        <div className="cards" id="realizacje">
          {t.services.items.map((item, i) => {
            const Icon = cardIcons[i]
            return (
              <article className="card" key={item.title}>
                <div className="thumb">
                  <img src={cardImgs[i]} alt={item.title} loading="lazy" width="400" height="250"
                       onError={e => { e.currentTarget.style.display = 'none' }} />
                  <span className="icon-badge"><Icon /></span>
                </div>
                <div className="card-body">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <a className="more" href="#kontakt">{t.services.more} →</a>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
