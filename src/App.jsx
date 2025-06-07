import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Projects from './components/Projects'
import Skills from './components/Skills'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Home />
      <Projects />
      <Skills />
    </div>
  )
}

export default App
