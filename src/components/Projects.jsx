import React from 'react'

export default function Projects() {
  return (
    <>
      <div className="content p-3 m-2" style={{backgroundColor:'var(--color-1)',boxSizing:'border-box'}}>
        <h1 className='text-center mb-5' style={{fontSize:'70px',fontWeight:'600',color:'var(--color-2)'}}>My Projects</h1>
        <div className="row d-flex justify-content-center">
          <div className="card p-3 m-3" style={{width:'18rem',backgroundColor:'var(--color-2)',color:'var(--color-3)'}}>
            <h2 className='mb-4 text-center' style={{color:'var(--color-4)',fontWeight:700}}>Calculator</h2> 
            <p>
              A simple calculator built using HTML, CSS, and JavaScript. This project was created to practice my skills in JavaScript and DOM manipulation. The calculator can perform basic arithmetic operations and has a clean and user-friendly interface.
            </p>
            <div className="d-flex justify-content-center">
            <button style={{color:'var(--color-2)',backgroundColor:'var(--color-1)'}} className='col-md-8 btn'>Code ↗</button>
            </div>
          </div>
          <div className="card p-3 m-3" style={{width:'18rem',backgroundColor:'var(--color-2)',color:'var(--color-3)'}}>
            <h2 className='mb-4 text-center' style={{color:'var(--color-4)',fontWeight:700}}>Portfolio Website</h2>
            <p>
              My personal portfolio website built using React. This project showcases my skills, projects, and contact information. I designed and developed this website from scratch to highlight my work and provide a platform for others to connect with me.
            </p>
            <div className="d-flex justify-content-center">
            <button style={{color:'var(--color-2)',backgroundColor:'var(--color-1)'}} className='col-md-8 btn'>Code ↗</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
