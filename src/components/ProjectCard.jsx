import '../styles/projectCard.css'
import { useLanguage } from '../LanguageContext.jsx'
import { FaFileArchive } from 'react-icons/fa'
import { SiArduino, SiSiemens } from 'react-icons/si'

const iconMap = {
  zip: FaFileArchive,
  sps: SiSiemens,
  arduino: SiArduino,
}

export default function ProjectCard({ project }) {
  const { t } = useLanguage()
  const IconComponent = project.icon ? iconMap[project.icon] : null

  return (
    <div className="project-card">
      <div className="project-image">
        {IconComponent
          ? project.github
            ? <a href={project.github} target="_blank" rel="noopener noreferrer"><div className="project-icon-placeholder"><IconComponent size={80} /></div></a>
            : <div className="project-icon-placeholder"><IconComponent size={80} /></div>
          : project.github
            ? <a href={project.github} target="_blank" rel="noopener noreferrer"><img src={project.image} alt={project.title} /></a>
            : project.demo
            ? <a href={project.demo} target="_blank" rel="noopener noreferrer"><img src={project.image} alt={project.title} /></a>
            : <img src={project.image} alt={project.title} />}
      </div>
      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-tags">
          {project.tags.map((tag, i) => (
            <span key={i} className="tag">{tag}</span>
          ))}
        </div>
        <div className="project-links">
          {project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer">{project.demoLabel || t('projects.viewProject')}</a>}
          {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer">{t('projects.viewCode')}</a>}
        </div>
      </div>
    </div>
  )
}
