import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'

export default function Contact() {

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_5jawloi',
        'template_r624oq9',
        form.current,
        'PsinX7dkFidYSzonG'
      )
      .then(
        () => {
          alert('Message Sent Successfully!')
          e.target.reset()
        },
        (error) => {
          alert('Failed to send message!')
          console.log(error.text)
        }
      )
  }

  return (
    <>
      <div
        className="content p-3 m-2"
        style={{
          backgroundColor: 'var(--color-1)',
          boxSizing: 'border-box'
        }}
      >

        <h1
          className='text-center mb-5'
          style={{
            fontSize: '70px',
            fontWeight: '600',
            color: 'var(--color-2)'
          }}
        >
          Contact
        </h1>

        {/* SOCIAL LINKS */}
        <div className="row d-flex justify-content-center gap-4 col-md-10 m-auto mb-5">

          <a
            href='https://github.com/lokeshjaglan001'
            target='_blank'
            rel='noreferrer'
            className="contact-icon"
          >
            <i className="fa-brands fa-github"></i>
          </a>

          <a
            href='https://linkedin.com/in/lokesh-jaglan'
            target='_blank'
            rel='noreferrer'
            className="contact-icon"
          >
            <i className="fa-brands fa-linkedin-in"></i>
          </a>

          <a
            href='https://www.instagram.com/lokeshjaglan01'
            target='_blank'
            rel='noreferrer'
            className="contact-icon"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>

          <a
            href='mailto:lokeshjaglan01@gmail.com'
            className="contact-icon"
          >
            <i className="fa-solid fa-envelope"></i>
          </a>

        </div>

        {/* CONTACT FORM */}
        <div
          className="col-md-7 m-auto p-4"
          style={{
            backgroundColor: 'var(--color-2)',
            borderRadius: '20px'
          }}
        >

          <form ref={form} onSubmit={sendEmail}>

            <div className="mb-4">
              <label
                className='mb-2 fw-bold'
                style={{ color: 'var(--color-3)' }}
              >
                Full Name
              </label>

              <input
                type="text"
                name="user_name"
                required
                placeholder='Enter your full name'
                className='form-control'
                style={{
                  backgroundColor: 'var(--color-1)',
                  color: 'var(--color-2)',
                  border: 'none',
                  padding: '12px'
                }}
              />
            </div>

            <div className="mb-4">
              <label
                className='mb-2 fw-bold'
                style={{ color: 'var(--color-3)' }}
              >
                Email
              </label>

              <input
                type="email"
                name="user_email"
                required
                placeholder='Enter your email'
                className='form-control'
                style={{
                  backgroundColor: 'var(--color-1)',
                  color: 'var(--color-2)',
                  border: 'none',
                  padding: '12px'
                }}
              />
            </div>

            <div className="mb-4">
              <label
                className='mb-2 fw-bold'
                style={{ color: 'var(--color-3)' }}
              >
                Message
              </label>

              <textarea
                name="message"
                rows="6"
                required
                placeholder='Write your message'
                className='form-control'
                style={{
                  backgroundColor: 'var(--color-1)',
                  color: 'var(--color-2)',
                  border: 'none',
                  padding: '12px',
                  resize: 'none'
                }}
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type='submit'
                className='btn px-5 py-2'
                style={{
                  backgroundColor: 'var(--color-1)',
                  color: 'var(--color-2)',
                  fontWeight: '600',
                  borderRadius: '10px'
                }}
              >
                Send Message 
              </button>
            </div>

          </form>

        </div>

      </div>
    </>
  )
}