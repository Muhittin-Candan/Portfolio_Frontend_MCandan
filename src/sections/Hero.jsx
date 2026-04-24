import '../styles/hero.css'
import { useLanguage } from '../LanguageContext.jsx'

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <h1>{t('hero.greeting')} <span className="highlight">{t('hero.name')}</span></h1>
          <p className="subtitle">{t('hero.subtitle')}</p>
          <p className="description">
            {t('hero.description')}
          </p>
          <div className="cta-buttons">
            <a href="#skills" className="btn btn-primary">{t('hero.projectsBtn')}</a>
            <a href="#about" className="btn btn-primary">{t('hero.aboutBtn')}</a>
          </div>
        </div>
        <div className="hero-visual">
          {/* Hier könnte ein Bild oder eine Illustration sein */}
        </div>
      </div>
    </section>
  )
}
