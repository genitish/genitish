import { FiBriefcase } from 'react-icons/fi'
import './Experience.css'

const Experience = () => {
  const experiences = [
    {
      title: 'Founder & Full-Stack Developer',
      company: 'MecroTech',
      period: 'March 2024 – Present',
      location: 'New Delhi, India (Remote)',
      description: [
        'Building fast, affordable web & AI solutions for businesses seeking enterprise-grade results.',
        'Leading end-to-end development of AI-powered agents and scalable web platforms.',
        'Focusing on bootstrapping innovative tech solutions for diverse industry needs.',
      ],
      link: 'https://mecrotech.in/',
    },
    {
      title: 'Software Development Engineer',
      company: 'Jiraaf',
      period: 'October 2022 – February 2025',
      location: 'Bengaluru, India (Remote)',
      description: [
        'Architected 7+ revenue-critical features (reinvestment, after-market orders, KYC) driving 40%+ user engagement growth.',
        'Led Jiraaf OBP and Altgraaf platform launches with cross-functional teams ensuring production-ready delivery.',
        'Optimized database queries achieving 35% faster API response times and significantly reduced server costs.',
        'Implemented investment flow features handling 10K+ daily transactions with 99.9% uptime.',
      ],
    },
    {
      title: 'Application Developer 2 (Full Stack)',
      company: 'Udaan.com',
      period: 'September 2021 – September 2022',
      location: 'New Delhi, India',
      description: [
        'Increased inbound happy flow rate from 61% to 95% by implementing intelligent inventory filters and PO-based validation.',
        'Pioneered CatchWeight feature achieving 0.6% of GMV, a first for B2B platforms in India.',
        'Built mobile-first React.js UI and HHD-based picking system, reducing paper costs by 80% and improving warehouse productivity by 25%.',
        'Managed production escalations using monitoring tools (ADX, Tracer, Grafana) ensuring 99.5%+ system stability.',
      ],
    },
    {
      title: 'Technical Mentor',
      company: 'Newton School',
      period: 'April 2022 – February 2023',
      location: 'Remote',
      description: [
        'Mentored 100+ students in Data Structures, Algorithms, and modern frontend technologies (React.js, JavaScript).',
        'Developed curriculum and conducted live sessions to improve student problem-solving and technical skills.',
      ],
    },
    {
      title: 'System Engineer',
      company: 'Tata Consultancy Services',
      period: 'August 2020 – August 2021',
      location: 'Gurugram, India',
      description: [
        'Automated rule library tasks by developing Python scripts, reducing manual effort by 60%.',
        'Developed and enhanced billing module features for banking clients using Java and TCS Bancs platform.',
        'Promoted to System Engineer within 4 months after demonstrating excellence in the Digital Competency Assessment (DCA).',
      ],
    },
  ]

  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="section-title">
          <h2>Work <span className="gradient-text">Experience</span></h2>
          <p>My professional journey</p>
        </div>

        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker">
                <div className="timeline-icon">
                  <FiBriefcase />
                </div>
              </div>
              <div className="timeline-content glass-card">
                <div className="timeline-header">
                  <div>
                    <h3 className="timeline-title">{exp.title}</h3>
                    <h4 className="timeline-company">
                      {exp.link ? (
                        <a href={exp.link} target="_blank" rel="noopener noreferrer">
                          {exp.company}
                        </a>
                      ) : (
                        exp.company
                      )}
                    </h4>
                  </div>
                  <div className="timeline-meta">
                    <span className="timeline-period">{exp.period}</span>
                    <span className="timeline-location">{exp.location}</span>
                  </div>
                </div>
                <ul className="timeline-description">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
