import './Skills.css'

function Skills() {
  const programmingLanguages = [
    { name: 'C', icon: '/icons/c.png' },
    { name: 'Java', icon: '/icons/java.png' },
    { name: 'Python', icon: '/icons/python.png' },
    { name: 'Ruby', icon: '/icons/ruby.png' },
    { name: 'JavaScript', icon: '/icons/java-script.png' },
    { name: 'SQL', icon: '/icons/sql.png' }
  ];

  const frameworks = [
    { name: 'Node.js', icon: '/icons/node-js.png' },
    { name: 'Express.js', icon: '/icons/express-js.png' },
    { name: 'React.js', icon: '/icons/react.png' }
  ];

  const tools = [
    { name: 'GitHub', icon: '/icons/github.png' },
    { name: 'Postman', icon: '/icons/Postman.png' },
    { name: 'MySQL', icon: '/icons/MySQL.png' }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-content">
        <h2>Worked On</h2>
        <div className="skills-grid">
          <div className="skills-left">
            <div className="skills-category">
              <h3>Programming Languages</h3>
              <div className="skills-list">
                {programmingLanguages.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <img src={skill.icon} alt={skill.name} />
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="skills-right">
            <div className="skills-category">
              <h3>Frameworks</h3>
              <div className="skills-list">
                {frameworks.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <img src={skill.icon} alt={skill.name} />
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="skills-category">
              <h3>Tools</h3>
              <div className="skills-list">
                {tools.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <img src={skill.icon} alt={skill.name} />
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills 