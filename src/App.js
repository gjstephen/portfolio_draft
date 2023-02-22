import './App.css';
import { Routes, Route } from 'react-router-dom'

import NavBar from  './Components/NavBar'
import AboutMe from './Components/AboutMe'
import Experience from './Components/Experience'
import Education from './Components/Education'
import Projects from './Components/Projects'
import ContactMe from './Components/ContactMe'

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>

      <main>
        <Routes>
          <Route path="/portfolio" element={<AboutMe />}/>
          <Route path="/portfolio/experience" element={<Experience />}/>
          <Route path="/portfolio/education" element={<Education />}/>
          <Route path="/portfolio/projects" element={<Projects />}/>
          <Route path="/portfolio/contact-me" element={<ContactMe />}/>
        </Routes>
        
      </main>
    </div>
  );
}

export default App;
