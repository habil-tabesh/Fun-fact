import React from 'react'
import { Link, NavLink, withRouter } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='nav-wrapper blue darken-4'>
        <div className="container">
        <a href="_" className="brand-logo">Fun Facts</a>
            <ul className="right">
                <li><Link to="/">Post 1</Link></li>
                <li><Link to="/about">Post 2</Link></li>
                <li><NavLink to="/post1">Post 3</NavLink></li>
            </ul>
        </div>
    </nav>
  )
}

export default withRouter(Navbar)