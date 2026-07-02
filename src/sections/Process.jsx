import { IcUsers, IcTarget, IcRocket, IcChart } from '../components/Icons.jsx'

const stepIcons = [IcUsers, IcTarget, IcRocket, IcChart]

export default function Process({ t }) {
  return (
    <section className="process" id="jak-pracujemy">
      <div className="container process-grid">
        <div>
          <p className="eyebrow">{t.process.eyebrow}</p>
          <h2>{t.process.title}</h2>
          <div className="steps">
            {t.process.steps.map((s, i) => {
              const Icon = stepIcons[i]
              return (
                <div className="step" key={s.title}>
                  <span className="num">{String(i + 1).padStart(2, '0')}</span>
                  <Icon />
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              )
            })}
          </div>
        </div>
        <div className="process-visual">
          <p className="caption">{t.process.caption}</p>
        </div>
      </div>
    </section>
  )
}
