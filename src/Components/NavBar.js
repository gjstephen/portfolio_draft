import './style/navBar.scss'
import hamburger from '../images/hamburger.svg'
import { NavLink } from 'react-router-dom'
// import homeIcon from '../icons/home-icon.png'
import homeIcon from '../icons/home-icon.svg'
import experienceIcon from '../icons/experience-icon.svg'

function NavBar() {
  return (
    <nav className="nav-bar">
      <section className='mobile-nav'>
        <h2><NavLink 
            className='home-btn'
            to='/portfolio/'
          >
            Home
          </NavLink></h2>
        <div className='menu-btn'>
          <svg width="24" height="17" viewBox="0 0 24 17" aria-label="" class="svg-replaced" shape-rendering="geometricPrecision">
            <path d="M0 0h24v3H0zm0 7h24v3H0zm0 7h24v3H0z" fill-rule="evenodd"></path>
          </svg>
          <h2>Menu</h2>
        </div>
      </section>

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

      <section className="bottom-nav">
        <ul>
          <li>
            <NavLink 
              className='nav-link'
              to='/portfolio/'
            >
              <img src={homeIcon} alt="home-icon" className="nav-icon" />
              <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink 
              className='nav-link' 
              to='/portfolio/experience'
            >
              <img src={experienceIcon} alt="home-icon" className="nav-icon exp-icon" />
              <span>Experience</span>
            </NavLink>
          </li>
          <li>
            <NavLink 
              className='nav-link' 
              to='/portfolio/education'
            >
            <img src={homeIcon} alt="home-icon" className="nav-icon" />
              <span>Education</span>
            </NavLink>
          </li>
          <li>
            <NavLink 
              className='nav-link' 
              to='/portfolio/projects'
            >
              <img src={homeIcon} alt="home-icon" className="nav-icon" />
              <span>Projects</span>
            </NavLink>
          </li>
        </ul>
      </section>
    </nav>
  )
}


export default NavBar