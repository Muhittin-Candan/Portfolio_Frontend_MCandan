import '../styles/projectCard.css'

export default function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="project-image">
        <img src={project.image} alt={project.title} />
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
          {project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer">Demo</a>}
          {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer">Code</a>}
        </div>
      </div>
    </div>
  )
}
