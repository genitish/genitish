import { FiMail, FiLinkedin, FiGithub, FiInstagram, FiSend } from 'react-icons/fi'
import { SiLeetcode } from 'react-icons/si'
import './Contact.css'

const Contact = () => {
  const contactInfo = [
    {
      icon: <FiMail />,
      label: 'Email',
      value: 'genitish@gmail.com',
      link: 'mailto:genitish@gmail.com',
    },
    {
      icon: <FiLinkedin />,
      label: 'LinkedIn',
      value: 'nitishkumar-sde',
      link: 'https://www.linkedin.com/in/nitishkumar-sde/',
    },
    {
      icon: <FiGithub />,
      label: 'GitHub',
      value: '@genitish',
      link: 'https://github.com/genitish',
    },
    {
      icon: <FiInstagram />,
      label: 'Instagram',
      value: '@nitishgulia_',
      link: 'https://instagram.com/nitishgulia_',
    },
    {
      icon: <SiLeetcode />,
      label: 'LeetCode',
      value: '@genitish',
      link: 'https://leetcode.com/u/genitish/',
    },
  ]

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-title">
          <h2>Get In <span className="gradient-text">Touch</span></h2>
          <p>Let's work together</p>
        </div>

        <div className="contact-content">
          <div className="contact-text">
            <h3>Let's Build Something Amazing Together</h3>
            <p>
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. 
              Whether you need a full-stack developer, tech consultant, or want to collaborate on something exciting, 
              I'd love to hear from you!
            </p>
            <p>
              At <strong>MecroTech</strong>, we specialize in delivering enterprise-grade solutions at startup prices. 
              From AI-powered applications to scalable web platforms, we can help bring your ideas to life in just 2-4 weeks.
            </p>
            
            <div className="contact-cta">
              <a href="mailto:genitish@gmail.com" className="btn btn-primary">
                <FiSend /> Send Me an Email
              </a>
              <a href="https://mecrotech.in/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                Visit MecroTech
              </a>
            </div>
          </div>

          <div className="contact-info">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.link}
                target={info.link.startsWith('mailto:') ? '_self' : '_blank'}
                rel={info.link.startsWith('mailto:') ? '' : 'noopener noreferrer'}
                className="contact-item glass-card"
              >
                <div className="contact-icon">{info.icon}</div>
                <div className="contact-details">
                  <span className="contact-label">{info.label}</span>
                  <span className="contact-value">{info.value}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
