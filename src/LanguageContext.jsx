import { createContext, useContext, useState } from 'react'

const translations = {
  de: {
    hero: {
      greeting: 'Hallo, ich bin',
      name: 'Muhittin Candan',
      subtitle: 'Staatlich geprüfter Informationstechnischer Assistent und Student der Medieninformatik (B.Sc.)',
      description: 'Leidenschaft für IT, Software und technische Herausforderungen. Analytisches Denken kombiniert mit betriebswirtschaftlichem Verständnis.',
      projectsBtn: 'Kenntnisse',
      aboutBtn: 'Über mich',
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
      intro: 'Ich bin IT-ler/Informatiker aus Leidenschaft mit einem umfassenden Verständnis für verschiedenste Technologien und technische Umgebungen.',
      currentTitle: 'Aktuell',
      current: 'Angestellt bei der PFM Intelligence Group (Berlin)',
      currentDetails: [
        'Technische Überwachung von Sensoren weltweit zur Kunden- und PKW-Zählung',
        'Fehleranalyse und Störungsbehebung bei Sensorausfällen, Fehlpositionierungen und technischen Problemen',
        'Sicherstellung des reibungslosen Betriebs der Sensorsysteme'
      ],
      exp1Title: '2023 – 2025 (ca. 1,5 Jahre)',
      exp1: 'Tätigkeit im IT-Servicedesk in einem größeren Unternehmen',
      exp2Title: 'Seit 2021',
      exp2: 'Student der Medieninformatik (B.Sc.) an der Berliner Hochschule für Technik',
      exp3Title: 'Bis Ende 2020',
      exp3: 'Tätigkeit im Baugewerbe in einem familiengeführten Unternehmen. Der Schwerpunkt lag auf der Bauleitung, insbesondere bei der Sanierung von Fassaden. Zusätzlich Unterstützung betriebsinterner Prozesse.',
      exp4Title: '2018',
      exp4: 'Abschluss als staatlich geprüfter informationstechnischer Assistent (State-Certified IT Assistant)'
    },
    projects: {
      title: 'Kenntnisse',
      subtitle: 'Beispielhafte Projekte aus Ausbildung, Studium und privaten Aktivitäten\n(teilweise unter Einsatz von KI-gestützten Entwicklungswerkzeugen)',
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
      projectsBtn: 'Skills',
      aboutBtn: 'About Me',
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
      intro: 'I am a passionate IT professional with a comprehensive understanding of various technologies and technical environments.',
      currentTitle: 'Currently',
      current: 'Employed at PFM Intelligence Group (Berlin)',
      currentDetails: [
        'Technical monitoring of sensors worldwide for customer and vehicle counting',
        'Error analysis and troubleshooting for sensor failures, misalignments and technical issues',
        'Ensuring smooth operation of sensor systems'
      ],
      exp1Title: '2023 – 2025 (approx. 1.5 years)',
      exp1: 'Working in IT Servicedesk at a larger company',
      exp2Title: 'Since 2021',
      exp2: 'Student of Media Informatics (B.Sc.) at Berlin University of Applied Sciences',
      exp3Title: 'Until end of 2020',
      exp3: 'Working in the construction industry at a family-run company. Focus on site management, especially facade renovation. Additionally supporting internal business processes.',
      exp4Title: '2018',
      exp4: 'Graduated as State-Certified IT Assistant (Staatlich geprüfter informationstechnischer Assistent)'
    },
    projects: {
      title: 'Skills',
      subtitle: 'Exemplary projects from training, studies and private activities\n(partly using AI-assisted development tools)',
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