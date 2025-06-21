import React from 'react'
import './contact.css'
export const Contact = () => {
  return (
    <section className="contact-section">
        <h2 className="contact-title">Contact Us</h2>

        <div className="contact-content">
          <form className="contact-form">
            <input type="text" placeholder="Name" />
            <input type="tel" placeholder="Phone Number*" required />
            <input type="email" placeholder="E-mail*" required />
            <input type="text" placeholder="Interested In" />
            <textarea placeholder="Message*" required></textarea>
          </form>

          <div className="contact-image">
            <img src="../assets/images/contact_us.jpg" alt="Contact" />
          </div>
        </div>

        <button className="contact-button">SEND EMAIL →</button>
      </section>
  )
}
