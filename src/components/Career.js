import { Link } from "react-router-dom"
import data from '../data/db';
export default function Careers() {
  const car = data;
  return (
    <div className="careers">
      {car && car.map(car1 => (
        <Link to={car1.id.toString()} key={car1.id}>
          <p>{car1.title}</p>
          <p>Based in {car1.location}</p>
        </Link>
      ))}
    </div>
  )
}

// data loader
export const CareersLoader = async () => {
  const res = fetch('http://localhost:4000/careers');
  if(!res.ok){
    throw Error('Error Could not Found the careers');
  }
  return res.json()
}