import { IcLinkedin, IcFacebook, IcInstagram } from './Icons.jsx'

export default function Footer({ t }) {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <span>{t.footer.copy}</span>
        <span>{t.footer.tagline}</span>
        <div className="socials">
          <a href="https://www.linkedin.com/" aria-label="LinkedIn" rel="noopener" target="_blank"><IcLinkedin /></a>
          <a href="https://www.facebook.com/" aria-label="Facebook" rel="noopener" target="_blank"><IcFacebook /></a>
          <a href="https://www.instagram.com/" aria-label="Instagram" rel="noopener" target="_blank"><IcInstagram /></a>
        </div>
      </div>
    </footer>
  )
}
