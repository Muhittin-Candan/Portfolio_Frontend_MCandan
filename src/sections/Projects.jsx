import { useState } from 'react'
import ProjectCard from '../components/ProjectCard'
import { getProjects } from '../data/projects'
import { useLanguage } from '../LanguageContext.jsx'
import '../styles/projects.css'

export default function Projects() {
  const { language, t } = useLanguage()
  const allProjects = getProjects(language)
  const [showAll, setShowAll] = useState(false)
  const displayedProjects = showAll ? allProjects : allProjects.slice(0, 3)

  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2>{t('projects.title')}</h2>
        <p className="projects-subtitle">{t('projects.subtitle')}</p>
        <div className="projects-grid">
          {displayedProjects.map((project, i) => (
            <ProjectCard key={i} project={project} />
          ))}
        </div>
        {allProjects.length > 3 && (
          <div className="show-more-container">
            <button className="btn btn-secondary" onClick={() => setShowAll(!showAll)}>
              {showAll ? t('projects.showLess') : t('projects.showMore')}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
