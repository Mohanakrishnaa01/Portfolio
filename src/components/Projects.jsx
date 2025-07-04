import './Projects.css'

const projects = [
  {
    title: "Airport Management System",
    description: "A comprehensive SQL database for efficient management of airplanes and technicians, including detailed technician profiles and maintenance records",
    techStack: ["SQL", "HTML", "CSS", "Django", "Python"],
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    githubLink: "https://github.com/yourusername/airport-management"
  },
  {
    title: "Bridge Game",
    description: "Bridge game using advanced algorithms and data structures, featuring bot play and real-time scoring and using Binomial heap, Hash Table, Binary search tree, and Fisher-Yates algorithm.",
    techStack: ["HTML", "CSS", "JS", "Node.js", "Express.js"],
    image: "https://images.unsplash.com/photo-1611996575749-79a3a250f948?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    githubLink: "https://github.com/yourusername/bridge-game"
  },
  {
    title: "Sleep Stage Classification Using EEG Signals",
    description: "Implemented a system to classify sleep stages using the EEG (C4-M1) channel.– Extracted features using Continuous Wavelet Transform (CWT) and applied bandpass filtering to reduce noise",
    techStack: ["Python", "MNE", "Stacking classifier", "PCA"],
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    githubLink: "https://github.com/yourusername/sleep-classification"
  },
  {
    title: "Fraudulent Credit Card Transaction Detection",
    description: "Developed a model using SMOTE and PCA for feature engineering. Tuned Random Forest, Decision Tree, XGBoost with GridSearchCV, enhanced performance using voting and stacking ensembles",
    techStack: ["Python", "HP tuning", "Voting", "Stacking"],
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    githubLink: "https://github.com/yourusername/fraud-detection"
  }
];

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-content">
        <h2>My Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-stack">
                {project.techStack.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-item">{tech}</span>
                ))}
              </div>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="view-details">
                View Details
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects 