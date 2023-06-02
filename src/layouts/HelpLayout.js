import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function HelpLayout() {
  return (
    <div className='help=layout'>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, quae.</p>
    <nav>
      <NavLink to="faq">FAQ</NavLink>
      <NavLink to="contact">Contact</NavLink>
    </nav>
      <Outlet />
    </div>
  )
}
