import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot,faPhone} from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer style={{
      width:'1500px',
      height:'700px',
      textAlign: 'center',
      background: 'black',
      color:'white',
      marginTop: '20px'
    }}>
        <div className="column">
    <img src="../assets/images/logo_footer.png"/>
    </div>
   <div className="row">
     <div className="column">
      <p>Information</p>
      <p>Main</p>
      <p>Gallery</p>
      <p>Projects</p>
      <p>Certifications</p>
      <p>Contacts</p>
      </div>
      <div className="column">
<h2>Contacts</h2>
    <FontAwesomeIcon icon={faLocationDot} />
    <p>1234 Sample Street</p>
    <p>Austin Texas 78704</p>
   <FontAwesomeIcon icon={faPhone} />512.333.2222<br/>
   <FontAwesomeIcon icon={faEnvelope} />sampleemail@gmail.com<br/>
   </div>
</div>
 <h2>Social Media</h2> 
   
      <p>&copy; 2025 My Photo Gallery. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
