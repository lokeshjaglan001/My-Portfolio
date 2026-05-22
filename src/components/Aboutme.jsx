import React from 'react'

export default function Aboutme() {
  return (
    <>
      <div
        className="content about p-4 m-2"
        style={{
          color: 'var(--color-2)',
          backgroundColor: 'var(--color-1)'
        }}
      >

        <div className="row align-items-center">

          {/* IMAGE SECTION */}
          <div
            className="col-md-4 text-center mb-4"
            style={{ boxSizing: 'border-box' }}
          >
            <img
              className='img-fluid'
              style={{
                width: '280px',
                height: '280px',
                objectFit: 'cover',
                borderRadius: '25px',
                outline: '7px solid var(--color-2)',
                border: '7px solid var(--color-1)',
                boxShadow: '0 5px 15px rgba(0,0,0,0.3)'
              }}
              src="https://avatars.githubusercontent.com/u/165664251?v=4"
              alt="Lokesh Jaglan"
            />
          </div>

          {/* TEXT SECTION */}
          <div className="col-md-8">

            <h1
              className='mb-4'
              style={{
                fontSize: '55px',
                fontWeight: '600',
                color: 'var(--color-2)'
              }}
            >
              About Me
            </h1>

            <p
              style={{
                fontSize: '20px',
                lineHeight: '1.9',
                color: 'var(--color-2)'
              }}
            >
              I'm <span style={{color:'var(--color-4)',fontWeight:'700'}}>Lokesh Jaglan</span>,
              a passionate Full Stack Developer from Haryana, India with
              over 2 years of hands-on experience building modern and
              scalable web applications.

              I specialize in developing responsive frontend interfaces,
              scalable backend systems, REST APIs, authentication systems,
              and performance-oriented full stack applications using modern
              technologies like React.js, Next.js, Node.js, Express.js,
              Django, MongoDB, PostgreSQL, and Tailwind CSS.

              I enjoy solving real-world problems through clean,
              maintainable, and efficient code while continuously learning
              new technologies and improving my development skills.
            </p>

            {/* CARDS */}
            <div className="row mt-5">

              {/* HOBBIES */}
              <div className="col-md-6 mb-4">
                <div
                  className="card p-4 h-100"
                  style={{
                    backgroundColor: 'var(--color-2)',
                    borderRadius: '18px',
                    border: 'none',
                    boxShadow: '0 5px 15px rgba(0,0,0,0.2)'
                  }}
                >

                  <h3
                    className='mb-4 text-center'
                    style={{
                      color: 'var(--color-4)',
                      fontWeight: 700
                    }}
                  >
                    Hobbies
                  </h3>

                  <ul
                    style={{
                      color: 'var(--color-3)',
                      fontSize: '18px',
                      lineHeight: '2'
                    }}
                  >
                    <li>Coding & Building Projects</li>
                    <li>Exploring New Technologies</li>
                    <li>UI/UX Designing</li>
                    <li>Listening to Music</li>
                    <li>Reading Tech Articles</li>
                  </ul>

                </div>
              </div>

              {/* CURRENTLY EXPLORING */}
              <div className="col-md-6 mb-4">
                <div
                  className="card p-4 h-100"
                  style={{
                    backgroundColor: 'var(--color-2)',
                    borderRadius: '18px',
                    border: 'none',
                    boxShadow: '0 5px 15px rgba(0,0,0,0.2)'
                  }}
                >

                  <h3
                    className='mb-4 text-center'
                    style={{
                      color: 'var(--color-4)',
                      fontWeight: 700
                    }}
                  >
                    Currently Exploring
                  </h3>

                  <ul
                    style={{
                      color: 'var(--color-3)',
                      fontSize: '18px',
                      lineHeight: '2'
                    }}
                  >
                    <li>Advanced Full Stack Development</li>
                    <li>System Design & Backend Architecture</li>
                    <li>AI Integrated Applications</li>
                    <li>Docker & Deployment Workflows</li>
                    <li>Performance Optimization</li>
                  </ul>

                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </>
  )
}