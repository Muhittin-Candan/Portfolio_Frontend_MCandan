import '../styles/hero.css'

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero-content">
          <h1>Hallo, ich bin <span className="highlight">Muhittin Candan</span></h1>
          <p className="subtitle">ITler und Informatik Student (B.Sc.)</p>
          <p className="description">
            Ich baue moderne, responsive Webanwendungen mit React, JavaScript und anderen modernen Technologien.
          </p>
          <div className="cta-buttons">
            <button className="btn btn-primary">Meine Projekte</button>
            <button className="btn btn-secondary">Kontakt</button>
          </div>
        </div>
        <div className="hero-visual">
          {/* Hier könnte ein Bild oder eine Illustration sein */}
        </div>
      </div>
    </section>
  )
}
