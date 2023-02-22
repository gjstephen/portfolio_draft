import './style/navBar.scss'
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <nav className="nav-bar">
      <ul className="nav-list"  >
        <li>
          <NavLink 
            className='nav-link'
            to='/portfolio/'
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink 
            className='nav-link' 
            to='/portfolio/experience'
          >
            Work Experience
          </NavLink>
        </li>
        <li>
          <NavLink 
            className='nav-link' 
            to='/portfolio/education'
          >
            Education
          </NavLink>
        </li>
        <li>
          <NavLink 
            className='nav-link' 
            to='/portfolio/projects'
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink 
            className='nav-link' 
            to='/portfolio/resume'
          >
            Resume
          </NavLink>
        </li>
        <li>
          <NavLink 
            className='nav-link' 
            to='/portfolio/contact-me'
          >
            Contact Me
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}


export default NavBar