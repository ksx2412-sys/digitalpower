import { IcMail, IcWhatsapp, IcGlobe } from '../components/Icons.jsx'

const EMAIL = 'dpx369@gmail.com'
const PHONE_DISPLAY = '049 176 87988597'
const WHATSAPP_LINK = 'https://wa.me/4917687988597'

export default function Contact({ t }) {
  return (
    <section className="contact" id="kontakt">
      <div className="container contact-grid">
        <div>
          <h2>{t.contact.title}</h2>
          <p className="lead">{t.contact.lead}</p>
          <a className="btn" href={`mailto:${EMAIL}`}>{t.contact.cta} →</a>
        </div>
        <ul className="contact-list">
          <li>
            <IcMail />
            <div>
              <strong>{t.contact.emailLabel}</strong>
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </div>
          </li>
          <li>
            <IcWhatsapp />
            <div>
              <strong>{t.contact.whatsappLabel}</strong>
              <a href={WHATSAPP_LINK} rel="noopener" target="_blank">{PHONE_DISPLAY}</a>
            </div>
          </li>
          <li>
            <IcGlobe />
            <div>
              <strong>{t.contact.teamLabel}</strong>
              <span>{t.contact.teamText}</span>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}
