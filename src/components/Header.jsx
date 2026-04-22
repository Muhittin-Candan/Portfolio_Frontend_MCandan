import '../styles/header.css'

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">Portfolio</div>
        <nav className="nav">
          <a href="#about">Über mich</a>
          <a href="#projects">Projekte</a>
          <a href="#contact">Kontakt</a>
        </nav>
      </div>
    </header>
  )
}
