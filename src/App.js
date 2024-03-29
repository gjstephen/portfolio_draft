import './App.css';
import { Routes, Route } from 'react-router-dom'

import NavBar from  './Components/NavBar'
import AboutMe from './Components/AboutMe'
import Experience from './Components/Experience/Experience'
import Education from './Components/Education/Education'
import Projects from './Components/Projects/Projects'
import Resume from './Components/Resume'
import ContactMe from './Components/ContactMe'

import './style.scss'

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>

      <main>
        {/* <AboutMe />
        <Projects />
        <Experience />
        <Education /> */}

        <Routes>
          <Route path="/portfolio" element={<AboutMe />}/>
          <Route path="/portfolio/experience" element={<Experience />}/>
          <Route path="/portfolio/education" element={<Education />}/>
          <Route path="/portfolio/projects" element={<Projects />}/>
          <Route path="/portfolio/resume" element={<Resume />}/>
          <Route path="/portfolio/contact-me" element={<ContactMe />}/>
        </Routes>
        
      </main>
    </div>
  );
}

export default App;
