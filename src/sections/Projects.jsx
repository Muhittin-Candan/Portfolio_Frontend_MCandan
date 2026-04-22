import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'
import '../styles/projects.css'

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2>Meine Projekte</h2>
        <div className="projects-grid">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
