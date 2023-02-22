import './style/experience.scss'

function Experience() {
  return (
    <div className="experience">
      <h1>Work Experience</h1>

      <section className="tile">
        <div className='tile-left'>
          <h3>Instructor Associate</h3>
          <p>February 2023 - Present</p>
        </div>

        <div className="timeline">
          <div className="timeline-dot"></div>
        </div>

        <div className='info tile-right'>
          <h3>General Assembley</h3>
          <p>Assisted with the planning and delivery content for the Front End Web Development part-time course with General Assembley. Providing individual feedback and assistance to students.</p>
        </div>
      </section>

      <section className="tile">
        <div className='tile-left'>
          <h3>Assistant Manager</h3>
          <p>November 2021 - May 2022</p>
        </div>

        <div className="timeline">
          <div className="timeline-dot"></div>
        </div>

        <div className='info tile-right'>
          <h3>EY</h3>
          <p>During my time at EY I was a part of the Financial Accounting and Advisory Services (FAAS) team. I worked with private and public entity clients on various Mergers and Acquisitions (M&A), project management engagements, financial statement preparations, audit readiness projects, and other ad hoc servies. I provided value-add beyond the expectations of my projects, and was recognised with an internal Gold Award for doing so.</p>
        </div>
      </section>

      <section className="tile">
        <div className='tile-left'>
          <h3>Senior Auditor</h3>
          <p>January 2018 - November 2021</p>
        </div>

        <div className="timeline">
          <div className="timeline-dot"></div>
        </div>

        <div className='info tile-right'>
          <h3>BDO</h3>
          <p>I started at BDO in the Audit graduate program where I gained experience auditing all areas of a set of financial statements, across a wide range of industries. As a Senior Auditor my skillset grew to include managing teams of up to 5 members, creating team budgets and work allocations, and operating as the key client contact across a whole engagement. I was also a part of both the Firm Social Club Committe and the Audit Team Engagement Committee.</p>
        </div>
      </section>
    </div>
  )
}

export default Experience