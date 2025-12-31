import { FiGithub, FiLinkedin, FiMail, FiInstagram, FiExternalLink } from 'react-icons/fi'
import { SiLeetcode } from 'react-icons/si'
import './Hero.css'

const Hero = () => {
  const socialLinks = [
    { icon: <FiGithub />, href: 'https://github.com/genitish', label: 'GitHub' },
    { icon: <FiLinkedin />, href: 'https://www.linkedin.com/in/nitishgulia-/', label: 'LinkedIn' },
    { icon: <FiInstagram />, href: 'https://instagram.com/nitishgulia_', label: 'Instagram' },
    { icon: <SiLeetcode />, href: 'https://leetcode.com/u/genitish/', label: 'LeetCode' },
    { icon: <FiMail />, href: 'mailto:genitish@gmail.com', label: 'Email' },
  ]

  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-text fade-in-up">
            <p className="hero-greeting">Hi, I'm</p>
            <h1 className="hero-name">
              Nitish <span className="gradient-text">Kumar</span>
            </h1>
            <h2 className="hero-title">
              Founder @ <span className="gradient-text">MecroTech</span> | Full-Stack Engineer
            </h2>
            <p className="hero-description">
              Specializing in high-impact <strong>Fintech, E-commerce, and AI solutions</strong>. 
              Over <strong>5 years</strong> of excellence in building scalable web systems.
            </p>

            <div className="hero-cta">
              <a href="#contact" className="btn btn-primary">
                Get In Touch
              </a>
              <a 
                href="https://drive.google.com/file/d/1_xHmV6nWEdeV6xJWHbvEgweSwErQMdf5/view?usp=drive_link" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-secondary"
              >
                View Resume <FiExternalLink />
              </a>
            </div>

            <div className="hero-social">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="social-link"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="hero-image fade-in-up">
            <div className="image-wrapper">
              <img 
                src="/profile.jpg" 
                alt="Nitish Kumar - Full Stack Developer" 
                className="profile-image"
              />
              <div className="image-glow"></div>
            </div>
          </div>
        </div>

        <div className="scroll-indicator">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <p>Scroll Down</p>
        </div>
      </div>
    </section>
  )
}

export default Hero
