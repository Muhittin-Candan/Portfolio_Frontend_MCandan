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
      logo: 'Muhittin Candan',
      about: 'Über mich',
      projects: 'Kenntnisse',
      contact: 'Kontakt'
    },
    about: {
      title: 'Über mich',
      intro: 'Ich bin IT-ler/Informatiker aus Leidenschaft mit einem umfassenden Verständnis für verschiedenste Technologien und technische Umgebungen.',
      currentTitle: 'Aktuell',
      current: 'Angestellt bei der PFM Intelligence Group (Berlin)',
      currentSub: 'Technische Überwachung von Sensoren weltweit zur Kunden- und PKW-Zählung.\nFehleranalyse und Störungsbehebung bei Sensorausfällen, Fehlpositionierungen und technischen Problemen.\nSicherstellung des reibungslosen Betriebs der Sensorsysteme.',
      exp1Title: '2023 – 2025 (ca. 1,5 Jahre)',
      exp1: 'Tätigkeit im IT-Servicedesk in zwei größeren Unternehmen (300-600 Mitarbeiter)',
      exp2Title: 'Seit 2021',
      exp2: 'Student der Medieninformatik (B.Sc.) an der Berliner Hochschule für Technik',
      exp2Sub: 'Genutzte Programmiersprachen/Tools:\nSQL\nJava\nCSS/HTML\nPython\nFigma für Frames  von Smartphone Apps\nBash-Script',
      exp3Title: '2015 – 2020 (Teilzeit + Minijob)',
      exp3: 'Tätigkeit im Baugewerbe in einem familiengeführten Unternehmen. Der Schwerpunkt lag auf der Bauleitung, insbesondere bei der Sanierung von Fassaden. Zusätzlich Unterstützung betriebsinterner Prozesse.',
      exp4Title: '2018',
      exp4: 'Abschluss als staatlich geprüfter informationstechnischer Assistent',
      exp4Sub: 'Schwerpunkte lagen auf: Informatik, Automatisierungstechnik, Elektrotechnik, Netzwerktechnik.\nProgrammiersprachen: C++, Java, Arduino (Mikrocontroller-Boards Programmierung von Sensoren usw.).\nAutomatisierungstechnik: Stark fokussiert auf den Umgang mit SPS mittels Siemens Simatic.'
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
      logo: 'Muhittin Candan',
      about: 'About Me',
      projects: 'Skills',
      contact: 'Contact'
    },
    about: {
      title: 'About Me',
      intro: 'I am a passionate IT professional with a comprehensive understanding of various technologies and technical environments.',
      currentTitle: 'Currently',
      current: 'Employed at PFM Intelligence Group (Berlin)',
      currentSub: 'Technical monitoring of sensors worldwide for customer and vehicle counting.\nError analysis and troubleshooting for sensor failures, misalignments and technical issues.\nEnsuring smooth operation of sensor systems.',
      exp1Title: '2023 – 2025 (approx. 1.5 years)',
      exp1: 'Working in IT Servicedesk at two larger companies (300-600 employees)',
      exp2Title: 'Since 2021',
      exp2: 'Student of Media Informatics (B.Sc.) at Berlin University of Applied Sciences',
      exp2Sub: 'Programming languages/tools used:\nSQL\nJava\nCSS/HTML\nPython\nFigma for Frames of Smartphone Apps\nBash-Script',
      exp3Title: '2015 – 2020 (Part-time + Minijob)',
      exp3: 'Working in the construction industry at a family-run company. Focus on site management, especially facade renovation. Additionally supporting internal business processes.',
      exp4Title: '2018',
      exp4: 'Abschluss als staatlich geprüfter informationstechnischer Assistent',
      exp4Sub: 'Focus areas: Computer Science, Automation Technology, Electrical Engineering, Network Technology.\nProgramming languages: C++, Java, Arduino (microcontroller board programming of sensors etc.).\nAutomation Technology: Strongly focused on working with PLCs using Siemens Simatic.'
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