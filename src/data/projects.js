const projectsData = {
  de: [
    {
      id: 1,
      title: "PDF-Rechnungen-Werte-Extrahieren",
      description: "Liest PDF Rechnungen aus und extrahiert die Werte in eine CSV Datei",
      image: "/src/Bilder/projekt1.png",
      tags: ["Python", "pdfplumber"],
      github: "https://github.com/Muhittin-Candan/PDF-Rechnungen-Werte-Extrahieren-"
    },
    {
      id: 2,
      title: "Rechnungen archivieren/verzippen",
      description: "Das Script liest die PDF Rechnungen nach bestimmten Schlüsselwörtern aus und verzippt/archiviert diese dann",
      image: "/project-2.png",
      tags: ["Python", "PyPDF2", "zipfile"],
      icon: "zip",
      github: "https://github.com/Muhittin-Candan/Rechnugen-archivieren-verzippen-"
    },
    {
      id: 3,
      title: "Helligkeitsregelung-Fernbedienung-Arduino",
      description: "Noch mehr interessante Projekte, die deine Fähigkeiten zeigen.",
      image: "/src/Bilder/projekt 3.png",
      tags: ["Arduino"],
      github: "https://github.com/Muhittin-Candan/Helligkeitsregelung-Fernbedienung-Arduino"
    },
    {
      id: 4,
      title: "Ampelsteuerung-Mikrocontroller-Arduino",
      description: "Ampelsteuerung mittels Arduino Board umgesetzt",
      icon: "arduino",
      tags: ["Arduino"],
      github: "https://github.com/Muhittin-Candan/Ampelsteuerung-Mikrocontroller-Arduino"
    },
    {
      id: 5,
      title: "Gewächshaus mittels Siemens SPS SIMATIC umgesetzt",
      description: "Gewächshaus-Steuerung mittels Siemens SPS SIMATIC umgesetzt",
      image: "/src/Bilder/projekt5.png",
      tags: ["SPS", "Siemens"],
      demo: "/src/Bilder/sps1.xhtml",
      demoLabel: "Vorschau"
    },
    {
      id: 6,
      title: "Beschreibung des TONR (Zeit akkumulieren) Bausteins",
      description: "Protokoll zu der Funktion des TONR-Bausteins",
      image: "/src/Bilder/projekt 6.png",
      tags: ["SPS", "Siemens"],
      demo: "/src/Bilder/sps2.xhtml",
      demoLabel: "Vorschau"
    }
  ],
  en: [
    {
      id: 1,
      title: "PDF-Invoice-Value-Extractor",
      description: "Reads PDF invoices and extracts the values into a CSV file",
      image: "/src/Bilder/projekt1.png",
      tags: ["Python", "pdfplumber"],
      github: "https://github.com/Muhittin-Candan/PDF-Rechnungen-Werte-Extrahieren-"
    },
    {
      id: 2,
      title: "Archive/Zip Invoices",
      description: "The script reads PDF invoices for specific keywords and then zips/archives them",
      image: "/project-2.png",
      tags: ["Python", "PyPDF2", "zipfile"],
      icon: "zip",
      github: "https://github.com/Muhittin-Candan/Rechnugen-archivieren-verzippen-"
    },
    {
      id: 3,
      title: "Helligkeitsregelung-Fernbedienung-Arduino",
      description: "Even more interesting projects that showcase your skills.",
      image: "/src/Bilder/projekt 3.png",
      tags: ["Arduino"],
      github: "https://github.com/Muhittin-Candan/Helligkeitsregelung-Fernbedienung-Arduino"
    },
    {
      id: 4,
      title: "Ampelsteuerung-Mikrocontroller-Arduino",
      description: "Traffic light control implemented using Arduino board",
      icon: "arduino",
      tags: ["Arduino"],
      github: "https://github.com/Muhittin-Candan/Ampelsteuerung-Mikrocontroller-Arduino"
    },
    {
      id: 5,
      title: "Gewächshaus mittels Siemens SPS SIMATIC umgesetzt",
      description: "Greenhouse control implemented using Siemens SPS SIMATIC",
      image: "/src/Bilder/projekt5.png",
      tags: ["SPS", "Siemens"],
      demo: "/src/Bilder/sps1.xhtml",
      demoLabel: "Preview"
    },
    {
      id: 6,
      title: "Description of the TONR (Time Accumulate) Block",
      description: "Protocol on the function of the TONR block",
      image: "/src/Bilder/projekt 6.png",
      tags: ["SPS", "Siemens"],
      demo: "/src/Bilder/sps2.xhtml",
      demoLabel: "Preview"
    }
  ]
}

export const getProjects = (language) => projectsData[language] || projectsData.de
