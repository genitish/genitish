import { FiAward, FiUsers, FiBriefcase, FiCode } from 'react-icons/fi'
import './About.css'

const About = () => {
  const stats = [
    { icon: <FiBriefcase />, value: '5+', label: 'Years Experience' },
    { icon: <FiAward />, value: 'Modern', label: 'Tech Stack' },
    { icon: <FiCode />, value: 'Scalable', label: 'Architecture' },
  ]

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-title">
          <h2>About <span className="gradient-text">Me</span></h2>
          <p>Get to know me better</p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <h3>Full-Stack Developer & Tech Entrepreneur</h3>
            <p>
              I am a results-driven <strong>Full-Stack Software Engineer</strong> and the <strong>Founder of MecroTech</strong>, 
              with over <strong>5 years of experience</strong> delivering high-impact, scalable web applications. My professional 
              journey spans across <strong>Fintech, E-commerce, and Supply Chain</strong> industries, where I have specialized 
              in building robust, enterprise-grade solutions using <strong>React, TypeScript, Node.js, and Next.js</strong>.
            </p>
            <p>
              With a deep expertise in <strong>System Design and Data Structures (DSA)</strong>, I have a proven track record of 
              launching revenue-critical features and optimizing system performance to drive significant user growth and 
              operational efficiency. Currently, I am dedicated to bootstrapping <strong>MecroTech</strong>, a forward-thinking 
              startup focused on providing enterprise-quality web solutions—ranging from <strong>AI-powered agents</strong> to 
              custom e-commerce and course platforms.
            </p>
            <p>
              I thrive at the intersection of complex problem-solving and clean, efficient architecture. Beyond developing 
              products, I am passionate about mentoring the next generation of developers and am actively growing a 
              world-class team at MecroTech to build innovative products that shape the future of tech solutions.
            </p>
            <p>
              I hold an <strong>MCA in Software Engineering</strong> and am always eager to collaborate on innovative products 
              that combine cutting-edge technology with exceptional user experience.
            </p>
          </div>

          <div className="about-stats">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card glass-card">
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
