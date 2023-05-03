import { educationInformation } from './Education/education-data'
// import './style/education.scss'

function Resume() {
  const renderEducation = () => {
    return educationInformation.map((instance, index) => {
      return (
        <section className="tile-ed" key={index}>

          <div className='info info-right'>
            <h3>{instance.course}</h3>
            <h4>{instance.school}</h4>
            <p>{instance.date}</p>
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

// function Resume() {
//   return (
//     <div className="resume">
//       <h1>Resume</h1>

//       <embed src='/gstephen-resume.pdf'></embed>
//     </div>
//   )
// }

export default Resume