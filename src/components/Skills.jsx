import './Skills.css'

function Skills() {
  const programmingLanguages = ['C', 'Java', 'Python', 'Ruby', 'JavaScript', 'SQL'];
  const frameworks = ['Node.js', 'Express.js', 'React.js', 'Next.js'];
  const tools = ['Git', 'GitHub', 'Postman', 'MySQL'];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-content">
        <h2>Worked On</h2>
        <div className="skills-grid">
          <div className="skills-category">
            <h3>Programming Languages</h3>
            <div className="skills-list">
              {programmingLanguages.map((skill, index) => (
                <div key={index} className="skill-item">
                  {skill}
                </div>
              ))}
            </div>
          </div>

          <div className="skills-category">
            <h3>Frameworks</h3>
            <div className="skills-list">
              {frameworks.map((skill, index) => (
                <div key={index} className="skill-item">
                  {skill}
                </div>
              ))}
            </div>
          </div>

          <div className="skills-category">
            <h3>Tools</h3>
            <div className="skills-list">
              {tools.map((skill, index) => (
                <div key={index} className="skill-item">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills 