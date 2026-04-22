import '../styles/about.css'

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <h2>Über mich</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Ich bin ein leidenschaftlicher Entwickler mit X Jahren Erfahrung in der Webentwicklung.
              Meine Expertise liegt in React, JavaScript, und responsive Design.
            </p>
            <p>
              Gerne arbeite ich an Projekten, die einen positiven Einfluss haben und meine Fähigkeiten herausfordern.
            </p>
          </div>
          <div className="skills">
            <h3>Skills</h3>
            <div className="skill-list">
              <span className="skill">React</span>
              <span className="skill">JavaScript</span>
              <span className="skill">CSS3</span>
              <span className="skill">HTML5</span>
              <span className="skill">Vite</span>
              <span className="skill">Git</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
