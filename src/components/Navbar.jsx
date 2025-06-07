import './Navbar.css'
import linkedinIcon from '../../assets/icons/linkedin.png'
import phoneIcon from '../../assets/icons/phone.svg'
import mailIcon from '../../assets/icons/mail.svg'
import lightIcon from '../../assets/icons/light.svg'
import darkIcon from '../../assets/icons/dark.svg'
import { useTheme } from '../contexts/ThemeContext'

function Navbar() {
  const { isDarkMode, toggleTheme } = useTheme()

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <a href="#home" className="nav-link">Home</a>
        <a href="#projects" className="nav-link">Projects</a>
        <a href="#skills" className="nav-link">Skills</a>
      </div>
      <div className="icon-content">
        <a href="https://www.linkedin.com/in/mohanakrishnaa-r/" target="_blank" rel="noopener noreferrer" className="icon-link">
          <img src={linkedinIcon} alt="LinkedIn" className="nav-icon" />
        </a>
        <a href="tel:+6379689676" className="icon-link">
          <img src={phoneIcon} alt="Phone" className="nav-icon" />
        </a>
        <a href="mailto:mohankrish112005@gmail.com" className="icon-link">
          <img src={mailIcon} alt="Email" className="nav-icon" />
        </a>
        
        <div className="theme-separator">|</div>
        
        <button onClick={toggleTheme} className="theme-toggle icon-link" aria-label="Toggle theme">
          <img 
            src={isDarkMode ? lightIcon : darkIcon} 
            alt={isDarkMode ? "Switch to light mode" : "Switch to dark mode"} 
            className="nav-icon theme-icon" 
          />
        </button>
      </div>
    </nav>
  )
}

export default Navbar 