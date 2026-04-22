import '../styles/header.css'
import { useLanguage } from '../LanguageContext.jsx'

export default function Header() {
  const { language, toggleLanguage, t } = useLanguage()

  return (
    <header className="header">
      <div className="container">
        <div className="logo">{t('header.logo')}</div>
        <div className="center-links">
          <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:">📧 E-Mail</a>
        </div>
        <nav className="nav">
          <a href="#about">{t('header.about')}</a>
          <a href="#projects">{t('header.projects')}</a>
          <button onClick={toggleLanguage} className="lang-toggle">
            {language === 'de' ? 'EN' : 'DE'}
          </button>
        </nav>
      </div>
    </header>
  )
}
