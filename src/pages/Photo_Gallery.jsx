import React from 'react'
import './PhotoGallery.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowLeft,faArrowRight} from '@fortawesome/free-solid-svg-icons';
import './footer'
export const Photo_Gallery = () => {
   const images = [
    { id: 1, alt: "Nature", src: "../assets/images/gallery_1.jpg" },
    { id: 1, alt: "Nature", src: "../assets/images/gallery_1.jpg" },
    { id: 2, alt: "Mountains", src: "../assets/images/gallery_2.jpg" },
    { id: 3, alt: "Ocean", src: "../assets/images/gallery_3.jpg" },
    { id: 4, alt: "Ocean", src: "../assets/images/gallery_4.jpg" },
    { id: 5, alt: "Ocean", src: "../assets/images/gallery_5.jpg" },
    { id: 6, alt: "Ocean", src: "../assets/images/gallery_6.jpg" },
    { id: 7, alt: "Ocean", src: "../assets/images/gallery_7.jpg" },
    { id: 8, alt: "Ocean", src: "../assets/images/gallery_8.jpg" },
    { id: 9, alt: "Ocean", src: "../assets/images/gallery_9.jpg" }
    

  ];
  return (
   
    <div className="photo-gallery">
      <div className='header'>
      <h1 className='first_header'>Photo </h1>
      <h1>Gallery</h1>
      </div><br/>
      <div className="gallery-grid">
        {images.map((image) => (
          <div key={image.id} className="gallery-item">
            <img 
              src={image.src} 
              alt={image.alt}
              className="gallery-image"
            />
          </div>
        ))}
      </div>
     
      <button className="icon-btn">
                    <FontAwesomeIcon icon={faArrowLeft} />
                  </button>
                  <button className="icon-btn">
                    <FontAwesomeIcon icon={faArrowRight} />
                  </button>
                 
     
    </div>
  )
}


