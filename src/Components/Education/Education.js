import './education.scss'
import { educationInformation } from './education-data'

function Education() {
  const renderEducation = () => {
    return educationInformation.map((instance, index) => {
      return (
        <section className="tile-ed" key={index}>
          <div className='date-left'>
            <h3>{instance.course}</h3>
            <p>{instance.date}</p>
          </div>
  
          <div className="timeline">
            <div className="timeline-dot"></div>
          </div>
  
          <div className='info info-right'>
            <h3>{instance.school}</h3>
            <p>{instance.detail}</p>
          </div>
        </section>
      )
    })
  }

  return (
    <div className="education">
      <h1>Education</h1>

      {renderEducation()}
    </div>
  )
}

export default Education