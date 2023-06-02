import { Link, useLoaderData } from "react-router-dom"

export default function Careers() {
  const car = useLoaderData()
  return (
    <div className="careers">
      {car && car.map(car1 => (
        <Link to='/' key={car1.id}>
          <p>{car1.title}</p>
          <p>Based in {car1.location}</p>
        </Link>
      ))}
    </div>
  )
}

// data loader
export const CareersLoader = async () => {
  const res = await fetch('http://localhost:4000/careers')
  return res.json()
}