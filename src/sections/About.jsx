import { IcGlobe, IcHandshake, IcBulb, IcStar, IcUsers, WorldMap } from '../components/Icons.jsx'

const valueIcons = [IcGlobe, IcHandshake, IcBulb, IcStar]

export default function About({ t }) {
  return (
    <section className="about" id="o-nas">
      <div className="container about-grid">
        <div>
          <p className="eyebrow">{t.about.eyebrow}</p>
          <h2>{t.about.title}</h2>
          <p>{t.about.p1}</p>
          <p>{t.about.p2}</p>
          <div className="values">
            {t.about.values.map((v, i) => {
              const Icon = valueIcons[i]
              return <div className="value" key={v}><Icon /><div>{v}</div></div>
            })}
          </div>
        </div>
        <div className="map-wrap">
          <WorldMap />
          <div className="map-card">
            <IcUsers />
            <div>
              <strong>{t.about.cardTitle}</strong>
              <span>{t.about.cardText}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
