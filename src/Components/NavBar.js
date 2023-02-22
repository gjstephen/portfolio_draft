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
            to='/'
          >
            Home
          </NavLink>
        </li>
        <li>About me</li>
        <li>
          <NavLink 
            className='nav-link' 
            to='/experience'
          >
            Work Experience
          </NavLink>
        </li>
        <li>
          <NavLink 
            className='nav-link' 
            to='/education'
          >
            Education
          </NavLink>
        </li>
        <li>
          <NavLink 
            className='nav-link' 
            to='/projects'
          >
            Projects
          </NavLink>
        </li>
        <li>Resume</li>
        <li>
          <NavLink 
            className='nav-link' 
            to='/contact-me'
          >
            Contact Me
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}


export default NavBar