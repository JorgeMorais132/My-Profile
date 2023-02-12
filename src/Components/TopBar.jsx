import React from 'react'
import {NavLink, Link} from 'react-router-dom'

export default function TopBar() {
  return (
    <div className="topnav"> 
  <ul className="nav nav-tabs">
  <li className="nav-item">
    <NavLink className="nav-link" to="/">Home</NavLink>
  </li>
  <li className="nav-item">
    <NavLink className="nav-link" to="projects">Projects</NavLink>
  </li>
  <li className="nav-item">
    <NavLink className="nav-link" to="contacts">Contact Me</NavLink>
  </li>

</ul>
    </div>
  )
}
