import React from 'react'

export default function Aboutme() {
  return (
    <>
    
    <div className="content about d-flex p-4 m-2" style={{color:'var(--color-2)',backgroundColor:'var(--color-1)'}}>
      <div className="col-md-3 p-5 mobile-full" style={{boxSizing:'border-box'}}>
        <img className='w-100' style={{borderRadius:'50%',outline:'7px solid var(--color-2)',border:'7px solid var(--color-1)'}} src="https://avatars.githubusercontent.com/u/165664251?v=4" alt="" />
      </div>
      <div className="col-md-9">
        <h1 className='text-center mb-4' style={{fontSize:'50px',fontWeight:'600'}}>About Me</h1>
        <p>I'm Lokesh Jaglan, a passionate 16-year-old school student with a deep interest in programming and web development. I love exploring new technologies and languages to expand my skills and create innovative projects. From building dynamic websites to exploring the latest in software development, I'm dedicated to learning and growing in the world of tech. Join me on this exciting journey as I continue to explore and create in the digital realm.</p>
        <div className="col-md-10 m-auto p-2 d-flex justify-content-around flex-wrap">
          <div className="card p-3 mt-4" style={{backgroundColor:'var(--color-2)',width:'18rem'}}>
            <h3 className='mb-4 text-center' style={{color:'var(--color-4)',fontWeight:700}}>Hobbies</h3>
            <ul style={{color:'var(--color-3)'}}>
              <li>Coding</li>
              <li>Gaming</li>
              <li>Reading Books</li>
              <li>Listening Music</li>
            </ul>
          </div>
          <div className="card p-3 mt-4" style={{backgroundColor:'var(--color-2)',width:'18rem'}}>
          <h3 className='mb-4 text-center' style={{color:'var(--color-4)',fontWeight:700}}>Currently Exploring</h3>
            <ul style={{color:'var(--color-3)'}}>
              <li>Full Stack Development</li>
              <li>Python Programming</li>
            </ul>
          </div>
          
        </div>
      </div>
    </div>
    
    </>
  )
}
