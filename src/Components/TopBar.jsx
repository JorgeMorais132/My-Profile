import React from 'react'
import {NavLink, Link} from 'react-router-dom'

export default function TopBar() {
  return (
    <div className="topnav"> 
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">&lt;Home/&gt;</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="projects">&lt;Projects/&gt;</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="contacts">&lt;Contact Me/&gt;</NavLink>
          </li>
        </ul>
    </div>
  )
}
