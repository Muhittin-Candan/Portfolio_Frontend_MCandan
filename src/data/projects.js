const projectsData = {
  de: [
    {
      id: 1,
      title: "Projekt 1",
      description: "Eine kurze Beschreibung deines Projekts. Erkläre, was du gebaut hast und welche Technologien du verwendet hast.",
      image: "/project-1.png",
      tags: ["React", "CSS", "JavaScript"],
      demo: "#",
      github: "#"
    },
    {
      id: 2,
      title: "Projekt 2",
      description: "Eine weitere coole Projektbeschreibung mit den verwendeten Technologien.",
      image: "/project-2.png",
      tags: ["React", "Node.js", "MongoDB"],
      demo: "#",
      github: "#"
    },
    {
      id: 3,
      title: "Projekt 3",
      description: "Noch mehr interessante Projekte, die deine Fähigkeiten zeigen.",
      image: "/project-3.png",
      tags: ["Vite", "React", "Tailwind"],
      demo: "#",
      github: "#"
    },
    {
      id: 4,
      title: "Projekt 4",
      description: "Ein weiteres Beispielprojekt zur Demonstration deiner Entwicklungsfähigkeiten.",
      image: "/project-4.png",
      tags: ["JavaScript", "HTML", "CSS"],
      demo: "#",
      github: "#"
    },
    {
      id: 5,
      title: "Projekt 5",
      description: "Ein komplexes Projekt mit Backend-Integration und Datenbank.",
      image: "/project-5.png",
      tags: ["React", "Express", "PostgreSQL"],
      demo: "#",
      github: "#"
    },
    {
      id: 6,
      title: "Projekt 6",
      description: "Eine mobile-responsive Anwendung mit modernen UI-Prinzipien.",
      image: "/project-6.png",
      tags: ["React Native", "Firebase", "TypeScript"],
      demo: "#",
      github: "#"
    }
  ],
  en: [
    {
      id: 1,
      title: "Project 1",
      description: "A short description of your project. Explain what you built and which technologies you used.",
      image: "/project-1.png",
      tags: ["React", "CSS", "JavaScript"],
      demo: "#",
      github: "#"
    },
    {
      id: 2,
      title: "Project 2",
      description: "Another cool project description with the technologies used.",
      image: "/project-2.png",
      tags: ["React", "Node.js", "MongoDB"],
      demo: "#",
      github: "#"
    },
    {
      id: 3,
      title: "Project 3",
      description: "Even more interesting projects that showcase your skills.",
      image: "/project-3.png",
      tags: ["Vite", "React", "Tailwind"],
      demo: "#",
      github: "#"
    },
    {
      id: 4,
      title: "Project 4",
      description: "Another example project to demonstrate your development skills.",
      image: "/project-4.png",
      tags: ["JavaScript", "HTML", "CSS"],
      demo: "#",
      github: "#"
    },
    {
      id: 5,
      title: "Project 5",
      description: "A complex project with backend integration and database.",
      image: "/project-5.png",
      tags: ["React", "Express", "PostgreSQL"],
      demo: "#",
      github: "#"
    },
    {
      id: 6,
      title: "Project 6",
      description: "A mobile-responsive application with modern UI principles.",
      image: "/project-6.png",
      tags: ["React Native", "Firebase", "TypeScript"],
      demo: "#",
      github: "#"
    }
  ]
}

export const getProjects = (language) => projectsData[language] || projectsData.de
