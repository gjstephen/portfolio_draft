import './style/navBar.scss'
import { NavLink } from 'react-router-dom'

let scrollLock = false

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
        <li>About me</li>
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
        <li>Resume</li>
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