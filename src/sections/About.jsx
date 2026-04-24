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
            <p>
              {t('about.para1')}
            </p>
            <p>
              {t('about.para2')}
            </p>
          </div>
          <div className="skills" id="skills">
            <h3>{t('about.skillsTitle')}</h3>
            <div className="skill-list">
              <span className="skill">React</span>
              <span className="skill">JavaScript</span>
              <span className="skill">CSS3</span>
              <span className="skill">HTML5</span>
              <span className="skill">Vite</span>
              <span className="skill">Git</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
