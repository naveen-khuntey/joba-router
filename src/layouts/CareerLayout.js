import React from 'react'
import { Outlet } from 'react-router-dom'

export default function CareerLayout() {
  return (
    <div className='careers-layout'>
      <h2>Careers</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione culpa adipisci vel minima, exercitationem repellat sit blanditiis accusamus. In, necessitatibus saepe unde quidem fuga animi nostrum iste velit asperiores id?</p>
      <Outlet/>
    </div>
  )
}
