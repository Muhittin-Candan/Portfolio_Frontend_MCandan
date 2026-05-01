import '../styles/hero.css'
import { useLanguage } from '../LanguageContext.jsx'
import { FaJava, FaPython, FaLinux, FaHtml5, FaCss3Alt, FaRobot } from 'react-icons/fa'
import { SiArduino, SiMysql, SiCplusplus } from 'react-icons/si'
import { useState, useCallback } from 'react'

const icons = [
  { Icon: FaJava,     label: 'Java',    color: '#f89820' },
  { Icon: FaPython,   label: 'Python',  color: '#3776ab' },
  { Icon: SiArduino,  label: 'Arduino', color: '#00979d' },
  { Icon: SiMysql,    label: 'SQL',     color: '#4479a1' },
  { Icon: FaLinux,    label: 'Linux',   color: '#fcc624' },
  { Icon: FaHtml5,    label: 'HTML',    color: '#e34f26' },
  { Icon: FaCss3Alt,  label: 'CSS',     color: '#1572b6' },
  { Icon: FaRobot,    label: 'KI-Agent',color: '#a855f7' },
  { Icon: SiCplusplus,label: 'C++',     color: '#00599c' },
]


function randomPos() {
  return {
    top:  Math.floor(Math.random() * 85),
    left: Math.floor(Math.random() * 75),
  }
}

function noOverlapPositions(count) {
  const placed = []
  const minDist = 18
  let attempts = 0
  while (placed.length < count && attempts < 1000) {
    attempts++
    const candidate = randomPos()
    const overlap = placed.some(
      p => Math.abs(p.top - candidate.top) < minDist && Math.abs(p.left - candidate.left) < minDist
    )
    if (!overlap) placed.push(candidate)
  }
  return placed.map(p => ({ top: `${p.top}%`, left: `${p.left}%` }))
}

function FloatingIcon({ Icon, label, color, style, onTouch }) {
  return (
    <div
      className="floating-icon"
      style={style}
      onMouseEnter={onTouch}
      onTouchStart={onTouch}
    >
      {Icon ? <Icon size={36} color={color} /> : null}
      <span>{label}</span>
    </div>
  )
}

export default function Hero() {
  const { t } = useLanguage()
  const [positions, setPositions] = useState(() => noOverlapPositions(icons.length))

  const shuffle = useCallback(() => {
    setPositions(noOverlapPositions(icons.length))
  }, [])

  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <h1>{t('hero.greeting')} <span className="highlight">{t('hero.name')}</span></h1>
          <p className="subtitle">{t('hero.subtitle')}</p>
          <p className="description">{t('hero.description')}</p>
          <div className="cta-buttons">
            <a href="#skills" className="btn btn-primary">{t('hero.projectsBtn')}</a>
            <a href="#about" className="btn btn-primary">{t('hero.aboutBtn')}</a>
          </div>
        </div>
        <div className="hero-visual">
          {icons.map(({ Icon, label, color }, i) => (
            <FloatingIcon
              key={label}
              Icon={Icon}
              label={label}
              color={color}
              onTouch={shuffle}
              style={{
                ...positions[i],
                animationDelay: `${i * 0.4}s`,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}