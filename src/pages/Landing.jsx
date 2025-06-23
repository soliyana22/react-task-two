import React from 'react';
import './Landing.css';

export const Landing = () => {
  return (
    <div className="landing-page">
      <div className="container">
        {/* Header Section */}
        <div className="landing-header">
          <div className="landing-title">
            <p>PROJECT</p>
            <h1>Lorum</h1>
            <div className='arrow_btn'>
            <button className='arrow_1'>←</button>
            <button className='arrow_2'>→</button>
            </div>
          
              <div className='number_text'>
                <p>0 <br/>1</p>
                <p className='slash'>/</p>
                <p>02</p>
              </div>
          
          </div>
          <div className='landing_1'>
            <img src="../assets/images/Landing_1.jpg" alt="Landing header" />
          </div>
        </div>
         <div className='landing_btn_1'>
            
            <button>VIEW MORE → </button>
          </div>
        
        
        {/* About Section */}
        <div className="landing-about-section">
          <div className="landing-about-images">
            <div className="landing-about-col">
              <img src="../assets/images/Landing_3.jpg" alt="Thumbnail 1" className="landing-about-img" />
              <img src="../assets/images/Landing_4.jpg" alt="Thumbnail 2" className="landing-about-img landing-about-img_2" />
            </div>
            <div className="landing-about-col">
              <img src="../assets/images/Landing_2.jpg" alt="Thumbnail 3" className="landing-about-img_3" />
            </div>
          </div>

          <div className="landing-about-content">
            <h2 className="landing-about-title">About</h2>
            <p className="landing-about-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
              It has survived not only five centuries, but also the leap into electronic typesetting, 
              remaining essentially unchanged.
            </p>
            <button className="landing-about-btn">READ MORE →</button>
          </div>
        </div>
        
        {/* Mission Section */}
        <div className="landing-mission">
          <h2 className="landing-mission-title">Main Focus/Mission Statement</h2>
          <div className="landing-mission-points">
            <div className="landing-mission-point">
              <span className="landing-mission-number">1</span>
              <p className="landing-mission-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed efficitur, lectus et facilisis placerat.
              </p>
            </div>
            <div className="landing-mission-point">
              <span className="landing-mission-number">2</span>
              <p className="landing-mission-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed efficitur, lectus et facilisis placerat, magna mauris porttitor 
                tortor, a auctor est felis ut nisl.
              </p>
            </div>
          </div>
        </div>
        
     
        <section className="projects-section">
          <h2 className="projects-title">Our Projects</h2>

         
          <div className="projects-grid top-row">
            <div className="project-container">
              <img src="../assets/images/landing_new_2.png" alt="Sample Project" className="project-image" />
              <div className="overlay">
                <h3 className="overlay-title">Sample <br/>Project</h3>
                <button className="overlay-button">VIEW MORE →</button>
              </div>
            </div>

            <div className="project-container">
              <img src="../assets/images/landing_5.png" alt="Project 1" className="project-image" />
              <div className="overlay">
                <h3 className="overlay-title">Sample <br/>Project</h3>
                <button className="overlay-button">VIEW MORE →</button>
              </div>
            </div>
          </div>

         
          <div className="projects-grid bottom-row">
            <div className="project-container">
              <img src="../assets/images/landing_3_new.png" alt="Project 2" className="project-image" />
              <div className="overlay">
                <h3 className="overlay-title">Sample <br/>Project</h3>
                <button className="overlay-button">VIEW MORE →</button>
              </div>
              
            </div>
            <div className="project-container">
              <img src="../assets/images/landing_7.png" alt="Project 3" className="project-image" />
              <div className="overlay">
                <h3 className="overlay-title">Sample <br/>Project</h3>
                <button className="overlay-button">VIEW MORE →</button>
              </div>

            </div>
            <div className="project-container">
              <img src="../assets/images/landing_8.png" alt="Project 4" className="project-image" />
              <div className="overlay">
                <h3 className="overlay-title">Sample <br/>Project</h3>
                <button className="overlay-button">VIEW MORE →</button>
              </div>
            </div>
          </div>

          {/* Footer Button */}
          <div className="projects-footer">
            <button className="all-projects-button">ALL PROJECTS  →</button>
          </div>
        </section>
        
        {/* Contact Section */}
        <section className="contact-section">
          <div className='contact-container'>
          <p className="contact-title">Contact Us</p>
          <div className="contact-content">
            <form className="contact-form">
              <input type="text" placeholder="Name" />
              <input type="tel" placeholder="Phone Number*" required />
              <input type="email" placeholder="E-mail*" required />
              <input type="text" placeholder="Interested In" />
              <textarea placeholder="Message*" required></textarea>
              <button className="contact-button">SEND EMAIL →</button>
            </form>
            <div className="contact-image">
              <img src="../assets/images/contact_us.jpg" alt="Contact" />
            </div>
          </div>
          </div>
        </section>
      </div>
 </div>
  );
};