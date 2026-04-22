import '../styles/hero.css'
import { useLanguage } from '../LanguageContext.jsx'

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero-content">
          <h1>{t('hero.greeting')} <span className="highlight">{t('hero.name')}</span></h1>
          <p className="subtitle">{t('hero.subtitle')}</p>
          <p className="description">
            {t('hero.description')}
          </p>
          <div className="cta-buttons">
            <button className="btn btn-primary">{t('hero.projectsBtn')}</button>
          </div>
        </div>
        <div className="hero-visual">
          {/* Hier könnte ein Bild oder eine Illustration sein */}
        </div>
      </div>
    </section>
  )
}
