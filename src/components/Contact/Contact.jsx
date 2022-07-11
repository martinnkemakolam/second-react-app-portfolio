import React from 'react'
import './Contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
const Contact = () => {
  return (
    <section id="Contact">
      <h5>Get in touch</h5>
      <h3>Contact me</h3>
      <div className="contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className="contact_icon" />
            <h4>Email</h4>
            <h5>nkemakolam.martin@gmail.com</h5>
            <a href="mailto:nkemakolam.martin@gmail.com">Send a message</a>
          </article>
          <article className="contact_option">
            <RiMessengerLine className="contact_icon" />
            <h4>Instagram</h4>
            <h5>Martin Nkemakolam</h5>
            <a href="https://www.instagram.com/direct/t/340282366841710300949128210877975079482">Send a message</a>
          </article>
          <article className="contact_option">
            <BsWhatsapp className="contact_icon" />
            <h4>Whatsapp</h4>
            <h5>08065443364</h5>
            <a href="https://api.whatsapp.com/send?phone=+2348065443364">Send a message</a>
          </article>
        </div>
        <form action="">
          <input type="text" name='name' placeholder='enter your name' required />
          <input type="email" name="email" placeholder='enter email' required />
          <textarea name="message" rows="10" placeholder='enter your message' required></textarea>
          <button type="submit" className='btn-primary'>send</button>
        </form>
      </div>
    </section>
  )
}

export default Contact