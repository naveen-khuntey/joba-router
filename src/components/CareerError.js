import React from 'react'
import { useRouteError, NavLink } from 'react-router-dom'


export default function CareerError() {
    const error = useRouteError();
  return (
    <div className="careers-error">
        <h2>Error</h2>
        <p>{error.message}</p>
        <NavLink to="/">To Home Page</NavLink>
    </div>
  )
}
