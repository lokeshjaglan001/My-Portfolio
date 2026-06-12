import React from 'react'

export default function Projects() {
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
          My Projects
        </h1>

        <div className="row d-flex justify-content-center">

          {/* Calculator */}
          <div
            className="card p-3 m-3"
            style={{
              width: '18rem',
              backgroundColor: 'var(--color-2)',
              color: 'var(--color-3)'
            }}
          >
            <h2
              className='mb-4 text-center'
              style={{
                color: 'var(--color-4)',
                fontWeight: 700
              }}
            >
              Calculator
            </h2>

            <p>
              A simple calculator built using HTML, CSS, and JavaScript.
              This project was created to practice my skills in JavaScript
              and DOM manipulation. The calculator can perform basic
              arithmetic operations and has a clean and user-friendly
              interface.
            </p>

            <div className="d-flex justify-content-center">
              <a
                href='https://github.com/lokeshjaglan001/Calculator'
                target='_blank'
                rel='noreferrer'
                style={{
                  color: 'var(--color-2)',
                  backgroundColor: 'var(--color-1)'
                }}
                className='col-md-8 btn'
              >
                GitHub
              </a>
            </div>
          </div>

          {/* Portfolio Website */}
          <div
            className="card p-3 m-3"
            style={{
              width: '18rem',
              backgroundColor: 'var(--color-2)',
              color: 'var(--color-3)'
            }}
          >
            <h2
              className='mb-4 text-center'
              style={{
                color: 'var(--color-4)',
                fontWeight: 700
              }}
            >
              Portfolio Website
            </h2>

            <p>
              My personal portfolio website built using React. This
              project showcases my skills, projects, and contact
              information. I designed and developed this website from
              scratch to highlight my work and provide a platform for
              others to connect with me.
            </p>

            <div className="d-flex justify-content-center">
              <a
                href='https://github.com/lokeshjaglan001/My-Portfolio'
                target='_blank'
                rel='noreferrer'
                style={{
                  color: 'var(--color-2)',
                  backgroundColor: 'var(--color-1)'
                }}
                className='col-md-8 btn'
              >
                GitHub
              </a>
            </div>
          </div>

          {/* To Do List App */}
          <div
            className="card p-3 m-3"
            style={{
              width: '18rem',
              backgroundColor: 'var(--color-2)',
              color: 'var(--color-3)'
            }}
          >
            <h2
              className='mb-4 text-center'
              style={{
                color: 'var(--color-4)',
                fontWeight: 700
              }}
            >
              To Do List App
            </h2>

            <p>
              SimpleToDo is a minimalist to-do list web application
              built using HTML, CSS, and JavaScript. It allows users
              to efficiently manage tasks by adding, deleting,
              marking as completed or incomplete, and filtering tasks
              based on their status.
            </p>

            <div className="d-flex justify-content-center">
              <a
                href='https://github.com/lokeshjaglan001/To-Do-List-App'
                target='_blank'
                rel='noreferrer'
                style={{
                  color: 'var(--color-2)',
                  backgroundColor: 'var(--color-1)'
                }}
                className='col-md-8 btn'
              >
                GitHub
              </a>
            </div>
          </div>

          {/* AI Social Media Automation Platform */}
          <div
            className="card p-3 m-3"
            style={{
              width: '18rem',
              backgroundColor: 'var(--color-2)',
              color: 'var(--color-3)'
            }}
          >
            <h2
              className='mb-4 text-center'
              style={{
                color: 'var(--color-4)',
                fontWeight: 700
              }}
            >
              AI Social Media Automation
            </h2>

            <p>
              Developed an AI-powered platform that automates social
              media content posting workflows using React.js,
              Express.js, MySQL, and Tailwind CSS with secure
              authentication and scalable architecture.
            </p>

            <div className="d-flex justify-content-center gap-2 flex-wrap">
              <a
                href='https://github.com/lokeshjaglan001/Wornomous-AI-Post-Creator-Platform'
                target='_blank'
                rel='noreferrer'
                style={{
                  color: 'var(--color-2)',
                  backgroundColor: 'var(--color-1)'
                }}
                className='col-md-8 btn'
              >
                GitHub
              </a>
            </div>
          </div>

          {/* Student Management System */}
          <div
            className="card p-3 m-3"
            style={{
              width: '18rem',
              backgroundColor: 'var(--color-2)',
              color: 'var(--color-3)'
            }}
          >
            <h2
              className='mb-4 text-center'
              style={{
                color: 'var(--color-4)',
                fontWeight: 700
              }}
            >
              Student Management System
            </h2>

            <p>
              Built a complete student management platform featuring
              geolocation-based attendance tracking, role-based
              authentication, announcements, document sharing, and
              real-time attendance monitoring.
            </p>

            <div className="d-flex justify-content-center gap-2 flex-wrap">
              <a
                href='https://github.com/lokeshjaglan001/student-management-system'
                target='_blank'
                rel='noreferrer'
                style={{
                  color: 'var(--color-2)',
                  backgroundColor: 'var(--color-1)'
                }}
                className='col-md-8 btn'
              >
                GitHub
              </a>
            </div>
          </div>

          {/* Vortex */}
          <div
            className="card p-4 m-3"
            style={{
              width: '20rem',
              backgroundColor: 'var(--color-2)',
              color: 'var(--color-3)',
              borderRadius: '6px',
              border: 'none',
              boxShadow: '0 5px 15px rgba(0,0,0,0.2)'
            }}
          >

            <h2
              className='mb-4 text-center'
              style={{
                color: 'var(--color-4)',
                fontWeight: 700
              }}
            >
              Vortex
            </h2>

            <p style={{ lineHeight: '1.8' }}>
              Vortex is an AI platform currently under development
              where users can bring their own AI API keys and continue
              using the platform seamlessly. It supports multiple AI
              models including Gemini, OpenAI, Claude, and Grok while
              offering advanced chat interface customization and theme
              personalization features.
            </p>

            <div className="d-flex justify-content-center gap-2 flex-wrap mt-3">

              <a
                href='https://github.com/lokeshjaglan001/Vortex'
                target='_blank'
                rel='noreferrer'
                style={{
                  color: 'var(--color-2)',
                  backgroundColor: 'var(--color-1)',
                  borderRadius: '10px'
                }}
                className='btn px-4 py-2 col-md-8'
              >
                GitHub
              </a>

              <button
                style={{
                  color: 'black',
                  backgroundColor: '#3654FF',
                  borderRadius: '10px',
                  border: 'none',
                }}
                className='btn px-3 py-2'
              >
                Under Development
              </button>

            </div>

          </div>

          {/* Polymarket Prediction Platform */}
          <div
            className="card p-4 m-3"
            style={{
              width: '20rem',
              backgroundColor: 'var(--color-2)',
              color: 'var(--color-3)',
              borderRadius: '6px',
              border: 'none',
              boxShadow: '0 5px 15px rgba(0,0,0,0.2)'
            }}
          >

            <h2
              className='mb-4 text-center'
              style={{
                color: 'var(--color-4)',
                fontWeight: 700
              }}
            >
              Polymarket Platform
            </h2>

            <p style={{ lineHeight: '1.8' }}>
              A decentralized prediction market platform under development
              that enables users to trade on real-world events.
              Built using Next.js, NestJS, PostgreSQL, Redis,
              Socket.IO, BullMQ, and Solidity smart contracts
              with real-time trading and market settlement
              capabilities.
            </p>

            <div className="d-flex justify-content-center gap-2 flex-wrap mt-3">

              <button
                style={{
                  color: 'black',
                  backgroundColor: '#3654FF',
                  borderRadius: '10px',
                  border: 'none'
                }}
                className='btn px-3 py-2'
              >
                Under Development
              </button>

            </div>

          </div>
        </div>
      </div>
    </>
  )
}