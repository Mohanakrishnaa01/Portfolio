import './Navbar.css'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import linkedinIcon from '../../assets/icons/linkedin.png'
import phoneIcon from '../../assets/icons/phone.svg'
import mailIcon from '../../assets/icons/mail.svg'
import lightIcon from '../../assets/icons/light.svg'
import darkIcon from '../../assets/icons/dark.svg'
import hamburgerIcon from '../../assets/icons/hamburger.png'
import { useTheme } from '../contexts/ThemeContext'

function Navbar() {
  const { isDarkMode, toggleTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.mobile-menu') && !event.target.closest('.hamburger-menu')) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isMenuOpen])

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <button className="hamburger-menu" onClick={toggleMenu} aria-label="Toggle menu">
          <img src={hamburgerIcon} alt="Menu" className="hamburger-icon" />
        </button>

        <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
          <div className="mobile-nav-links">
            <Link to="/" className="nav-link" onClick={toggleMenu}>Home</Link>
            <Link to="/projects" className="nav-link" onClick={toggleMenu}>Projects</Link>
            <Link to="/skills" className="nav-link" onClick={toggleMenu}>Skills</Link>
          </div>
          <div className="mobile-social-links">
            <a href="https://www.linkedin.com/in/mohanakrishnaa-r/" target="_blank" rel="noopener noreferrer" className="icon-link">
              <img src={linkedinIcon} alt="LinkedIn" className="nav-icon" />
              <span>LinkedIn</span>
            </a>
            <a href="tel:+6379689676" className="icon-link">
              <img src={phoneIcon} alt="Phone" className="nav-icon" />
              <span>Phone</span>
            </a>
            <a href="mailto:mohankrish112005@gmail.com" className="icon-link">
              <img src={mailIcon} alt="Email" className="nav-icon" />
              <span>Email</span>
            </a>
          </div>
        </div>
      </div>

      <div className="desktop-nav">
        <div className="navbar-content">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/projects" className="nav-link">Projects</Link>
          <Link to="/skills" className="nav-link">Skills</Link>
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
        </div>
      </div>

      <button onClick={toggleTheme} className="theme-toggle icon-link" aria-label="Toggle theme">
        <img 
          src={isDarkMode ? lightIcon : darkIcon} 
          alt={isDarkMode ? "Switch to light mode" : "Switch to dark mode"} 
          className="nav-icon theme-icon" 
        />
      </button>
    </nav>
  )
}

export default Navbar 