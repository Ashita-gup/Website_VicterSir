import React from 'react';

import { HashLink as Link } from 'react-router-hash-link'
export default function Navbar(props) {
  return (

<nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top" data-bs-theme={`${props.mode}`} style={{fontFamily: '"Jost", sans-serif',fontWeight: 500,backgroundColor: props.mode === 'light' ? '#f5e7e0' : '#343a40'}}>
<div className="container-fluid">
  
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav ms-auto">
      <li className="nav-item mx-3">
        <Link className="nav-NavLink active" aria-current="page" to="#home" style={{ textDecoration: 'none', color: props.mode === 'light' ? 'black' : 'white' }}>HOME</Link>
      </li>
      <li className="nav-item mx-3">
        <Link className="nav-NavLink active" aria-current="page" to="#experience" style={{ textDecoration: 'none', color: props.mode === 'light' ? 'black' : 'white' }}>EXPERIENCE</Link>
      </li>
      <li className="nav-item mx-3">
        <Link className="nav-NavLink active" aria-current="page" to="#education" style={{ textDecoration: 'none', color: props.mode === 'light' ? 'black' : 'white' }}>EDUCATION</Link>
      </li>
      <li className="nav-item mx-3">
        <Link className="nav-NavLink active" aria-current="page" to="#research" style={{ textDecoration: 'none', color: props.mode === 'light' ? 'black' : 'white' }}>RESEARCH</Link>
      </li>
      <li className="nav-item mx-3">
        <Link className="nav-NavLink active" aria-current="page" to="#projects" style={{ textDecoration: 'none', color: props.mode === 'light' ? 'black' : 'white' }}>PROJECTS</Link>
      </li>
      <li className="nav-item mx-3">
        <Link className="nav-NavLink active" aria-current="page" to="#achievements" style={{ textDecoration: 'none', color: props.mode === 'light' ? 'black' : 'white' }}>ACHIEVEMENTS</Link>
      </li>
      <li className="nav-item mx-3">
        <Link className="nav-NavLink active" aria-current="page" to="#publications" style={{ textDecoration: 'none', color: props.mode === 'light' ? 'black' : 'white' }}>PUBLICATIONS</Link>
      </li>
      <li className="nav-item mx-3">
        <Link className="nav-NavLink active" aria-current="page" to="#activities" style={{ textDecoration: 'none', color: props.mode === 'light' ? 'black' : 'white' }}>PROFESSIONAL ACTIVITIES</Link>
      </li>
      <li className="nav-item mx-3">
        <Link className="nav-NavLink active" aria-current="page" to="#contact" style={{ textDecoration: 'none', color: props.mode === 'light' ? 'black' : 'white' }}>CONTACT</Link>
      </li>
      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
</div>
    </ul>
    
  </div>
</div>
</nav>
  )
}
