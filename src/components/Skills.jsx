import { 
  SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiNodedotjs, 
  SiMongodb, SiPostgresql, SiMysql, SiRedux, SiHtml5, SiCss3,
  SiAmazonwebservices, SiGooglecloud, SiVercel, SiNetlify, SiDocker,
  SiGit, SiGithub, SiFigma, SiPostman, SiJest
} from 'react-icons/si'
import './Skills.css'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'JavaScript', icon: <SiJavascript />, color: '#F7DF1E' },
        { name: 'TypeScript', icon: <SiTypescript />, color: '#3178C6' },
        { name: 'React', icon: <SiReact />, color: '#61DAFB' },
        { name: 'Next.js', icon: <SiNextdotjs />, color: '#000000' },
        { name: 'Redux', icon: <SiRedux />, color: '#764ABC' },
        { name: 'HTML5', icon: <SiHtml5 />, color: '#E34F26' },
        { name: 'CSS3', icon: <SiCss3 />, color: '#1572B6' },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', icon: <SiNodedotjs />, color: '#339933' },
        { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
        { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#4169E1' },
        { name: 'MySQL', icon: <SiMysql />, color: '#4479A1' },
      ],
    },
    {
      title: 'Cloud & DevOps',
      skills: [
        { name: 'AWS', icon: <SiAmazonwebservices />, color: '#FF9900' },
        { name: 'Google Cloud', icon: <SiGooglecloud />, color: '#4285F4' },
        { name: 'Vercel', icon: <SiVercel />, color: '#000000' },
        { name: 'Netlify', icon: <SiNetlify />, color: '#00C7B7' },
        { name: 'Docker', icon: <SiDocker />, color: '#2496ED' },
      ],
    },
    {
      title: 'Tools',
      skills: [
        { name: 'Git', icon: <SiGit />, color: '#F05032' },
        { name: 'GitHub', icon: <SiGithub />, color: '#181717' },
        { name: 'Figma', icon: <SiFigma />, color: '#F24E1E' },
        { name: 'Postman', icon: <SiPostman />, color: '#FF6C37' },
        { name: 'Jest', icon: <SiJest />, color: '#C21325' },
      ],
    },
  ]

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-title">
          <h2>Skills & <span className="gradient-text">Technologies</span></h2>
          <p>Tools I work with</p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item glass-card">
                    <div className="skill-icon" style={{ color: skill.color }}>
                      {skill.icon}
                    </div>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
