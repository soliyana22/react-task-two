import React from 'react'
import './Our_project.css'
export const Our_project = () => {
  return (
    <section className="our-projects-section">
      <h2 className="our-projects-title"><span>Our<br/></span> Projects</h2>

      <div className="project-item">
        <img src="../assets/images/project_1.png" alt="Project 1" className="project-img" />
        <div className="project-info">
          <h3>Sample Project</h3>
          <p>
            Lorem ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
          <button className="view-more-btn">View More →</button>
        </div>
      </div>

      <div className="project-item">
        <img src="../assets/images/project_2.png" alt="Project 2" className="project-img" />
        <div className="project-info">
          <h3>Sample Project 2</h3>
          <p>
            Lorem ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
          <button className="view-more-btn">View More →</button>
        </div>
      </div>

      <div className="project-item">
        <img src="../assets/images/project_3.png" alt="Project 3" className="project-img" />
        <div className="project-info">
          <h3>Sample Project 3</h3>
          <p>
            Lorem ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
          <button className="view-more-btn">View More →</button>
        </div>
      </div>

      <div className='lower_gallery'>
      <div className='number_text'>
                <p>0 <br/>1</p>
                <p className='slash'>/</p>
                <p>05</p>
              </div>    
      <div className='arrow_btn'>
            <button className='arrow_1'>←</button>
            <button className='arrow_2'>→</button>
            </div>
            
     
     </div>
    </section>
  )
}
