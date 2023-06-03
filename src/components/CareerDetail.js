import React from 'react'
import { useLoaderData } from 'react-router-dom'

export default function CareerDetail() {
    const career = useLoaderData();
  return (
    <div className='career-details'>
      <h2>Career Detail for { career.title }</h2>
      <p>Starting Salary : {career.salary}</p>
      <p>Location : {career.location}</p>
      <div className="details">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium tempora odit cupiditate, quidem maiores blanditiis consequatur magni a natus nulla aspernatur quam harum iusto necessitatibus delectus alias eius maxime! Non enim tenetur mollitia officia ab amet consectetur libero blanditiis nesciunt odio. Architecto quo dolorem blanditiis quaerat omnis voluptas sit eius commodi dolores, earum enim sapiente aliquam recusandae deserunt veritatis a amet iste vel error soluta eligendi necessitatibus? Harum incidunt quam ad quibusdam omnis vel. Quod, doloremque temporibus inventore praesentium ipsa culpa modi! Non magni iure animi repellat cumque commodi, culpa eaque veritatis exercitationem ipsum explicabo fuga architecto expedita quia asperiores at minima. Reprehenderit neque, distinctio enim eos qui nisi quisquam nihil quasi impedit totam ad quod eum, odio voluptatibus consequatur modi at culpa!</p>
      </div>
    </div>
  )
}

export const detailLoader = async ({params}) => {
    const {id} = params;
    const res = await fetch('http://localhost:4000/careers/' + id);
    if(!res.ok){
        throw Error('Error Could not Found the Job');
    }
    return res.json();
}
