import { FiHeart, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: <FiGithub />, href: 'https://github.com/genitish', label: 'GitHub' },
    { icon: <FiLinkedin />, href: 'https://www.linkedin.com/in/nitishgulia-/', label: 'LinkedIn' },
    { icon: <FiMail />, href: 'mailto:genitish@gmail.com', label: 'Email' },
  ]

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="gradient-text">Nitish Kumar</h3>
            <p>Full-Stack Developer & Tech Lead</p>
            <p className="footer-tagline">Building the future, one line of code at a time.</p>
          </div>

          <div className="footer-links">
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#skills">Skills</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Projects</h4>
              <ul>
                <li><a href="#projects">Portfolio</a></li>
                <li><a href="https://mecrotech.in/" target="_blank" rel="noopener noreferrer">MecroTech</a></li>
                <li><a href="https://github.com/genitish" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Connect</h4>
              <div className="footer-social">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith('mailto:') ? '_self' : '_blank'}
                    rel={link.href.startsWith('mailto:') ? '' : 'noopener noreferrer'}
                    aria-label={link.label}
                    className="footer-social-link"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {currentYear} Nitish Kumar. Made with <FiHeart className="heart-icon" /> using React & Vite
          </p>
          <p className="footer-credit">
            Designed & Developed by <span className="gradient-text">Nitish Kumar</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
