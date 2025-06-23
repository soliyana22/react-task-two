import React from 'react'
import './PhotoGallery.css';


export const Photo_Gallery = () => {
   const images = [
    { id: 1, alt: "Nature", src: "../assets/images/gallery_0.png" },
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
      <h1 className="first_header">Photo</h1><br/>
      <h1 className="second_header">Gallery</h1>
      </div>
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
    </div>
  )
}


