import { createContext, useContext, useState } from 'react'

const translations = {
  de: {
    hero: {
      greeting: 'Hallo, ich bin',
      name: 'Muhittin Candan',
      subtitle: 'Staatlich geprüfter Informationstechnischer Assistent und Student der Medieninformatik (B.Sc.)',
      description: 'Leidenschaft für IT, Software und technische Herausforderungen. Analytisches Denken kombiniert mit betriebswirtschaftlichem Verständnis.',
      projectsBtn: 'Meine Projekte',
      contactBtn: 'Kontakt'
    },
    header: {
      logo: 'Portfolio',
      about: 'Über mich',
      projects: 'Kenntnisse',
      contact: 'Kontakt'
    },
    about: {
      title: 'Über mich',
      para1: 'Ich bin ein leidenschaftlicher Entwickler mit X Jahren Erfahrung in der Webentwicklung. Meine Expertise liegt in React, JavaScript, und responsive Design.',
      para2: 'Gerne arbeite ich an Projekten, die einen positiven Einfluss haben und meine Fähigkeiten herausfordern.',
      skillsTitle: 'Skills'
    },
    projects: {
      title: 'Kenntnisse',
      viewProject: 'Demo',
      viewCode: 'Code',
      showMore: 'Mehr anzeigen',
      showLess: 'Weniger anzeigen'
    },
    footer: {
      copyright: 'Mein Portfolio. Alle Rechte vorbehalten.'
    }
  },
  en: {
    hero: {
      greeting: 'Hello, I am',
      name: 'Muhittin Candan',
      subtitle: 'State-certified IT Assistant and Media Informatics Student (B.Sc.)',
      description: 'Passion for IT, software and technical challenges. Analytical thinking combined with business understanding.',
      projectsBtn: 'My Projects',
      contactBtn: 'Contact'
    },
    header: {
      logo: 'Portfolio',
      about: 'About Me',
      projects: 'Skills',
      contact: 'Contact'
    },
    about: {
      title: 'About Me',
      para1: 'I am a passionate developer with X years of experience in web development. My expertise lies in React, JavaScript, and responsive design.',
      para2: 'I enjoy working on projects that have a positive impact and challenge my skills.',
      skillsTitle: 'Skills'
    },
    projects: {
      title: 'Skills',
      viewProject: 'Demo',
      viewCode: 'Code',
      showMore: 'Show More',
      showLess: 'Show Less'
    },
    footer: {
      copyright: 'My Portfolio. All rights reserved.'
    }
  }
}

const LanguageContext = createContext()

export const useLanguage = () => useContext(LanguageContext)

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('de')

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'de' ? 'en' : 'de')
  }

  const t = (key) => {
    const keys = key.split('.')
    let value = translations[language]
    for (const k of keys) {
      value = value?.[k]
    }
    return value || key
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}