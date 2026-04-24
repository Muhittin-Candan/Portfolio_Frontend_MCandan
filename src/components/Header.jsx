import { useState } from 'react'
import '../styles/header.css'
import { useLanguage } from '../LanguageContext.jsx'

export default function Header() {
  const { language, toggleLanguage, t } = useLanguage()
  const [isEmailModalOpen, setEmailModalOpen] = useState(false)

  const handleEmailClick = () => {
    setEmailModalOpen(true)
  }

  const closeEmailModal = () => {
    setEmailModalOpen(false)
  }

  return (
    <header className="header">
      <div className="container">
        <a href="#home" className="logo">{t('header.logo')}</a>
        <div className="center-links">
          <a href="https://www.linkedin.com/in/muhittin-candan-04b5172b6" target="_blank" rel="noopener noreferrer" className="linkedin-link">
            <svg className="linkedin-icon" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M19 0H5C2.238 0 0 2.238 0 5v14c0 2.762 2.238 5 5 5h14c2.762 0 5-2.238 5-5V5c0-2.762-2.238-5-5-5zm-11.25 19.5H4V8.25h3.75V19.5zm-1.875-13.5C5.015 6 4 4.985 4 3.75S5.015 1.5 6.375 1.5 8.75 2.515 8.75 3.75 7.735 6 6.375 6zm13.125 13.5H16.5V13.5c0-1.5-1.125-1.75-1.312-1.75-.188 0-.438.012-.438.438v7.312h-3.75V8.25h3.75v1.5c.5-.75 1.375-1.125 2.438-1.125 2.625 0 3.125 1.75 3.125 4.031V19.5z"/>
            </svg>
            LinkedIn
          </a>
          <a href="mailto:candan.mhtn@gmail.com" onClick={handleEmailClick}>📧 E-Mail</a>
        </div>
        <nav className="nav">
          <a href="#about">{t('header.about')}</a>
          <a href="#projects">{t('header.projects')}</a>
          <button onClick={toggleLanguage} className="lang-toggle">
            {language === 'de' ? 'EN' : 'DE'}
          </button>
        </nav>
      </div>

      {isEmailModalOpen && (
        <div className="email-modal-overlay" onClick={closeEmailModal}>
          <div className="email-modal" onClick={(e) => e.stopPropagation()}>
            <div className="email-modal-header">
              <h3>E-Mail-Adresse</h3>
              <button className="email-modal-close" onClick={closeEmailModal} aria-label="Schließen">×</button>
            </div>
            <div className="email-modal-body">
              <p>Zum Kopieren:</p>
              <code>candan.mhtn@gmail.com</code>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
