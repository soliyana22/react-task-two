import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faEnvelope, 
  faLocationDot,
  faPhone
} from '@fortawesome/free-solid-svg-icons';
import { 
  faFacebook, 
  faTwitter, 
  faLinkedin,
  faPinterest 
} from '@fortawesome/free-brands-svg-icons';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <div className="logo-container">
            <img 
              src="../assets/images/logo_footer.png" 
              alt="Company Logo" 
              className="footer-logo"
            />
          </div>
          <div className="copyright">
            © 2021 All Rights Reserved
          </div>
        </div>
        
        <div className="footer-column">
          <h2 className="footer-heading">INFORMATION</h2>
          <ul className="footer-links">
            <li>Main</li>
            <li>Gallery</li>
            <li>Projects</li>
            <li>Certifications</li>
            <li>Contacts</li>
          </ul>
        </div>
        
        <div className="footer-column">
          <h2 className="footer-heading">CONTACTS</h2>
          <div className="contact-info">
            <div className="contact-item">
              <FontAwesomeIcon icon={faLocationDot} className="contact-icon" />
              <div>
                <p>1234 Sample Street</p>
                <p>Austin Texas 78704</p>
              </div>
            </div>
            <div className="contact-item">
              <FontAwesomeIcon icon={faPhone} className="contact-icon" />
              <p>512.333.2222</p>
            </div>
            <div className="contact-item">
              <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
              <p>sampleemail@gmail.com</p>
            </div>
          </div>
        </div>
        
        <div className="footer-column">
          <h2 className="footer-heading">SOCIAL MEDIA</h2>
          <div className="social-icons">
            <FontAwesomeIcon icon={faFacebook} className="social-icon" />
            <FontAwesomeIcon icon={faTwitter} className="social-icon" />
            <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
            <FontAwesomeIcon icon={faPinterest} className="social-icon" />
          </div>
          
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;