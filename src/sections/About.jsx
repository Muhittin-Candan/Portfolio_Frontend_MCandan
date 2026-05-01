import '../styles/about.css'
import { useLanguage } from '../LanguageContext.jsx'

export default function About() {
  const { t } = useLanguage()

  return (
    <section className="about" id="about">
      <div className="container">
        <h2>{t('about.title')}</h2>
        <div className="about-content">
          <div className="about-text">
            <p className="about-intro">{t('about.intro')}</p>
            <div className="timeline">
              <div className="timeline-item">
                <h3>{t('about.currentTitle')}</h3>
                <p>{t('about.current')}</p>
                <p className="timeline-sub">{t('about.currentSub')}</p>
              </div>
              <div className="timeline-item">
                <h3>{t('about.exp2Title')}</h3>
                <p>{t('about.exp2')}</p>
                <p className="timeline-sub">{t('about.exp2Sub')}</p>
              </div>
              <div className="timeline-item">
                <h3>{t('about.exp1Title')}</h3>
                <p>{t('about.exp1')}</p>
              </div>
              <div className="timeline-item">
                <h3>{t('about.exp3Title')}</h3>
                <p>{t('about.exp3')}</p>
              </div>
              <div className="timeline-item">
                <h3>{t('about.exp4Title')}</h3>
                <p>{t('about.exp4')}</p>
                <p className="timeline-sub">{t('about.exp4Sub')}</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
