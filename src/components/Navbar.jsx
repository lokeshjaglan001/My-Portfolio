import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const closeNav = () => {
    document.querySelector('.navbar-collapse').classList.remove('show')
  }
  return (
    <>

    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/" style={{fontSize:'34px',fontWeight:'900',color:'var(--color-2)'}}>LJ</Link>
    <button className="nav-toggle" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"  style={{border:"none",outline:'none',"&:active": { oultline: "none" },margin:'0'}}>
      <svg viewBox="0 -0.5 21 21" version="1.1" xmlns="http://www.w3.org/2000/svg" className='navbar-toggler-icon' xmlnsXlink="http://www.w3.org/1999/xlink" fill="#b3b4bd" stroke="#b3b4bd"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>menu_navigation_grid [#b3b4bd1528]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-139.000000, -200.000000)" fill="#b3b4bd"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M101.9,57.009 C101.9,57.56 101.38235,58 100.80275,58 L97.65275,58 C97.0742,58 96.65,57.56 96.65,57.009 L96.65,54.009 C96.65,53.458 97.0742,53 97.65275,53 L100.80275,53 C101.38235,53 101.9,53.458 101.9,54.009 L101.9,57.009 Z M100.80275,51 L97.65275,51 C95.9129,51 94.55,52.352 94.55,54.009 L94.55,57.009 C94.55,58.666 95.9129,60 97.65275,60 L100.80275,60 C102.5426,60 104,58.666 104,57.009 L104,54.009 C104,52.352 102.5426,51 100.80275,51 L100.80275,51 Z M90.35,57.009 C90.35,57.56 89.83235,58 89.25275,58 L86.10275,58 C85.5242,58 85.1,57.56 85.1,57.009 L85.1,54.009 C85.1,53.458 85.5242,53 86.10275,53 L89.25275,53 C89.83235,53 90.35,53.458 90.35,54.009 L90.35,57.009 Z M89.25275,51 L86.10275,51 C84.3629,51 83,52.352 83,54.009 L83,57.009 C83,58.666 84.3629,60 86.10275,60 L89.25275,60 C90.9926,60 92.45,58.666 92.45,57.009 L92.45,54.009 C92.45,52.352 90.9926,51 89.25275,51 L89.25275,51 Z M101.9,46.009 C101.9,46.56 101.38235,47 100.80275,47 L97.65275,47 C97.0742,47 96.65,46.56 96.65,46.009 L96.65,43.009 C96.65,42.458 97.0742,42 97.65275,42 L100.80275,42 C101.38235,42 101.9,42.458 101.9,43.009 L101.9,46.009 Z M100.80275,40 L97.65275,40 C95.9129,40 94.55,41.352 94.55,43.009 L94.55,46.009 C94.55,47.666 95.9129,49 97.65275,49 L100.80275,49 C102.5426,49 104,47.666 104,46.009 L104,43.009 C104,41.352 102.5426,40 100.80275,40 L100.80275,40 Z M90.35,46.009 C90.35,46.56 89.83235,47 89.25275,47 L86.10275,47 C85.5242,47 85.1,46.56 85.1,46.009 L85.1,43.009 C85.1,42.458 85.5242,42 86.10275,42 L89.25275,42 C89.83235,42 90.35,42.458 90.35,43.009 L90.35,46.009 Z M89.25275,40 L86.10275,40 C84.3629,40 83,41.352 83,43.009 L83,46.009 C83,47.666 84.3629,49 86.10275,49 L89.25275,49 C90.9926,49 92.45,47.666 92.45,46.009 L92.45,43.009 C92.45,41.352 90.9926,40 89.25275,40 L89.25275,40 Z" id="menu_navigation_grid-[#b3b4bd1528]"> </path> </g> </g> </g> </g></svg>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav m-auto">
        <li className="nav-item mx-4">
          <Link onClick={closeNav} className="nav-link" to="/">About</Link>
        </li>
        <li className="nav-item mx-4">
          <Link onClick={closeNav} className="nav-link" to="/projects">Projects</Link>
        </li>
        <li className="nav-item mx-4">
          <Link onClick={closeNav} className="nav-link" to="/skills">Skills</Link>
        </li>
        <li className="nav-item mx-4">
          <Link onClick={closeNav} className="nav-link" to='/contact'>Contact</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}
